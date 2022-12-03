import { Router } from 'express';
import {Create, Show, Index , AddProduct} from '../../handlers/order.handler';
import checkToken from '../../middleware/checkToken';

const orderRoutes = Router();
// api/order
orderRoutes.route('/').post(checkToken,Create);
orderRoutes.route('/').get(checkToken,Index);
orderRoutes.route('/:id').get(checkToken,Show);
orderRoutes.route('/add-product').post(checkToken,AddProduct);



export default orderRoutes;
