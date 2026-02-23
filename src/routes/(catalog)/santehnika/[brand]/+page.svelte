<script>
	import { page } from '$app/stores';
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import CatalogSidebar from '$lib/components/CatalogSidebar.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Данные из сервера
	let brand = $derived(data.brand);
	let allBrands = $derived(data.allBrands || []);
	let brandSlug = $derived(data.brandSlug);

	// Fallback данные для брендов (на случай если API не вернет полную информацию)
	const fallbackBrandsData = {
		'omoikiri': {
			slug: 'omoikiri',
			value: 'Omoikiri',
			country: 'Япония',
			founded: '1981',
			logo: 'https://storage.yandexcloud.net/novostroy/brands/omoikiri.png',
			description: 'Omoikiri — японская торговая марка, специализирующаяся на производстве кухонных моек, смесителей, водоочистителей и аксессуаров для кухни премиум-класса.',
			fullDescription: 'Продукция Omoikiri отличается эксклюзивным дизайном, высочайшим качеством используемых материалов и передовыми технологиями производства. Бренд уделяет особое внимание экологичности и долговечности своих изделий.',
			website: 'https://omoikiri.ru',
			features: ['Японское качество', 'Эксклюзивный дизайн', 'Экологичные материалы', 'Долговечность'],
			categories: ['Кухонные мойки', 'Смесители', 'Дозаторы', 'Измельчители']
		},
		'blanco': {
			slug: 'blanco',
			value: 'Blanco',
			country: 'Германия',
			founded: '1925',
			logo: 'https://storage.yandexcloud.net/novostroy/brands/blanco.png',
			description: 'Blanco — немецкий производитель кухонных моек, смесителей и систем сортировки отходов высочайшего качества.',
			fullDescription: 'Blanco предлагает комплексные решения для зоны мойки (Blanco Unit), где мойка, смеситель и система сортировки отходов идеально сочетаются друг с другом по дизайну и функциональности.',
			website: 'https://www.blanco.com/ru-ru/',
			features: ['Немецкая надежность', 'Материал Silgranit', 'Системы Blanco Unit', 'Инновации'],
			categories: ['Мойки из Silgranit', 'Мойки из нержавеющей стали', 'Смесители', 'Системы сортировки отходов']
		},
		'franke': {
			slug: 'franke',
			value: 'Franke',
			country: 'Швейцария',
			founded: '1911',
			logo: 'https://storage.yandexcloud.net/novostroy/brands/franke.png',
			description: 'Franke — швейцарский концерн, один из ведущих мировых производителей интеллектуальных систем для домашних кухонь.',
			fullDescription: 'Franke предлагает решения "Сделай это превосходным", сочетающие безупречный дизайн, швейцарское качество и передовые технологии. В ассортименте бренда — мойки, смесители и вытяжки.',
			website: 'https://www.franke.com/ru/ru/home-solutions.html',
			features: ['Швейцарское качество', 'Материал Fragranite', 'Комплексные системы', 'Современный дизайн'],
			categories: ['Кухонные мойки', 'Смесители', 'Измельчители отходов']
		},
		'paulmark': {
			slug: 'paulmark',
			value: 'Paulmark',
			country: 'Германия',
			founded: '2010',
			logo: 'https://storage.yandexcloud.net/novostroy/brands/paulmark.png',
			description: 'Paulmark — бренд, представляющий на российском рынке качественную сантехнику, кухонные мойки, смесители и аксессуары.',
			fullDescription: 'Paulmark зарекомендовал себя как производитель надежной и эстетичной продукции для кухни. Бренд сочетает в себе современные тенденции дизайна с практичностью и долговечностью.',
			website: 'https://paulmark.ru',
			features: ['Стильный дизайн', 'Цветовые решения', 'Надежность', 'Гарантия качества'],
			categories: ['Кухонные мойки', 'Смесители для кухни', 'Аксессуары']
		},
		'zorq': {
			slug: 'zorq',
			value: 'Zorq',
			country: 'Россия/Китай',
			founded: '2015',
			logo: 'https://storage.yandexcloud.net/novostroy/brands/zorq.png',
			description: 'Zorq — производитель современных кухонных моек и смесителей, предлагающий оптимальное соотношение цены и качества.',
			fullDescription: 'Ассортимент Zorq включает мойки из искусственного камня и нержавеющей стали, а также стильные смесители в цвет моек, обеспечивая идеальное визуальное единство рабочей зоны кухни.',
			website: 'https://zorq.ru',
			features: ['Доступная цена', 'Широкая цветовая гамма', 'Ударопрочность', 'Современный дизайн'],
			categories: ['Кварцевые мойки', 'Смесители']
		}
	};

	// Fallback список брендов (если сервер не вернул данные)
	const fallbackBrandsList = Object.values(fallbackBrandsData).map(b => ({ slug: b.slug, value: b.value }));

	// Объединяем данные из API с fallback данными
	let displayBrand = $derived(() => {
		if (!brand && !fallbackBrandsData[brandSlug]) return null;
		
		const fallback = fallbackBrandsData[brandSlug] || {};
		const apiData = brand || {};
		
		return {
			...fallback,
			...apiData,
			name: apiData.value || apiData.name || fallback.value || fallback.name || brandSlug,
			founded: apiData.founded || fallback.founded || 'н.д.',
			country: apiData.country || fallback.country || 'н.д.',
			fullDescription: apiData.description || fallback.fullDescription || fallback.description || 'Описание бренда в стадии заполнения.',
			website: apiData.website || fallback.website || '#',
			logo: apiData.logo || fallback.logo || '',
			features: fallback.features || [],
			categories: fallback.categories || []
		};
	});

	// Используем серверные бренды или fallback
	let displayBrands = $derived(allBrands.length > 0 ? allBrands : fallbackBrandsList);

	// Получение имени бренда (поддержка value и name)
	function getBrandName(b) {
		return b?.value || b?.name || '';
	}
