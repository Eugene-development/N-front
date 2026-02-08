import { getMebelCategories } from '$lib/api/graphql.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const categories = await getMebelCategories();
        return {
            categories: categories || []
        };
    } catch (error) {
        console.error('Failed to load mebel categories:', error);
        return {
            categories: [],
            error: error.message
        };
    }
}
