const express = require("express");

const Router = express.Router();
const orderController = require("../Controller/orderController");
Router.route("/").post(orderController.order).get(orderController.getOrders);
Router.route("/:id").put(orderController.fullfilled);
module.exports = Router;
