
exports.up = function(knex) {
  return knex.schema
  .createTable("users",table=>{
      table.increments()
      table.string("username",128).notNullable()
      table.string("password",128).notNullable()
      table.string("email",128).notNullable()
      table.boolean("renter?").notNullable()
  })
  .createTable("Renterusers",table=>{
    table.increments()
    table.string("username",128).notNullable()
    table.string("password",128).notNullable()
    table.string("email",128).notNullable()
})
  .createTable("items",table=>{
    table.increments();
    table.string("name").notNullable()
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table.text("category").notNullable()
      table.text("description").notNullable()
      table.string("picture").notNullable()
      table.string("cost").notNullable()
      table.boolean("availability")
})
.createTable("messages", table => {
    table.increments();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table
      .integer("item_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table.text("content").notNullable()
  });


};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("items")
    .dropTableIfExists("messages");
};
