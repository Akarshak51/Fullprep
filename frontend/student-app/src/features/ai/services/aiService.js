import {apiClient} from "../../../shared/services/apiClient.js";import {ENDPOINTS} from "../../../config/apiEndpoints.js";
export async function getHint(problem,stage=1){return apiClient.post(ENDPOINTS.ai.hint,{problemTitle:problem?.title||problem?.problemTitle,code:problem?.code||"",currentHintLevel:stage})}
export async function debugCode(code,context={}){return apiClient.post(ENDPOINTS.ai.debug,{code,...context})}
export async function analyzeComplexity(code){return apiClient.post(ENDPOINTS.ai.complexity,{code})}
export async function explainCode(code){return apiClient.post(ENDPOINTS.ai.explain,{code})}
export async function sendChatMessage(message,history=[]){return apiClient.post(ENDPOINTS.ai.chat,{message,history})}
