import { getCategoryBySlug, getCategoriesByRubricSlug, getMebelProjectsByCategoryId } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'mebel';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const categorySlug = params.category;

    try {
        // Load current category
        const category = await getCategoryBySlug(categorySlug);

        // Load all categories for sidebar
        const { categories: allCategories } = await getCategoriesByRubricSlug(RUBRIC_SLUG);

        // Load projects for this category
        let projects = [];
        if (category?.id) {
            projects = await getMebelProjectsByCategoryId(category.id);
        }

        return {
            category,
            allCategories: allCategories || [],
            projects: projects || [],
            categorySlug
        };
    } catch (error) {
        console.error('Failed to load mebel category:', error);
        return {
            category: null,
            allCategories: [],
            projects: [],
            categorySlug,
            error: error.message
        };
    }
}
