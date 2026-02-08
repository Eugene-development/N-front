import { getMebelProjectBySlug, getMebelProjects, getCategoryBySlug } from '$lib/api/graphql.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const categorySlug = params.category;
    const projectSlug = params.slug;

    try {
        // Load project by slug
        const project = await getMebelProjectBySlug(projectSlug);

        // Load category info
        let category = null;
        if (project?.category) {
            category = project.category;
        } else {
            category = await getCategoryBySlug(categorySlug);
        }

        // Load related projects from same category
        let relatedProjects = [];
        if (project?.category_id) {
            const allProjects = await getMebelProjects({ category_id: project.category_id });
            relatedProjects = allProjects.filter(p => p.id !== project.id).slice(0, 3);
        }

        return {
            project,
            category,
            relatedProjects,
            categorySlug,
            projectSlug
        };
    } catch (error) {
        console.error('Failed to load mebel project:', error);
        return {
            project: null,
            category: null,
            relatedProjects: [],
            categorySlug,
            projectSlug,
            error: error.message
        };
    }
}
