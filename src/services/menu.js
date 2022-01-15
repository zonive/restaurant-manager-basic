import {
  getAllMenu,
  getOneMenu,
  deleteMenu,
  createMenu,
  updateMenu,
} from "../models/menu.js";

export const MenuService = {
  read: async (id) => (await getOneMenu({ where: { id } })) || null,
  readAll: async () => (await getAllMenu()) || [],
  create: async (id, category, dish, description, price) =>
    await createMenu({
      id,
      category,
      dish,
      description,
      price,
    }),
  update: async (id, fieldsToUpdate) =>
    await updateMenu({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteMenu({ where: { id } }),
};
