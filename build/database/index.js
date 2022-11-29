"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PG_HOST, PG_DEV_DB, PG_USER, PG_PASSWORD, PG_TEST_DB, PG_PORT, ENV, } = process.env;
let db = new pg_1.Pool({
    host: PG_HOST,
    database: PG_DEV_DB,
    user: PG_USER,
    password: PG_PASSWORD,
    port: Number(PG_PORT),
});
if (ENV === 'test') {
    db = new pg_1.Pool({
        host: PG_HOST,
        database: PG_TEST_DB,
        user: PG_USER,
        password: PG_PASSWORD,
        port: Number(PG_PORT),
    });
}
exports.default = db;
