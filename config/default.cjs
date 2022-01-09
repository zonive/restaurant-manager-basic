/* eslint-disable no-undef */
const { nodeEnv } = require("./utils");
const { databaseConfig } = require("../database/dbConfig");

module.exports = {
  env: nodeEnv,
  is_test: false,
  name: "restaurant-manager-js",
  database: databaseConfig,
  options: {
    port: process.env.PORT,
    public_routes_prefix: "/api/public",
  },
};