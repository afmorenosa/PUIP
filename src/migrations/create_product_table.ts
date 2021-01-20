exports.up = function (knex) {
  return knex.schema
    .createTable("product", function (table) {
      table.increments();

      table.text("name").notNullable();
      table.text("detail").notNullable();
      table.text("code").notNullable();
      table.binary("image").notNullable();
      table.decimal("cost").notNullable();
      table.decimal("price").notNullable();
      table.decimal("tax").notNullable();
      table.integer("quantity").notNullable();
      table.text("storing").nullable();

      table.timestamps();
    });
};


exports.down = function(knex) {
  return knex.schema
    .dropTable("product");
};
