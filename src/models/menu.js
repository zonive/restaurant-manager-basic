import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "menu";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    dish: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
      uniqe: true,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
      uniqe: true,
    },
    price: {
      type: Sequelize.DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export const getOneMenu = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getAllMenu = async () => databaseProvider.getAll(MODEL_NAME);

export const createMenu = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateMenu = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteMenu = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
