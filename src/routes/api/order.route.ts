import { Router } from 'express';
import * as handlers from '../../handlers/order.handler';

const orderRoutes = Router();
// api/order
orderRoutes.route('/').post(handlers.create);
orderRoutes.route('/').get(handlers.getAll);
orderRoutes.route('/:id').get(handlers.getById);
orderRoutes.route('/:id').patch(handlers.updateById);
orderRoutes.route('/:id').delete(handlers.deleteById);

export default orderRoutes;
