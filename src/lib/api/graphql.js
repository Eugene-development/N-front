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
// RUBRIC QUERIES
// ============================================

/**
 * Get all active rubrics for catalog menu
 * @returns {Promise<Array>}
 */
export async function getRubrics() {
    const query = `
        query GetRubrics {
            rubrics(is_active: true) {
                id
                value
                slug
                description
                sort_order
            }
        }
    `;
    const data = await graphqlRequest(query);
    return data.rubrics;
}

/**
 * Get categories for a specific rubric by its slug
 * @param {string} rubricSlug - The URL slug of the rubric
 * @returns {Promise<{rubric: object, categories: Array}>}
 */
export async function getCategoriesByRubricSlug(rubricSlug) {
    const query = `
        query GetRubricWithCategories($slug: String!) {
            rubricBySlug(slug: $slug) {
                id
                value
                slug
                description
                categories {
                    id
                    value
                    slug
                    description
                    bg
                    sort_order
                }
            }
        }
    `;
    const data = await graphqlRequest(query, { slug: rubricSlug });
    
    if (!data.rubricBySlug) {
        return { rubric: null, categories: [] };
    }
    
    return {
        rubric: data.rubricBySlug,
        categories: data.rubricBySlug.categories || []
    };
}

// ============================================
// MEBEL QUERIES (convenience wrapper)
// ============================================

/**
 * Get all active mebel categories (using rubricBySlug)
 * @returns {Promise<Array>}
 */
export async function getMebelCategories() {
    const { categories } = await getCategoriesByRubricSlug('mebel');
    return categories;
}

// ============================================
// CATEGORY QUERIES
// ============================================

/**
 * Get a category by its slug
 * @param {string} categorySlug - The URL slug of the category
 * @returns {Promise<object|null>}
 */
export async function getCategoryBySlug(categorySlug) {
    const query = `
        query GetCategoryBySlug($slug: String!) {
            categoryBySlug(slug: $slug) {
                id
                value
                slug
                description
                bg
                rubric {
                    id
                    value
                    slug
                }
            }
        }
    `;
    const data = await graphqlRequest(query, { slug: categorySlug });
    return data.categoryBySlug;
}
