<svelte:head>
	<title>Мебель на заказ – Каталог мебели | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог мебели на заказ от компании Новострой. Кухни, шкафы, гардеробные, прихожие и другая корпусная мебель по индивидуальным размерам."
	/>
</svelte:head>

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
						
						<a href="/mebel/kuhni" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-amber-100 to-orange-100 text-amber-600 transition-all group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
								</svg>
							</span>
							<span class="font-medium">Кухни</span>
						</a>

						<a href="/mebel/shkafy" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-sky-100 to-blue-100 text-sky-600 transition-all group-hover:from-sky-500 group-hover:to-blue-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
								</svg>
							</span>
							<span class="font-medium">Шкафы</span>
						</a>

						<a href="/mebel/garderobnye" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-violet-100 to-purple-100 text-violet-600 transition-all group-hover:from-violet-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
							</span>
							<span class="font-medium">Гардеробные</span>
						</a>

						<a href="/mebel/prihozhie" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-100 to-teal-100 text-emerald-600 transition-all group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
								</svg>
							</span>
							<span class="font-medium">Прихожие</span>
						</a>

						<a href="/mebel/detskaya" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-pink-100 to-rose-100 text-pink-600 transition-all group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
							<span class="font-medium">Детская мебель</span>
						</a>

						<a href="/mebel/ofisnaya" class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600">
							<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-slate-100 to-gray-200 text-slate-600 transition-all group-hover:from-slate-500 group-hover:to-gray-600 group-hover:text-white group-hover:shadow-lg">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</span>
							<span class="font-medium">Офисная мебель</span>
						</a>
					</nav>

					<!-- Баннер консультации -->
					<div class="mt-8 rounded-2xl bg-linear-to-br from-sky-500 to-cyan-600 p-6 text-white">
						<h3 class="text-lg font-semibold">Нужна помощь?</h3>
						<p class="mt-2 text-sm text-sky-100">Получите бесплатную консультацию дизайнера</p>
						<a href="/consultation" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-sky-600 transition-all hover:bg-sky-50">
							Записаться
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
				<div class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800">
					<img
						src="https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg"
						alt="Мебель на заказ"
						class="absolute inset-0 h-full w-full object-cover opacity-40"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
							Мебель на заказ
						</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Создаём уникальную корпусную мебель по вашим размерам и дизайну. 
							Индивидуальный подход к каждому проекту.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<a href="/consultation" class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600">
								Заказать проект
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a href="/measurement" class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20">
								Бесплатный замер
							</a>
						</div>
					</div>
				</div>

				<!-- Мобильные категории -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Категории</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						<a href="/mebel/kuhni" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Кухни</span>
						</a>
						<a href="/mebel/shkafy" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Шкафы</span>
						</a>
						<a href="/mebel/garderobnye" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Гардеробные</span>
						</a>
						<a href="/mebel/prihozhie" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Прихожие</span>
						</a>
						<a href="/mebel/detskaya" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Детская</span>
						</a>
						<a href="/mebel/ofisnaya" class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</span>
							<span class="text-sm font-medium text-slate-700">Офисная</span>
						</a>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Почему выбирают нас</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Гарантия качества</h3>
							<p class="mt-2 text-sm text-slate-600">Используем только сертифицированные материалы от проверенных производителей</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Точные сроки</h3>
							<p class="mt-2 text-sm text-slate-600">Соблюдаем оговорённые сроки изготовления и доставки мебели</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Индивидуальный дизайн</h3>
							<p class="mt-2 text-sm text-slate-600">Разрабатываем проект под ваши размеры и пожелания</p>
						</div>
					</div>
				</div>

				<!-- Популярные решения -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные решения</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/mebel/kuhni" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg"
								alt="Кухни на заказ"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Кухни на заказ</h3>
								<p class="mt-1 text-sm text-slate-300">От классики до современного минимализма</p>
							</div>
						</a>

						<a href="/mebel/shkafy" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg"
								alt="Шкафы и гардеробные"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Шкафы и гардеробные</h3>
								<p class="mt-1 text-sm text-slate-300">Максимум функциональности и стиля</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Процесс работы -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Как мы работаем</h2>
					<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<div class="relative rounded-xl bg-white p-5 shadow-sm">
							<span class="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">1</span>
							<h3 class="mt-2 font-semibold text-slate-900">Консультация</h3>
							<p class="mt-1 text-sm text-slate-600">Обсуждаем ваши пожелания и бюджет</p>
						</div>
						<div class="relative rounded-xl bg-white p-5 shadow-sm">
							<span class="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">2</span>
							<h3 class="mt-2 font-semibold text-slate-900">Замер</h3>
							<p class="mt-1 text-sm text-slate-600">Бесплатный выезд специалиста</p>
						</div>
						<div class="relative rounded-xl bg-white p-5 shadow-sm">
							<span class="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">3</span>
							<h3 class="mt-2 font-semibold text-slate-900">Проект</h3>
							<p class="mt-1 text-sm text-slate-600">3D-визуализация и расчёт</p>
						</div>
						<div class="relative rounded-xl bg-white p-5 shadow-sm">
							<span class="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">4</span>
							<h3 class="mt-2 font-semibold text-slate-900">Установка</h3>
							<p class="mt-1 text-sm text-slate-600">Доставка и профессиональный монтаж</p>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div class="mt-12 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-600 p-8 text-center text-white sm:p-12">
					<h2 class="text-2xl font-bold sm:text-3xl">Готовы начать проект?</h2>
					<p class="mx-auto mt-3 max-w-md text-sky-100">
						Оставьте заявку и получите бесплатный дизайн-проект вашей мебели
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
