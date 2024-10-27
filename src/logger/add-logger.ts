import type { Application } from "npm:@types/express@4";
import { pinoHttp } from "pino-http";
import { logger } from "./logger.ts";

export function addLogger(app: Application) {
  app.use(
    pinoHttp({
      logger,
    })
  );
}
