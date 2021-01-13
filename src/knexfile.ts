const KnexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.db"
    },
    pool: {
      afterCreate: function (conn, done) {
        conn.run("pragma foreign_keys = on", done);
      }
    },
    migrations: {
      tableName: "migrations",
      extension: "ts",
      directory: "./src/migrations"
    },
    useNullAsDefault: true
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./dev.db"
    },
    pool: {
      afterCreate: function (conn, done) {
        conn.run("pragma foreign_keys = on", done);
      }
    },
    migrations: {
      tableName: "migrations",
      extension: "ts",
      directory: "./migrations"
    },
    useNullAsDefault: true
  }
};

export default KnexConfig;
