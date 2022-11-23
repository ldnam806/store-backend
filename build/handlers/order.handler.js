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
const order_model_1 = __importDefault(require("../models/order.model"));
const Create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orderModel = new order_model_1.default();
    try {
        const result = yield orderModel.Create(req.body);
        res.status(200).json({
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Create = Create;
const Index = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orderModel = new order_model_1.default();
    try {
        const result = yield orderModel.Index();
        res.status(200).json({
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Index = Index;
const Show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orderModel = new order_model_1.default();
    try {
        const { id } = req.params;
        const result = yield orderModel.Show(id);
        res.status(200).json({
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Show = Show;
