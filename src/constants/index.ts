// @ts-nocheck

export const NODEMAILER_EMAIL: string = process.env.NODEMAILER_EMAIL || "";
export const NODEMAILER_PASSWORD: string = process.env.NODEMAILER_PASSWORD || "";
export const ZERO_ENCRYPTION_KEY: string = process.env.ZERO_ENCRYPTION_KEY || "";
export const ZERO_SIGN_PRIVATE_KEY: string = process.env.ZERO_SIGN_PRIVATE_KEY || "";
export const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY || "";
export const ANOMALY_SERVER_PORT: number = process.env.ANOMALY_SERVER_PORT ? Number(process.env.ANOMALY_SERVER_PORT) : 8003