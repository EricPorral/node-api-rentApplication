import { Router } from 'express';
import { createUserController } from '../services/users/useCases/createUsers/createUserController';
import { getAllUsersController } from '../services/users/useCases/getAllUsers/getAllUsersController';

export const userRoutes = Router();

userRoutes.post('/', createUserController);
userRoutes.get('/', getAllUsersController);    