<script>
	/**
	 * Баннер для консультации в сайдбаре каталога
	 * Единый компонент для всех страниц каталога
	 * 
	 * @example
	 * <SidebarConsultationBanner 
	 *   title="Нужна помощь?" 
	 *   description="Получите бесплатную консультацию" 
	 *   color="sky" 
	 * />
	 */
	import { serviceOrderStore } from '$lib/stores/serviceOrder.svelte.js';

	/**
	 * @type {{
	 *   title?: string,
	 *   description?: string,
	 *   color?: 'sky' | 'emerald' | 'amber' | 'slate' | 'violet' | 'rose'
	 * }}
	 */
	let { 
		title = 'Нужна помощь?', 
		description = 'Получите бесплатную консультацию дизайнера',
		color = 'sky'
	} = $props();

	// Цветовые схемы для разных вариантов
	const colorSchemes = {
		sky: {
			bg: 'from-sky-500 to-cyan-600',
			text: 'text-sky-100',
			button: 'text-sky-600 hover:bg-sky-50'
		},
		emerald: {
			bg: 'from-emerald-500 to-teal-600',
			text: 'text-emerald-100',
			button: 'text-emerald-600 hover:bg-emerald-50'
		},
		amber: {
			bg: 'from-amber-500 to-orange-600',
			text: 'text-amber-100',
			button: 'text-amber-600 hover:bg-amber-50'
		},
		slate: {
			bg: 'from-slate-700 to-slate-900',
			text: 'text-slate-300',
			button: 'text-slate-800 hover:bg-slate-100'
		},
		violet: {
			bg: 'from-violet-500 to-purple-600',
			text: 'text-violet-100',
			button: 'text-violet-600 hover:bg-violet-50'
		},
		rose: {
			bg: 'from-rose-500 to-pink-600',
			text: 'text-rose-100',
			button: 'text-rose-600 hover:bg-rose-50'
		}
	};

	const scheme = $derived(colorSchemes[color] || colorSchemes.sky);
</script>

<div class="mt-8 rounded-2xl bg-linear-to-br {scheme.bg} p-6 text-white">
	<h3 class="text-lg font-semibold">{title}</h3>
	<p class="mt-2 text-sm {scheme.text}">
		{description}
	</p>
	<button
		type="button"
		onclick={() => serviceOrderStore.open('consultation')}
		class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium {scheme.button} transition-all"
	>
		Бесплатная консультация
		<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</div>
