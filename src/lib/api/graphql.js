/**
 * GraphQL API client for N-api service
 */
import { browser } from '$app/environment';

const GRAPHQL_API_URL = import.meta.env.VITE_GRAPHQL_API_URL || 'http://localhost:8000/graphql';

/**
 * Execute GraphQL query or mutation
 * @param {string} query - GraphQL query or mutation
 * @param {object} variables - Variables for the query
 * @returns {Promise<any>} - Response data
 */
export async function graphqlRequest(query, variables = {}) {
    const response = await fetch(GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (result.errors) {
        const error = new Error(result.errors[0]?.message || 'GraphQL Error');
        error.errors = result.errors;
        throw error;
    }

    return result.data;
}

// ============================================
// MEBEL QUERIES
// ============================================

/**
 * Get all active mebel categories
 * @returns {Promise<Array>}
 */
export async function getMebelCategories() {
    const query = `
        query GetMebelCategories {
            mebels(is_active: true) {
                id
                value
                slug
                description
                bg
                sort_order
            }
        }
    `;
    const data = await graphqlRequest(query);
    return data.mebels;
}
