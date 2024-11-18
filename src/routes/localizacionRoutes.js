import { Router } from 'express';
import { getLocalizaciones, getLocalizacionById, createLocalizacion, updateLocalizacion, deleteLocalizacion } from '../controladores/localizacionController.js';

const router = Router();

router.get('/localizacion', getLocalizaciones);
router.get('/localizacion/:id', getLocalizacionById);
router.post('/localizacion', createLocalizacion);
router.put('/localizacion/:id', updateLocalizacion);
router.delete('/localizacion/:id', deleteLocalizacion);

export default router;
