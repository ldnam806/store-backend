"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;
const pool = new pg_1.Pool({
    user: String(POSTGRES_USER),
    host: String(POSTGRES_HOST),
    database: String(POSTGRES_DB),
    password: String(POSTGRES_PASSWORD),
    port: Number(POSTGRES_PORT)
});
pool.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
exports.default = pool;
