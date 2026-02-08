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
	 */
	let {
		items = [],
		rubricSlug = '',
		title = 'Категории',
		itemType = 'category',
		externalLinks = false,
		banner = {
			title: 'Нужна помощь?',
			description: 'Получите бесплатную консультацию',
			color: 'sky'
		}
	} = $props();

	// Универсальная иконка (шеврон вправо)
	const defaultIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;
	
	// Иконка магазина
	const shopIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />`;

	// Градиенты по умолчанию для разных типов
	const gradients = [
		{ from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600', bg: 'bg-sky-500' },
		{ from: 'from-emerald-100', to: 'to-teal-100', hover: 'group-hover:from-emerald-500 group-hover:to-teal-500', text: 'text-emerald-600', bg: 'bg-emerald-500' },
		{ from: 'from-amber-100', to: 'to-orange-100', hover: 'group-hover:from-amber-500 group-hover:to-orange-500', text: 'text-amber-600', bg: 'bg-amber-500' },
		{ from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600', bg: 'bg-violet-500' },
		{ from: 'from-cyan-100', to: 'to-sky-100', hover: 'group-hover:from-cyan-500 group-hover:to-sky-500', text: 'text-cyan-600', bg: 'bg-cyan-500' },
		{ from: 'from-rose-100', to: 'to-pink-100', hover: 'group-hover:from-rose-500 group-hover:to-pink-500', text: 'text-rose-600', bg: 'bg-rose-500' },
		{ from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600', bg: 'bg-slate-500' },
	];

	function getGradient(index) {
		return gradients[index % gradients.length];
	}

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
			<nav class="space-y-1">
				<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
					{title}
				</h2>

				{#each items as item, index (item.id || item.slug)}
					{@const gradient = getGradient(index)}
					<a
						href={getItemLink(item)}
						target={externalLinks ? '_blank' : undefined}
						rel={externalLinks ? 'noopener noreferrer' : undefined}
						class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600"
					>
						<span
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br {gradient.from} {gradient.to} {gradient.text} transition-all {gradient.hover} group-hover:text-white group-hover:shadow-lg"
						>
							{#if item.logo}
								<img src={item.logo} alt={getItemName(item)} class="h-6 w-6 object-contain" />
							{:else}
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									{@html getIcon(item)}
								</svg>
							{/if}
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
