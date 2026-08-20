import {apiClient} from "../../../shared/services/apiClient.js";import {ENDPOINTS} from "../../../config/apiEndpoints.js";export const getOverview=()=>apiClient.get(ENDPOINTS.overview)
