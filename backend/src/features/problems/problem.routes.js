import express from 'express';
import { getProblems, getProblemBySlug } from './problem.controller.js';

const router = express.Router();

// GET /api/problems
router.get('/', getProblems);

// GET /api/problems/:slug
router.get('/:slug', getProblemBySlug);

export default router;