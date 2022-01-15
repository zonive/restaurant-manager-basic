import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "orders";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    table: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    dishes: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    notes: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true,
    },
    PLN_price: {
      type: Sequelize.DataTypes.DECIMAL,
      allowNull: false,
    },
    currency: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: Sequelize.DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export const getOneOrders = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getAllOrders = async () => databaseProvider.getAll(MODEL_NAME);

export const createOrders = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateOrders = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteOrders = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
