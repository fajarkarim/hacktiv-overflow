'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [
      {
        title: 'How to install node js',
        content: 'I want to install node, in ubuntu 16.04, how is it possible',
        author: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How to delete session',
        content: 'I use express session, how to delete when logout ?',
        author: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {})
  }
};
