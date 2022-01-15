import { getStatus } from "./status.js";

import {
  deleteExample,
  getExample,
  getExamples,
  patchExample,
  postExample,
} from "./example.js";

import {
  deleteOrders,
  getOrders,
  getOrderss,
  patchOrders,
  postOrders,
} from "./orders.js";

import { deleteMenu, getMenu, getMenus, patchMenu, postMenu } from "./menu.js";

export default [
  {
    method: "GET",
    path: "/status",
    isPublic: true,
    cbs: [getStatus],
  },
  {
    method: "GET",
    path: "/example/all",
    cbs: [getExamples],
  },
  {
    method: "GET",
    path: "/example/:id",
    cbs: [getExample],
  },
  {
    method: "POST",
    path: "/example",
    cbs: [postExample],
  },
  {
    method: "PATCH",
    path: "/example",
    cbs: [patchExample],
  },
  {
    method: "DELETE",
    path: "/example/:id",
    cbs: [deleteExample],
  },
  {
    method: "GET",
    path: "/orders/all",
    cbs: [getOrderss],
  },
  {
    method: "GET",
    path: "/orders/:id",
    cbs: [getOrders],
  },
  {
    method: "POST",
    path: "/orders",
    cbs: [postOrders],
  },
  {
    method: "PATCH",
    path: "/orders",
    cbs: [patchOrders],
  },
  {
    method: "DELETE",
    path: "/orders/:id",
    cbs: [deleteOrders],
  },
  {
    method: "GET",
    path: "/menu/all",
    cbs: [getMenus],
  },
  {
    method: "GET",
    path: "/menu/:id",
    cbs: [getMenu],
  },
  {
    method: "POST",
    path: "/menu",
    cbs: [postMenu],
  },
  {
    method: "PATCH",
    path: "/menu",
    cbs: [patchMenu],
  },
  {
    method: "DELETE",
    path: "/menu/:id",
    cbs: [deleteMenu],
  },
];
