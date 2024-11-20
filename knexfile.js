import { DB2Dialect } from "@bdkinc/knex-ibmi";

/**
 * @type {import("@bdkinc/knex-ibmi").DB2Config}
 */
const config = {
  client: DB2Dialect,
  connection: {
    host: "localhost", // ip address of host
    database: "<DSN>", // name defined in odbc.ini
    port: 50000, // default DB2 port
    user: "<USER>", // IBMi username
    password: "<PASSWORD>", // IBMi password
    driver: "IBM i Access ODBC Driver", // driver used in ODBC config
    connectionStringParams: {
      CMT: 0,
      DBQ: "<LIBRARY>",
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
