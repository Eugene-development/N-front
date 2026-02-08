import { getCategoriesByRubricSlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'stoleshnica';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const data = await getCategoriesByRubricSlug(RUBRIC_SLUG);
        return {
            categories: data.categories || [],
            rubric: data.rubric
        };
    } catch (error) {
        console.error('Failed to load stoleshnica categories:', error);
        return {
            categories: [],
            rubric: null,
            error: error.message
        };
    }
}
