<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import CatalogSidebar from '$lib/components/CatalogSidebar.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Данные из сервера
	let shop = $derived(data.shop);
	let allShops = $derived(data.allShops || []);
	let shopSlug = $derived(data.shopSlug);

	// Получение имени магазина (поддержка value и name)
	function getShopName(s) {
		return s?.value || s?.name || '';
	}
</script>

<svelte:head>
	{#if shop}
		<title>{getShopName(shop)} – Освещение | Компания Новострой</title>
		<meta
			name="description"
			content={`${getShopName(shop)} — поставщик освещения. ${shop.description || 'Люстры, бра, торшеры, LED-подсветка и уличное освещение.'}`}
		/>
	{:else}
		<title>Магазин не найден | Новострой</title>
	{/if}
</svelte:head>

{#if shop}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-4 lg:gap-8">
				<!-- Сайдбар с магазинами -->
				<CatalogSidebar
					items={allShops}
					rubricSlug="osveschenie"
					title="Магазины освещения"
					itemType="shop"
					activeSlug={shopSlug}
					externalLinks={false}
					banner={{
						title: 'Дизайнерский свет',
						description: 'Подберём высококачественное освещение под ваш интерьер',
						color: 'slate'
					}}
				/>

				<!-- Основной контент -->
				<main class="lg:col-span-3">
					<!-- Hero секция -->
					<div
						class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
					>
						<div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
						<div class="relative px-8 py-16 sm:px-12 sm:py-20">
							<!-- Breadcrumb -->
							<nav class="mb-6 flex items-center gap-2 text-sm text-slate-400">
								<a href="/" class="hover:text-white transition-colors">Главная</a>
								<span>/</span>
								<a href="/osveschenie" class="hover:text-white transition-colors">Освещение</a>
								<span>/</span>
								<span class="text-white">{getShopName(shop)}</span>
							</nav>

							<div class="flex flex-col md:flex-row md:items-center gap-8">
								<!-- Логотип магазина -->
								<div class="flex-shrink-0">
									<div
										class="w-44 h-44 rounded-2xl bg-white p-6 flex items-center justify-center shadow-xl"
									>
										{#if shop.logo}
											<img
												src={shop.logo}
												alt={getShopName(shop)}
												class="max-w-full max-h-full object-contain"
											/>
										{:else}
											<span class="text-3xl font-bold text-slate-400"
												>{getShopName(shop).charAt(0)}</span
											>
										{/if}
									</div>
								</div>

								<!-- Информация о магазине -->
								<div class="flex-1">
									<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
										{getShopName(shop)}
									</h1>

									{#if shop.description}
										<div
											class="mt-4 max-w-xl text-lg text-slate-300 prose prose-invert prose-lg max-w-none"
										>
											{@html shop.description}
										</div>
									{/if}

									<div class="mt-6 flex flex-wrap gap-4">
										{#if shop.website}
											<a
												href={shop.website}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
											>
												Перейти в магазин
												<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
										{/if}
										<ConsultationButton
											class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
										>
											Подобрать освещение
										</ConsultationButton>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Мобильные магазины -->
					<div class="mt-6 lg:hidden">
						<h2 class="text-lg font-semibold text-slate-900">Другие магазины</h2>
						<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
							{#each allShops as s (s.slug || s.id)}
								<a
									href="/osveschenie/{s.slug}"
									class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all {s.slug ===
									shopSlug
										? 'bg-amber-500 text-white'
										: 'bg-white text-slate-700 shadow-sm hover:shadow'}"
								>
									{getShopName(s)}
								</a>
							{/each}
						</div>
					</div>

					<!-- Категории товаров -->
					{#if shop.categories && shop.categories.filter((c) => c.is_active).length > 0}
						<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
							<h2 class="text-2xl font-bold text-slate-900">Категории товаров</h2>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each shop.categories.filter((c) => c.is_active) as category}
									<span
										class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
									>
										{category.value}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Бренды магазина -->
					{#if shop.brands && shop.brands.filter((b) => b.is_active).length > 0}
						<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
							<h2 class="text-2xl font-bold text-slate-900">Бренды</h2>
							<div class="mt-4 flex flex-wrap gap-3">
								{#each shop.brands.filter((b) => b.is_active) as brand}
									{#if brand.logo}
										<img src={brand.logo} alt={brand.value} class="h-8 object-contain" />
									{:else}
										<span
											class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-700"
										>
											{brand.value}
										</span>
									{/if}
								{/each}
							</div>
						</div>
					{/if}

					<!-- Контакты -->
					{#if shop.phone || shop.email || (shop.cities && shop.cities.length > 0)}
						<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
							<h2 class="text-2xl font-bold text-slate-900">Контакты</h2>
							<div class="mt-4 space-y-3">
								{#if shop.phone}
									<div class="flex items-center gap-3 text-slate-600">
										<svg
											class="h-5 w-5 text-slate-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
										<a
											href="tel:{shop.phone}"
											class="font-medium hover:text-amber-600 transition-colors">{shop.phone}</a
										>
									</div>
								{/if}
								{#if shop.email}
									<div class="flex items-center gap-3 text-slate-600">
										<svg
											class="h-5 w-5 text-slate-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										<a
											href="mailto:{shop.email}"
											class="font-medium hover:text-amber-600 transition-colors">{shop.email}</a
										>
									</div>
								{/if}
								{#if shop.cities && shop.cities.filter((c) => c.is_active).length > 0}
									<div class="flex items-center gap-3 text-slate-600">
										<svg
											class="h-5 w-5 text-slate-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										<span
											>{shop.cities
												.filter((c) => c.is_active)
												.map((c) => c.city_name)
												.join(', ')}</span
										>
									</div>
								{/if}
							</div>
						</div>
					{/if}

					<!-- CTA секция -->
					<div
						class="mt-12 rounded-2xl bg-linear-to-r from-slate-800 to-slate-900 p-8 text-center text-white sm:p-12"
					>
						<h2 class="text-2xl font-bold sm:text-3xl">Подберём освещение под ваш проект</h2>
						<p class="mx-auto mt-3 max-w-md text-slate-300">
							Поможем выбрать оптимальное решение для интерьерного и экстерьерного освещения
						</p>
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
							>
								Получить консультацию
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
	<!-- Магазин не найден -->
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
			<h1 class="mt-6 text-2xl font-bold text-slate-900">Магазин не найден</h1>
			<p class="mt-2 text-slate-600">К сожалению, запрашиваемый магазин не существует</p>
			<a
				href="/osveschenie"
				class="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
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
