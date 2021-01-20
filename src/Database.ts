import Knex from "knex";
import KnexStringcase from "knex-stringcase"
import KnexConfig from "./knexfile";
import BookShelf from "bookshelf";

const db = BookShelf(Knex(KnexStringcase(KnexConfig[process.env.NODE_ENV  || 'development'])));

db.knex.migrate.latest().then(([batchNo, log]) => {
  if (!log.length) {
    console.log('Database is already up to date');
  } else {
    console.log('Ran migrations: ' + log.join(', '));
  }
});

export default db;
