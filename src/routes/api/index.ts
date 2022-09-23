import { Router } from 'express';
import validateToken from '../../middleware/validateToken';

import productRoutes from './product.route';
import userRoutes from './user.route';
import orderRoutes from './order.route';

const apiRoute = Router();
apiRoute.use('/product', validateToken, productRoutes);
apiRoute.use('/user', userRoutes);
apiRoute.use('/order', validateToken, orderRoutes);

export default apiRoute;
