import express from 'express';
import { createHero, deleteHero, getHero, getHeroes, updateHero } from '../controllers/heroes.js';


const router = express.Router();

router.get('/heroes', getHeroes);
router.post('/heroes', createHero);
router.get('/detail/:id', getHero);
router.delete('/heroes/:id', deleteHero);
router.patch('/detail/:id', updateHero);

export default router;