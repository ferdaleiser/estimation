'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stories',
      {
        id: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,

        name: Sequelize.STRING,
        description: Sequelize.STRING,
        jiraID: Sequelize.STRING,
        points: Sequelize.STRING,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stories');
  }
};
