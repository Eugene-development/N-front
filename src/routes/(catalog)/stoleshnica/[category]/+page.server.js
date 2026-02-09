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
const mockSuppliersByCategory = {
    'kvarc': [
        {
            id: 1,
            name: 'Samsung Radianz',
            description: 'Премиальный кварцевый камень из Южной Кореи с уникальной эстетикой и высокой прочностью',
            website: 'https://samsungradianz.com',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
            country: 'Южная Корея',
            priceRange: 'от 15 000 ₽/м²',
            features: ['Гарантия 15 лет', '100+ цветов', 'Антибактериальное покрытие']
        },
        {
            id: 2,
            name: 'Caesarstone',
            description: 'Израильский производитель премиального кварцевого камня с безупречной репутацией',
            website: 'https://caesarstone.com',
            logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop',
            country: 'Израиль',
            priceRange: 'от 18 000 ₽/м²',
            features: ['Мировой лидер', 'Экологичный', 'Высокая прочность']
        },
        {
            id: 3,
            name: 'Silestone (Cosentino)',
            description: 'Испанский бренд с инновационными технологиями и широкой палитрой дизайнов',
            website: 'https://silestone.com',
            logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop',
            country: 'Испания',
            priceRange: 'от 16 000 ₽/м²',
            features: ['N-BOOST технология', 'Устойчивость к пятнам', '150+ дизайнов']
        },
        {
            id: 4,
            name: 'Vicostone',
            description: 'Вьетнамский производитель качественного кварцевого камня по доступным ценам',
            website: 'https://vicostone.com',
            logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&h=200&fit=crop',
            country: 'Вьетнам',
            priceRange: 'от 12 000 ₽/м²',
            features: ['Отличное соотношение цена/качество', '90+ цветов', 'Быстрая доставка']
        }
    ],
    'akril': [
        {
            id: 1,
            name: 'Corian (DuPont)',
            description: 'Легендарный американский бренд акрилового камня с безграничными возможностями дизайна',
            website: 'https://corian.com',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
            country: 'США',
            priceRange: 'от 14 000 ₽/м²',
            features: ['Бесшовное соединение', 'Ремонтопригодность', '100+ цветов']
        },
        {
            id: 2,
            name: 'Hi-Macs (LG)',
            description: 'Южнокорейский акриловый камень премиум-класса с инновационными технологиями',
            website: 'https://himacs.eu',
            logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop',
            country: 'Южная Корея',
            priceRange: 'от 12 000 ₽/м²',
            features: ['Термоформуемый', 'Гигиеничный', '120+ цветов']
        },
        {
            id: 3,
            name: 'Staron (Samsung)',
            description: 'Качественный акриловый камень от Samsung с широким выбором декоров',
            website: 'https://getaran.com',
            logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop',
            country: 'Южная Корея',
            priceRange: 'от 10 000 ₽/м²',
            features: ['Доступная цена', 'Любые формы', '80+ цветов']
        }
    ],
    'dsp': [
        {
            id: 1,
            name: 'Egger',
            description: 'Австрийский производитель качественных ДСП-панелей с огромным выбором декоров',
            website: 'https://egger.com',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
            country: 'Австрия',
            priceRange: 'от 3 500 ₽/м²',
            features: ['Влагостойкость', '300+ декоров', 'Экологичность']
        },
        {
            id: 2,
            name: 'Kronospan',
            description: 'Крупнейший мировой производитель древесных плит с оптимальным соотношением цена/качество',
            website: 'https://kronospan.com',
            logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop',
            country: 'Австрия',
            priceRange: 'от 2 800 ₽/м²',
            features: ['Бюджетный вариант', 'Быстрая доставка', '200+ декоров']
        },
        {
            id: 3,
            name: 'Kaindl',
            description: 'Премиальный австрийский производитель постформинга с инновационными технологиями',
            website: 'https://kaindl.com',
            logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop',
            country: 'Австрия',
            priceRange: 'от 4 500 ₽/м²',
            features: ['Антифингерпринт', 'Глубокое тиснение', 'Синхрон-пора']
        }
    ],
    'massiv': [
        {
            id: 1,
            name: 'ИКЕА',
            description: 'Столешницы из массива дуба, бука и берёзы от шведского гиганта',
            website: 'https://ikea.com',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
            country: 'Швеция',
            priceRange: 'от 6 000 ₽/м²',
            features: ['Доступная цена', 'Быстрая доставка', 'Экологичность']
        },
        {
            id: 2,
            name: 'Леруа Мерлен',
            description: 'Широкий выбор столешниц из массива дерева различных пород',
            website: 'https://leroymerlin.ru',
            logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop',
            country: 'Россия',
            priceRange: 'от 5 500 ₽/м²',
            features: ['Наличие на складе', 'Рассрочка', 'Оптовые цены']
        }
    ],
    'kompakt': [
        {
            id: 1,
            name: 'Fenix NTM',
            description: 'Итальянский инновационный материал с нанотехнологиями и матовой поверхностью',
            website: 'https://fenixforinteriors.com',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
            country: 'Италия',
            priceRange: 'от 20 000 ₽/м²',
            features: ['Самовосстановление', 'Антифингерпринт', 'Ультраматовая поверхность']
        },
        {
            id: 2,
            name: 'Dekton (Cosentino)',
            description: 'Испанская компакт-плита с экстремальной устойчивостью к повреждениям',
            website: 'https://dekton.com',
            logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop',
            country: 'Испания',
            priceRange: 'от 25 000 ₽/м²',
            features: ['Термостойкость', 'UV-устойчивость', 'Имитация камня']
        }
    ],
    'keramika': [
        {
            id: 1,
            name: 'Laminam',
            description: 'Итальянский производитель крупноформатной керамики для столешниц',
            website: 'https://laminam.it',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
            country: 'Италия',
            priceRange: 'от 28 000 ₽/м²',
            features: ['Термостойкость 500°C', 'Крупный формат', 'Природные текстуры']
        },
        {
            id: 2,
            name: 'Neolith',
            description: 'Испанская спечённая керамика премиум-класса для роскошных интерьеров',
            website: 'https://neolith.com',
            logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=200&fit=crop',
            country: 'Испания',
            priceRange: 'от 30 000 ₽/м²',
            features: ['100% натуральный', 'Устойчивость к царапинам', '80+ дизайнов']
        },
        {
            id: 3,
            name: 'Sapienstone',
            description: 'Итальянская керамическая плита, созданная специально для кухни',
            website: 'https://sapienstone.com',
            logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop',
            country: 'Италия',
            priceRange: 'от 25 000 ₽/м²',
            features: ['Гигиеничность', 'Сертификат NSF', 'Легкость очистки']
        }
    ]
};

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
    if (!useApiData) {
        suppliers = mockSuppliersByCategory[categorySlug] || [];
    }

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
