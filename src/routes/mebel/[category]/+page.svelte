<script>
	import { page } from '$app/stores';
	
	// Моковые данные категорий
	const categoriesData = {
		kuhni: {
			title: 'Кухни на заказ',
			description: 'Создаём кухни мечты по индивидуальным размерам. Современные и классические решения с использованием качественных материалов.',
			heroImage: '/kuhni_hero.png',
			color: 'amber',
			products: [
				{ id: 1, name: 'Кухня "Модерн"', price: 185000, image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg', style: 'Современный', material: 'МДФ эмаль' },
				{ id: 2, name: 'Кухня "Классика"', price: 245000, image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg', style: 'Классический', material: 'Массив дуба' },
				{ id: 3, name: 'Кухня "Лофт"', price: 165000, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', style: 'Лофт', material: 'ЛДСП + металл' },
				{ id: 4, name: 'Кухня "Минимализм"', price: 195000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', style: 'Минимализм', material: 'МДФ пластик' },
				{ id: 5, name: 'Кухня "Прованс"', price: 275000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', style: 'Прованс', material: 'Массив ясеня' },
				{ id: 6, name: 'Кухня "Скандинавия"', price: 155000, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', style: 'Скандинавский', material: 'МДФ эмаль' }
			]
		},
		shkafy: {
			title: 'Шкафы на заказ',
			description: 'Встроенные и корпусные шкафы любой конфигурации. Максимальное использование пространства с учётом ваших потребностей.',
			heroImage: 'https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg',
			color: 'sky',
			products: [
				{ id: 1, name: 'Шкаф-купе "Премиум"', price: 125000, image: 'https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg', style: 'Современный', material: 'ЛДСП + зеркало' },
				{ id: 2, name: 'Встроенный шкаф', price: 95000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', style: 'Минимализм', material: 'МДФ эмаль' },
				{ id: 3, name: 'Шкаф с подсветкой', price: 145000, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600', style: 'Современный', material: 'ЛДСП + LED' },
				{ id: 4, name: 'Угловой шкаф', price: 115000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', style: 'Классический', material: 'МДФ шпон' }
			]
		},
		garderobnye: {
			title: 'Гардеробные комнаты',
			description: 'Проектируем и изготавливаем гардеробные системы любой сложности. Эргономичные решения для хранения одежды и аксессуаров.',
			heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
			color: 'violet',
			products: [
				{ id: 1, name: 'Гардеробная "Люкс"', price: 285000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', style: 'Премиум', material: 'МДФ + стекло' },
				{ id: 2, name: 'Гардеробная система', price: 165000, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600', style: 'Современный', material: 'ЛДСП' },
				{ id: 3, name: 'Угловая гардеробная', price: 195000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', style: 'Минимализм', material: 'МДФ эмаль' }
			]
		},
		prihozhie: {
			title: 'Прихожие на заказ',
			description: 'Функциональные прихожие для любого пространства. Компактные решения с максимальной вместительностью.',
			heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
			color: 'emerald',
			products: [
				{ id: 1, name: 'Прихожая "Компакт"', price: 45000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', style: 'Современный', material: 'ЛДСП' },
				{ id: 2, name: 'Прихожая с зеркалом', price: 65000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', style: 'Классический', material: 'МДФ + зеркало' },
				{ id: 3, name: 'Угловая прихожая', price: 75000, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', style: 'Минимализм', material: 'МДФ эмаль' },
				{ id: 4, name: 'Прихожая "Премиум"', price: 95000, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', style: 'Премиум', material: 'Массив + кожа' }
			]
		},
		detskaya: {
			title: 'Детская мебель',
			description: 'Безопасная и функциональная мебель для детских комнат. Яркие решения, которые растут вместе с ребёнком.',
			heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
			color: 'pink',
			products: [
				{ id: 1, name: 'Детская "Радуга"', price: 85000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', style: 'Детский', material: 'МДФ эмаль' },
				{ id: 2, name: 'Кровать-чердак', price: 65000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', style: 'Современный', material: 'ЛДСП' },
				{ id: 3, name: 'Детский гарнитур', price: 125000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', style: 'Классический', material: 'Массив сосны' }
			]
		},
		ofisnaya: {
			title: 'Офисная мебель',
			description: 'Эргономичная мебель для офиса и домашнего кабинета. Создаём комфортное рабочее пространство.',
			heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
			color: 'slate',
			products: [
				{ id: 1, name: 'Рабочий стол "Директор"', price: 75000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', style: 'Классический', material: 'МДФ шпон' },
				{ id: 2, name: 'Компьютерный стол', price: 35000, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', style: 'Современный', material: 'ЛДСП' },
				{ id: 3, name: 'Офисный шкаф', price: 55000, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600', style: 'Минимализм', material: 'ЛДСП + стекло' },
				{ id: 4, name: 'Стеллаж офисный', price: 45000, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', style: 'Современный', material: 'Металл + ЛДСП' }
			]
		}
	};

	// Все категории для сайдбара
	const allCategories = [
		{ slug: 'kuhni', name: 'Кухни', color: 'amber', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
		{ slug: 'shkafy', name: 'Шкафы', color: 'sky', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
		{ slug: 'garderobnye', name: 'Гардеробные', color: 'violet', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
		{ slug: 'prihozhie', name: 'Прихожие', color: 'emerald', icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' },
		{ slug: 'detskaya', name: 'Детская мебель', color: 'pink', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
		{ slug: 'ofisnaya', name: 'Офисная мебель', color: 'slate', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
	];

	$: categorySlug = $page.params.category;
	$: categoryData = categoriesData[categorySlug] || null;
	$: currentCategory = allCategories.find(c => c.slug === categorySlug);

	const formatPrice = (price) => {
		return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
	};

	const getColorClasses = (color) => {
		const colors = {
			amber: { bg: 'from-amber-100 to-orange-100', text: 'text-amber-600', activeBg: 'from-amber-500 to-orange-500' },
			sky: { bg: 'from-sky-100 to-blue-100', text: 'text-sky-600', activeBg: 'from-sky-500 to-blue-500' },
			violet: { bg: 'from-violet-100 to-purple-100', text: 'text-violet-600', activeBg: 'from-violet-500 to-purple-500' },
			emerald: { bg: 'from-emerald-100 to-teal-100', text: 'text-emerald-600', activeBg: 'from-emerald-500 to-teal-500' },
			pink: { bg: 'from-pink-100 to-rose-100', text: 'text-pink-600', activeBg: 'from-pink-500 to-rose-500' },
			slate: { bg: 'from-slate-100 to-gray-200', text: 'text-slate-600', activeBg: 'from-slate-500 to-gray-600' }
		};
		return colors[color] || colors.sky;
	};
</script>

<svelte:head>
	{#if categoryData}
		<title>{categoryData.title} | Компания Новострой</title>
		<meta name="description" content={categoryData.description} />
	{:else}
		<title>Категория не найдена | Новострой</title>
	{/if}
</svelte:head>

{#if categoryData}
	<div class="min-h-screen bg-slate-50">
		<div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-4 lg:gap-8">
				<!-- Сайдбар с категориями -->
				<aside class="hidden lg:block">
					<div class="sticky top-24">
						<nav class="space-y-1">
							<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
								Категории мебели
							</h2>

							{#each allCategories as cat}
								{@const colors = getColorClasses(cat.color)}
								<a
									href="/mebel/{cat.slug}"
									class="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all {cat.slug ===
									categorySlug
										? 'bg-white shadow-md text-sky-600'
										: 'text-slate-700 hover:bg-white hover:shadow-md hover:text-sky-600'}"
								>
									<span
										class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br {cat.slug ===
										categorySlug
											? colors.activeBg + ' text-white shadow-lg'
											: colors.bg +
												' ' +
												colors.text} transition-all group-hover:from-sky-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg"
									>
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d={cat.icon}
											/>
										</svg>
									</span>
									<span class="font-medium">{cat.name}</span>
								</a>
							{/each}
						</nav>

						<!-- Баннер консультации -->
						<div class="mt-8 rounded-2xl bg-linear-to-br from-sky-500 to-cyan-600 p-6 text-white">
							<h3 class="text-lg font-semibold">Нужна помощь?</h3>
							<p class="mt-2 text-sm text-sky-100">Получите бесплатную консультацию дизайнера</p>
							<a
								href="/consultation"
								class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-sky-600 transition-all hover:bg-sky-50"
							>
								Записаться
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
							src={categoryData.heroImage}
							alt={categoryData.title}
							class="absolute inset-0 h-full w-full object-cover opacity-40"
						/>
						<div class="relative px-8 py-20 sm:px-12 sm:py-32">
							<h1 class="text-3xl font-bold text-white sm:text-4xl">
								{categoryData.title}
							</h1>
							<p class="mt-4 max-w-xl text-lg text-slate-300">
								{categoryData.description}
							</p>
							<div class="mt-6 flex flex-wrap gap-4">
								<a
									href="/consultation"
									class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
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
								<a
									href="/measurement"
									class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
								>
									Бесплатный замер
								</a>
							</div>
						</div>
					</div>

					<!-- Мобильные категории -->
					<div class="mt-6 lg:hidden">
						<h2 class="text-lg font-semibold text-slate-900">Категории</h2>
						<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
							{#each allCategories as cat}
								<a
									href="/mebel/{cat.slug}"
									class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all {cat.slug ===
									categorySlug
										? 'bg-sky-500 text-white'
										: 'bg-white text-slate-700 shadow-sm hover:shadow'}"
								>
									{cat.name}
								</a>
							{/each}
						</div>
					</div>

					<!-- Фильтры и сортировка -->
					<div class="mt-8 flex flex-wrap items-center justify-between gap-4">
						<div class="flex items-center gap-2">
							<span class="text-sm text-slate-500">Найдено:</span>
							<span class="font-semibold text-slate-900"
								>{categoryData.products.length} товаров</span
							>
						</div>
						<div class="flex items-center gap-4">
							<select
								class="rounded-lg border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:ring-sky-500"
							>
								<option>По популярности</option>
								<option>Сначала дешевле</option>
								<option>Сначала дороже</option>
								<option>По названию</option>
							</select>
							<div class="hidden sm:flex items-center gap-1 rounded-lg bg-white p-1 shadow-sm">
								<button aria-label="Показать сеткой" class="rounded-md bg-sky-500 p-2 text-white">
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
										/>
									</svg>
								</button>
								<button
									aria-label="Показать списком"
									class="rounded-md p-2 text-slate-400 hover:text-slate-600"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 10h16M4 14h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<!-- Сетка товаров -->
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each categoryData.products as product}
							<article
								class="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
							>
								<!-- Изображение -->
								<div class="relative aspect-[4/3] overflow-hidden">
									<img
										src={product.image}
										alt={product.name}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									></div>

									<!-- Быстрые действия -->
									<div
										class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
									>
										<a
											href="/mebel/{categorySlug}/{product.id}"
											class="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-lg transition-all hover:bg-sky-500 hover:text-white text-center"
										>
											Подробнее
										</a>
										<button
											aria-label="Добавить в избранное"
											class="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-lg transition-all hover:bg-sky-500 hover:text-white"
										>
											<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
										</button>
									</div>
								</div>

								<!-- Контент -->
								<div class="p-5">
									<div class="flex items-center gap-2 text-xs text-slate-500">
										<span class="rounded-full bg-slate-100 px-2 py-1">{product.style}</span>
										<span class="rounded-full bg-slate-100 px-2 py-1">{product.material}</span>
									</div>

									<h3
										class="mt-3 text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors"
									>
										{product.name}
									</h3>

									<div class="mt-3 flex items-center justify-between">
										<div>
											<span class="text-xs text-slate-500">от</span>
											<span class="ml-1 text-xl font-bold text-slate-900"
												>{formatPrice(product.price)}</span
											>
										</div>
										<a
											href="/consultation"
											class="inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
										>
											Заказать
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
							</article>
						{/each}
					</div>

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
								<h3 class="mt-3 font-semibold text-slate-900">Гарантия 5 лет</h3>
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
							Мы изготовим мебель по вашему индивидуальному проекту
						</p>
						<div class="mt-6 flex flex-wrap justify-center gap-4">
							<a
								href="/consultation"
								class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-sky-600 transition-all hover:bg-sky-50"
							>
								Заказать индивидуальный проект
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
