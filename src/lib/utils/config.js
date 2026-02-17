/**
 * Runtime configuration helper
 * 
 * In Docker production: reads from window.__APP_CONFIG__ (injected by entrypoint.sh)
 * In development / build-time: falls back to import.meta.env.VITE_* variables
 */

/**
 * @returns {string} Auth API URL (e.g. https://auth.novostroy.org/api)
 */
export function getAuthApiUrl() {
	if (typeof window !== 'undefined' && window.__APP_CONFIG__?.AUTH_API_URL) {
		return window.__APP_CONFIG__.AUTH_API_URL;
	}
	return import.meta.env.VITE_AUTH_API_URL || '';
}

/**
 * @returns {string} GraphQL API URL (e.g. https://crud.novostroy.org/graphql)
 */
export function getGraphqlApiUrl() {
	if (typeof window !== 'undefined' && window.__APP_CONFIG__?.GRAPHQL_API_URL) {
		return window.__APP_CONFIG__.GRAPHQL_API_URL;
	}
	return import.meta.env.VITE_GRAPHQL_API_URL || '';
}

/**
 * @returns {string} API Base URL (e.g. https://crud.novostroy.org/api)
 */
export function getApiBaseUrl() {
	if (typeof window !== 'undefined' && window.__APP_CONFIG__?.API_BASE_URL) {
		return window.__APP_CONFIG__.API_BASE_URL;
	}
	return import.meta.env.VITE_API_URL || '';
}
