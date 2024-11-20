import { log, http } from "../utils.js";
import 'dotenv/config'

/**
 * @return {Promise<void>}
 */
async function genericHandler() {
  const {data} = await http

  log.info("genericHandler")
}

genericHandler().finally(() => process.exit())
