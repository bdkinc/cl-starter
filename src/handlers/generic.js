import { log, http } from "../lib/utils.js";
import "dotenv/config";

/**
 * @return {Promise<void>}
 */
async function genericHandler() {
  const { data } = await http.get("/example");

  log.info("genericHandler");
}

genericHandler().finally(() => process.exit());
