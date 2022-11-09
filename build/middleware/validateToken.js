"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const handleUnauthorizedError = (next) => {
    const error = new Error('Login Error, Please login again');
    error.status = 401;
    next(error);
};
const validateToken = (req, _res, next) => {
    try {
        const authHeader = req.get('Authorization');
        if (authHeader) {
            const bearer = authHeader.split(' ')[0].toLowerCase();
            const token = authHeader.split(' ')[1];
            if (token && bearer === 'bearer') {
                const decode = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET_KEY);
                if (decode) {
                    next();
                }
                else {
                    handleUnauthorizedError(next);
                }
            }
            else {
                // token type not bearer
                handleUnauthorizedError(next);
            }
        }
        else {
            // No Token Provided.
            handleUnauthorizedError(next);
        }
    }
    catch (err) {
        handleUnauthorizedError(next);
    }
};
exports.default = validateToken;
