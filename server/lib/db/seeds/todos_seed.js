'use strict';

exports.seed = function (knex, Promise) {
  return knex('Todos').del().then(function () {
    return Promise.all([knex('Todos').insert({ id: 1, userId: 1, title: 'Mow the yard', completed: false }), knex('Todos').insert({ id: 2, userId: 3, title: 'Do the dishes', completed: true }), knex('Todos').insert({ id: 3, userId: 2, title: 'Wash the car', completed: false })]);
  });
};