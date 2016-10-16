'use strict';

exports.up = function (knex, Promise) {
  return Promise.resolve(knex.schema.createTableIfNotExists('Users', function (table) {
    table.increments();
    table.string('username');
    table.string('password');
  }));
};

exports.down = function (knex, Promise) {
  return Promise.resolve(knex.schema.dropTable('Users')).catch(function (err) {
    return console.error(err);
  });
};