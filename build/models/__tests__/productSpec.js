"use strict";
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
