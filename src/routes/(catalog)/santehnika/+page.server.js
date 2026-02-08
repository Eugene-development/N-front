import { getCategoriesByRubricSlug, getBrandsByRubricSlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'santehnika';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        // Загружаем категории и бренды параллельно для оптимизации
        const [categoriesData, brandsData] = await Promise.all([
            getCategoriesByRubricSlug(RUBRIC_SLUG),
            getBrandsByRubricSlug(RUBRIC_SLUG)
        ]);

        return {
            categories: categoriesData.categories || [],
            rubric: categoriesData.rubric,
            brands: brandsData.brands || []
        };
    } catch (error) {
        console.error('Failed to load santehnika data:', error);
        return {
            categories: [],
            rubric: null,
            brands: [],
            error: error.message
        };
    }
}
