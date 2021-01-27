import Knex from "knex";
import KnexStringcase from "knex-stringcase"
import KnexConfig from "./knexfile";
import BookShelf from "bookshelf";

class db {
  bsdb = null;

  importData() {
    this.bsdb = BookShelf(
      Knex(
        KnexStringcase(
          KnexConfig[
            process.env.NODE_ENV  || 'development'
          ]
        )
      )
    )
  }

  migrate() {
    this.bsdb.knex.migrate.latest().then(([batchNo, log]) => {
      if (!log.length) {
        console.log('Database is already up to date');
      } else {
        console.log('Ran migrations: ' + log.join(', '));
      }
    });
  }
}

export default db;
