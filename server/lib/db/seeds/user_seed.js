'use strict';

exports.seed = function (knex, Promise) {
  return knex('Users').del().then(function () {
    return Promise.all([knex('Users').insert({ id: 1, password: 'starwars', username: 'HanSolo' }), knex('Users').insert({ id: 2, password: 'starwars', username: 'LukeSkywalker' }), knex('Users').insert({ id: 3, password: 'starwars', username: 'BobaFett' }), knex('Users').insert({ id: 4, password: 'starwars', username: 'DarthVader' }), knex('Users').insert({ id: 5, password: 'starwars', username: 'KyloRen' }), knex('Users').insert({ id: 6, password: 'starwars', username: 'LeiaSkywalker' }), knex('Todos').insert({ id: 1, userId: 1, title: 'Mow the yard', completed: false }), knex('Todos').insert({ id: 2, userId: 3, title: 'Do the dishes', completed: true }), knex('Todos').insert({ id: 3, userId: 2, title: 'Wash the car', completed: false })]);
  });
};