import express from 'express';
import { getArchitects } from '../controllers/architectController.js';
const router = express.Router();

router.get('/', getArchitects);
export default router;


