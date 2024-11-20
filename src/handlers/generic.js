import { log } from "../logger.js";
import 'dotenv/config'


async function genericHandler() {
  log.info("genericHandler")
}

genericHandler().finally(() => process.exit())
