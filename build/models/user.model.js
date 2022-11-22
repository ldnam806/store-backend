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
const database_1 = __importDefault(require("../database"));
class UserModel {
    Create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const query = `INSERT INTO "user" (email, firstName, lastName , password) 
                    values ($1, $2, $3, $4) 
                    RETURNING id, email, firstName, lastName`;
                const result = yield connection.query(query, [
                    data.email,
                    data.firstName,
                    data.lastName,
                    data.password
                ]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Unable to create : ${error.message}`);
            }
        });
    }
    Index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT * from "user"';
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (error) {
                return error;
            }
        });
    }
    Show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `SELECT * FROM "user" 
        WHERE id=($1)`;
                const connection = yield database_1.default.connect();
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                return error;
            }
        });
    }
    Auth(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const result = yield connection.query('SELECT "password" FROM "user" WHERE email=$1', [email]);
                if (result.rows.length) {
                    const isPasswordValid = result.rows[0].password === password;
                    if (isPasswordValid) {
                        const userInfo = yield connection.query('SELECT id, email, "firstName", "lastName" FROM "user" WHERE email=($1)', [email]);
                        return userInfo.rows[0];
                    }
                }
                connection.release();
                return null;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = UserModel;
