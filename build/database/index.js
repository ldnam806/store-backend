"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    user: String(process.env.POSTGRES_USER),
    host: String(process.env.POSTGRES_HOST),
    database: String(process.env.POSTGRES_DB_NAME),
    password: String(process.env.POSTGRES_PWD),
    port: Number(process.env.POSTGRES_PORT)
});
pool.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
exports.default = pool;