</script>

<svelte:head>
	{#if displayBrand()}
		{@const b = displayBrand()}
		<title>{b.name} – Сантехника для кухни | Компания Новострой</title>
		<meta
			name="description"
			content={`Сантехника для кухни ${b.name} (${b.country}). Кухонные мойки, смесители и аксессуары.`}
		/>
	{:else}
		<title>Бренд не найден | Новострой</title>
	{/if}
</svelte:head>

{#if displayBrand()}
	{@const currentBrand = displayBrand()}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-4 lg:gap-8">
				<!-- Сайдбар с брендами -->
				<CatalogSidebar
					items={displayBrands}
					rubricSlug="santehnika"
					title="Бренды сантехники"
					activeSlug={brandSlug}
					externalLinks={false}
					banner={{
						title: 'Подбор под проект',
						description: 'Поможем выбрать идеальную мойку и смеситель для вашей кухни',
						color: 'sky'
					}}
				/>

				<!-- Основной контент -->
				<main class="lg:col-span-3">
					<!-- Hero секция с логотипом бренда -->
					<div
						class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
					>
						<div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
						<div class="relative px-8 py-16 sm:px-12 sm:py-20">
							<!-- Breadcrumb -->
							<nav class="mb-6 flex items-center gap-2 text-sm text-slate-400">
								<a href="/" class="hover:text-white transition-colors">Главная</a>
								<span>/</span>
								<a href="/santehnika" class="hover:text-white transition-colors">Сантехника</a>
								<span>/</span>
								<span class="text-white">{currentBrand.name}</span>
							</nav>

							<div class="flex flex-col md:flex-row md:items-center gap-8">
								<!-- Логотип бренда -->
								<div class="flex-shrink-0">
									<div
										class="w-44 h-44 rounded-2xl bg-white p-6 flex items-center justify-center shadow-xl"
									>
										{#if currentBrand.logo}
											<img
												src={currentBrand.logo}
												alt={currentBrand.name}
												class="max-w-full max-h-full object-contain"
											/>
										{:else}
											<span class="text-2xl font-bold text-slate-400">{currentBrand.name}</span>
										{/if}
									</div>
								</div>

								<!-- Информация о бренде -->
								<div class="flex-1">
									<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
										{currentBrand.name}
									</h1>

									<div class="mt-4 flex flex-wrap items-center gap-4">
										<!-- Страна -->
										{#if currentBrand.country && currentBrand.country !== 'н.д.'}
											<div
												class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
											>
												<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												<span class="font-medium">{currentBrand.country}</span>
											</div>
										{/if}

										<!-- Год основания -->
										{#if currentBrand.founded && currentBrand.founded !== 'н.д.'}
											<div
												class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
											>
												<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
												<span class="font-medium">Основан в {currentBrand.founded} году</span>
											</div>
										{/if}
									</div>

									<div class="mt-6 flex flex-wrap gap-4">
										{#if currentBrand.website && currentBrand.website !== '#'}
											<a
												href={currentBrand.website}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
											>
												Официальный сайт
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
											Подобрать сантехнику
										</ConsultationButton>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Мобильные бренды -->
					<div class="mt-6 lg:hidden">
						<h2 class="text-lg font-semibold text-slate-900">Другие бренды</h2>
						<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
							{#each displayBrands as b (b.slug || b.value)}
								<a
									href="/santehnika/{b.slug}"
									class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all {b.slug ===
									brandSlug
										? 'bg-sky-500 text-white'
										: 'bg-white text-slate-700 shadow-sm hover:shadow'}"
								>
									{getBrandName(b)}
								</a>
							{/each}
						</div>
					</div>

					<!-- Подробная информация о бренде -->
					<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
						<h2 class="text-2xl font-bold text-slate-900">О бренде {currentBrand.name}</h2>
						<p class="mt-4 text-slate-600 leading-relaxed">
							{currentBrand.fullDescription}
						</p>
					</div>

					<!-- CTA секция -->
					<div
						class="mt-12 rounded-2xl bg-linear-to-r from-slate-800 to-slate-900 p-8 text-center text-white sm:p-12"
					>
						<h2 class="text-2xl font-bold sm:text-3xl">
							Хотите заказать сантехнику {currentBrand.name}?
						</h2>
						<p class="mx-auto mt-3 max-w-md text-slate-300">
							Оставьте заявку, и мы поможем подобрать идеальные решения для вашей кухни
						</p>
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-slate-800 transition-all hover:bg-slate-100"
							>
								Оставить заявку
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
								Позвонить нам
							</a>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
{:else}
	<!-- Бренд не найден -->
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
			<h1 class="mt-6 text-2xl font-bold text-slate-900">Бренд не найден</h1>
			<p class="mt-2 text-slate-600">К сожалению, запрашиваемый бренд не существует</p>
			<a
				href="/santehnika"
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
