import { Router } from 'express';
import { createMovieController } from '../services/movies/useCases/createMovies/createMovieController';
import { createMovieRentController } from '../services/movies/useCases/createMovieRent/createMovieRentController';
import { getMovieByRdController } from '../services/movies/useCases/getMovieByRD/getMovieByRdController';


export const movieRoutes = Router();

movieRoutes.post('/', createMovieController);
movieRoutes.post('/rent', createMovieRentController);
movieRoutes.get('/release', getMovieByRdController);