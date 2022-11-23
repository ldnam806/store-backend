import { Router } from 'express';
import {Create, Show, Index} from '../../handlers/product.handler';
import checkToken from '../../middleware/checkToken';
const productModel = Router();
productModel.route('/').post(checkToken, Create);
productModel.route('/').get(Index);
productModel.route('/:id').get(Show);
export default productModel;
