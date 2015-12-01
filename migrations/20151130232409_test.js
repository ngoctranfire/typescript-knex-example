
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('uid')
        .primary()
        .unique();
      table.string('username')
        .notNullable()
        .unique();
      table.string('name')
        .notNullable();
      table.timestamps()
    }),

    knex.schema.createTable('pets', function(table) {
      table.increments('pid').primary();
      table.string('type');
      table.string('name');
      table.integer('user')
        .references('uid')
        .inTable('users')
        .onDelete('cascade');
    })
   ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.raw("DROP TABLE users CASCADE"),
    knex.schema.raw("DROP TABLE pets CASCADE")
  ])
};
