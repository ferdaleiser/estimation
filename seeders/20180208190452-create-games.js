'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [{
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "My first game",
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {});
  }
};
