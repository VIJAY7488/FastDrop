import { getEnv } from "../utils/get-env"

const envConfig = () => ({
    NODE_ENV: getEnv("NODE_ENV", "development"),
    PORT: getEnv('PORT', '3000'),
    MONGO_URI: getEnv("MONGO_URI"),
    JWT_SECRET: getEnv("JWT_SECRET"),
    JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1d"),
    LOG_LEVEL: getEnv("LOG_LEVEL", "info"),
    ALLOWED_ORIGINS: getEnv("ALLOWED_ORIGINS", "http://localhost:5173").split(",").map(origin => origin.trim()),
})

export const ENV = envConfig();