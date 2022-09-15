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
const user_model_1 = __importDefault(require("../models/user.model"));
const userModel = new user_model_1.default();
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.create(req.body);
        res.json({
            status: 'success',
            data: Object.assign({}, user),
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
        const users = yield userModel.getAll();
        res.json({
            status: 'success',
            data: users,
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
        const user = yield userModel.getById(id);
        res.json({
            status: 'success',
            data: user,
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
        const user = yield userModel.updateById(req.body);
        res.json({
            status: 'success',
            data: user,
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
        const user = yield userModel.delete(req.params.id);
        res.json({
            status: 'success',
            data: user,
            message: 'Successfully'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteById = deleteById;
