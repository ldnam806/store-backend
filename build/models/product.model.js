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
class ProductModel {
    Create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const query = `INSERT INTO product (name, price) 
                    values ($1, $2) 
                    RETURNING id, name, price`;
                const result = yield connection.query(query, [data.name, data.price]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    Show() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const query = 'SELECT * FROM product';
                const result = yield connection.query(query);
                connection.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    Index(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT * FROM product 
        WHERE id=($1)`;
                const connection = yield database_1.default.connect();
                const result = yield connection.query(query, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.default = ProductModel;
