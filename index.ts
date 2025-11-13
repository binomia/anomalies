import {server} from "@/server";
import {triggers} from "@/triggers";
import {Extensions} from "cromio"
import cluster from "cluster";
import os from "os";


if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++)
        cluster.fork();

    cluster.on("exit", (worker: any) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });

} else {
    server.addExtension(Extensions.serverPrometheusMetrics({port: 7003, defaultMetrics: true}));
    server.registerTriggerDefinition(triggers)

    server.start(() => {
        console.log(`Server running at http://localhost:${8003}`);
    })
}
