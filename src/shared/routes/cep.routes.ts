import GetCepController from '@modules/searchCep/useCases/GetCepController';
import { Router } from 'express';

const cepRoutes = Router();

const getCepController = new GetCepController();

cepRoutes.get('/search-address', getCepController.handle);

export { cepRoutes };
