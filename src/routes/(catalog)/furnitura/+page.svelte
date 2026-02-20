<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import CatalogSidebar from '$lib/components/CatalogSidebar.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Магазины уже загружены на сервере
	let shops = $derived(data.shops || []);

	// Background color gradients для магазинов
	const shopGradients = [
		{ from: 'from-amber-100', to: 'to-orange-100', hover: 'group-hover:from-amber-500 group-hover:to-orange-500', text: 'text-amber-600', bg: 'bg-amber-500' },
		{ from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600', bg: 'bg-sky-500' },
		{ from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600', bg: 'bg-violet-500' },
		{ from: 'from-emerald-100', to: 'to-teal-100', hover: 'group-hover:from-emerald-500 group-hover:to-teal-500', text: 'text-emerald-600', bg: 'bg-emerald-500' },
		{ from: 'from-cyan-100', to: 'to-sky-100', hover: 'group-hover:from-cyan-500 group-hover:to-sky-500', text: 'text-cyan-600', bg: 'bg-cyan-500' },
		{ from: 'from-rose-100', to: 'to-pink-100', hover: 'group-hover:from-rose-500 group-hover:to-pink-500', text: 'text-rose-600', bg: 'bg-rose-500' },
	];

	function getGradient(index) {
		return shopGradients[index % shopGradients.length];
	}
</script>

<svelte:head>
	<title>Мебельная фурнитура – Магазины и поставщики | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог онлайн-магазинов мебельной фурнитуры. Петли, направляющие, подъёмные механизмы, ручки и системы хранения от лучших поставщиков."
	/>
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="lg:grid lg:grid-cols-4 lg:gap-8">
			<!-- Сайдбар с магазинами -->
			<CatalogSidebar
				items={shops}
				rubricSlug="furnitura"
				title="Магазины фурнитуры"
				itemType="shop"
				externalLinks={true}
				banner={{
					title: 'Премиум фурнитура',
					description: 'Blum, Hettich, Grass — официальные дилеры',
					color: 'slate'
				}}
			/>

			<!-- Основной контент -->
			<main class="lg:col-span-3">
				<!-- Hero секция -->
				<div
					class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
				>
					<img
						src="/furniture_fittings_hero.png"
						alt="Мебельная фурнитура"
						class="absolute inset-0 h-full w-full object-cover opacity-40"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Фурнитура</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Каталог интернет-магазинов и поставщиков мебельной фурнитуры. Петли, направляющие,
							подъёмники и системы хранения от проверенных поставщиков.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<ConsultationButton
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
							</ConsultationButton>
							<!-- <a
								href="/mebel"
								class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
							>
								Каталог мебели
							</a> -->
						</div>
					</div>
				</div>

				<!-- Мобильные магазины -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Магазины</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#each shops as shop, index (shop.id || shop.slug)}
							{@const gradient = getGradient(index)}
							<a
								href={shop.website}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
							>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-lg {gradient.bg} text-white"
								>
									{#if shop.logo}
										<img src={shop.logo} alt={shop.value} class="h-5 w-5 object-contain" />
									{:else}
										<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
											/>
										</svg>
									{/if}
								</span>
								<span class="text-sm font-medium text-slate-700">{shop.value}</span>
							</a>
						{/each}
					</div>
				</div>

				<!-- Карточки магазинов -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Магазины и поставщики</h2>

					{#if shops.length === 0}
						<div class="mt-6 rounded-xl bg-white p-12 text-center shadow-sm">
							<svg
								class="mx-auto h-12 w-12 text-slate-300"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								/>
							</svg>
							<h3 class="mt-4 text-lg font-medium text-slate-900">Магазины пока не добавлены</h3>
							<p class="mt-2 text-slate-500">Скоро здесь появятся магазины мебельной фурнитуры</p>
						</div>
					{:else}
						<div class="mt-6 grid gap-6 sm:grid-cols-2">
							{#each shops as shop, index (shop.id)}
								{@const gradient = getGradient(index)}
								<div class="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
									<!-- Заголовок магазина -->
									<div class="flex items-start gap-4">
										<div
											class="flex h-16 w-16 items-center justify-center rounded-xl {shop.logo
												? ''
												: 'bg-linear-to-br ' + gradient.from + ' ' + gradient.to}"
										>
											{#if shop.logo}
												<img src={shop.logo} alt={shop.value} class="h-14 w-14 object-contain" />
											{:else}
												<span class="text-2xl font-bold {gradient.text}"
													>{shop.value.charAt(0)}</span
												>
											{/if}
										</div>
										<div class="flex-1">
											<h3 class="text-lg font-semibold text-slate-900">{shop.value}</h3>
											{#if shop.description}
												<p class="mt-1 text-sm text-slate-500 line-clamp-2">{shop.description}</p>
											{/if}
										</div>
									</div>

									<!-- Категории -->
									{#if shop.categories && shop.categories.length > 0}
										<div class="mt-4">
											<p class="text-xs font-medium text-slate-400 uppercase tracking-wider">
												Категории
											</p>
											<div class="mt-2 flex flex-wrap gap-2">
												{#each shop.categories.filter((c) => c.is_active) as category}
													<span
														class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
													>
														{category.value}
													</span>
												{/each}
											</div>
										</div>
									{/if}

									<!-- Бренды -->
									{#if shop.brands && shop.brands.length > 0}
										<div class="mt-4">
											<p class="text-xs font-medium text-slate-400 uppercase tracking-wider">
												Бренды
											</p>
											<div class="mt-2 flex flex-wrap gap-2">
												{#each shop.brands.filter((b) => b.is_active) as brand}
													{#if brand.logo}
														<img src={brand.logo} alt={brand.value} class="h-6 object-contain" />
													{:else}
														<span
															class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700"
														>
															{brand.value}
														</span>
													{/if}
												{/each}
											</div>
										</div>
									{/if}

									<!-- Города -->
									{#if shop.cities && shop.cities.length > 0}
										<div class="mt-4 flex items-center gap-2 text-sm text-slate-500">
											<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

									<!-- Контакты и ссылка -->
									<div
										class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4"
									>
										<div class="flex items-center gap-3">
											{#if shop.phone}
												<a
													href="tel:{shop.phone}"
													class="flex items-center gap-1.5 text-sm text-slate-600 hover:text-amber-600 transition-colors"
													aria-label="Позвонить в {shop.value}"
												>
													<svg
														class="h-4 w-4"
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
													<span class="font-medium">{shop.phone}</span>
												</a>
											{/if}
											{#if shop.email}
												<a
													href="mailto:{shop.email}"
													class="text-sm text-slate-500 hover:text-slate-700"
													aria-label="Написать в {shop.value}"
												>
													<svg
														class="h-4 w-4"
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
												</a>
											{/if}
										</div>
										{#if shop.website}
											<a
												href={shop.website}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-1 text-sm font-medium {gradient.text} hover:underline"
											>
												Перейти на сайт
												<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					{/if}
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
