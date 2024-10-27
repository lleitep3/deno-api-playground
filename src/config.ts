export const config = {
  app: {
    port: Deno.env.get("APP_PORT") || 8000,
    env: Deno.env.get("NODE_ENV") || "production",
  },
  logger: {
    level: Deno.env.get("LOG_LEVEL") || "info",
  },
};
