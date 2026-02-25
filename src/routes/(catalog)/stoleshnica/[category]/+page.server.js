import { getCategoryBySlug, getCategoriesByRubricSlug, getCountertopManufacturersByCategorySlug } from '$lib/api/graphql.js';

const RUBRIC_SLUG = 'stoleshnica';

// Default categories for sidebar (fallback if API fails)
const defaultCategories = [
    { id: 'kvarc', value: 'Кварцевый агломерат', slug: 'kvarc' },
    { id: 'akril', value: 'Акриловый камень', slug: 'akril' },
    { id: 'dsp', value: 'ДСП / Постформинг', slug: 'dsp' },
    { id: 'massiv', value: 'Массив дерева', slug: 'massiv' },
    { id: 'kompakt', value: 'Компакт-плита', slug: 'kompakt' },
    { id: 'keramika', value: 'Керамика', slug: 'keramika' },
];

// Mock suppliers data by category (used as fallback when API returns empty)
const mockSuppliersByCategory = {};

function getCategoryNameFromSlug(slug) {
    const categoryNames = {
        'kvarc': 'Кварцевый агломерат',
        'akril': 'Акриловый камень',
        'dsp': 'ДСП / Постформинг',
        'massiv': 'Массив дерева',
        'kompakt': 'Компакт-плита',
        'keramika': 'Керамика'
    };
    return categoryNames[slug] || 'Столешницы';
}

/**
 * Transform API manufacturer to display format
 * @param {object} manufacturer 
 * @returns {object}
 */
function transformManufacturer(manufacturer) {
    return {
        id: manufacturer.id,
        name: manufacturer.value,
        description: manufacturer.description || '',
        website: manufacturer.website || '#',
        logo: manufacturer.logo || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
        country: manufacturer.country || 'Россия',
        phone: manufacturer.phone || null,
        email: manufacturer.email || null,
        priceRange: 'Цена по запросу', // Default since we don't have price in the model yet
        features: [] // We can add this field to the model later if needed
    };
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const categorySlug = params.category;

    // Try to load manufacturers from API first
    let suppliers = [];
    let useApiData = false;

    try {
        const apiManufacturers = await getCountertopManufacturersByCategorySlug(categorySlug);

        if (apiManufacturers && apiManufacturers.length > 0) {
            // Transform API data to display format
            suppliers = apiManufacturers.map(transformManufacturer);
            useApiData = true;
        }
    } catch (e) {
        console.error('Failed to load manufacturers from API:', e);
    }

    // Fallback to mock data if API returned nothing
    // if (!useApiData) {
    //     suppliers = mockSuppliersByCategory[categorySlug] || [];
    // }

    try {
        // Try to load current category from API
        let category = await getCategoryBySlug(categorySlug);

        // If API returned no category, use fallback
        if (!category) {
            const categoryName = getCategoryNameFromSlug(categorySlug);
            if (categoryName !== 'Столешницы') {
                category = { id: categorySlug, value: categoryName, slug: categorySlug };
            }
        }

        // Try to load all categories for sidebar from API
        let allCategories = [];
        try {
            const result = await getCategoriesByRubricSlug(RUBRIC_SLUG);
            if (result.categories && result.categories.length > 0) {
                allCategories = result.categories;
            } else {
                allCategories = defaultCategories;
            }
        } catch {
            allCategories = defaultCategories;
        }

        return {
            category,
            allCategories,
            suppliers,
            categorySlug,
            useApiData
        };
    } catch (error) {
        console.error('Failed to load stoleshnica category:', error);
        const categoryName = getCategoryNameFromSlug(categorySlug);
        return {
            category: categoryName !== 'Столешницы' ? { id: categorySlug, value: categoryName, slug: categorySlug } : null,
            allCategories: defaultCategories,
            suppliers,
            categorySlug,
            useApiData: false,
            error: error.message
        };
    }
}
