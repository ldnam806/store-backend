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
const product_model_1 = __importDefault(require("../product.model"));
const productModel = new product_model_1.default();
describe('Test Product Model Methods', () => {
    it('Get all method exist', () => {
        expect(productModel.getAll).toBeDefined();
    });
    it('Get by ID method exist', () => {
        expect(productModel.getById).toBeDefined();
    });
    it('Create method exist', () => {
        expect(productModel.create).toBeDefined();
    });
    it('Update by ID method exist', () => {
        expect(productModel.updateById).toBeDefined();
    });
    it('Delete method exist', () => {
        expect(productModel.delete).toBeDefined();
    });
});
describe('Test Product Model Logic', () => {
    it('Get all method should return All available product in DB', () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield productModel.getAll();
        expect(products.length).toBe(0);
    }));
});
