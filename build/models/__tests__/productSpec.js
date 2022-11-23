"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../product.model"));
describe('Test Product Model Methods', () => {
    const productModel = new product_model_1.default();
    it('Get all method exist', () => {
        expect(productModel.Index).toBeDefined();
    });
    it('Get by ID method exist', () => {
        expect(productModel.Show).toBeDefined();
    });
    it('Create method exist', () => {
        expect(productModel.Create).toBeDefined();
    });
});
