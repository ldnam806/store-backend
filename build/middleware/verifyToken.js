"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyToken(req, res, next) {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).send('Access denied');
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET_KEY);
        console.log({ verified });
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(400).send('Token is invalid');
    }
}
exports.default = verifyToken;
