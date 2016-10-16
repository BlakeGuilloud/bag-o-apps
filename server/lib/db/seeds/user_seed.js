'use strict';

exports.seed = function (knex, Promise) {
  return knex('Users').del().then(function () {
    return Promise.all([knex('Users').insert({ id: 1, password: 'starwars', username: 'HanSolo' }), knex('Users').insert({ id: 2, password: 'starwars', username: 'LukeSkywalker' }), knex('Users').insert({ id: 3, password: 'starwars', username: 'BobaFett' }), knex('Users').insert({ id: 4, password: 'starwars', username: 'DarthVader' }), knex('Users').insert({ id: 5, password: 'starwars', username: 'KyloRen' }), knex('Users').insert({ id: 6, password: 'starwars', username: 'LeiaSkywalker' })]);
  });
};