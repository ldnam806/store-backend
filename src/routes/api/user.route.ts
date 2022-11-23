import { Router } from 'express';
import {Create, Show, Index, Auth} from '../../handlers/user.handler';
import checkToken from '../../middleware/checkToken'
const userRoutes = Router();
userRoutes.route('/').post(Create);
userRoutes.route('/').get(checkToken ,Index);
userRoutes.route('/:id').get(checkToken,Show);
userRoutes.route('/login').post(Auth);
export default userRoutes;
