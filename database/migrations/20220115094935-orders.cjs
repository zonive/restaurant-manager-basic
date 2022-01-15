/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: Sequelize.INTEGER,
      table: Sequelize.INTEGER,
      dishes: Sequelize.TEXT,
      notes: Sequelize.TEXT,
      PLN_price: Sequelize.DECIMAL,
      currency: Sequelize.STRING,
      price: Sequelize.DECIMAL,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("orders");
  }
};