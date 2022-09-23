import { Router } from 'express';
import * as handlers from '../../handlers/user.handler';

const userRoutes = Router();
// api/user
userRoutes.route('/').post(handlers.create);
userRoutes.route('/').get(handlers.getAll);
userRoutes.route('/:id').get(handlers.getById);
userRoutes.route('/:id').patch(handlers.updateById);
userRoutes.route('/:id').delete(handlers.deleteById);
userRoutes.route('/auth').post(handlers.authenticate);

export default userRoutes;
