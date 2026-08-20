import axios from "axios";
import { env } from "../../config/env.js";

export const LANGUAGE_MAP = Object.freeze({
  cpp: 54,
  java: 62,
  python: 71,
  javascript: 93,
  typescript: 74,
});

const TERMINAL_STATUS_IDS = new Set([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

function judgeHeaders() {
  const headers = { "Content-Type": "application/json" };
  if (env.judge0ApiKey) headers["X-RapidAPI-Key"] = env.judge0ApiKey;
  if (env.judge0ApiHost) headers["X-RapidAPI-Host"] = env.judge0ApiHost;
  return headers;
}

function normalizeStatus(status) {
  const id = status?.id;
  const description = status?.description || "Unknown";
  return { id, description };
}

export function languageId(language) {
  return LANGUAGE_MAP[language];
}

export async function executeCode(code, language, testCases) {
  const languageIdValue = languageId(language);
  if (!languageIdValue) throw new Error(`Unsupported language: ${language}`);
  if (!Array.isArray(testCases) || testCases.length === 0) return [];
  if (!env.judge0Url) throw new Error("Judge0 is not configured");

  const submissions = testCases.map((testCase) => ({
    language_id: languageIdValue,
    source_code: code,
    stdin: testCase.input ?? "",
    expected_output: testCase.output ?? "",
  }));

  const createResponse = await axios.post(
    `${env.judge0Url}/submissions/batch?base64_encoded=false`,
    { submissions },
    { headers: judgeHeaders(), timeout: env.judge0TimeoutMs },
  );

  const tokens = (createResponse.data?.submissions || createResponse.data || [])
    .map((item) => item.token)
    .filter(Boolean);
  if (tokens.length !== submissions.length) throw new Error("Judge0 did not return all submission tokens");

  const startedAt = Date.now();
  let results = [];
  for (let attempt = 0; attempt < env.judge0MaxPolls; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, env.judge0PollIntervalMs));
    const response = await axios.get(
      `${env.judge0Url}/submissions/batch`,
      {
        params: {
          tokens: tokens.join(","),
          base64_encoded: false,
          fields: "status,stdout,stderr,compile_output,time,memory,message",
        },
        headers: judgeHeaders(),
        timeout: env.judge0TimeoutMs,
      },
    );
    results = response.data?.submissions || [];
    if (results.length === tokens.length && results.every((result) => TERMINAL_STATUS_IDS.has(result.status?.id))) {
      return results.map((result, index) => ({
        ...result,
        testCase: index + 1,
        status: normalizeStatus(result.status),
        elapsedMs: Date.now() - startedAt,
      }));
    }
  }

  throw new Error("Judge0 execution timed out while waiting for results");
}
