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
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = `INSERT INTO product (name, price) 
                    values ($1, $2) 
                    RETURNING name, price`;
                const result = yield connection.query(sql, [u.name, u.price]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Unable to create (${u.name}): ${error.message}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT * from product';
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Error at retrieving users ${error.message}`);
            }
        });
    }
    // get specific student
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `SELECT * FROM product 
        WHERE id=($1)`;
                const connection = yield database_1.default.connect();
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Could not find product ${id}, ${error.message}`);
            }
        });
    }
    // update student
    updateById(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = `UPDATE product 
                    SET name=$1, price=$2, 
                    WHERE id=$3
                    RETURNING id, name, price`;
                const result = yield connection.query(sql, [u.name, u.price, u.id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Could not update product: ${u.name}, ${error.message}`);
            }
        });
    }
    // delete student
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = `DELETE FROM product 
                    WHERE id=($1) 
                    RETURNING id, name`;
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Could not delete user ${id}, ${error.message}`);
            }
        });
    }
}
exports.default = ProductModel;
