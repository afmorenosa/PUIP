const KnexConfig = {
  development: {
    client: "sqlite3",
    pool: {
      max: 1,
      afterCreate: function (conn, done) {
        conn.run("pragma foreign_keys = on", done);
      }
    },
    migrations: {
      tableName: "migrations",
      extension: "ts",
      directory: "./src/databases/migrations"
    },
    useNullAsDefault: true,
    debug: true
  },

  production: {
    client: "sqlite3",
    pool: {
      max: 1,
      afterCreate: function (conn, done) {
        conn.run("pragma foreign_keys = on", done);
      }
    },
    migrations: {
      tableName: "migrations",
      extension: "ts",
      directory: "./databases/migrations"
    },
    useNullAsDefault: true
  }
};

export default KnexConfig;
