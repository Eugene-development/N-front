<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import SidebarConsultationBanner from '$lib/components/SidebarConsultationBanner.svelte';
	import ServiceOrderIsland from '$lib/islands/ServiceOrderIsland.svelte';
	import { serviceOrderStore } from '$lib/stores/serviceOrder.svelte.js';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Бренды уже загружены на сервере
	let brands = $derived(data.brands || []);

	// Универсальная иконка для всех брендов (шеврон вправо)
	const brandIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />`;

	// Background color gradients by slug
	const brandGradients = {
		'bosch': { from: 'from-sky-100', to: 'to-blue-100', hover: 'group-hover:from-sky-500 group-hover:to-blue-500', text: 'text-sky-600' },
		'siemens': { from: 'from-teal-100', to: 'to-cyan-100', hover: 'group-hover:from-teal-500 group-hover:to-cyan-500', text: 'text-teal-600' },
		'electrolux': { from: 'from-amber-100', to: 'to-yellow-100', hover: 'group-hover:from-amber-500 group-hover:to-yellow-500', text: 'text-amber-600' },
		'miele': { from: 'from-red-100', to: 'to-rose-100', hover: 'group-hover:from-red-500 group-hover:to-rose-500', text: 'text-red-600' },
		'samsung': { from: 'from-indigo-100', to: 'to-blue-100', hover: 'group-hover:from-indigo-500 group-hover:to-blue-500', text: 'text-indigo-600' },
		'lg': { from: 'from-pink-100', to: 'to-rose-100', hover: 'group-hover:from-pink-500 group-hover:to-rose-500', text: 'text-pink-600' },
		'aeg': { from: 'from-emerald-100', to: 'to-green-100', hover: 'group-hover:from-emerald-500 group-hover:to-green-500', text: 'text-emerald-600' },
		'smeg': { from: 'from-violet-100', to: 'to-purple-100', hover: 'group-hover:from-violet-500 group-hover:to-purple-500', text: 'text-violet-600' },
		default: { from: 'from-slate-100', to: 'to-gray-200', hover: 'group-hover:from-slate-500 group-hover:to-gray-600', text: 'text-slate-600' }
	};

	function getIcon(slug) {
		return brandIcon;
	}

	function getGradient(slug) {
		return brandGradients[slug] || brandGradients.default;
	}

	// Функция для получения имени бренда (поддержка и value и name)
	function getBrandName(brand) {
		return brand.value || brand.name;
	}
</script>

<svelte:head>
	<title>Бытовая техника – Каталог техники для кухни | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог бытовой техники от компании Новострой. Варочные панели, духовые шкафы, вытяжки, холодильники и другая встраиваемая техника для кухни."
	/>
</svelte:head>

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

						{#each brands as brand (brand.slug)}
							{@const gradient = getGradient(brand.slug)}
							<a
								href="/bytovaya-tehnika/{brand.slug}"
								class="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all hover:bg-white hover:shadow-md hover:text-sky-600"
							>
								<span
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br {gradient.from} {gradient.to} {gradient.text} transition-all {gradient.hover} group-hover:text-white group-hover:shadow-lg"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										{@html getIcon(brand.slug)}
									</svg>
								</span>
								<span class="font-medium">{getBrandName(brand)}</span>
							</a>
						{/each}
					</nav>

					<!-- Баннер консультации -->
					<SidebarConsultationBanner
						title="Подбор техники"
						description="Поможем выбрать технику под ваш проект кухни"
						color="slate"
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
						src="/appliances_hero.png"
						alt="Бытовая техника для кухни"
						class="absolute inset-0 h-full w-full object-cover opacity-40"
					/>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Бытовая техника</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Встраиваемая и отдельностоящая техника от ведущих мировых производителей. Подберём
							оптимальное решение с учётом ваших пожеланий и бюджета.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Подобрать технику
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
								href="/mebel/kuhni"
								class="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition-all hover:bg-white/20"
							>
								Кухни под технику
							</a>
						</div>
					</div>
				</div>

				<!-- Мобильные бренды -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Бренды</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#each brands as brand (brand.slug)}
							{@const gradient = getGradient(brand.slug)}
							<a
								href="/bytovaya-tehnika/{brand.slug}"
								class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
							>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-lg"
									style="background: {brand.bg || '#f1f5f9'}; color: #475569;"
								>
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										{@html getIcon(brand.slug)}
									</svg>
								</span>
								<span class="text-sm font-medium text-slate-700">{getBrandName(brand)}</span>
							</a>
						{/each}
					</div>
				</div>

				<!-- Бренды -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Работаем с лучшими брендами</h2>
					<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
						{#each brands.slice(0, 6) as brand (brand.slug)}
							<a
								href="/bytovaya-tehnika/{brand.slug}"
								class="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
							>
								{#if brand.logo}
									<img
										src={brand.logo}
										alt={getBrandName(brand)}
										class="max-h-10 max-w-full object-contain"
									/>
								{:else}
									<span class="text-lg font-bold text-slate-400">{getBrandName(brand)}</span>
								{/if}
							</a>
						{/each}
					</div>
				</div>

				<!-- Преимущества -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Почему покупают у нас</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Официальная гарантия</h3>
							<p class="mt-2 text-sm text-slate-600">
								Вся техника с официальной гарантией производителя от 1 до 5 лет
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
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Выгодные цены</h3>
							<p class="mt-2 text-sm text-slate-600">
								Прямые поставки от производителей без посредников
							</p>
						</div>

						<div class="rounded-xl bg-white p-6 shadow-sm">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Быстрая доставка</h3>
							<p class="mt-2 text-sm text-slate-600">
								Доставим технику в удобное время с подъёмом на этаж
							</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные категории</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<a
							href="/bytovaya-tehnika/varochnye-paneli"
							class="group relative overflow-hidden rounded-2xl"
						>
							<img
								src="https://images.unsplash.com/photo-1585515320310-259814833e62?w=800"
								alt="Варочные панели"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<h3 class="text-xl font-bold text-white">Варочные панели</h3>
								<p class="mt-1 text-sm text-slate-300">Индукционные, газовые, электрические</p>
							</div>
						</a>

						<a
							href="/bytovaya-tehnika/duhovye-shkafy"
							class="group relative overflow-hidden rounded-2xl"
						>
							<img
								src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800"
								alt="Духовые шкафы"
								class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"
							></div>
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
								Закажите кухню вместе с техникой и получите скидку до 15% на весь комплект. Наши
								дизайнеры подберут технику, которая идеально впишется в ваш проект.
							</p>
							<ul class="mt-4 space-y-2">
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg
										class="h-5 w-5 text-emerald-500"
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
									Единый проект кухни и техники
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg
										class="h-5 w-5 text-emerald-500"
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
									Скидка на комплект до 15%
								</li>
								<li class="flex items-center gap-2 text-sm text-slate-600">
									<svg
										class="h-5 w-5 text-emerald-500"
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
									Одновременная доставка и установка
								</li>
							</ul>
						</div>
						<div class="mt-6 lg:mt-0">
							<button
								onclick={() => serviceOrderStore.open('furniture-project')}
								class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Заказать проект мебели
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<!-- CTA секция -->
				<div
					class="mt-12 rounded-2xl bg-linear-to-r from-slate-800 to-slate-900 p-8 text-center text-white sm:p-12"
				>
					<h2 class="text-2xl font-bold sm:text-3xl">Нужна помощь с выбором?</h2>
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

<!-- Модальная форма заказа услуги -->
<ServiceOrderIsland />
