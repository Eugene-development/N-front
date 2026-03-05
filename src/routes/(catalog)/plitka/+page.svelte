<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import CatalogSidebar from '$lib/components/CatalogSidebar.svelte';
	import ServiceOrderIsland from '$lib/islands/ServiceOrderIsland.svelte';
	import { serviceOrderStore } from '$lib/stores/serviceOrder.svelte.js';

	// Данные загружаются на сервере в +page.server.js
	let { data } = $props();
	
	// Бренды уже загружены на сервере
	let brands = $derived(data.brands || []);

	// Функция для получения имени бренда (поддержка и value и name)
	function getBrandName(brand) {
		return brand.value || brand.name;
	}
</script>

<svelte:head>
	<title>Плитка – Каталог плитки для интерьера | Компания Новострой</title>
	<meta
		name="description"
		content="Каталог плитки от компании Новострой. Керамическая плитка, керамогранит, мозаика и декоративная плитка от ведущих производителей для кухни, ванной и других помещений."
	/>
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<div class="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8">
		<div class="lg:grid lg:grid-cols-4 lg:gap-8">
			<!-- Сайдбар с брендами -->
			<CatalogSidebar
				items={brands}
				rubricSlug="plitka"
				title="Бренды"
				externalLinks={false}
				banner={{
					title: 'Подбор плитки',
					description: 'Поможем выбрать плитку под ваш дизайн-проект',
					color: 'sky'
				}}
			/>

			<!-- Основной контент -->
			<main class="lg:col-span-3">
				<!-- Hero секция -->
				<div
					class="relative overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 to-slate-800"
				>
					<div class="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-slate-900/80"></div>
					<div class="relative px-8 py-16 sm:px-12 sm:py-20">
						<h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Плитка</h1>
						<p class="mt-4 max-w-xl text-lg text-slate-300">
							Керамическая плитка, керамогранит и мозаика от ведущих мировых производителей.
							Подберём оптимальное решение для любого интерьера.
						</p>
						<div class="mt-8 flex flex-wrap gap-4">
							<ConsultationButton
								class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Подобрать плитку
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</ConsultationButton>
						</div>
					</div>
				</div>

				<!-- Мобильные бренды -->
				<div class="mt-8 lg:hidden">
					<h2 class="text-lg font-semibold text-slate-900">Бренды</h2>
					<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{#each brands as brand (brand.slug)}
							<a
								href="/plitka/{brand.slug}"
								class="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
							>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-lg"
									style="background: {brand.bg || '#f1f5f9'}; color: #475569;"
								>
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
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
								href="/plitka/{brand.slug}"
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
					<h2 class="text-2xl font-bold text-slate-900">Почему выбирают нас</h2>
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
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Сертифицированная продукция</h3>
							<p class="mt-2 text-sm text-slate-600">
								Вся плитка сертифицирована и соответствует стандартам качества
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
										d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
									/>
								</svg>
							</div>
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Широкий ассортимент</h3>
							<p class="mt-2 text-sm text-slate-600">
								Более 1000 коллекций плитки различных стилей и форматов
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
							<h3 class="mt-4 text-lg font-semibold text-slate-900">Профессиональный подбор</h3>
							<p class="mt-2 text-sm text-slate-600">
								Поможем подобрать плитку, подходящую по стилю и бюджету вашего проекта
							</p>
						</div>
					</div>
				</div>

				<!-- Популярные категории -->
				<div class="mt-12">
					<h2 class="text-2xl font-bold text-slate-900">Популярные категории</h2>
					<div class="mt-6 grid gap-6 sm:grid-cols-2">
						<div
							class="group relative overflow-hidden rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 p-8"
						>
							<div class="relative">
								<h3 class="text-xl font-bold text-slate-900">Керамогранит</h3>
								<p class="mt-2 text-sm text-slate-600">
									Прочный и долговечный материал для пола и стен
								</p>
							</div>
						</div>

						<div
							class="group relative overflow-hidden rounded-2xl bg-linear-to-br from-sky-50 to-blue-50 p-8"
						>
							<div class="relative">
								<h3 class="text-xl font-bold text-slate-900">Керамическая плитка</h3>
								<p class="mt-2 text-sm text-slate-600">Классическое решение для ванной и кухни</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Комплексное решение -->
				<div class="mt-12 rounded-2xl bg-white p-8 shadow-sm">
					<div class="lg:flex lg:items-center lg:gap-8">
						<div class="lg:flex-1">
							<h2 class="text-2xl font-bold text-slate-900">Комплексное решение</h2>
							<p class="mt-3 text-slate-600">
								Закажите плитку вместе с дизайн-проектом и получите скидку на весь комплект. Наши
								дизайнеры подберут плитку, которая идеально впишется в ваш интерьер.
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
									Подбор плитки под дизайн-проект
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
									Расчёт количества материала
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
									Доставка и укладка под ключ
								</li>
							</ul>
						</div>
						<div class="mt-6 lg:mt-0">
							<button
								onclick={() => serviceOrderStore.open('furniture-project')}
								class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
							>
								Заказать дизайн-проект
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
						Наши специалисты помогут подобрать плитку под ваши задачи и бюджет
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
