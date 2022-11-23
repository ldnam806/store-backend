"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_handler_1 = require("../../handlers/order.handler");
const checkToken_1 = __importDefault(require("../../middleware/checkToken"));
const orderRoutes = (0, express_1.Router)();
// api/order
orderRoutes.route('/').post(checkToken_1.default, order_handler_1.Create);
orderRoutes.route('/').get(checkToken_1.default, order_handler_1.Index);
orderRoutes.route('/:id').get(checkToken_1.default, order_handler_1.Show);
exports.default = orderRoutes;
