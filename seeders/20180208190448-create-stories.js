'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stories', [
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

        name: "Create an app for Allie",
        description: "As an Allie, I want to create an app so that I can rule the world.",
        jiraID: "BP-123",
      },
      {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),

        name: "Steven needs some work done",
        description: "As an Steven, I need a NodeJS app, so I can learn NodeJS.",
        jiraID: "BP-9133",
      },
      {
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),

        name: "Write test",
        description: "As a user, I want to make sure bugs don't regress.",
        jiraID: "BP-123223",
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stories', null, {});
  }
};
