import { Router } from 'express';
import {Create, Show, Index, Auth} from '../../handlers/user.handler';
import validateToken from '../../middleware/validateToken'
const userRoutes = Router();
userRoutes.route('/').post(Create);
userRoutes.route('/').get(validateToken ,Index);
userRoutes.route('/:id').get(validateToken,Show);
userRoutes.route('/login').post(Auth);
export default userRoutes;
