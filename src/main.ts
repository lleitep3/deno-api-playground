// @deno-types="npm:@types/express@4"
import express from "npm:express@4.21.1";
import { config } from "./config.ts";
import { logger } from "./logger/logger.ts";
import { addLogger } from "./logger/add-logger.ts";

const app = express();

addLogger(app);

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(config.app.port, () => {
  logger.info(
    {
      ...config.app,
    },
    `Running on http://localhost:${config.app.port}`
  );
});
