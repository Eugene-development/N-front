<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
</script>

<svelte:head>
	<title>Гарантии на мебель и технику | Компания Новострой</title>
	<meta name="description" content="Расширенная гарантия на мебель, фурнитуру, столешницы и бытовую технику. Официальная гарантия от производителей до 25 лет." />
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<!-- Hero секция -->
	<div class="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
		<div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
		<div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/25">
					<svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
					Гарантия качества
				</h1>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
					Мы уверены в качестве продукции наших партнёров. Вся продукция имеет расширенную гарантию на материалы и работу мастеров.
				</p>
			</div>
		</div>
		<!-- Волна снизу -->
		<div class="absolute bottom-0 left-0 right-0">
			<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
			</svg>
		</div>
	</div>

	<!-- Основные гарантии -->
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-slate-900">Сроки гарантии</h2>
			<p class="mx-auto mt-4 max-w-2xl text-slate-600">Официальная гарантия от производителей на все категории товаров</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Карточка 1 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-amber-100 to-orange-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">3+</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Фасады из массива</h3>
					<p class="mt-1 text-sm text-slate-500">Натуральное дерево с защитным покрытием</p>
				</div>
			</div>

			<!-- Карточка 2 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-sky-100 to-blue-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-500 text-white shadow-lg shadow-sky-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">5</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Каркасы мебели</h3>
					<p class="mt-1 text-sm text-slate-500">ЛДСП и МДФ высокого качества</p>
				</div>
			</div>

			<!-- Карточка 3 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-emerald-100 to-teal-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">5+</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Столешницы</h3>
					<p class="mt-1 text-sm text-slate-500">Кварц, акрил и стеновые панели</p>
				</div>
			</div>

			<!-- Карточка 4 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-violet-100 to-purple-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">10</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Бытовая техника</h3>
					<p class="mt-1 text-sm text-slate-500">Официальная гарантия производителя</p>
				</div>
			</div>
		</div>

		<!-- Вторая строка карточек -->
		<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Карточка 5 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-slate-100 to-gray-200 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-slate-600 to-gray-700 text-white shadow-lg shadow-slate-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">5</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Алюминиевый профиль</h3>
					<p class="mt-1 text-sm text-slate-500">Фасады с алюминиевой рамкой</p>
				</div>
			</div>

			<!-- Карточка 6 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-cyan-100 to-sky-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">25</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Фурнитура Blum</h3>
					<p class="mt-1 text-sm text-slate-500">Петли и направляющие премиум-класса</p>
				</div>
			</div>

			<!-- Карточка 7 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">15</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Мойки</h3>
					<p class="mt-1 text-sm text-slate-500">Нержавеющая сталь и гранит</p>
				</div>
			</div>

			<!-- Карточка 8 -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
				<div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br from-pink-100 to-rose-100 opacity-50 transition-transform duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25">
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
						</svg>
					</div>
					<div class="mt-4">
						<span class="text-4xl font-bold text-slate-900">10</span>
						<span class="ml-1 text-lg text-slate-500">лет</span>
					</div>
					<h3 class="mt-2 text-lg font-semibold text-slate-900">Стекло и зеркала</h3>
					<p class="mt-1 text-sm text-slate-500">Закалённое стекло и зеркальные фасады</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Что покрывает гарантия -->
	<div class="bg-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
				<div>
					<h2 class="text-3xl font-bold text-slate-900">Что покрывает гарантия</h2>
					<p class="mt-4 text-slate-600">
						Наша гарантия распространяется на производственные дефекты материалов и качество сборки. 
						Мы несём ответственность за каждый элемент вашей мебели.
					</p>
					
					<div class="mt-8 space-y-4">
						<div class="flex items-start gap-4">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-slate-900">Дефекты материалов</h3>
								<p class="mt-1 text-sm text-slate-500">Сколы, трещины, отслоение покрытия при нормальной эксплуатации</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-slate-900">Качество сборки</h3>
								<p class="mt-1 text-sm text-slate-500">Неплотное прилегание, перекосы, скрипы механизмов</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-slate-900">Работа фурнитуры</h3>
								<p class="mt-1 text-sm text-slate-500">Поломка петель, направляющих, подъёмных механизмов</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-slate-900">Монтажные работы</h3>
								<p class="mt-1 text-sm text-slate-500">Качество установки и подключения техники</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="mt-12 lg:mt-0">
					<div class="relative">
						<div class="absolute -inset-4 rounded-3xl bg-linear-to-r from-sky-100 to-cyan-100 opacity-50"></div>
						<img 
							src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800" 
							alt="Качественная мебель" 
							class="relative rounded-2xl shadow-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Процесс обращения -->
	<div class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-3xl font-bold text-slate-900">Как обратиться по гарантии</h2>
				<p class="mx-auto mt-4 max-w-2xl text-slate-600">Простой процесс решения гарантийных вопросов</p>
			</div>
			
			<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				<div class="relative text-center">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-sky-500/25">1</div>
					<h3 class="mt-6 text-lg font-semibold text-slate-900">Свяжитесь с нами</h3>
					<p class="mt-2 text-sm text-slate-500">Позвоните или оставьте заявку на сайте с описанием проблемы</p>
					<!-- Стрелка -->
					<div class="absolute right-0 top-8 hidden h-0.5 w-full bg-linear-to-r from-sky-200 to-transparent lg:block lg:w-1/2 lg:translate-x-1/2"></div>
				</div>
				
				<div class="relative text-center">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-sky-500/25">2</div>
					<h3 class="mt-6 text-lg font-semibold text-slate-900">Диагностика</h3>
					<p class="mt-2 text-sm text-slate-500">Наш специалист выезжает для осмотра и определения причины</p>
					<div class="absolute right-0 top-8 hidden h-0.5 w-full bg-linear-to-r from-sky-200 to-transparent lg:block lg:w-1/2 lg:translate-x-1/2"></div>
				</div>
				
				<div class="relative text-center">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-sky-500/25">3</div>
					<h3 class="mt-6 text-lg font-semibold text-slate-900">Решение</h3>
					<p class="mt-2 text-sm text-slate-500">Ремонт на месте или замена дефектных элементов</p>
					<div class="absolute right-0 top-8 hidden h-0.5 w-full bg-linear-to-r from-sky-200 to-transparent lg:block lg:w-1/2 lg:translate-x-1/2"></div>
				</div>
				
				<div class="text-center">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-2xl font-bold text-white shadow-lg shadow-emerald-500/25">✓</div>
					<h3 class="mt-6 text-lg font-semibold text-slate-900">Готово</h3>
					<p class="mt-2 text-sm text-slate-500">Проблема решена, вы продолжаете пользоваться мебелью</p>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA секция -->
	<div class="bg-linear-to-r from-slate-800 to-slate-900 py-16">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
				<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
				</svg>
			</div>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Гарантийный случай?</h2>
			<p class="mx-auto mt-4 max-w-xl text-lg text-slate-300">
				Заполните форму или позвоните нам — решим вопрос в кратчайшие сроки
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<ConsultationButton class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl">
					Оставить заявку
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</ConsultationButton>
				<a href="tel:+74951234567" class="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-white/20">
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					Позвонить
				</a>
			</div>
		</div>
	</div>
</div>
