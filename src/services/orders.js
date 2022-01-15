import {
  getAllOrders,
  getOneOrders,
  deleteOrders,
  createOrders,
  updateOrders,
} from "../models/orders.js";

export const OrdersService = {
  read: async (id) => (await getOneOrders({ where: { id } })) || null,
  readAll: async () => (await getAllOrders()) || [],
  create: async (id, table, dishes, notes, PLN_price, currency, price) =>
    await createOrders({
      id,
      table,
      dishes,
      notes,
      PLN_price,
      currency,
      price,
    }),
  update: async (id, fieldsToUpdate) =>
    await updateOrders({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteOrders({ where: { id } }),
};
