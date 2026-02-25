import { getShopBySlug, getShopsByRubricSlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'furnitura';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const shopSlug = params.shop;

    try {
        // Загружаем все магазины рубрики для сайдбара
        const { shops: allShops, rubric } = await getShopsByRubricSlug(RUBRIC_SLUG);

        // Загружаем конкретный магазин
        const shop = await getShopBySlug(shopSlug);

        return {
            shop,
            allShops: allShops || [],
            rubric,
            shopSlug
        };
    } catch (error) {
        console.error('Failed to load furnitura shop:', error);
        return {
            shop: null,
            allShops: [],
            rubric: null,
            shopSlug,
            error: error.message
        };
    }
}
