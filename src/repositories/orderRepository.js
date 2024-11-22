import { db, log } from "../lib/utils.js";

/**
 * @param order {any}
 * @return {Promise<void>}
 */
export async function insertToHeader(order) {
  log.info("insertToHeader", order);
  try {
    await db.insert(order).into("order_header");
  } catch (e) {
    log.error(JSON.stringify(e, null, 2));
  }
}
