import Knex from "knex";
import KnexStringcase from "knex-stringcase";
import KnexConfig from "../knexfile";
import BookShelf from "bookshelf";
import config from "../config";
import fs from "fs";
import Business from "./models/Business";
import Product from "./models/Product";

class db {
  static bsdb = null;

  static Business = null;
  static Product = null;

  constructor() {
    if (config.hasKey("last_file") && fs.existsSync(config.getKey("last_file"))) {
      this.loadFile(config.getKey("last_file"));
      this.migrate().then(() => {
        this.loadModels();
      });
    }
  }

  loadFile(filePath) {
    let config = {
      ...KnexConfig[
        process.env.NODE_ENV  || 'development'
      ],
      connection: {
        filename: filePath
      }
    };

    this.bsdb = BookShelf(Knex(KnexStringcase(config)));
  }

  migrate() {
    return this.bsdb.knex.migrate.latest().then();
  }

  loadModels() {
    this.Business = this.bsdb.model("Business", Business);
    this.Product = this.bsdb.model("Product", Product);
  }
}

export default new db;
