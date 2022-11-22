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
exports.Index = exports.Show = exports.Create = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const Create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new product_model_1.default();
    const { name, price } = req.body;
    try {
        const result = yield productModel.Create({ name, price });
        res.status(200).json({
            data: Object.assign({}, result)
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Create = Create;
const Index = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new product_model_1.default();
    try {
        const result = yield productModel.Show();
        res.status(200).json({
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Index = Index;
const Show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new product_model_1.default();
    try {
        const { id } = req.params;
        const result = yield productModel.Index(id);
        res.status(200).json({
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Show = Show;
