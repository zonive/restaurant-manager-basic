/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("menus", {
      id: Sequelize.INTEGER,
      category: Sequelize.TEXT,
      dish: Sequelize.TEXT,
      description: Sequelize.TEXT,
      price: Sequelize.DECIMAL
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("menus");
  }
};
