<svelte:head>
	<title>Бытовая техника – Каталог техники для кухни | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог бытовой техники от компании Новострой. Варочные панели, духовые шкафы, вытяжки, холодильники и другая встраиваемая техника для кухни."
	/>
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<!-- Хлебные крошки -->
	<div class="bg-white border-b border-slate-100">
		<div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
			<nav class="flex" aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-sm">
					<li>
						<a href="/" class="text-slate-500 hover:text-sky-600 transition-colors">Главная</a>
					</li>
					<li class="flex items-center">
						<svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</li>
					<li>
						<span class="text-slate-900 font-medium">Бытовая техника</span>
					</li>
				</ol>
			</nav>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="lg:grid lg:grid-cols-4 lg:gap-8">
			<!-- Сайдбар с категориями -->
			<aside class="hidden lg:block">
				<div class="sticky top-24">
					<nav class="space-y-1">
						<h2 class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
							Категории техники
						</h2>
						
						<a href="/tehnika/varochnye-paneli" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-100 to-orange-100 text-red-600 transition-all group-hover:from-red-500 group-hover:to-orange-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
								</svg>
							</span>
							<span class="font-medium">Варочные панели</span>
						</a>

						<a href="/tehnika/duhovye-shkafy" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-600 transition-all group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</span>
							<span class="font-medium">Духовые шкафы</span>
						</a>

						<a href="/tehnika/vytyazhki" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600 transition-all group-hover:from-sky-500 group-hover:to-blue-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
								</svg>
							</span>
							<span class="font-medium">Вытяжки</span>
						</a>

						<a href="/tehnika/holodilniki" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 text-cyan-600 transition-all group-hover:from-cyan-500 group-hover:to-teal-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
								</svg>
							</span>
							<span class="font-medium">Холодильники</span>
						</a>

						<a href="/tehnika/posudomoechnye" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600 transition-all group-hover:from-emerald-500 group-hover:to-green-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</span>
							<span class="font-medium">Посудомоечные машины</span>
						</a>

						<a href="/tehnika/stiralnye" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 text-violet-600 transition-all group-hover:from-violet-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</span>
							<span class="font-medium">Стиральные машины</span>
						</a>

						<a href="/tehnika/mikrovolnovki" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-gray-200 text-slate-600 transition-all group-hover:from-slate-500 group-hover:to-gray-600 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</span>
							<span class="font-medium">СВЧ-печи</span>
						</a>
					</nav>

					<!-- Баннер консультации -->
					<div class="mt-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white">
						<h3 class="text-lg font-semibold">Подбор техники</h3>
						<p class="mt-2 text-sm text-slate-300">Поможем выбрать технику под ваш проект кухни</p>
						<a href="/consultation" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-all hover:bg-slate-100">
							Получить консультацию
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>
				</div>
			</aside>

			<!-- Основной контент -->
			<main class="lg:col-span-3">
				<!-- Hero секция -->
				<div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800">
					<img
						src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200"
						alt="Бытовая техника для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-30"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
							Бытовая техника
						</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Встраиваемая и отдельностоящая техника от ведущих мировых производителей. 
							Подберём оптимальное решение для вашей кухни.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a href="/consultation" class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600">
								Подобрать технику
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a href="/mebel/kuhni" class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20">
								Кухни под технику
							</a>
						</div>
					</div>
				</div>

				<!-- Мобильные категории -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Категории</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						<a href="/tehnika/varochnye-paneli" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Варочные панели</span>
						</a>
						<a href="/tehnika/duhovye-shkafy" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Духовые шкафы</span>
						</a>
						<a href="/tehnika/vytyazhki" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Вытяжки</span>
						</a>
						<a href="/tehnika/holodilniki" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Холодильники</span>
						</a>
						<a href="/tehnika/posudomoechnye" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Посудомойки</span>
						</a>
						<a href="/tehnika/stiralnye" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Стиральные</span>
						</a>
					</div>
				</div>

				<!-- Бренды -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Работаем с лучшими брендами</h2>
					<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Bosch</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Siemens</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Electrolux</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Miele</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Samsung</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">LG</span>
						</div>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Почему покупают у нас</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Официальная гарантия</h3>
							<p class="mt-2 text-sm text-slate-600">Вся техника с официальной гарантией производителя от 1 до 5 лет</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Выгодные цены</h3>
							<p class="mt-2 text-sm text-slate-600">Прямые поставки от производителей без посредников</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Быстрая доставка</h3>
							<p class="mt-2 text-sm text-slate-600">Доставим технику в удобное время с подъёмом на этаж</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные категории</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/tehnika/varochnye-paneli" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1585515320310-259814833e62?w=800"
								alt="Варочные панели"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Варочные панели</h3>
								<p class="mt-1 text-sm text-slate-300">Индукционные, газовые, электрические</p>
							</div>
						</a>

						<a href="/tehnika/duhovye-shkafy" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800"
								alt="Духовые шкафы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Духовые шкафы</h3>
								<p class="mt-1 text-sm text-slate-300">Встраиваемые с конвекцией и грилем</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Комплексное решение -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<div class="lg:flex lg:items-center lg:gap-8">
						<div class="lg:flex-1">
							<h2 class="text-2xl font-bold text-slate-900">Комплексное решение</h2>
							<p class="mt-3 text-slate-600">
								Закажите кухню вместе с техникой и получите скидку до 15% на весь комплект. 
								Наши дизайнеры подберут технику, которая идеально впишется в ваш проект.
							</p>
							<ul class="mt-4 space-y-2">
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									Единый проект кухни и техники
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									Скидка на комплект до 15%
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									Одновременная доставка и установка
								</li>
							</ul>
						</div>
						<div class="mt-6 lg:mt-0">
							<a href="/furniture-project" class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600">
								Заказать проект
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div class="mt-12 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-center text-white sm:p-12">
					<h2 class="text-2xl font-bold sm:text-3xl">Нужна помощь с выбором?</h2>
					<p class="mx-auto mt-3 max-w-md text-slate-300">
						Наши специалисты помогут подобрать технику под ваши задачи и бюджет
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<a href="/consultation" class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-slate-800 transition-all hover:bg-slate-100">
							Получить консультацию
						</a>
						<a href="tel:+74951234567" class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							Позвонить
						</a>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
