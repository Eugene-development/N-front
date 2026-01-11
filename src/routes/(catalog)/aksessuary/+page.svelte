<script>
	import { onMount } from 'svelte';
	import { getCategoriesByRubricSlug } from '$lib/api/graphql.js';

	// Rubric slug for this page
	const RUBRIC_SLUG = 'aksessuary';

	let categories = $state([]);
	let rubric = $state(null);
	let isLoading = $state(true);
	let error = $state(null);

	// Универсальная иконка для всех категорий (шеврон вправо)
	const categoryIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;

	// Background color gradients by slug
	const categoryGradients = {
		'reylingi': { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' },
		'organajzery': { from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600' },
		'korziny': { from: 'from-amber-100', to: 'to-orange-100', hover: 'group-hover:from-amber-500 group-hover:to-orange-500', text: 'text-amber-600' },
		'sushki': { from: 'from-emerald-100', to: 'to-teal-100', hover: 'group-hover:from-emerald-500 group-hover:to-teal-500', text: 'text-emerald-600' },
		'musor': { from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600' },
		'podsvetka': { from: 'from-yellow-100', to: 'to-amber-100', hover: 'group-hover:from-yellow-500 group-hover:to-amber-500', text: 'text-yellow-600' },
		'kryuchki': { from: 'from-cyan-100', to: 'to-sky-100', hover: 'group-hover:from-cyan-500 group-hover:to-sky-500', text: 'text-cyan-600' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' }
	};

	function getIcon(slug) {
		return categoryIcon;
	}

	function getGradient(slug) {
		return categoryGradients[slug] || categoryGradients.default;
	}

	// Загружаем категории только из БД, без fallback
	onMount(async () => {
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
	});
</script>

<svelte:head>
	<title>Аксессуары для кухни – Рейлинги, органайзеры, корзины | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог аксессуаров для кухни от компании Новострой. Рейлинги, органайзеры для ящиков, корзины, сушки для посуды, контейнеры для мусора."
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
							Категории аксессуаров
						</h2>

						{#if isLoading}
							<div class="px-4 py-3 text-slate-500">Загрузка...</div>
						{:else}
							{#each categories as category (category.id || category.slug)}
								{@const gradient = getGradient(category.slug)}
								<a
									href="/aksessuary/{category.slug}"
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
					<div class="mt-8 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 p-6 text-white">
						<h3 class="text-lg font-semibold">Организация пространства</h3>
						<p class="mt-2 text-sm text-emerald-100">Поможем подобрать аксессуары под вашу кухню</p>
						<a
							href="/consultation"
							class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-emerald-600 transition-all hover:bg-emerald-50"
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
						src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200"
						alt="Аксессуары для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-30"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Аксессуары</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Функциональные аксессуары для организации кухонного пространства. Рейлинги,
							органайзеры, корзины и системы хранения.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a
								href="/consultation"
								class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-600"
							>
								Подобрать аксессуары
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
								href="/mebel/kuhni"
								class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
							>
								Каталог кухонь
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
									href="/aksessuary/{category.slug}"
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
					<h2 class="text-2xl font-bold text-slate-900">Бренды аксессуаров</h2>
					<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Blum</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Hettich</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Kessebohmer</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Ninka</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Vauth-Sagel</span>
						</div>
					</div>
				</div>

				<!-- Основные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные решения</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Органайзеры Orga-Line</h3>
							<p class="mt-2 text-sm text-slate-600">
								Разделители для столовых приборов, специй и кухонных принадлежностей
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
										d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Карго-системы</h3>
							<p class="mt-2 text-sm text-slate-600">
								Выдвижные корзины для бутылок, банок и продуктов
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
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Волшебный уголок</h3>
							<p class="mt-2 text-sm text-slate-600">
								Выдвижные системы для угловых шкафов с полным доступом
							</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории с изображениями -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Категории аксессуаров</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/aksessuary/organajzery" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
								alt="Органайзеры для ящиков"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Органайзеры для ящиков</h3>
								<p class="mt-1 text-sm text-slate-300">Порядок в каждом ящике</p>
							</div>
						</a>

						<a href="/aksessuary/korziny" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
								alt="Выдвижные корзины"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Выдвижные корзины</h3>
								<p class="mt-1 text-sm text-slate-300">Удобный доступ к содержимому</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Зачем нужны аксессуары</h2>
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
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Порядок</h3>
							<p class="mt-2 text-sm text-slate-600">Всё на своих местах — легко найти нужное</p>
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
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Эргономика</h3>
							<p class="mt-2 text-sm text-slate-600">Удобный доступ к содержимому шкафов</p>
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
										d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Максимум пространства</h3>
							<p class="mt-2 text-sm text-slate-600">Используем каждый сантиметр шкафа</p>
						</div>
					</div>
				</div>

				<!-- Комплексное решение -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<div class="lg:flex lg:items-center lg:gap-8">
						<div class="lg:flex-1">
							<h2 class="text-2xl font-bold text-slate-900">Комплект аксессуаров</h2>
							<p class="mt-3 text-slate-600">
								Закажите кухню с полным набором аксессуаров — органайзеры, корзины, сушки и системы
								хранения со скидкой до 15%.
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
									Органайзеры для всех ящиков
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
									Выдвижные системы для угловых шкафов
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
									Встроенная подсветка
								</li>
							</ul>
						</div>
						<div class="mt-6 lg:mt-0">
							<a
								href="/furniture-project"
								class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-600"
							>
								Заказать проект
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
					class="mt-12 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 p-8 text-center text-white sm:p-12"
				>
					<h2 class="text-2xl font-bold sm:text-3xl">Организуем вашу кухню</h2>
					<p class="mx-auto mt-3 max-w-md text-emerald-100">
						Подберём аксессуары для максимального удобства и порядка на кухне
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<a
							href="/consultation"
							class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-emerald-600 transition-all hover:bg-emerald-50"
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
