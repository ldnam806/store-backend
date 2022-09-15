import { Router } from 'express';
import verifyToken from '../../middleware/verifyToken';

import productRoutes from './product.route';
import userRoutes from './user.route';
import orderRoutes from './order.route';

const apiRoute = Router();
apiRoute.use('/product', productRoutes);
apiRoute.use('/user', verifyToken, userRoutes);
apiRoute.use('/order', verifyToken, orderRoutes);

export default apiRoute;
