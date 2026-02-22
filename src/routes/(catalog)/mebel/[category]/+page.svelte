<script>
	import { page } from '$app/stores';
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import ServiceOrderButton from '$lib/components/ServiceOrderButton.svelte';
	import ProductFavoriteButton from '$lib/components/ProductFavoriteButton.svelte';
	import CatalogSidebar from '$lib/components/CatalogSidebar.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Данные из сервера
	let category = $derived(data.category);
	let allCategories = $derived(data.allCategories || []);
	let projects = $derived(data.projects || []);
	let categorySlug = $derived(data.categorySlug);
	let error = $derived(data.error);

	const formatPrice = (price) => {
		if (!price) return 'По запросу';
		return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
	};
	// Category specific hero images
	const categoryImages = {
		'kuhonnye-garnitury': '/kuhni_hero.png',
		'shkafy': '/wardrobe_project_no_text.png', 
		// 'shkafy-kupe': '/wardrobe_project_no_text.png',
		'garderobnye': '/dressing_room_hero.png',
		'myagkaya-mebel': '/myagkaya_mebel_hero.png',
		'stoly-i-stulya': '/stoly_i_stulya_hero.png',
		'ofisnaya-mebel': '/ofisnaya_mebel_hero.png'
	};

	function getHeroImage(slug) {
		return categoryImages[slug] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200';
	}
</script>

