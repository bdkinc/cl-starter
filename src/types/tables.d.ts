import { Knex } from 'knex';

declare module 'knex/types/tables' {
  // your database tables types are here
  interface Tables {}
}
