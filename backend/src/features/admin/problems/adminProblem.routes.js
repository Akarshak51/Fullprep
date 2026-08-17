import express from 'express';
import {
  createProblem,
  updateProblem,
  deleteProblem
} from './adminProblem.controller.js';
import { protect } from '../../../shared/middlewares/authMiddleware.js';
import { admin } from '../../../shared/middlewares/adminMiddleware.js';

const router = express.Router();

// All routes here require the user to be logged in AND be an admin
router.use(protect, admin);

router.post('/', createProblem);
router.put('/:id', updateProblem);
router.delete('/:id', deleteProblem);

export default router;