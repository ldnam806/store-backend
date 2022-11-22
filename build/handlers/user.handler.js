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
exports.Auth = exports.Index = exports.Show = exports.Create = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = new user_model_1.default();
    try {
        const { email, firstName, lastName, password } = req.body;
        const result = yield userModel.Create({ email, firstName, lastName, password });
        res.status(200).json({
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Create = Create;
const Index = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = new user_model_1.default();
    try {
        const result = yield userModel.Index();
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
    const userModel = new user_model_1.default();
    try {
        const { id } = req.params;
        const result = yield userModel.Show(id);
        res.status(200).json({
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.Show = Show;
const Auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = new user_model_1.default();
    try {
        const { email, password } = req.body;
        const isCorrectInfo = yield userModel.Auth(email, password);
        if (!isCorrectInfo) {
            return res.status(401).json({
                message: 'Your email or password incorrect.'
            });
        }
        const token = jsonwebtoken_1.default.sign({ isCorrectInfo }, process.env.TOKEN_SECRET_KEY, {
            expiresIn: '3600s'
        });
        return res.status(200).json({
            data: Object.assign(Object.assign({}, isCorrectInfo), { token }),
        });
    }
    catch (err) {
        return next(err);
    }
});
exports.Auth = Auth;
