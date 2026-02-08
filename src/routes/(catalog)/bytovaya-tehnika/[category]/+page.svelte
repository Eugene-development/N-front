<script>
	import { page } from '$app/stores';
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Данные из сервера
	let brand = $derived(data.brand);
	let allBrands = $derived(data.allBrands || []);
	let brandSlug = $derived(data.brandSlug);

	// Fallback данные для брендов (используются если API не вернул данные)
	const fallbackBrandsData = {
		'bosch': {
			slug: 'bosch',
			value: 'Bosch',
			country: 'Германия',
			founded: '1886',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/400px-Bosch-logo.svg.png',
			description: 'Bosch — один из ведущих мировых производителей бытовой техники премиум-класса. Компания основана в 1886 году в Штутгарте Робертом Бошем. Философия бренда — «Техника для жизни» — отражает стремление создавать инновационные решения, которые делают повседневную жизнь проще и комфортнее.',
			fullDescription: 'Bosch предлагает полный спектр бытовой техники: от варочных панелей и духовых шкафов до холодильников и стиральных машин. Все устройства отличаются высочайшим качеством сборки, энергоэффективностью и инновационными технологиями. Бренд известен своими системами Home Connect для умного дома.',
			website: 'https://www.bosch-home.ru',
			features: ['Немецкое качество', 'Гарантия до 10 лет', 'Home Connect', 'Энергоэффективность A+++'],
			categories: ['Варочные панели', 'Духовые шкафы', 'Холодильники', 'Посудомоечные машины', 'Стиральные машины', 'Вытяжки']
		},
		'siemens': {
			slug: 'siemens',
			value: 'Siemens',
			country: 'Германия',
			founded: '1847',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/400px-Siemens-logo.svg.png',
			description: 'Siemens Home Appliances — подразделение немецкого концерна Siemens, специализирующееся на производстве премиальной бытовой техники.',
			fullDescription: 'Техника Siemens сочетает в себе превосходный дизайн, передовые технологии и максимальное удобство использования.',
			website: 'https://www.siemens-home.ru',
			features: ['Интеллектуальные функции', 'Премиальный дизайн', 'Home Connect', 'iQ технологии'],
			categories: ['Варочные панели', 'Духовые шкафы', 'Холодильники', 'Посудомоечные машины', 'Кофемашины', 'Вытяжки']
		},
		'electrolux': {
			slug: 'electrolux',
			value: 'Electrolux',
			country: 'Швеция',
			founded: '1919',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Electrolux_logo.svg/400px-Electrolux_logo.svg.png',
			description: 'Electrolux — шведский производитель бытовой техники, известный скандинавским дизайном и экологичностью.',
			fullDescription: 'Electrolux создаёт технику, которая улучшает повседневную жизнь людей, заботясь при этом об окружающей среде.',
			website: 'https://www.electrolux.ru',
			features: ['Скандинавский дизайн', 'Экологичность', 'Инновации', 'Интуитивное управление'],
			categories: ['Варочные панели', 'Духовые шкафы', 'Холодильники', 'Стиральные машины', 'Сушильные машины']
		},
		'miele': {
			slug: 'miele',
			value: 'Miele',
			country: 'Германия',
			founded: '1899',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miele_logo.svg/400px-Miele_logo.svg.png',
			description: 'Miele — семейная немецкая компания, производящая бытовую технику премиум-класса.',
			fullDescription: 'Miele производит всю технику исключительно на собственных заводах в Германии, что гарантирует высочайшее качество.',
			website: 'https://www.miele.ru',
			features: ['Сделано в Германии', '20 лет службы', 'Профессиональные технологии', 'Семейная компания'],
			categories: ['Духовые шкафы', 'Варочные панели', 'Пароварки', 'Кофемашины', 'Посудомоечные машины', 'Стиральные машины']
		},
		'samsung': {
			slug: 'samsung',
			value: 'Samsung',
			country: 'Южная Корея',
			founded: '1938',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/400px-Samsung_Logo.svg.png',
			description: 'Samsung — южнокорейский технологический гигант, один из мировых лидеров в производстве бытовой техники.',
			fullDescription: 'Samsung предлагает широкий ассортимент бытовой техники с уникальными технологиями.',
			website: 'https://www.samsung.com/ru/',
			features: ['SmartThings экосистема', 'Инновационный дизайн', 'AI технологии', 'Bespoke персонализация'],
			categories: ['Холодильники', 'Стиральные машины', 'Духовые шкафы', 'Варочные панели', 'Микроволновые печи']
		},
		'lg': {
			slug: 'lg',
			value: 'LG',
			country: 'Южная Корея',
			founded: '1958',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/400px-LG_symbol.svg.png',
			description: 'LG Electronics — южнокорейский производитель бытовой техники и электроники.',
			fullDescription: 'LG известен инновационными решениями: инверторные компрессоры, технология TrueSteam, AI DD.',
			website: 'https://www.lg.com/ru',
			features: ['Инверторные технологии', 'AI DD', 'TrueSteam', 'ThinQ умный дом'],
			categories: ['Холодильники', 'Стиральные машины', 'Сушильные машины', 'Посудомоечные машины', 'Микроволновые печи']
		},
		'aeg': {
			slug: 'aeg',
			value: 'AEG',
			country: 'Германия',
			founded: '1883',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/AEG_Logo.svg/400px-AEG_Logo.svg.png',
			description: 'AEG — немецкий производитель премиальной бытовой техники.',
			fullDescription: 'AEG сочетает немецкое качество и шведские инновации.',
			website: 'https://www.aeg.ru',
			features: ['Профессиональные технологии', 'SteamBake', 'SenseCook', 'Немецкое качество'],
			categories: ['Духовые шкафы', 'Варочные панели', 'Посудомоечные машины', 'Стиральные машины', 'Сушильные машины']
		},
		'smeg': {
			slug: 'smeg',
			value: 'Smeg',
			country: 'Италия',
			founded: '1948',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Smeg_logo.svg/400px-Smeg_logo.svg.png',
			description: 'Smeg — итальянский производитель дизайнерской бытовой техники.',
			fullDescription: 'Smeg — это искусство в мире бытовой техники.',
			website: 'https://www.smeg.ru',
			features: ['Итальянский дизайн', 'Ретро-стиль', 'Made in Italy', 'Дизайнерские коллаборации'],
			categories: ['Холодильники', 'Духовые шкафы', 'Варочные панели', 'Вытяжки', 'Мелкая бытовая техника']
		}
	};

	// Fallback список брендов (если сервер не вернул данные)
	const fallbackBrandsList = [
		{ slug: 'bosch', value: 'Bosch' },
		{ slug: 'siemens', value: 'Siemens' },
		{ slug: 'electrolux', value: 'Electrolux' },
		{ slug: 'miele', value: 'Miele' },
		{ slug: 'samsung', value: 'Samsung' },
		{ slug: 'lg', value: 'LG' },
		{ slug: 'aeg', value: 'AEG' },
		{ slug: 'smeg', value: 'Smeg' },
	];

	// Объединяем данные из API с fallback данными
	let displayBrand = $derived(() => {
		if (!brand) {
			// Если API не вернул бренд, пробуем fallback
			if (fallbackBrandsData[brandSlug]) {
				return {
					...fallbackBrandsData[brandSlug],
					name: fallbackBrandsData[brandSlug].value
				};
			}
			return null;
		}
		
		const fallback = fallbackBrandsData[brandSlug] || {};
		return {
			...fallback,
			...brand,
			name: brand.value || fallback.value || fallback.name,
			founded: fallback.founded,
			fullDescription: brand.description || fallback.fullDescription || fallback.description,
			features: fallback.features || [],
			categories: fallback.categories || []
		};
	});

	// Используем серверные бренды или fallback
	let displayBrands = $derived(allBrands.length > 0 ? allBrands : fallbackBrandsList);

	// Универсальная иконка (шеврон вправо)
	const brandIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;

	// Background color gradients by slug
	const brandGradients = {
		'bosch': { from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600', accent: 'sky' },
		'siemens': { from: 'from-teal-100', to: 'to-cyan-100', hover: 'group-hover:from-teal-500 group-hover:to-cyan-500', text: 'text-teal-600', accent: 'teal' },
		'electrolux': { from: 'from-amber-100', to: 'to-yellow-100', hover: 'group-hover:from-amber-500 group-hover:to-yellow-500', text: 'text-amber-600', accent: 'amber' },
		'miele': { from: 'from-red-100', to: 'to-rose-100', hover: 'group-hover:from-red-500 group-hover:to-rose-500', text: 'text-red-600', accent: 'red' },
		'samsung': { from: 'from-indigo-100', to: 'to-blue-100', hover: 'group-hover:from-indigo-500 group-hover:to-blue-500', text: 'text-indigo-600', accent: 'indigo' },
		'lg': { from: 'from-pink-100', to: 'to-rose-100', hover: 'group-hover:from-pink-500 group-hover:to-rose-500', text: 'text-pink-600', accent: 'pink' },
		'aeg': { from: 'from-emerald-100', to: 'to-green-100', hover: 'group-hover:from-emerald-500 group-hover:to-green-500', text: 'text-emerald-600', accent: 'emerald' },
		'smeg': { from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600', accent: 'violet' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600', accent: 'slate' }
	};

	function getGradient(slug) {
		return brandGradients[slug] || brandGradients.default;
	}

	// Получение имени бренда (поддержка value и name)
	function getBrandName(b) {
		return b?.value || b?.name || '';
	}
</script>

<svelte:head>
	{#if displayBrand()}
		<title>{displayBrand().name} – Бытовая техника | Компания Новострой</title>
		<meta
			name="description"
			content={`Бытовая техника ${displayBrand().name} (${displayBrand().country}). ${displayBrand().description}`}
		/>
	{:else}
		<title>Бренд не найден | Новострой</title>
	{/if}
</svelte:head>

{#if displayBrand()}
	{@const currentBrand = displayBrand()}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-4 lg:gap-8">
				<!-- Сайдбар с брендами -->
				<aside class="hidden lg:block">
					<div class="sticky top-24">
						<nav class="space-y-1">
							<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
								Бренды
							</h2>

							{#each displayBrands as b (b.slug)}
								{@const gradient = getGradient(b.slug)}
								<a
									href="/bytovaya-tehnika/{b.slug}"
									class="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all {b.slug ===
									brandSlug
										? 'bg-white shadow-md text-sky-600'
										: 'text-slate-700 hover:bg-white hover:shadow-md hover:text-sky-600'}"
								>
									<span
										class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br {b.slug ===
										brandSlug
											? gradient.from.replace('from-', 'from-') +
												' ' +
												gradient.to +
												' ' +
												gradient.text
											: 'from-slate-100 to-gray-200 text-slate-600'} transition-all {gradient.hover} group-hover:text-white group-hover:shadow-lg"
									>
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											{@html brandIcon}
										</svg>
									</span>
									<span class="font-medium">{getBrandName(b)}</span>
								</a>
							{/each}
						</nav>

						<!-- Баннер консультации -->
						<div
							class="mt-8 rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 p-6 text-white"
						>
							<h3 class="text-lg font-semibold">Подбор техники</h3>
							<p class="mt-2 text-sm text-slate-300">
								Поможем выбрать технику под ваш проект кухни
							</p>
							<ConsultationButton
								class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-all hover:bg-slate-100"
							>
								Бесплатная консультация
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</ConsultationButton>
						</div>
					</div>
				</aside>

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
								<a href="/bytovaya-tehnika" class="hover:text-white transition-colors"
									>Бытовая техника</a
								>
								<span>/</span>
								<span class="text-white">{currentBrand.name}</span>
							</nav>

							<div class="flex flex-col md:flex-row md:items-center gap-8">
								<!-- Логотип бренда -->
								<div class="flex-shrink-0">
									<div
										class="w-40 h-40 rounded-2xl bg-white p-6 flex items-center justify-center shadow-xl"
									>
										<img
											src={currentBrand.logo}
											alt={currentBrand.name}
											class="max-w-full max-h-full object-contain"
										/>
									</div>
								</div>

								<!-- Информация о бренде -->
								<div class="flex-1">
									<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
										{currentBrand.name}
									</h1>

									<div class="mt-4 flex flex-wrap items-center gap-4">
										<!-- Страна -->
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

										<!-- Год основания -->
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
											<span class="font-medium">С {currentBrand.founded} года</span>
										</div>
									</div>

									<p class="mt-4 max-w-xl text-lg text-slate-300">
										{currentBrand.description}
									</p>

									<div class="mt-6 flex flex-wrap gap-4">
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
										<ConsultationButton
											class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
										>
											Подобрать технику
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
							{#each displayBrands as b (b.slug)}
								<a
									href="/bytovaya-tehnika/{b.slug}"
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

					<!-- Особенности бренда -->
					<div class="mt-8">
						<h2 class="text-2xl font-bold text-slate-900">Преимущества {currentBrand.name}</h2>
						<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{#each currentBrand.features as feature, index}
								{@const colors = [
									'bg-sky-100 text-sky-600',
									'bg-emerald-100 text-emerald-600',
									'bg-amber-100 text-amber-600',
									'bg-violet-100 text-violet-600'
								]}
								<div class="rounded-xl bg-white p-5 shadow-sm">
									<div
										class="flex h-10 w-10 items-center justify-center rounded-lg {colors[
											index % colors.length
										]}"
									>
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 class="mt-3 font-semibold text-slate-900">{feature}</h3>
								</div>
							{/each}
						</div>
					</div>

					<!-- Категории техники бренда -->
					<div class="mt-8">
						<h2 class="text-2xl font-bold text-slate-900">Техника {currentBrand.name}</h2>
						<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{#each currentBrand.categories as category}
								<div class="rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md">
									<div class="flex items-center gap-3">
										<div
											class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
										>
											<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</div>
										<span class="font-medium text-slate-900">{category}</span>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- CTA секция -->
					<div
						class="mt-12 rounded-2xl bg-linear-to-r from-slate-800 to-slate-900 p-8 text-center text-white sm:p-12"
					>
						<h2 class="text-2xl font-bold sm:text-3xl">
							Нужна помощь с выбором техники {currentBrand.name}?
						</h2>
						<p class="mx-auto mt-3 max-w-md text-slate-300">
							Наши специалисты помогут подобрать технику под ваши задачи и бюджет
						</p>
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-slate-800 transition-all hover:bg-slate-100"
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
				href="/bytovaya-tehnika"
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
