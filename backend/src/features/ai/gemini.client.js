import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Google Generative AI SDK with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use the recommended model for general text and coding tasks
const geminiModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default geminiModel;