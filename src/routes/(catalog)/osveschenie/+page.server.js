import { getShopsByRubricSlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'osveschenie';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const data = await getShopsByRubricSlug(RUBRIC_SLUG);

        return {
            shops: data.shops || [],
            rubric: data.rubric
        };
    } catch (error) {
        console.error('Failed to load osveschenie shops:', error);
        return {
            shops: [],
            rubric: null,
            error: error.message
        };
    }
}
