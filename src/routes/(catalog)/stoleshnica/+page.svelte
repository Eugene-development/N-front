<script>
	import { onMount } from 'svelte';
	import { getCategoriesByRubricSlug } from '$lib/api/graphql.js';

	// Rubric slug for this page
	const RUBRIC_SLUG = 'stoleshnica';

	// Default static categories (fallback if API fails)
	const defaultCategories = [
		{ value: 'Кварцевый агломерат', slug: 'kvarc', description: 'Прочность и элегантность натурального камня', bg: '#f1f5f9' },
		{ value: 'Акриловый камень', slug: 'akril', description: 'Бесшовное соединение и любые формы', bg: '#e0f2fe' },
		{ value: 'ДСП / Постформинг', slug: 'dsp', description: 'Доступное и практичное решение', bg: '#fef3c7' },
		{ value: 'Массив дерева', slug: 'massiv', description: 'Натуральная красота дерева', bg: '#ffedd5' },
		{ value: 'Компакт-плита', slug: 'kompakt', description: 'Тонкая и прочная поверхность', bg: '#ede9fe' },
		{ value: 'Керамика', slug: 'keramika', description: 'Устойчивость к высоким температурам', bg: '#d1fae5' },
	];

	let categories = $state(defaultCategories);
	let rubric = $state(null);
	let isLoading = $state(true);
	let error = $state(null);

	// Category icons by slug
	const categoryIcons = {
		'kvarc': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />`,
		'akril': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />`,
		'dsp': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />`,
		'massiv': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />`,
		'kompakt': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />`,
		'keramika': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />`,
		default: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />`
	};

	// Background color gradients by slug
	const categoryGradients = {
		'kvarc': { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' },
		'akril': { from: 'from-sky-100', to: 'to-cyan-100', hover: 'group-hover:from-sky-500 group-hover:to-cyan-500', text: 'text-sky-600' },
		'dsp': { from: 'from-amber-100', to: 'to-yellow-100', hover: 'group-hover:from-amber-500 group-hover:to-yellow-500', text: 'text-amber-600' },
		'massiv': { from: 'from-orange-100', to: 'to-amber-100', hover: 'group-hover:from-orange-500 group-hover:to-amber-500', text: 'text-orange-600' },
		'kompakt': { from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600' },
		'keramika': { from: 'from-emerald-100', to: 'to-teal-100', hover: 'group-hover:from-emerald-500 group-hover:to-teal-500', text: 'text-emerald-600' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' }
	};

	function getIcon(slug) {
		return categoryIcons[slug] || categoryIcons.default;
	}

	function getGradient(slug) {
		return categoryGradients[slug] || categoryGradients.default;
	}

	onMount(async () => {
		try {
			const data = await getCategoriesByRubricSlug(RUBRIC_SLUG);
			if (data.rubric && data.categories.length > 0) {
				rubric = data.rubric;
				categories = data.categories;
			}
		} catch (e) {
			error = e.message;
			console.error('Failed to load categories:', e);
			// Используем статические данные как fallback
		} finally {
			isLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Столешницы для кухни – Каталог столешниц | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог столешниц для кухни от компании Новострой. Искусственный камень, кварц, акрил, ДСП, массив дерева. Изготовление по индивидуальным размерам."
	/>
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="lg:grid lg:grid-cols-4 lg:gap-8">
			<!-- Сайдбар с категориями -->
			<aside class="hidden lg:block">
				<div class="sticky top-24">
					<nav class="space-y-1">
						<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
							Материалы столешниц
						</h2>

						{#if isLoading}
							<div class="px-4 py-3 text-slate-500">Загрузка...</div>
						{:else}
							{#each categories as category (category.id || category.slug)}
								{@const gradient = getGradient(category.slug)}
								<a
									href="/stoleshnica/{category.slug}"
									class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600"
								>
									<span
										class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br {gradient.from} {gradient.to} {gradient.text} transition-all {gradient.hover} group-hover:text-white group-hover:shadow-lg"
									>
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											{@html getIcon(category.slug)}
										</svg>
									</span>
									<span class="font-medium">{category.value}</span>
								</a>
							{/each}
						{/if}
					</nav>

					<!-- Баннер -->
					<div class="mt-8 rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 p-6 text-white">
						<h3 class="text-lg font-semibold">Бесплатный замер</h3>
						<p class="mt-2 text-sm text-amber-100">
							Выезд специалиста для точного расчёта столешницы
						</p>
						<a
							href="/measurement"
							class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-amber-600 transition-all hover:bg-amber-50"
						>
							Заказать замер
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
					</div>
				</div>
			</aside>

			<!-- Основной контент -->
			<main class="lg:col-span-3">
				<!-- Hero секция -->
				<div
					class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
				>
					<img
						src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1200"
						alt="Столешницы для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-30"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Столешницы</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Изготавливаем столешницы из искусственного камня, кварца, массива и других материалов.
							Точный раскрой под вашу кухню с вырезами под мойку и варочную панель.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a
								href="/consultation"
								class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
							>
								Рассчитать стоимость
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
							<a
								href="/measurement"
								class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
							>
								Вызвать замерщика
							</a>
						</div>
					</div>
				</div>

				<!-- Мобильные категории -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Материалы</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#if isLoading}
							<div class="col-span-full py-4 text-center text-slate-500">Загрузка...</div>
						{:else}
							{#each categories as category (category.id || category.slug)}
								<a
									href="/stoleshnica/{category.slug}"
									class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
								>
									<span
										class="flex h-8 w-8 items-center justify-center rounded-lg"
										style="background: {category.bg || '#f1f5f9'}; color: #475569;"
									>
										<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											{@html getIcon(category.slug)}
										</svg>
									</span>
									<span class="text-sm font-medium text-slate-700">{category.value}</span>
								</a>
							{/each}
						{/if}
					</div>
				</div>

				<!-- Сравнение материалов -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Сравнение материалов</h2>
					<div class="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
						<div class="overflow-x-auto">
							<table class="w-full text-left text-sm">
								<thead class="bg-slate-50">
									<tr>
										<th class="px-4 py-3 font-semibold text-slate-900">Материал</th>
										<th class="px-4 py-3 font-semibold text-slate-900">Цена</th>
										<th class="px-4 py-3 font-semibold text-slate-900">Прочность</th>
										<th class="px-4 py-3 font-semibold text-slate-900">Уход</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-slate-100">
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Кварцевый агломерат</td>
										<td class="px-4 py-3 text-slate-600">от 15 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Высокая</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Акриловый камень</td>
										<td class="px-4 py-3 text-slate-600">от 12 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Средняя</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">ДСП / Постформинг</td>
										<td class="px-4 py-3 text-slate-600">от 3 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Средняя</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Массив дерева</td>
										<td class="px-4 py-3 text-slate-600">от 8 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Средняя</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Требует ухода</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Керамика</td>
										<td class="px-4 py-3 text-slate-600">от 25 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Высокая</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Наши преимущества</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Точный расчёт</h3>
							<p class="mt-2 text-sm text-slate-600">
								Замер с точностью до миллиметра для идеальной подгонки
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Профессиональный монтаж</h3>
							<p class="mt-2 text-sm text-slate-600">
								Установка с герметизацией стыков и вырезами под технику
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Гарантия 2 года</h3>
							<p class="mt-2 text-sm text-slate-600">Гарантия на материал и работы по установке</p>
						</div>
					</div>
				</div>

				<!-- Популярные решения -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные решения</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/stoleshnica/kvarc" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800"
								alt="Кварцевые столешницы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Кварцевый агломерат</h3>
								<p class="mt-1 text-sm text-slate-300">
									Прочность и элегантность натурального камня
								</p>
							</div>
						</a>

						<a href="/stoleshnica/akril" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
								alt="Акриловые столешницы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Акриловый камень</h3>
								<p class="mt-1 text-sm text-slate-300">Бесшовное соединение и любые формы</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Услуги -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<h2 class="text-2xl font-bold text-slate-900">Что входит в стоимость</h2>
					<div class="mt-6 grid gap-4 sm:grid-cols-2">
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Выезд замерщика</h3>
								<p class="text-sm text-slate-600">Бесплатный замер помещения</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Изготовление</h3>
								<p class="text-sm text-slate-600">Производство по вашим размерам</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Вырезы под технику</h3>
								<p class="text-sm text-slate-600">Под мойку, варочную панель, смеситель</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Доставка и монтаж</h3>
								<p class="text-sm text-slate-600">Профессиональная установка</p>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div
					class="mt-12 rounded-2xl bg-linear-to-r from-amber-500 to-orange-600 p-8 text-center text-white sm:p-12"
				>
					<h2 class="text-2xl font-bold sm:text-3xl">Рассчитайте стоимость столешницы</h2>
					<p class="mx-auto mt-3 max-w-md text-amber-100">
						Оставьте заявку и получите расчёт стоимости с учётом всех вырезов и монтажа
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<a
							href="/consultation"
							class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-amber-600 transition-all hover:bg-amber-50"
						>
							Получить расчёт
						</a>
						<a
							href="tel:+74951234567"
							class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
						>
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							Позвонить
						</a>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
