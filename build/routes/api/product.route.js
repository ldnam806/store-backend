"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_handler_1 = require("../../handlers/product.handler");
const validateToken_1 = __importDefault(require("../../middleware/validateToken"));
const productModel = (0, express_1.Router)();
productModel.route('/').post(validateToken_1.default, product_handler_1.Create);
productModel.route('/').get(product_handler_1.Index);
productModel.route('/:id').get(product_handler_1.Show);
exports.default = productModel;
