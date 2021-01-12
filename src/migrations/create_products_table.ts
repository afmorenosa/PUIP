exports.up = function (knex) {
  return knex.schema
    .createTable("products", function (table) {
      table.increments();
      table.text("name").notNullable();
      table.text("detail").notNullable();
    });
};


exports.down = function(knex) {
  return knex.schema
    .dropTable("products");
};
