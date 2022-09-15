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
const product_model_1 = __importDefault(require("../models/product.model"));
const productModel = new product_model_1.default();
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel.create(req.body);
        res.json({
            status: 'success',
            data: Object.assign({}, product),
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
        const products = yield productModel.getAll();
        res.json({
            status: 'success',
            data: products,
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
        const product = yield productModel.getById(id);
        res.json({
            status: 'success',
            data: product,
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
        const product = yield productModel.updateById(req.body);
        res.json({
            status: 'success',
            data: product,
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
        const product = yield productModel.delete(req.params.id);
        res.json({
            status: 'success',
            data: product,
            message: 'Successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteById = deleteById;
