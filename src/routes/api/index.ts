import { Router } from 'express';
import checkToken from '../../middleware/checkToken';

import productRoutes from './product.route';
import userRoutes from './user.route';
import orderRoutes from './order.route';

const apiRoute = Router();
apiRoute.use('/product', productRoutes);
apiRoute.use('/user',userRoutes);
apiRoute.use('/order', checkToken, orderRoutes);

export default apiRoute;
