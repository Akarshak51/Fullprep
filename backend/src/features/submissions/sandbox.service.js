import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const JUDGE0_URL = process.env.JUDGE0_URL || 'https://judge0-ce.p.rapidapi.com';
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;

const languageMap = {
  'C++': 54,
  'Java': 62,
  'Python': 71,
  'JavaScript': 93,
  'TypeScript': 74
};

export const executeCode = async (code, language, testCases) => {
  const language_id = languageMap[language];
  if (!language_id) throw new Error('Unsupported language');

  const submissions = testCases.map((tc) => ({
    language_id,
    source_code: code,
    stdin: tc.input,
    expected_output: tc.output
  }));

  try {
    const response = await axios.post(
      `${JUDGE0_URL}/submissions/batch?base64_encoded=false`,
      { submissions },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': JUDGE0_API_KEY,
        },
      }
    );

    const tokens = response.data.map((res) => res.token).join(',');

    let results = [];
    let pending = true;
    
    while (pending) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resultResponse = await axios.get(
        `${JUDGE0_URL}/submissions/batch?tokens=${tokens}&base64_encoded=false&fields=status,stdout,stderr,compile_output,time,memory`,
        {
          headers: { 'X-RapidAPI-Key': JUDGE0_API_KEY },
        }
      );
      
      results = resultResponse.data.submissions;
      pending = results.some((r) => r.status.id === 1 || r.status.id === 2); 
    }

    return results;
  } catch (error) {
    console.error('Sandbox execution error:', error);
    throw new Error('Failed to execute code in sandbox');
  }
};