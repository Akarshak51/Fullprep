import express from 'express';
import { googleLogin, getMe } from './auth.controller.js';
import { protect } from '../../shared/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/google', googleLogin);
router.get('/me', protect, getMe);

export default router;