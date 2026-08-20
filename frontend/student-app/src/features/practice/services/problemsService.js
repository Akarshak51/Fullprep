import {apiClient} from "../../../shared/services/apiClient.js";import {ENDPOINTS} from "../../../config/apiEndpoints.js";
export async function listProblems({search="",difficulty="All",tag="All",status="All",page=1,limit=100}={}){const r=await apiClient.get(`${ENDPOINTS.problems.list}?${new URLSearchParams({search,difficulty,tag,status,page,limit})}`);return r.data||r}
export async function getAllTags(){return apiClient.get(ENDPOINTS.problems.tags)}
export async function getProblemBySlug(slug){return apiClient.get(ENDPOINTS.problems.detail(slug))}
