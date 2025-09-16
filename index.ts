import { server } from "@/server";
import { triggers } from "@/triggers";


server.registerTriggerDefinition(triggers)

server.start((url: string) => {
    console.log(`Server running at ${url}`);
})