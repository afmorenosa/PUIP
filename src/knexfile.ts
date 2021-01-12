const KnexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.db"
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
    migrations: {
      tableName: "migrations",
      extension: "ts",
      directory: "./src/migrations"
    },
    useNullAsDefault: true
  }
};

export default KnexConfig;
