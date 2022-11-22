"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_handler_1 = require("../../handlers/user.handler");
const validateToken_1 = __importDefault(require("../../middleware/validateToken"));
const userRoutes = (0, express_1.Router)();
userRoutes.route('/').post(user_handler_1.Create);
userRoutes.route('/').get(validateToken_1.default, user_handler_1.Index);
userRoutes.route('/:id').get(validateToken_1.default, user_handler_1.Show);
userRoutes.route('/login').post(user_handler_1.Auth);
exports.default = userRoutes;
