import { getBrandsByRubricSlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'bytovaya-tehnika';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const brandsData = await getBrandsByRubricSlug(RUBRIC_SLUG);

        return {
            brands: brandsData.brands || [],
            rubric: brandsData.rubric
        };
    } catch (error) {
        console.error('Failed to load bytovaya-tehnika brands:', error);
        return {
            brands: [],
            rubric: null,
            error: error.message
        };
    }
}
