exports.up = function (knex) {
  return knex.schema.createTable("completed", function (table) {
    table.increments();
    table.string("brand").notNullable();
    table.string("object").notNullable();
    table.decimal("value").notNullable();
    table.string("controller_id").notNullable();
    table.foreign("controller_id").references("id").inTable("controller");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("completed");
};
