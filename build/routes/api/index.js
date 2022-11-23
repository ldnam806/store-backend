"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkToken_1 = __importDefault(require("../../middleware/checkToken"));
const product_route_1 = __importDefault(require("./product.route"));
const user_route_1 = __importDefault(require("./user.route"));
const order_route_1 = __importDefault(require("./order.route"));
const apiRoute = (0, express_1.Router)();
apiRoute.use('/product', product_route_1.default);
apiRoute.use('/user', user_route_1.default);
apiRoute.use('/order', checkToken_1.default, order_route_1.default);
exports.default = apiRoute;
