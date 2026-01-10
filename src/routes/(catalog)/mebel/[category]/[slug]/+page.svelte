<script>
	import { page } from '$app/stores';
	import { getMebelProjectBySlug, getMebelProjects, getCategoryBySlug } from '$lib/api/graphql.js';

	// State
	let project = $state(null);
	let category = $state(null);
	let relatedProjects = $state([]);
	let isLoading = $state(true);
	let error = $state(null);

	// Get params from URL (derived from page store)
	let categorySlug = $derived($page.params.category);
	let projectSlug = $derived($page.params.slug);

	const formatPrice = (price) => {
		if (!price) return 'По запросу';
		return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
	};

	// Load project data
	async function loadData(catSlug, projSlug) {
		isLoading = true;
		error = null;
		try {
			// Load project by slug
			const projectData = await getMebelProjectBySlug(projSlug);
			project = projectData;

			// Load category info
			if (projectData?.category) {
				category = projectData.category;
			} else {
				category = await getCategoryBySlug(catSlug);
			}

			// Load related projects from same category
			if (projectData?.category_id) {
				const allProjects = await getMebelProjects({ category_id: projectData.category_id });
				relatedProjects = allProjects.filter(p => p.id !== projectData.id).slice(0, 3);
			}
		} catch (e) {
			error = e.message;
			console.error('Failed to load project:', e);
		} finally {
			isLoading = false;
		}
	}

	// Effect runs on mount and whenever params change
	$effect(() => {
		if (categorySlug && projectSlug) {
			loadData(categorySlug, projectSlug);
		}
	});
</script>

