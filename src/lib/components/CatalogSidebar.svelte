<script>
	import SidebarConsultationBanner from './SidebarConsultationBanner.svelte';

	/**
	 * Универсальный компонент сайдбара для каталога
	 * Поддерживает категории, бренды и магазины
	 * 
	 * @prop {Array} items - Массив элементов для отображения (категории, бренды или магазины)
	 * @prop {string} rubricSlug - Slug рубрики для формирования ссылок
	 * @prop {string} title - Заголовок секции
	 * @prop {string} itemType - Тип элементов: 'category', 'brand', 'shop'
	 * @prop {boolean} externalLinks - Открывать ссылки в новом окне (для магазинов)
	 * @prop {object} banner - Настройки баннера консультации
	 * @prop {string} activeSlug - Slug активной категории для выделения
	 */
	let {
		items = [],
		rubricSlug = '',
		title = 'Категории',
		itemType = 'category',
		externalLinks = false,
		activeSlug = '',
		banner = {
			title: 'Нужна помощь?',
			description: 'Получите бесплатную консультацию',
			color: 'sky'
		}
	} = $props();
	
	// Проверка активности элемента
	function isActive(item) {
		return activeSlug && item.slug === activeSlug;
	}

	// Универсальная иконка (шеврон вправо)
	const defaultIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;
	
	// Иконка магазина
	const shopIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />`;

	function getIcon(item) {
		if (itemType === 'shop') return shopIcon;
		return defaultIcon;
	}

	function getItemName(item) {
		return item?.value || item?.name || '';
	}

	function getItemLink(item) {
		if (itemType === 'shop' && item.website) {
			return item.website;
		}
		return `/${rubricSlug}/${item.slug}`;
	}
</script>

<aside class="hidden lg:block">
	<div class="sticky top-24">
		<!-- Элементы -->
		{#if items.length > 0}
			<nav class="space-y-1 rounded-2xl bg-white p-3 shadow-sm">
				<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
					{title}
				</h2>

				{#each items as item, index (item.id || item.slug)}
					{@const active = isActive(item)}
					<a
						href={getItemLink(item)}
						target={externalLinks ? '_blank' : undefined}
						rel={externalLinks ? 'noopener noreferrer' : undefined}
						class="group flex items-center gap-3 rounded-xl px-4 py-2 transition-all {active
							? 'bg-sky-50 text-sky-600'
							: 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'}"
					>
						<span
							class="flex h-10 w-10 items-center justify-center rounded-lg transition-all {active
								? 'text-sky-500'
								: 'text-slate-400 group-hover:text-sky-500'}"
						>
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								{@html getIcon(item)}
							</svg>
						</span>
						<span class="font-medium">{getItemName(item)}</span>
					</a>
				{/each}
			</nav>
		{/if}
		<!-- Баннер консультации -->
		<SidebarConsultationBanner
			title={banner.title}
			description={banner.description}
			color={banner.color}
		/>
	</div>
</aside>
