import { Router } from 'express';
import {Create, Show, Index} from '../../handlers/order.handler';
import checkToken from '../../middleware/checkToken';

const orderRoutes = Router();
// api/order
orderRoutes.route('/').post(checkToken,Create);
orderRoutes.route('/').get(checkToken,Index);
orderRoutes.route('/:id').get(checkToken,Show);


export default orderRoutes;