<svelte:head>
	{#if category}
		<title>{category.value} | Компания Новострой</title>
		<meta
			name="description"
			content={category.description || `Каталог ${category.value} от компании Новострой`}
		/>
	{:else}
		<title>Категория не найдена | Новострой</title>
	{/if}
</svelte:head>

{#if category}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-4 lg:gap-8">
				<!-- Сайдбар с категориями -->
				<CatalogSidebar
					items={allCategories}
					rubricSlug="mebel"
					title="Категории мебели"
					activeSlug={categorySlug}
					banner={{
						title: 'Нужна помощь?',
						description:
							'Получите бесплатную консультацию дизайнера для создания идеальной и доступной мебели',
						color: 'sky'
					}}
				/>

				<!-- Основной контент -->
				<main class="lg:col-span-3">
					<!-- Hero секция -->
					<div
						class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
					>
						<img
							src={getHeroImage(categorySlug)}
							alt={category.value}
							class="absolute inset-0 h-full w-full object-cover opacity-40"
						/>
						<div class="relative px-8 py-20 sm:px-12 sm:py-32">
							<!-- Breadcrumb -->
							<nav class="mb-4 flex items-center gap-2 text-sm text-slate-400">
								<a href="/" class="hover:text-white transition-colors">Главная</a>
								<span>/</span>
								<a href="/mebel" class="hover:text-white transition-colors">Мебель</a>
								<span>/</span>
								<span class="text-white">{category.value}</span>
							</nav>

							<h1 class="text-3xl font-bold text-white sm:text-4xl">
								{category.value}
							</h1>
							{#if category.description}
								<p class="mt-4 max-w-xl text-lg text-slate-300">
									{category.description}
								</p>
							{/if}
							<div class="mt-6 flex flex-wrap gap-4">
								<ServiceOrderButton
									serviceType="furniture-project"
									class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600 cursor-pointer"
								>
									Создать проект
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</ServiceOrderButton>
								<!-- <ServiceOrderButton
									serviceType="measurement"
									class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20 cursor-pointer"
								>
									Бесплатный замер
								</ServiceOrderButton> -->
							</div>
						</div>
					</div>

					<!-- Мобильные категории -->
					<div class="mt-6 lg:hidden">
						<h2 class="text-lg font-semibold text-slate-900">Категории</h2>
						<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
							{#each allCategories as cat (cat.id)}
								<a
									href="/mebel/{cat.slug}"
									class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all {cat.slug ===
									categorySlug
										? 'bg-sky-500 text-white'
										: 'bg-white text-slate-700 shadow-sm hover:shadow'}"
								>
									{cat.value}
								</a>
							{/each}
						</div>
					</div>

					<!-- Фильтры и сортировка -->
					<div class="mt-8 flex flex-wrap items-center justify-between gap-4">
						<div class="flex items-center gap-2">
							<span class="text-sm text-slate-500">Всего проектов:</span>
							<span class="font-semibold text-slate-900">{projects.length}</span>
						</div>
						<!-- <div class="flex items-center gap-4">
							<select
								class="rounded-lg border-slate-200 bg-white pl-4 pr-10 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:ring-sky-500"
							>
								<option>По популярности</option>
								<option>Сначала дешевле</option>
								<option>Сначала дороже</option>
								<option>По названию</option>
							</select>
						</div> -->
					</div>

					<!-- Сетка проектов -->
					{#if projects.length === 0}
						<div class="mt-6 rounded-2xl bg-white p-12 text-center shadow-sm">
							<svg
								class="mx-auto h-16 w-16 text-slate-300"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
								/>
							</svg>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Проектов не найдено</h3>
							<p class="mt-2 text-slate-600">В данной категории пока нет проектов</p>
							<ConsultationButton
								class="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Заказать индивидуальный проект
							</ConsultationButton>
						</div>
					{:else}
						<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{#each projects as project (project.id)}
								<article
									class="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
								>
									<!-- Метки -->
									<div class="absolute left-3 top-3 z-10 flex gap-1.5">
										{#if project.is_new}
											<span
												class="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-md"
											>
												Новинка
											</span>
										{/if}
										{#if project.is_featured}
											<span
												class="rounded-full bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white shadow-md"
											>
												⭐ Хит
											</span>
										{/if}
										{#if project.old_price && project.price && project.old_price > project.price}
											<span
												class="rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-md"
											>
												-{Math.round((1 - project.price / project.old_price) * 100)}%
											</span>
										{/if}
									</div>

									<!-- Кнопка избранного -->
									<div class="absolute right-3 top-3 z-10">
										<ProductFavoriteButton product={{ ...project, categorySlug }} />
									</div>

									<a
										href="/mebel/{categorySlug}/{project.slug}"
										class="relative block aspect-[4/3] overflow-hidden bg-slate-100"
									>
										{#if project.images && project.images.length > 0 && project.images[0].url}
											<img
												src={project.images[0].url}
												alt={project.value}
												class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
												loading="lazy"
											/>
										{:else}
											<!-- Placeholder если нет изображения -->
											<div
												class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
											>
												<svg
													class="h-16 w-16 text-slate-300"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1"
														d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
											</div>
										{/if}
										<div
											class="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
										></div>
										<div
											class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
										>
											<span
												class="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-lg transition-all hover:bg-sky-500 hover:text-white text-center"
											>
												Подробнее
											</span>
										</div>
									</a>
									<div class="p-5">
										{#if project.short_description}
											<p class="text-xs text-slate-500 line-clamp-1">{project.short_description}</p>
										{/if}
										<h3
											class="mt-2 text-xl font-semibold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2"
										>
											{project.value}
										</h3>
										<div class="mt-3 flex items-center justify-between">
											<div>
												{#if project.price}
													<span class="text-xs text-slate-500">от</span>
													<span class="ml-1 text-xl font-bold text-slate-900"
														>{formatPrice(project.price)}</span
													>
													<!-- {#if project.old_price && project.old_price > project.price}
														<span class="ml-1 text-sm text-slate-400 line-through"
															>{formatPrice(project.old_price)}</span
														>
													{/if} -->
												{:else}
													<span class="text-sm font-semibold text-slate-900">Цена по запросу</span>
												{/if}
											</div>
											<ServiceOrderButton
												serviceType="furniture-project"
												data={{ projectName: project.value }}
												class="inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
											>
												Разработать проект
												<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</ServiceOrderButton>
										</div>
									</div>
								</article>
							{/each}
						</div>
					{/if}

					<!-- Преимущества -->
					<div class="mt-12">
						<h2 class="text-2xl font-bold text-slate-900">Почему заказывают у нас</h2>
						<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							<div class="rounded-xl bg-white p-5 shadow-sm">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">Гарантия до 5 лет</h3>
								<p class="mt-1 text-sm text-slate-600">На все изделия</p>
							</div>
							<div class="rounded-xl bg-white p-5 shadow-sm">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">Сроки от 14 дней</h3>
								<p class="mt-1 text-sm text-slate-600">Быстрое изготовление</p>
							</div>
							<div class="rounded-xl bg-white p-5 shadow-sm">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">3D-проект бесплатно</h3>
								<p class="mt-1 text-sm text-slate-600">Визуализация дизайна</p>
							</div>
							<div class="rounded-xl bg-white p-5 shadow-sm">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">Доставка и монтаж</h3>
								<p class="mt-1 text-sm text-slate-600">Установка под ключ</p>
							</div>
						</div>
					</div>

					<!-- CTA секция -->
					<div
						class="mt-12 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-600 p-8 text-center text-white sm:p-12"
					>
						<h2 class="text-2xl font-bold sm:text-3xl">Не нашли подходящий вариант?</h2>
						<p class="mx-auto mt-3 max-w-md text-sky-100">
							Мы изготовим мебель по вашему индивидуальному проекту и стилю
						</p>
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-sky-600 transition-all hover:bg-sky-50"
							>
								Заказать индивидуальный проект
							</ConsultationButton>
							<a
								href="tel:+79154000020"
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
{:else}
	<!-- Страница не найдена -->
	<div class="min-h-screen bg-slate-50 flex items-center justify-center">
		<div class="text-center px-4">
			<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
				<svg class="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<h1 class="mt-6 text-2xl font-bold text-slate-900">Категория не найдена</h1>
			<p class="mt-2 text-slate-600">К сожалению, запрашиваемая категория не существует</p>
			{#if error}
				<p class="mt-2 text-sm text-red-500">{error}</p>
			{/if}
			<a
				href="/mebel"
				class="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
			>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Вернуться в каталог
			</a>
		</div>
	</div>
{/if}
