import { getBrandBySlug, getBrandsByRubricSlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'plitka';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const brandSlug = params.category;

    try {
        // Загружаем все бренды рубрики для сайдбара
        const { brands: allBrands, rubric } = await getBrandsByRubricSlug(RUBRIC_SLUG);

        // Загружаем конкретный бренд
        const brand = await getBrandBySlug(brandSlug);

        return {
            brand,
            allBrands: allBrands || [],
            rubric,
            brandSlug
        };
    } catch (error) {
        console.error('Failed to load plitka brand:', error);
        return {
            brand: null,
            allBrands: [],
            rubric: null,
            brandSlug,
            error: error.message
        };
    }
}
