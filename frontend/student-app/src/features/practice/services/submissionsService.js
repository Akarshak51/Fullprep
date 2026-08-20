import {apiClient} from "../../../shared/services/apiClient.js";import {ENDPOINTS} from "../../../config/apiEndpoints.js";
export async function runCode({code,language,problemId}){return apiClient.post(ENDPOINTS.submissions.run,{code,language,problemId})}
export async function submitCode({code,language,problemId}){return apiClient.post(ENDPOINTS.submissions.submit,{code,language,problemId})}
export async function getSubmissionHistory(problemId){const q=problemId?`?problemId=${encodeURIComponent(problemId)}`:"";const r=await apiClient.get(`${ENDPOINTS.submissions.list}${q}`);return r.data||r}
