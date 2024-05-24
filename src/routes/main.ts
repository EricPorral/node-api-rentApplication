import { Router } from 'express';
import { userRoutes } from './userRoutes';
import { movieRoutes } from './movieRoutes';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.use('/movies', movieRoutes);

mainRouter.use('/users', userRoutes);