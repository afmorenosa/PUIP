exports.up = function (knex) {
  return knex.schema
    .createTable("business", function (table) {
      table.integer("id").primary().defaultTo(0);
      table.text("name").notNullable();
      table.text("address").notNullable();
      table.text("city").notNullable();
      table.text("postal_code").notNullable();
      table.integer("phone").notNullable();
      table.text("email").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("business");
};
