import { OrdersService } from "../services/orders.js";

export const getOrders = async (req, res) => {
  const { params } = req;
  if (!params?.id) return res.json({ data: [] });
  return res.json({ data: await OrdersService.read(params.id) });
};

export const getOrderss = async (req, res) => {
  return res.json({ data: await OrdersService.readAll() });
};

export const postOrders = async (req, res) => {
  const { body } = req;
  const { id, table, dishes, notes, PLN_price, currency, price } = body || {};

  try {
    await OrdersService.create(
      id,
      table,
      dishes,
      notes,
      PLN_price,
      currency,
      price
    );
    res.status(201);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const patchOrders = async (req, res) => {
  const { body } = req;
  const { id, table, dishes, notes, PLN_price, currency, price } = body || {};

  const fieldsToUpdate = {};
  if (table !== undefined) fieldsToUpdate.table = table;
  if (dishes !== undefined) fieldsToUpdate.dishes = dishes;
  if (notes !== undefined) fieldsToUpdate.notes = notes;
  if (PLN_price !== undefined) fieldsToUpdate.PLN_price = PLN_price;
  if (currency !== undefined) fieldsToUpdate.currency = currency;
  if (price !== undefined) fieldsToUpdate.price = price;

  try {
    await OrdersService.update(id, fieldsToUpdate);
    res.status(200);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const deleteOrders = async (req, res) => {
  const { params } = req;
  const { id } = params || {};
  await OrdersService.delete(id);
  return res.send();
};