<svelte:head>
	{#if project}
		<title>{project.value} | {category?.value || 'Мебель'} | Новострой</title>
		<meta
			name="description"
			content={project.description || `${project.value} от компании Новострой`}
		/>
	{:else if isLoading}
		<title>Загрузка... | Новострой</title>
	{:else}
		<title>Товар не найден | Новострой</title>
	{/if}
</svelte:head>

{#if isLoading}
	<!-- Loading state -->
	<div class="min-h-screen bg-slate-50 flex items-center justify-center">
		<div class="text-center">
			<div
				class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-sky-500 border-r-transparent"
			></div>
			<p class="mt-4 text-slate-600">Загрузка...</p>
		</div>
	</div>
{:else if project}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<!-- Основной контент товара -->
			<div class="lg:grid lg:grid-cols-2 lg:gap-12">
				<!-- Изображение / Placeholder -->
				<div>
					<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
						<!-- Placeholder для изображения -->
						<div
							class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
						>
							<svg
								class="h-24 w-24 text-slate-300"
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
						<!-- Метки -->
						<div class="absolute top-4 left-4 flex gap-2">
							{#if project.is_new}
								<span
									class="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white shadow-md"
								>
									Новинка
								</span>
							{/if}
							{#if project.is_featured}
								<span
									class="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white shadow-md"
								>
									⭐ Хит
								</span>
							{/if}
							{#if project.old_price && project.price && project.old_price > project.price}
								<div
									class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white shadow-md"
								>
									-{Math.round((1 - project.price / project.old_price) * 100)}%
								</div>
							{/if}
						</div>
					</div>
				</div>

				<!-- Информация о товаре -->
				<div>
					<!-- Хлебные крошки -->
					<nav class="mb-4 flex items-center gap-2 text-sm text-slate-500 flex-wrap">
						<a href="/" class="hover:text-sky-600 transition-colors">Главная</a>
						<span>/</span>
						<a href="/mebel" class="hover:text-sky-600 transition-colors">Мебель</a>
						<span>/</span>
						<a href="/mebel/{categorySlug}" class="hover:text-sky-600 transition-colors"
							>{category?.value || categorySlug}</a
						>
						<span>/</span>
						<span class="text-slate-900 font-medium">{project.value}</span>
					</nav>

					{#if false}
						{#if project.short_description}
							<p class="text-sm text-slate-500 mb-2">{project.short_description}</p>
						{/if}
					{/if}

					<h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">{project.value}</h1>

					<!-- Цена -->
					<div class="mt-6 flex items-baseline gap-4">
						{#if project.price}
							<span class="text-4xl font-bold text-slate-900">{formatPrice(project.price)}</span>
							{#if project.old_price && project.old_price > project.price}
								<span class="text-xl text-slate-400 line-through"
									>{formatPrice(project.old_price)}</span
								>
							{/if}
						{:else}
							<span class="text-3xl font-bold text-slate-900">Цена по запросу</span>
						{/if}
					</div>

					<!-- Описание -->
					{#if project.description}
						<div class="mt-6">
							<h2 class="text-lg font-semibold text-slate-900">Описание</h2>
							<p class="mt-2 text-slate-600 leading-relaxed">{project.description}</p>
						</div>
					{/if}

					<!-- Кнопки действий -->
					<div class="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href="/consultation"
							class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-sky-600 hover:shadow-xl"
						>
							Заказать расчёт
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
							href="tel:+79154000020"
							class="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-4 font-semibold text-slate-700 transition-all hover:border-sky-500 hover:text-sky-600"
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

					<!-- Преимущества -->
					<div class="mt-8 grid grid-cols-2 gap-4">
						<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div class="text-sm">
								<div class="font-medium text-slate-900">Бесплатный замер</div>
								<div class="text-slate-500">Выезд специалиста</div>
							</div>
						</div>
						<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<div class="text-sm">
								<div class="font-medium text-slate-900">Гарантия 5 лет</div>
								<div class="text-slate-500">На все изделия</div>
							</div>
						</div>
						<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
									/>
								</svg>
							</div>
							<div class="text-sm">
								<div class="font-medium text-slate-900">Доставка и монтаж</div>
								<div class="text-slate-500">Установка под ключ</div>
							</div>
						</div>
						<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
									/>
								</svg>
							</div>
							<div class="text-sm">
								<div class="font-medium text-slate-900">Рассрочка 0%</div>
								<div class="text-slate-500">До 24 месяцев</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Похожие товары -->
			{#if relatedProjects.length > 0}
				<div class="mt-16">
					<h2 class="text-2xl font-bold text-slate-900">Похожие товары</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each relatedProjects as item (item.id)}
							<a
								href="/mebel/{categorySlug}/{item.slug}"
								class="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
							>
								<div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
									<div
										class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
									>
										<svg
											class="h-12 w-12 text-slate-300"
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
									<!-- Метки -->
									<div class="absolute top-3 left-3 flex gap-1.5">
										{#if item.is_new}
											<span
												class="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-white"
												>Новинка</span
											>
										{/if}
										{#if item.old_price && item.price && item.old_price > item.price}
											<span
												class="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white"
											>
												-{Math.round((1 - item.price / item.old_price) * 100)}%
											</span>
										{/if}
									</div>
								</div>
								<div class="p-5">
									<h3
										class="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2"
									>
										{item.value}
									</h3>
									<div class="mt-2 flex items-baseline gap-2">
										{#if item.price}
											<span class="text-lg font-bold text-slate-900">{formatPrice(item.price)}</span
											>
											{#if item.old_price && item.old_price > item.price}
												<span class="text-sm text-slate-400 line-through"
													>{formatPrice(item.old_price)}</span
												>
											{/if}
										{:else}
											<span class="text-lg font-semibold text-slate-700">По запросу</span>
										{/if}
									</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			{/if}

			<!-- CTA секция -->
			<div
				class="mt-16 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-600 p-8 text-center text-white sm:p-12"
			>
				<h2 class="text-2xl font-bold sm:text-3xl">Хотите такую же мебель?</h2>
				<p class="mx-auto mt-3 max-w-md text-sky-100">
					Оставьте заявку и получите бесплатный расчёт стоимости с учётом ваших размеров
				</p>
				<div class="mt-6 flex flex-wrap justify-center gap-4">
					<a
						href="/consultation"
						class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-sky-600 shadow-lg transition-all hover:bg-sky-50 hover:shadow-xl"
					>
						Заказать расчёт
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
						href="tel:+79154000020"
						class="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
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
		</div>
	</div>
{:else}
	<!-- Товар не найден -->
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
			<h1 class="mt-6 text-2xl font-bold text-slate-900">Товар не найден</h1>
			<p class="mt-2 text-slate-600">К сожалению, запрашиваемый товар не существует</p>
			{#if error}
				<p class="mt-2 text-sm text-red-500">{error}</p>
			{/if}
			<a
				href="/mebel/{categorySlug}"
				class="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
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
