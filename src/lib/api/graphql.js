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

// ============================================
// MEBEL PROJECT QUERIES
// ============================================

/**
 * Get all active mebel projects
 * @param {object} options - Query options (category_id, is_featured, is_new)
 * @returns {Promise<Array>}
 */
export async function getMebelProjects(options = {}) {
    const query = `
        query GetMebelProjects($is_active: Boolean, $category_id: ID, $is_featured: Boolean, $is_new: Boolean) {
            mebelProjects(is_active: $is_active, category_id: $category_id, is_featured: $is_featured, is_new: $is_new) {
                id
                key
                category_id
                value
                slug
                description
                short_description
                price
                old_price
                is_active
                is_featured
                is_new
                sort_order
                images {
                    id
                    url
                    mime_type
                    sort_order
                }
                category {
                    id
                    value
                    slug
                }
            }
        }
    `;
    const data = await graphqlRequest(query, { is_active: true, ...options });
    return data.mebelProjects;
}

/**
 * Get mebel projects by category ID
 * @param {string} categoryId - The ID of the category
 * @returns {Promise<Array>}
 */
export async function getMebelProjectsByCategoryId(categoryId) {
    return getMebelProjects({ category_id: categoryId });
}

/**
 * Get a single mebel project by slug
 * @param {string} slug - The URL slug of the project
 * @returns {Promise<object|null>}
 */
export async function getMebelProjectBySlug(slug) {
    const query = `
        query GetMebelProjectBySlug($slug: String!) {
            mebelProjectBySlug(slug: $slug) {
                id
                key
                category_id
                value
                slug
                description
                short_description
                price
                old_price
                meta
                is_active
                is_featured
                is_new
                sort_order
                images {
                    id
                    url
                    mime_type
                    sort_order
                }
                category {
                    id
                    value
                    slug
                    rubric {
                        id
                        value
                        slug
                    }
                }
            }
        }
    `;
    const data = await graphqlRequest(query, { slug });
    return data.mebelProjectBySlug;
}

// ============================================
// BRAND QUERIES
// ============================================

/**
 * Get all active brands
 * @param {object} options - Query options (rubric_id)
 * @returns {Promise<Array>}
 */
export async function getBrands(options = {}) {
    const query = `
        query GetBrands($is_active: Boolean, $rubric_id: ID) {
            brands(is_active: $is_active, rubric_id: $rubric_id) {
                id
                key
                value
                slug
                rubric_id
                description
                logo
                country
                website
                is_active
                sort_order
                rubric {
                    id
                    value
                    slug
                }
            }
        }
    `;
    const data = await graphqlRequest(query, { is_active: true, ...options });
    return data.brands;
}

/**
 * Get brands by rubric slug
 * @param {string} rubricSlug - The URL slug of the rubric
 * @returns {Promise<{rubric: object, brands: Array}>}
 */
export async function getBrandsByRubricSlug(rubricSlug) {
    // First get the rubric to find its ID
    const query = `
        query GetRubricBySlug($slug: String!) {
            rubricBySlug(slug: $slug) {
                id
                value
                slug
                description
            }
        }
    `;
    const rubricData = await graphqlRequest(query, { slug: rubricSlug });
    
    if (!rubricData.rubricBySlug) {
        return { rubric: null, brands: [] };
    }
    
    const rubric = rubricData.rubricBySlug;
    
    // Now get brands for this rubric
    const brands = await getBrands({ rubric_id: rubric.id });
    
    return { rubric, brands };
}

/**
 * Get a single brand by slug
 * @param {string} slug - The URL slug of the brand
 * @returns {Promise<object|null>}
 */
export async function getBrandBySlug(slug) {
    const query = `
        query GetBrandBySlug($slug: String!) {
            brandBySlug(slug: $slug) {
                id
                key
                value
                slug
                rubric_id
                description
                logo
                country
                website
                is_active
                sort_order
                rubric {
                    id
                    value
                    slug
                }
            }
        }
    `;
    const data = await graphqlRequest(query, { slug });
    return data.brandBySlug;
}
