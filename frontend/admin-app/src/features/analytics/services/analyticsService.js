import {apiClient} from "../../../shared/services/apiClient.js";import {ENDPOINTS} from "../../../config/apiEndpoints.js";export const getAnalytics=()=>apiClient.get(ENDPOINTS.analytics)
