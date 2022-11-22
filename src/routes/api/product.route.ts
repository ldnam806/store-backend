import { Router } from 'express';
import {Create, Show, Index} from '../../handlers/product.handler';
import validateToken from '../../middleware/validateToken';
const productModel = Router();
productModel.route('/').post(validateToken, Create);
productModel.route('/').get(Index);
productModel.route('/:id').get(Show);
export default productModel;
