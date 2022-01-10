"use strict";

// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("examples", {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      data: Sequelize.STRING,
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("examples");
  },
};
