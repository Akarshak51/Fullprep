import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './features/auth/auth.routes.js';
import problemRoutes from './features/problems/problem.routes.js';
import aiRoutes from './features/ai/ai.routes.js';
import adminProblemRoutes from './features/admin/problems/adminProblem.routes.js';
import submissionRoutes from './features/submissions/submission.routes.js'; 

dotenv.config();

const app = express();

app.use(cors({
  origin: [process.env.STUDENT_APP_URL, process.env.ADMIN_APP_URL],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/admin/problems', adminProblemRoutes);
app.use('/api/submissions', submissionRoutes); 

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Full Prep API is running smoothly!' });
});

export default app;