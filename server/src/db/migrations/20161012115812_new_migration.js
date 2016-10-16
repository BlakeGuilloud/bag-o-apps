exports.up = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.createTableIfNotExists('Users', (table) => {
      table.increments();
      table.string('username');
      table.string('password');
    })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.dropTable('Users')
  )
  .catch((err) => console.error(err));
};
