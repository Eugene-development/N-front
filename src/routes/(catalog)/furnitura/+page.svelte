<script>
	import { onMount } from 'svelte';
	import { getCategoriesByRubricSlug } from '$lib/api/graphql.js';

	// Rubric slug for this page
	const RUBRIC_SLUG = 'furnitura';

	// Default static categories (fallback if API fails)
	const defaultCategories = [
		{ value: 'Петли', slug: 'petli', description: 'Петли с доводчиком', bg: '#fef3c7' },
		{ value: 'Направляющие', slug: 'napravlyayushchie', description: 'Направляющие для ящиков', bg: '#e0f2fe' },
		{ value: 'Подъёмные механизмы', slug: 'podyomniki', description: 'Aventos, подъёмники', bg: '#ede9fe' },
		{ value: 'Ручки', slug: 'ruchki', description: 'Мебельные ручки', bg: '#d1fae5' },
		{ value: 'Системы хранения', slug: 'sistemy-hraneniya', description: 'Карго-системы', bg: '#e0f2fe' },
		{ value: 'Освещение', slug: 'osveshchenie', description: 'LED подсветка', bg: '#fef3c7' },
	];

	let categories = $state(defaultCategories);
	let rubric = $state(null);
	let isLoading = $state(true);
	let error = $state(null);

	// Универсальная иконка для всех категорий (шеврон вправо)
	const categoryIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;

	// Background color gradients by slug
	const categoryGradients = {
		'petli': { from: 'from-amber-100', to: 'to-orange-100', hover: 'group-hover:from-amber-500 group-hover:to-orange-500', text: 'text-amber-600' },
		'napravlyayushchie': { from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600' },
		'podyomniki': { from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600' },
		'ruchki': { from: 'from-emerald-100', to: 'to-teal-100', hover: 'group-hover:from-emerald-500 group-hover:to-teal-500', text: 'text-emerald-600' },
		'sistemy-hraneniya': { from: 'from-cyan-100', to: 'to-sky-100', hover: 'group-hover:from-cyan-500 group-hover:to-sky-500', text: 'text-cyan-600' },
		'osveshchenie': { from: 'from-yellow-100', to: 'to-amber-100', hover: 'group-hover:from-yellow-500 group-hover:to-amber-500', text: 'text-yellow-600' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' }
	};

	function getIcon(slug) {
		return categoryIcon;
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
	<title>Мебельная фурнитура – Петли, направляющие, ручки | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог мебельной фурнитуры от компании Новострой. Петли, направляющие, подъёмные механизмы, ручки и системы хранения от Blum, Hettich, Grass."
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
							Категории фурнитуры
						</h2>

						{#if isLoading}
							<div class="px-4 py-3 text-slate-500">Загрузка...</div>
						{:else}
							{#each categories as category (category.id || category.slug)}
								{@const gradient = getGradient(category.slug)}
								<a
									href="/furnitura/{category.slug}"
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
					<div class="mt-8 rounded-2xl bg-linear-to-br from-slate-700 to-slate-900 p-6 text-white">
						<h3 class="text-lg font-semibold">Премиум фурнитура</h3>
						<p class="mt-2 text-sm text-slate-300">Blum, Hettich, Grass — официальный дилер</p>
						<a
							href="/consultation"
							class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-all hover:bg-slate-100"
						>
							Узнать цены
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
						src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200"
						alt="Мебельная фурнитура"
						class="absolute inset-0 h-full w-full object-cover opacity-30"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Фурнитура</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Качественная мебельная фурнитура от мировых лидеров. Петли с доводчиками, направляющие
							полного выдвижения, подъёмные механизмы.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a
								href="/consultation"
								class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
							>
								Подобрать фурнитуру
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
								href="/mebel"
								class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
							>
								Каталог мебели
							</a>
						</div>
					</div>
				</div>

				<!-- Мобильные категории -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Категории</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#if isLoading}
							<div class="col-span-full py-4 text-center text-slate-500">Загрузка...</div>
						{:else}
							{#each categories as category (category.id || category.slug)}
								<a
									href="/furnitura/{category.slug}"
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

				<!-- Бренды -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Премиальные бренды</h2>
					<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
						<div
							class="flex h-24 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm"
						>
							<span class="text-xl font-bold text-slate-700">Blum</span>
							<span class="mt-1 text-xs text-slate-400">Австрия</span>
						</div>
						<div
							class="flex h-24 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm"
						>
							<span class="text-xl font-bold text-slate-700">Hettich</span>
							<span class="mt-1 text-xs text-slate-400">Германия</span>
						</div>
						<div
							class="flex h-24 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm"
						>
							<span class="text-xl font-bold text-slate-700">Grass</span>
							<span class="mt-1 text-xs text-slate-400">Австрия</span>
						</div>
						<div
							class="flex h-24 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm"
						>
							<span class="text-xl font-bold text-slate-700">Häfele</span>
							<span class="mt-1 text-xs text-slate-400">Германия</span>
						</div>
					</div>
				</div>

				<!-- Типы фурнитуры -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Основные категории</h2>
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
										d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Петли с доводчиком</h3>
							<p class="mt-2 text-sm text-slate-600">
								Плавное закрывание дверей без хлопка. Clip-top, Sensys, Intermat
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
										d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Направляющие</h3>
							<p class="mt-2 text-sm text-slate-600">
								Полное выдвижение, плавное закрывание. Tandem, Quadro, ArciTech
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M5 10l7-7m0 0l7 7m-7-7v18"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Подъёмные механизмы</h3>
							<p class="mt-2 text-sm text-slate-600">
								Aventos HK, HF, HL для верхних шкафов. Лёгкое открывание
							</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные решения</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a
							href="/furnitura/napravlyayushchie"
							class="group relative overflow-hidden rounded-2xl"
						>
							<img
								src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800"
								alt="Направляющие для ящиков"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Направляющие Tandem</h3>
								<p class="mt-1 text-sm text-slate-300">Полное выдвижение с плавным закрыванием</p>
							</div>
						</a>

						<a href="/furnitura/podyomniki" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
								alt="Подъёмные механизмы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Aventos подъёмники</h3>
								<p class="mt-1 text-sm text-slate-300">Для верхних шкафов любого размера</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Почему важна качественная фурнитура</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Долговечность</h3>
							<p class="mt-2 text-sm text-slate-600">
								Гарантия от производителя до 25 лет. Более 100 000 циклов открывания
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
										d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Тишина</h3>
							<p class="mt-2 text-sm text-slate-600">
								Системы плавного закрывания — никаких хлопков и шума
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Удобство</h3>
							<p class="mt-2 text-sm text-slate-600">
								Электропривод Servo-Drive — открывание лёгким касанием
							</p>
						</div>
					</div>
				</div>

				<!-- Сравнение -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<h2 class="text-2xl font-bold text-slate-900">Сравнение брендов</h2>
					<div class="mt-6 overflow-x-auto">
						<table class="w-full text-left text-sm">
							<thead class="bg-slate-50">
								<tr>
									<th class="px-4 py-3 font-semibold text-slate-900">Характеристика</th>
									<th class="px-4 py-3 font-semibold text-slate-900">Blum</th>
									<th class="px-4 py-3 font-semibold text-slate-900">Hettich</th>
									<th class="px-4 py-3 font-semibold text-slate-900">Grass</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-slate-100">
								<tr>
									<td class="px-4 py-3 font-medium text-slate-900">Гарантия</td>
									<td class="px-4 py-3 text-slate-600">Пожизненная</td>
									<td class="px-4 py-3 text-slate-600">25 лет</td>
									<td class="px-4 py-3 text-slate-600">20 лет</td>
								</tr>
								<tr>
									<td class="px-4 py-3 font-medium text-slate-900">Циклы открывания</td>
									<td class="px-4 py-3 text-slate-600">200 000+</td>
									<td class="px-4 py-3 text-slate-600">100 000+</td>
									<td class="px-4 py-3 text-slate-600">100 000+</td>
								</tr>
								<tr>
									<td class="px-4 py-3 font-medium text-slate-900">Электропривод</td>
									<td class="px-4 py-3"
										><span
											class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
											>Servo-Drive</span
										></td
									>
									<td class="px-4 py-3"
										><span
											class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
											>Push to Open</span
										></td
									>
									<td class="px-4 py-3"
										><span
											class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
											>Kinvaro</span
										></td
									>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<!-- CTA секция -->
				<div
					class="mt-12 rounded-2xl bg-linear-to-r from-slate-800 to-slate-900 p-8 text-center text-white sm:p-12"
				>
					<h2 class="text-2xl font-bold sm:text-3xl">Подберём фурнитуру под ваш проект</h2>
					<p class="mx-auto mt-3 max-w-md text-slate-300">
						Поможем выбрать оптимальное решение с учётом бюджета и требований к мебели
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<a
							href="/consultation"
							class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
						>
							Получить консультацию
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
