import express from 'express';
import { getHint, debugCode } from './ai.controller.js';
import { protect } from '../../shared/middlewares/authMiddleware.js';

const router = express.Router();

// Apply the protect middleware to ensure only authenticated users can use the AI features
router.post('/hint', protect, getHint);
router.post('/debug', protect, debugCode);

export default router;