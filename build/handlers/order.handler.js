"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.getById = exports.getAll = exports.create = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const orderModel = new order_model_1.default();
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel.create(req.body);
        res.json({
            status: 'success',
            data: Object.assign({}, order),
            message: 'Product created successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.create = create;
const getAll = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderModel.getAll();
        res.json({
            status: 'success',
            data: orders,
            message: 'Successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAll = getAll;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const order = yield orderModel.getById(id);
        res.json({
            status: 'success',
            data: order,
            message: 'Successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getById = getById;
const updateById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel.updateById(req.body);
        res.json({
            status: 'success',
            data: order,
            message: 'Successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateById = updateById;
const deleteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderModel.delete(req.params.id);
        res.json({
            status: 'success',
            data: order,
            message: 'Successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteById = deleteById;
