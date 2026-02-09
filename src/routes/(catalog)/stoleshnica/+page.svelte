<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import SidebarConsultationBanner from '$lib/components/SidebarConsultationBanner.svelte';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Категории уже загружены на сервере
	let categories = $derived(data.categories || []);
	let rubric = $derived(data.rubric);

	// Универсальная иконка для всех категорий (шеврон вправо)
	const categoryIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;

	// Background color gradients by slug
	const categoryGradients = {
		'kvarc': { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' },
		'akril': { from: 'from-sky-100', to: 'to-cyan-100', hover: 'group-hover:from-sky-500 group-hover:to-cyan-500', text: 'text-sky-600' },
		'hpl-plastik': { from: 'from-violet-100', to: 'to-violet-100', hover: 'group-hover:from-violet-500 group-hover:to-violet-500', text: 'text-violet-600' },
		'massiv': { from: 'from-orange-100', to: 'to-amber-100', hover: 'group-hover:from-orange-500 group-hover:to-amber-500', text: 'text-orange-600' },
		'kompakt-plita': { from: 'from-emerald-100', to: 'to-emerald-100', hover: 'group-hover:from-emerald-500 group-hover:to-emerald-500', text: 'text-emerald-600' },
		'keramika': { from: 'from-pink-100', to: 'to-pink-100', hover: 'group-hover:from-pink-500 group-hover:to-pink-500', text: 'text-pink-600' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' }
	};

	function getIcon(slug) {
		return categoryIcon;
	}

	function getGradient(slug) {
		return categoryGradients[slug] || categoryGradients.default;
	}
</script>

<svelte:head>
	<title>Столешницы для кухни – Каталог столешниц | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог столешниц для кухни от компании Новострой. Искусственный камень, кварц, акрил, ДСП, массив дерева. Изготовление по индивидуальным размерам."
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
							Материалы столешниц
						</h2>

						{#each categories as category (category.id || category.slug)}
							{@const gradient = getGradient(category.slug)}
							<a
								href="/stoleshnica/{category.slug}"
								class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600"
							>
								<span
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br {gradient.from} {gradient.to} {gradient.text} transition-all {gradient.hover} group-hover:text-white group-hover:shadow-lg"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										{@html getIcon(category.slug)}
									</svg>
								</span>
								<span class="font-medium">{category.value}</span>
							</a>
						{/each}
					</nav>

					<!-- Баннер -->
					<SidebarConsultationBanner
						title="Подбор столешницы"
						description="Поможем выбрать материал и рассчитать стоимость"
						color="amber"
					/>
				</div>
			</aside>

			<!-- Основной контент -->
			<main class="lg:col-span-3">
				<!-- Hero секция -->
				<div
					class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
				>
					<img
						src="/countertops_hero.png"
						alt="Столешницы для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-40"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Столешницы</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Изготавливаем столешницы из искусственного камня, кварца, массива и других материалов.
							Точный раскрой под вашу кухню с вырезами под мойку и варочную панель.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition-all hover:bg-amber-600"
							>
								Рассчитать стоимость
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
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Материалы</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#each categories as category (category.id || category.slug)}
							<a
								href="/stoleshnica/{category.slug}"
								class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
							>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-lg"
									style="background: {category.bg || '#f1f5f9'}; color: #475569;"
								>
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										{@html getIcon(category.slug)}
									</svg>
								</span>
								<span class="text-sm font-medium text-slate-700">{category.value}</span>
							</a>
						{/each}
					</div>
				</div>

				<!-- Сравнение материалов -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Сравнение материалов</h2>
					<div class="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
						<div class="overflow-x-auto">
							<table class="w-full text-left text-sm">
								<thead class="bg-slate-50">
									<tr>
										<th class="px-4 py-3 font-semibold text-slate-900">Материал</th>
										<th class="px-4 py-3 font-semibold text-slate-900">Цена</th>
										<th class="px-4 py-3 font-semibold text-slate-900">Прочность</th>
										<th class="px-4 py-3 font-semibold text-slate-900">Уход</th>
									</tr>
								</thead>
								<tbody class="divide-y divide-slate-100">
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Кварцевый агломерат</td>
										<td class="px-4 py-3 text-slate-600">от 15 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Высокая</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Акриловый камень</td>
										<td class="px-4 py-3 text-slate-600">от 12 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Средняя</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">ДСП / Постформинг</td>
										<td class="px-4 py-3 text-slate-600">от 3 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Средняя</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Массив дерева</td>
										<td class="px-4 py-3 text-slate-600">от 8 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Средняя</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
												>Требует ухода</span
											></td
										>
									</tr>
									<tr>
										<td class="px-4 py-3 font-medium text-slate-900">Керамика</td>
										<td class="px-4 py-3 text-slate-600">от 25 000 ₽/м²</td>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Высокая</span
											></td
										>
										<td class="px-4 py-3"
											><span
												class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700"
												>Простой</span
											></td
										>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Наши преимущества</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Точный расчёт</h3>
							<p class="mt-2 text-sm text-slate-600">
								Замер с точностью до миллиметра для идеальной подгонки
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Профессиональный монтаж</h3>
							<p class="mt-2 text-sm text-slate-600">
								Установка с герметизацией стыков и вырезами под технику
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Гарантия 2 года</h3>
							<p class="mt-2 text-sm text-slate-600">Гарантия на материал и работы по установке</p>
						</div>
					</div>
				</div>

				<!-- Популярные решения -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные решения</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a href="/stoleshnica/kvarc" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800"
								alt="Кварцевые столешницы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Кварцевый агломерат</h3>
								<p class="mt-1 text-sm text-slate-300">
									Прочность и элегантность натурального камня
								</p>
							</div>
						</a>

						<a href="/stoleshnica/akril" class="group relative overflow-hidden rounded-2xl">
							<img
								src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
								alt="Акриловые столешницы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Акриловый камень</h3>
								<p class="mt-1 text-sm text-slate-300">Бесшовное соединение и любые формы</p>
							</div>
						</a>
					</div>
				</div>

				<!-- Услуги -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<h2 class="text-2xl font-bold text-slate-900">Что входит в стоимость</h2>
					<div class="mt-6 grid gap-4 sm:grid-cols-2">
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Выезд замерщика</h3>
								<p class="text-sm text-slate-600">Бесплатный замер помещения</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Изготовление</h3>
								<p class="text-sm text-slate-600">Производство по вашим размерам</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Вырезы под технику</h3>
								<p class="text-sm text-slate-600">Под мойку, варочную панель, смеситель</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<svg
								class="h-6 w-6 shrink-0 text-emerald-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<div>
								<h3 class="font-medium text-slate-900">Доставка и монтаж</h3>
								<p class="text-sm text-slate-600">Профессиональная установка</p>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div
					class="mt-12 rounded-2xl bg-linear-to-r from-amber-500 to-orange-600 p-8 text-center text-white sm:p-12"
				>
					<h2 class="text-2xl font-bold sm:text-3xl">Рассчитайте стоимость столешницы</h2>
					<p class="mx-auto mt-3 max-w-md text-amber-100">
						Оставьте заявку и получите расчёт стоимости с учётом всех вырезов и монтажа
					</p>
					<div class="mt-6 flex flex-wrap justify-center gap-4">
						<ConsultationButton
							class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-amber-600 transition-all hover:bg-amber-50"
						>
							Получить расчёт
						</ConsultationButton>
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
