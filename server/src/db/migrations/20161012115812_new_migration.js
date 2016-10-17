exports.up = function(knex, Promise) {
  return Promise.resolve(
    knex.schema
    .createTableIfNotExists('Users', (table) => {
      table.increments();
      table.string('username');
      table.string('password');
    })
    .createTableIfNotExists('Todos', (table) => {
      table.increments();
      table.string('title');
      table.boolean('completed');
      table.integer('userId');
    })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
    knex.schema
      .dropTable('Users')
      .dropTable('Todos')
  )
  .catch((err) => console.error(err));
};
