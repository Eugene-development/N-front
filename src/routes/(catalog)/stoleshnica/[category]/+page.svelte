<script>
	import { page } from '$app/stores';
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import CatalogSidebar from '$lib/components/CatalogSidebar.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Данные из сервера
	let category = $derived(data.category);
	let allCategories = $derived(data.allCategories || []);
	let suppliers = $derived(data.suppliers || []);
	let categorySlug = $derived(data.categorySlug);
	let error = $derived(data.error);
</script>

<svelte:head>
	{#if category}
		<title>{category.value} – Поставщики столешниц | Компания Новострой</title>
		<meta
			name="description"
			content={`Каталог поставщиков столешниц из ${category.value}. Выберите надёжного производителя для вашей кухни.`}
		/>
	{:else}
		<title>Категория не найдена | Новострой</title>
	{/if}
</svelte:head>

{#if category}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-4 lg:gap-8">
				<!-- Сайдбар с категориями -->
				<CatalogSidebar
					items={allCategories}
					rubricSlug="stoleshnica"
					title="Материалы столешниц"
					activeSlug={categorySlug}
					banner={{
						title: 'Бесплатный замер',
						description: 'Выезд специалиста для точного расчёта столешницы',
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
							src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1200"
							alt={category.value}
							class="absolute inset-0 h-full w-full object-cover opacity-40"
						/>
						<div class="relative px-8 py-16 sm:px-12 sm:py-20">
							<!-- Breadcrumb -->
							<nav class="mb-4 flex items-center gap-2 text-sm text-slate-400">
								<a href="/" class="hover:text-white transition-colors">Главная</a>
								<span>/</span>
								<a href="/stoleshnica" class="hover:text-white transition-colors">Столешницы</a>
								<span>/</span>
								<span class="text-white">{category.value}</span>
							</nav>

							<h1 class="text-3xl font-bold text-white sm:text-4xl">
								{category.value}
							</h1>
							<p class="mt-4 max-w-xl text-lg text-slate-300">
								Выберите надёжного поставщика столешниц. По клику на карточку вы перейдёте на сайт
								производителя.
							</p>
							<div class="mt-6 flex flex-wrap gap-4">
								<ConsultationButton
									class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
								>
									Получить консультацию
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</ConsultationButton>
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
					<div class="mt-6 lg:hidden">
						<h2 class="text-lg font-semibold text-slate-900">Материалы</h2>
						<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
							{#each allCategories as cat (cat.id)}
								<a
									href="/stoleshnica/{cat.slug}"
									class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all {cat.slug ===
									categorySlug
										? 'bg-amber-500 text-white'
										: 'bg-white text-slate-700 shadow-sm hover:shadow'}"
								>
									{cat.value}
								</a>
							{/each}
						</div>
					</div>

					<!-- Информация о количестве поставщиков -->
					<div class="mt-8 flex flex-wrap items-center justify-between gap-4">
						<div class="flex items-center gap-2">
							<span class="text-sm text-slate-500">Всего:</span>
							<span class="font-semibold text-slate-900">{suppliers.length} поставщиков</span>
						</div>
					</div>

					<!-- Сетка карточек поставщиков -->
					{#if suppliers.length === 0}
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
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								/>
							</svg>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Поставщики не найдены</h3>
							<p class="mt-2 text-slate-600">В данной категории пока нет поставщиков</p>
							<ConsultationButton
								class="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
							>
								Получить консультацию
							</ConsultationButton>
						</div>
					{:else}
						<div class="mt-6 grid gap-6 sm:grid-cols-2">
							{#each suppliers as supplier (supplier.id)}
								<a
									href={supplier.website || '#'}
									target="_blank"
									rel="noopener noreferrer"
									class="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
								>
									<!-- Метка страны -->
									{#if supplier.country}
										<div class="absolute right-3 top-3 z-10">
											<span
												class="rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-white backdrop-blur"
											>
												{supplier.country}
											</span>
										</div>
									{/if}

									<!-- Иконка внешней ссылки -->
									{#if supplier.website}
										<div
											class="absolute right-3 bottom-3 z-10 opacity-0 transition-opacity group-hover:opacity-100"
										>
											<span
												class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg"
											>
												<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</span>
										</div>
									{/if}

									<!-- Логотип компании -->
									<div
										class="relative h-40 overflow-hidden bg-slate-50 flex items-center justify-center"
									>
										{#if supplier.logo}
											<img
												src={supplier.logo}
												alt={supplier.name}
												class="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
											/>
										{:else}
											<div class="flex h-full w-full items-center justify-center">
												<svg
													class="h-16 w-16 text-slate-300"
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
											</div>
										{/if}
										<div
											class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
										></div>
									</div>

									<div class="p-6">
										<h3
											class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
										>
											{supplier.name}
										</h3>
										{#if supplier.description}
											<p class="mt-2 text-sm text-slate-600 line-clamp-2">
												{supplier.description}
											</p>
										{/if}

										<!-- Ценовой диапазон -->
										{#if supplier.priceRange}
											<div class="mt-4 flex items-center gap-2">
												<span class="text-lg font-bold text-amber-600">{supplier.priceRange}</span>
											</div>
										{/if}

										<!-- Контактная информация -->
										{#if supplier.phone || supplier.email}
											<div class="mt-4 flex flex-wrap gap-3">
												{#if supplier.phone}
													<span class="inline-flex items-center gap-1 text-sm text-slate-600">
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
														{supplier.phone}
													</span>
												{/if}
												{#if supplier.email}
													<span class="inline-flex items-center gap-1 text-sm text-slate-600">
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
														{supplier.email}
													</span>
												{/if}
											</div>
										{/if}

										<!-- Особенности (для mock данных) -->
										{#if supplier.features && supplier.features.length > 0}
											<div class="mt-4 flex flex-wrap gap-2">
												{#each supplier.features as feature}
													<span
														class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
													>
														{feature}
													</span>
												{/each}
											</div>
										{/if}

										<!-- CTA -->
										{#if supplier.website}
											<div
												class="mt-4 flex items-center gap-2 text-sm font-medium text-amber-600 group-hover:text-amber-700"
											>
												<span>Перейти на сайт</span>
												<svg
													class="h-4 w-4 transition-transform group-hover:translate-x-1"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M17 8l4 4m0 0l-4 4m4-4H3"
													/>
												</svg>
											</div>
										{/if}
									</div>
								</a>
							{/each}
						</div>
					{/if}

					<!-- Преимущества работы с нами -->
					<div class="mt-12">
						<h2 class="text-2xl font-bold text-slate-900">Почему заказывают через нас</h2>
						<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							<div class="rounded-xl bg-white p-5 shadow-sm">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600"
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
								<h3 class="mt-3 font-semibold text-slate-900">Проверенные поставщики</h3>
								<p class="mt-1 text-sm text-slate-600">Только сертифицированные производители</p>
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
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">Лучшие цены</h3>
								<p class="mt-1 text-sm text-slate-600">Дилерские скидки от производителей</p>
							</div>
							<div class="rounded-xl bg-white p-5 shadow-sm">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">Монтаж под ключ</h3>
								<p class="mt-1 text-sm text-slate-600">Профессиональная установка</p>
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
											d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								</div>
								<h3 class="mt-3 font-semibold text-slate-900">Поддержка 24/7</h3>
								<p class="mt-1 text-sm text-slate-600">Консультация на всех этапах</p>
							</div>
						</div>
					</div>

					<!-- CTA секция -->
					<div
						class="mt-12 rounded-2xl bg-linear-to-r from-amber-500 to-orange-600 p-8 text-center text-white sm:p-12"
					>
						<h2 class="text-2xl font-bold sm:text-3xl">Нужна помощь в выборе?</h2>
						<p class="mx-auto mt-3 max-w-md text-amber-100">
							Поможем подобрать оптимальный материал и поставщика под ваш бюджет
						</p>
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-amber-600 transition-all hover:bg-amber-50"
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
				href="/stoleshnica"
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
