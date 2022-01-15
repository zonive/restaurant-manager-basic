import { MenuService } from "../services/menu.js";

export const getMenu = async (req, res) => {
  const { params } = req;
  if (!params?.id) return res.json({ data: [] });
  return res.json({ data: await MenuService.read(params.id) });
};

export const getMenus = async (req, res) => {
  return res.json({ data: await MenuService.readAll() });
};

export const postMenu = async (req, res) => {
  const { body } = req;
  const { id, category, dish, description, price } = body || {};

  try {
    await MenuService.create(id, category, dish, description, price);
    res.status(201);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const patchMenu = async (req, res) => {
  const { body } = req;
  const { id, category, dish, description, price } = body || {};

  const fieldsToUpdate = {};
  if (category !== undefined) fieldsToUpdate.category = category;
  if (dish !== undefined) fieldsToUpdate.dish = dish;
  if (description !== undefined) fieldsToUpdate.description = description;
  if (price !== undefined) fieldsToUpdate.price = price;

  try {
    await MenuService.update(id, fieldsToUpdate);
    res.status(200);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const deleteMenu = async (req, res) => {
  const { params } = req;
  const { id } = params || {};
  await MenuService.delete(id);
  return res.send();
};
