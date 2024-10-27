import "jsr:@std/dotenv/load";
import { pino } from "npm:pino";
import { config } from "../config.ts";

export const logger = pino({
  level: config.logger.level,
  timestamp: pino.stdTimeFunctions.isoTime,
});
