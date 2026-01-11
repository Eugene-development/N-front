<script>
	import { onMount } from 'svelte';
	import { getCategoriesByRubricSlug, getBrandsByRubricSlug } from '$lib/api/graphql.js';

	// Rubric slug for this page
	const RUBRIC_SLUG = 'santehnika';

	let categories = $state([]);
	let brands = $state([]);
	let rubric = $state(null);
	let isLoading = $state(true);
	let isBrandsLoading = $state(true);
	let error = $state(null);

	// Универсальная иконка для всех категорий (шеврон вправо)
	const categoryIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;

	// Background color gradients by slug
	const categoryGradients = {
		'moyki': { from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600' },
		'smesiteli': { from: 'from-cyan-100', to: 'to-teal-100', hover: 'group-hover:from-cyan-500 group-hover:to-teal-500', text: 'text-cyan-600' },
		'izmelchiteli': { from: 'from-emerald-100', to: 'to-green-100', hover: 'group-hover:from-emerald-500 group-hover:to-green-500', text: 'text-emerald-600' },
		'dispensery': { from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600' },
		'filtry': { from: 'from-blue-100', to: 'to-indigo-100', hover: 'group-hover:from-blue-500 group-hover:to-indigo-500', text: 'text-blue-600' },
		'aksessuary': { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' }
	};

	function getIcon(slug) {
		return categoryIcon;
	}

	function getGradient(slug) {
		return categoryGradients[slug] || categoryGradients.default;
	}

	// Получение имени бренда (поддержка value и name)
	function getBrandName(brand) {
		return brand?.value || brand?.name || '';
	}

	onMount(async () => {
		// Загружаем категории (только из БД, без fallback)
		try {
			const data = await getCategoriesByRubricSlug(RUBRIC_SLUG);
			if (data.rubric) {
				rubric = data.rubric;
			}
			categories = data.categories || [];
		} catch (e) {
			error = e.message;
			console.error('Failed to load categories:', e);
			categories = [];
		} finally {
			isLoading = false;
		}

		// Загружаем бренды (только из БД, без fallback)
		try {
			const { brands: apiBrands } = await getBrandsByRubricSlug(RUBRIC_SLUG);
			brands = apiBrands || [];
		} catch (e) {
			console.error('Failed to load brands:', e);
			brands = [];
		} finally {
			isBrandsLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Сантехника для кухни – Мойки и смесители | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог сантехники для кухни от компании Новострой. Кухонные мойки, смесители, измельчители, диспенсеры. Подбор под вашу столешницу."
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
							Категории сантехники
						</h2>

						{#if isLoading}
							<div class="px-4 py-3 text-slate-500">Загрузка...</div>
						{:else}
							{#each categories as category (category.id || category.slug)}
								{@const gradient = getGradient(category.slug)}
								<a
									href="/santehnika/{category.slug}"
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

					<!-- Бренды -->
					<nav class="mt-6 space-y-1">
						<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
							Бренды
						</h2>

						{#if isBrandsLoading}
							<div class="px-4 py-3 text-center">
								<div
									class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-sky-500 border-t-transparent"
								></div>
							</div>
						{:else}
							{#each brands as brand (brand.id || brand.slug)}
								<a
									href="/santehnika/{brand.slug}"
									class="group flex items-center gap-3 rounded-xl px-4 py-2 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600"
								>
									<span
										class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg"
									>
										<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											{@html categoryIcon}
										</svg>
									</span>
									<span class="font-medium text-sm">{getBrandName(brand)}</span>
								</a>
							{/each}
						{/if}
					</nav>

					<!-- Баннер -->
					<div class="mt-8 rounded-2xl bg-linear-to-br from-sky-500 to-cyan-600 p-6 text-white">
						<h3 class="text-lg font-semibold">Подбор под столешницу</h3>
						<p class="mt-2 text-sm text-sky-100">
							Поможем выбрать мойку и смеситель под ваш проект
						</p>
						<a
							href="/consultation"
							class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-sky-600 transition-all hover:bg-sky-50"
						>
							Получить консультацию
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
						src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"
						alt="Сантехника для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-30"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Сантехника</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Кухонные мойки, смесители и аксессуары от ведущих производителей. Подберём идеальное
							сочетание для вашей кухни.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a
								href="/consultation"
								class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Подобрать комплект
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
								href="/stoleshnica"
								class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
							>
								Столешницы
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
									href="/santehnika/{category.slug}"
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

				<!-- Мобильные бренды -->
				<div class="mt-6 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Бренды</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#if isBrandsLoading}
							{#each [1, 2, 3, 4] as _}
								<div
									class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm animate-pulse"
								>
									<div class="h-8 w-8 rounded-lg bg-slate-200"></div>
									<div class="h-4 w-16 bg-slate-200 rounded"></div>
								</div>
							{/each}
						{:else}
							{#each brands as brand (brand.id || brand.slug)}
								<a
									href="/santehnika/{brand.slug}"
									class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
								>
									<span
										class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500"
									>
										<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											{@html categoryIcon}
										</svg>
									</span>
									<span class="text-sm font-medium text-slate-700">{getBrandName(brand)}</span>
								</a>
							{/each}
						{/if}
					</div>
				</div>

				<!-- Бренды -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Бренды сантехники</h2>
					<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
						{#if isBrandsLoading}
							{#each [1, 2, 3, 4, 5, 6] as _}
								<div
									class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm animate-pulse"
								>
									<div class="h-4 w-16 bg-slate-200 rounded"></div>
								</div>
							{/each}
						{:else}
							{#each brands.slice(0, 6) as brand (brand.id || brand.slug)}
								<a
									href="/santehnika/{brand.slug}"
									class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
								>
									{#if brand.logo}
										<img
											src={brand.logo}
											alt={getBrandName(brand)}
											class="max-h-10 max-w-full object-contain"
										/>
									{:else}
										<span class="text-lg font-bold text-slate-400">{getBrandName(brand)}</span>
									{/if}
								</a>
							{/each}
						{/if}
					</div>
				</div>

				<!-- Типы моек -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Типы кухонных моек</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Нержавеющая сталь</h3>
							<p class="mt-2 text-sm text-slate-600">
								Классика для любой кухни. Прочные, гигиеничные, доступные по цене
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
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Гранитные композитные</h3>
							<p class="mt-2 text-sm text-slate-600">
								Стильный внешний вид, устойчивость к царапинам и высоким температурам
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
										d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Керамические</h3>
							<p class="mt-2 text-sm text-slate-600">
								Элегантность и долговечность. Идеально для классических интерьеров
							</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные категории</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/santehnika/moyki" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
								alt="Кухонные мойки"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Кухонные мойки</h3>
								<p class="mt-1 text-sm text-slate-300">Врезные, накладные, интегрированные</p>
							</div>
						</a>

						<a href="/santehnika/smesiteli" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800"
								alt="Смесители"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Смесители</h3>
								<p class="mt-1 text-sm text-slate-300">
									С выдвижным изливом, сенсорные, классические
								</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Почему выбирают нас</h2>
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
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Оригинальная продукция</h3>
							<p class="mt-2 text-sm text-slate-600">
								Только сертифицированная сантехника от официальных дистрибьюторов
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
								Установка с подключением и проверкой на герметичность
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
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Выгодные комплекты</h3>
							<p class="mt-2 text-sm text-slate-600">
								Скидки при покупке мойки со смесителем и аксессуарами
							</p>
						</div>
					</div>
				</div>

				<!-- Комплексное решение -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<div class="lg:flex lg:items-center lg:gap-8">
						<div class="lg:flex-1">
							<h2 class="text-2xl font-bold text-slate-900">Комплект для кухни</h2>
							<p class="mt-3 text-slate-600">
								Закажите мойку вместе со смесителем, измельчителем и диспенсером — получите скидку
								до 20% на комплект.
							</p>
							<ul class="mt-4 space-y-2">
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg
										class="h-5 w-5 text-emerald-500"
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
									Мойка + смеситель в едином стиле
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg
										class="h-5 w-5 text-emerald-500"
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
									Измельчитель пищевых отходов
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg
										class="h-5 w-5 text-emerald-500"
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
									Диспенсер для моющего средства
								</li>
							</ul>
						</div>
						<div class="mt-6 lg:mt-0">
							<a
								href="/consultation"
								class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Собрать комплект
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div
					class="mt-12 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-600 p-8 text-center text-white sm:p-12"
				>
					<h2 class="text-2xl font-bold sm:text-3xl">Нужна помощь с выбором?</h2>
					<p class="mx-auto mt-3 max-w-md text-sky-100">
						Наши специалисты помогут подобрать сантехнику под вашу кухню и бюджет
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<a
							href="/consultation"
							class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-sky-600 transition-all hover:bg-sky-50"
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
