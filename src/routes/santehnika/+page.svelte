<svelte:head>
	<title>Сантехника для кухни – Мойки и смесители | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог сантехники для кухни от компании Новострой. Кухонные мойки, смесители, измельчители, диспенсеры. Подбор под вашу столешницу."
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
						<span class="text-slate-900 font-medium">Сантехника</span>
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
							Категории сантехники
						</h2>
						
						<a href="/santehnika/moyki" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600 transition-all group-hover:from-sky-500 group-hover:to-blue-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</span>
							<span class="font-medium">Кухонные мойки</span>
						</a>

						<a href="/santehnika/smesiteli" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 text-cyan-600 transition-all group-hover:from-cyan-500 group-hover:to-teal-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
								</svg>
							</span>
							<span class="font-medium">Смесители</span>
						</a>

						<a href="/santehnika/izmelchiteli" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600 transition-all group-hover:from-emerald-500 group-hover:to-green-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</span>
							<span class="font-medium">Измельчители</span>
						</a>

						<a href="/santehnika/dispensery" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 text-violet-600 transition-all group-hover:from-violet-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</span>
							<span class="font-medium">Диспенсеры</span>
						</a>

						<a href="/santehnika/filtry" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 transition-all group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
								</svg>
							</span>
							<span class="font-medium">Фильтры для воды</span>
						</a>

						<a href="/santehnika/aksessuary" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-gray-200 text-slate-600 transition-all group-hover:from-slate-500 group-hover:to-gray-600 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</span>
							<span class="font-medium">Аксессуары</span>
						</a>
					</nav>

					<!-- Баннер -->
					<div class="mt-8 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 p-6 text-white">
						<h3 class="text-lg font-semibold">Подбор под столешницу</h3>
						<p class="mt-2 text-sm text-sky-100">Поможем выбрать мойку и смеситель под ваш проект</p>
						<a href="/consultation" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-sky-600 transition-all hover:bg-sky-50">
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
						src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"
						alt="Сантехника для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-30"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
							Сантехника
						</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Кухонные мойки, смесители и аксессуары от ведущих производителей. 
							Подберём идеальное сочетание для вашей кухни.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a href="/consultation" class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600">
								Подобрать комплект
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a href="/stoleshnica" class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20">
								Столешницы
							</a>
						</div>
					</div>
				</div>

				<!-- Мобильные категории -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Категории</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						<a href="/santehnika/moyki" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Мойки</span>
						</a>
						<a href="/santehnika/smesiteli" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Смесители</span>
						</a>
						<a href="/santehnika/izmelchiteli" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Измельчители</span>
						</a>
						<a href="/santehnika/dispensery" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Диспенсеры</span>
						</a>
						<a href="/santehnika/filtry" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Фильтры</span>
						</a>
						<a href="/santehnika/aksessuary" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Аксессуары</span>
						</a>
					</div>
				</div>

				<!-- Бренды -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Бренды сантехники</h2>
					<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Omoikiri</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Blanco</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Franke</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Grohe</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">Hansgrohe</span>
						</div>
						<div class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm">
							<span class="text-lg font-bold text-slate-400">InSinkErator</span>
						</div>
					</div>
				</div>

				<!-- Типы моек -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Типы кухонных моек</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Нержавеющая сталь</h3>
							<p class="mt-2 text-sm text-slate-600">Классика для любой кухни. Прочные, гигиеничные, доступные по цене</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Гранитные композитные</h3>
							<p class="mt-2 text-sm text-slate-600">Стильный внешний вид, устойчивость к царапинам и высоким температурам</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Керамические</h3>
							<p class="mt-2 text-sm text-slate-600">Элегантность и долговечность. Идеально для классических интерьеров</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные категории</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/santehnika/moyki" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
								alt="Кухонные мойки"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Кухонные мойки</h3>
								<p class="mt-1 text-sm text-slate-300">Врезные, накладные, интегрированные</p>
							</div>
						</a>

						<a href="/santehnika/smesiteli" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800"
								alt="Смесители"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Смесители</h3>
								<p class="mt-1 text-sm text-slate-300">С выдвижным изливом, сенсорные, классические</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Почему выбирают нас</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Оригинальная продукция</h3>
							<p class="mt-2 text-sm text-slate-600">Только сертифицированная сантехника от официальных дистрибьюторов</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Профессиональный монтаж</h3>
							<p class="mt-2 text-sm text-slate-600">Установка с подключением и проверкой на герметичность</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Выгодные комплекты</h3>
							<p class="mt-2 text-sm text-slate-600">Скидки при покупке мойки со смесителем и аксессуарами</p>
						</div>
					</div>
				</div>

				<!-- Комплексное решение -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<div class="lg:flex lg:items-center lg:gap-8">
						<div class="lg:flex-1">
							<h2 class="text-2xl font-bold text-slate-900">Комплект для кухни</h2>
							<p class="mt-3 text-slate-600">
								Закажите мойку вместе со смесителем, измельчителем и диспенсером — получите скидку до 20% на комплект.
							</p>
							<ul class="mt-4 space-y-2">
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									Мойка + смеситель в едином стиле
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									Измельчитель пищевых отходов
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									Диспенсер для моющего средства
								</li>
							</ul>
						</div>
						<div class="mt-6 lg:mt-0">
							<a href="/consultation" class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600">
								Собрать комплект
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div class="mt-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-600 p-8 text-center text-white sm:p-12">
					<h2 class="text-2xl font-bold sm:text-3xl">Нужна помощь с выбором?</h2>
					<p class="mx-auto mt-3 max-w-md text-sky-100">
						Наши специалисты помогут подобрать сантехнику под вашу кухню и бюджет
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<a href="/consultation" class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-sky-600 transition-all hover:bg-sky-50">
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
