import express from 'express';
import { runCode, submitCode } from './submission.controller.js';
import { protect } from '../../shared/middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post('/run', runCode);
router.post('/submit', submitCode);

export default router;