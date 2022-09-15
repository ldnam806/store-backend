import { Router } from 'express';
import * as handlers from '../../handlers/product.handler';

const productModel = Router();
// api/product
productModel.route('/').post(handlers.create);
productModel.route('/').get(handlers.getAll);
productModel.route('/:id').get(handlers.getById);
productModel.route('/:id').patch(handlers.updateById);
productModel.route('/:id').delete(handlers.deleteById);

export default productModel;
