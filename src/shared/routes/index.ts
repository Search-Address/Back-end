import { Router } from 'express';
import { cepRoutes } from './cep.routes';

const router = Router();

router.use('/cep', cepRoutes);

export { router };
