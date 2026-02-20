<!-- Навигационное меню - нижняя часть хэдера -->
<script>
	import { page } from '$app/stores';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { getRubrics } from '$lib/api/graphql.js';
	import { cityStore } from '$lib/stores/city.svelte.js';


	let visibleServicesMenu = $state(false);
	let visibleCatalogMenu = $state(false);
	let visibleCityMenu = $state(false);
	let hoveredItem = $state(null); // Отслеживание наведения курсора


	// Статические рубрики (fallback)
	const fallbackRubrics = [
		{ href: '/mebel', label: 'Мебель' },
		{ href: '/bytovaya-tehnika', label: 'Бытовая техника' },
		{ href: '/stoleshnica', label: 'Столешницы' },
		{ href: '/santehnika', label: 'Сантехника' },
		{ href: '/furnitura', label: 'Фурнитура' },
		{ href: '/osveschenie', label: 'Освещение' },
		{ href: '/aksessuary', label: 'Аксессуары' }
	];

	// Динамически загружаемые рубрики для каталога
	let catalogItems = $state([]);
	let loadingCatalog = $state(true);

	onMount(async () => {
		try {
			const rubrics = await getRubrics();
			if (rubrics && rubrics.length > 0) {
				catalogItems = rubrics.map(rubric => ({
					href: `/${rubric.slug}`,
					label: rubric.value
				}));
			} else {
				// Используем fallback если API вернул пустой массив
				catalogItems = fallbackRubrics;
			}
		} catch (error) {
			console.error('Failed to load rubrics:', error);
			// Fallback к статическим рубрикам
			catalogItems = fallbackRubrics;
		} finally {
			loadingCatalog = false;
		}
	});

	const menuItems = [
		{ href: '/', label: 'Главная', icon: 'home' },
		{ href: '/actions', label: 'Акции', icon: 'sale' }
	];

	const cities = [
		{ label: 'Москва и МО' },
		{ label: 'Санкт-Петербург' },
		{ label: 'Новосибирск' },
		{ label: 'Екатеринбург' },
		{ label: 'Казань' },
		{ label: 'Нижний Новгород' }
	];

	const serviceItems = [
		{ href: '/consultation', label: 'Бесплатная консультация', icon: 'chat', desc: 'Поможем с выбором' },
		{ href: '/design-project', label: 'Дизайн интерьера', icon: 'design', desc: '3D визуализация' },
		{ href: '/measurement', label: 'Замер помещения', icon: 'ruler', desc: 'Выезд бесплатно' },
		{ href: '/furniture-project', label: 'Проект мебели', icon: 'project', desc: 'Индивидуальный подход' },
		{ href: '/assembly', label: 'Сборка и установка', icon: 'tools', desc: 'Профессиональный монтаж' }
	];
	/* Вычисляемые свойства для подсветки активных разделов */
	let isServicesActive = $derived(
		hoveredItem === 'services' || 
		(hoveredItem === null && (visibleServicesMenu || serviceItems.some((item) => $page.url.pathname === item.href)))
	);

	let isCatalogActive = $derived(
		hoveredItem === 'catalog' || 
		(hoveredItem === null && (visibleCatalogMenu || catalogItems.some((item) => $page.url.pathname.startsWith(item.href))))
	);
	
	// Функция для проверки активности обычного пункта меню
	function isMenuItemActive(href) {
		return hoveredItem === href || (hoveredItem === null && $page.url.pathname === href);
	}
</script>

<header class="bg-gradient-to-r from-gray-100/80 via-gray-50/85 to-gray-100/80 backdrop-blur-md">
	<nav
		class="font-nav max-w-9xl mx-auto hidden items-center justify-between px-6 py-2.5 lg:flex lg:px-8"
		aria-label="Global"
	>
		<!-- Логотип -->
		<div class="flex items-center lg:flex-1">
			<a
				href="/"
				class="group relative -m-1.5 -mb-10 rounded-b-2xl bg-gray-100 p-3 shadow-lg ring-1 ring-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 z-30"
			>
				<span class="sr-only">Компания Новострой</span>
				<img
					class="size-16 w-auto transition-transform duration-300 group-hover:scale-105"
					src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
					alt="Логотип компании Новострой"
				/>
				<div
					class="absolute inset-0 rounded-b-2xl bg-linear-to-t from-sky-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
			</a>
		</div>

		<!-- Навигация -->
		<div class="flex items-center gap-x-4">
			{#each menuItems as item, i}
				<a
					href={item.href}
					class="nav-item group relative flex items-center px-3 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300"
					class:active={isMenuItemActive(item.href)}
					onmouseenter={() => (hoveredItem = item.href)}
					onmouseleave={() => (hoveredItem = null)}
				>
					<span
						class="transition-colors duration-300 group-hover:text-sky-600 {isMenuItemActive(
							item.href
						)
							? 'text-sky-600'
							: 'text-slate-700'}"
					>
						{item.label}
					</span>

					<!-- Animated Underline -->
					<span
						class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"
						class:scale-x-100={isMenuItemActive(item.href)}
					></span>
				</a>
			{/each}

			<!-- Dropdown каталог -->
			<div
				class="relative h-full flex items-center"
				role="navigation"
				onmouseenter={() => {
					visibleCatalogMenu = true;
					hoveredItem = 'catalog';
				}}
				onmouseleave={() => {
					visibleCatalogMenu = false;
					hoveredItem = null;
				}}
			>
				<button
					type="button"
					class="nav-item group relative flex items-center gap-x-1 px-3 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 hover:text-sky-600 {isCatalogActive
						? 'text-sky-600'
						: 'text-slate-700'}"
					aria-expanded={visibleCatalogMenu}
				>
					<span>Каталог</span>
					<!-- <svg
						class="h-3.5 w-3.5 transition-transform duration-300 {visibleCatalogMenu
							? 'rotate-180 text-sky-500'
							: 'text-slate-400 group-hover:text-sky-500'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg> -->

					<!-- Animated Underline -->
					<span
						class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"
						class:scale-x-100={isCatalogActive}
					></span>
				</button>

				{#if visibleCatalogMenu}
					<!-- Невидимый мост между кнопкой и dropdown -->
					<div class="absolute left-0 right-0 top-full h-3"></div>
					<div
						transition:fly={{ y: -10, duration: 200, easing: cubicOut }}
						role="menu"
						tabindex="0"
						class="absolute left-1/2 top-full z-40 mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5"
					>
						<!-- Декоративный градиент сверху -->
						<div
							class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-500 to-transparent"
						></div>

						{#if loadingCatalog}
							<div class="flex items-center justify-center py-4">
								<svg
									class="h-5 w-5 animate-spin text-sky-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								<span class="ml-2 text-sm text-slate-500">Загрузка...</span>
							</div>
						{:else if catalogItems.length === 0}
							<div class="px-4 py-3 text-center text-sm text-slate-500">
								Нет доступных категорий
							</div>
						{:else}
							{#each catalogItems as item, idx}
								<a
									href={item.href}
									class="group flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-linear-to-r hover:from-sky-50 hover:to-cyan-50"
									transition:fly={{ y: -5, duration: 150, delay: idx * 30 }}
								>
									<span
										class="text-base font-medium text-black tracking-wide transition-colors group-hover:text-sky-600"
										>{item.label}</span
									>
									<svg
										class="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</a>
							{/each}
						{/if}
					</div>
				{/if}
			</div>

			<!-- Dropdown услуги -->
			<div
				class="relative h-full flex items-center"
				role="navigation"
				onmouseenter={() => {
					visibleServicesMenu = true;
					hoveredItem = 'services';
				}}
				onmouseleave={() => {
					visibleServicesMenu = false;
					hoveredItem = null;
				}}
			>
				<button
					type="button"
					class="nav-item group relative flex items-center gap-x-1 px-3 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 hover:text-sky-600 {isServicesActive
						? 'text-sky-600'
						: 'text-slate-700'}"
					aria-expanded={visibleServicesMenu}
				>
					<span>Услуги</span>
					<!-- <svg
						class="h-3.5 w-3.5 transition-transform duration-300 {visibleServicesMenu
							? 'rotate-180 text-sky-500'
							: 'text-slate-400 group-hover:text-sky-500'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg> -->

					<!-- Animated Underline -->
					<span
						class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"
						class:scale-x-100={isServicesActive}
					></span>
				</button>

				{#if visibleServicesMenu}
					<!-- Невидимый мост между кнопкой и dropdown -->
					<div class="absolute left-0 right-0 top-full h-3"></div>
					<div
						transition:fly={{ y: -10, duration: 200, easing: cubicOut }}
						role="menu"
						tabindex="0"
						class="absolute left-1/2 top-full z-40 mt-3 w-96 -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5"
					>
						<!-- Декоративный градиент сверху -->
						<div
							class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-500 to-transparent"
						></div>

						{#each serviceItems as service, idx}
							<a
								href={service.href}
								class="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-linear-to-r hover:from-sky-50 hover:to-cyan-50"
								transition:fly={{ y: -5, duration: 150, delay: idx * 30 }}
							>
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-sky-100 to-cyan-100 text-sky-600 transition-all duration-300 group-hover:from-sky-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/25"
								>
									{#if service.icon === 'chat'}
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
											/>
										</svg>
									{:else if service.icon === 'design'}
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
											/>
										</svg>
									{:else if service.icon === 'ruler'}
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
											/>
										</svg>
									{:else if service.icon === 'project'}
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
											/>
										</svg>
									{:else}
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									{/if}
								</div>
								<div class="flex-1">
									<p
										class="text-base font-medium text-slate-900 transition-colors group-hover:text-sky-600"
									>
										{service.label}
									</p>
									<p class="mt-0.5 text-xs text-slate-500">{service.desc}</p>
								</div>
								<svg
									class="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Контакты -->
			<a
				href="/contacts"
				class="nav-item group relative flex items-center px-3 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300"
				class:active={isMenuItemActive('/contacts')}
				onmouseenter={() => (hoveredItem = '/contacts')}
				onmouseleave={() => (hoveredItem = null)}
			>
				<span
					class="transition-colors duration-300 group-hover:text-sky-600 {isMenuItemActive(
						'/contacts'
					)
						? 'text-sky-600'
						: 'text-slate-700'}"
				>
					Контакты
				</span>

				<!-- Animated Underline -->
				<span
					class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"
					class:scale-x-100={isMenuItemActive('/contacts')}
				></span>
			</a>
		</div>

		<!-- Город -->
		<div class="flex items-center gap-4 lg:flex-1 lg:justify-end">
			<div
				class="relative"
				role="button"
				tabindex="0"
				onmouseenter={() => (visibleCityMenu = true)}
				onmouseleave={() => (visibleCityMenu = false)}
			>
				<button
					type="button"
					class="city-selector group relative flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-slate-100/20 to-slate-50/80 px-5 py-2.5 text-base font-medium text-slate-700 ring-1 ring-slate-200/50 transition-all duration-300 hover:ring-sky-200 hover:shadow-lg hover:shadow-sky-500/10"
					aria-expanded={visibleCityMenu}
				>
					<!-- Анимированный фон -->
					<span
						class="absolute inset-0 -z-10 bg-linear-to-r from-sky-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
					></span>

					<!-- Иконка локации -->
					<span class="flex items-center justify-center">
						<svg
							class="h-4 w-4 text-sky-500 transition-transform duration-300 group-hover:scale-110"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</span>

					<span class="transition-colors duration-300 group-hover:text-sky-600"
						>{cityStore.city}</span
					>

					<!-- Стрелка -->
					<svg
						class="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:text-sky-500 {visibleCityMenu
							? 'rotate-180'
							: ''}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				{#if visibleCityMenu}
					<!-- Невидимый мост между кнопкой и dropdown -->
					<div class="absolute left-0 right-0 top-full h-3"></div>
					<div
						transition:fly={{ y: -10, duration: 200, easing: cubicOut }}
						role="listbox"
						class="absolute right-0 top-full z-40 mt-3 w-48 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5"
					>
						<!-- Декоративный градиент сверху -->
						<div
							class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-500 to-transparent"
						></div>

						{#each cities as city, idx}
							<button
								type="button"
								onclick={() => {
									cityStore.set(city.label);
									visibleCityMenu = false;
								}}
								class="group flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left transition-all duration-200 hover:bg-linear-to-r hover:from-sky-50 hover:to-cyan-50"
								class:bg-sky-50={cityStore.city === city.label}
								transition:fly={{ y: -5, duration: 150, delay: idx * 30 }}
							>
								<span
									class="text-sm font-medium transition-colors {cityStore.city === city.label
										? 'text-sky-600'
										: 'text-slate-700'} group-hover:text-sky-600">{city.label}</span
								>
								{#if cityStore.city === city.label}
									<svg
										class="h-4 w-4 text-sky-500"
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
								{/if}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</nav>
</header>

<style>
	.nav-item {
		position: relative;
	}
	
	.nav-item.active {
		color: #0284c7;
	}
	
	.city-selector::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		padding: 1px;
		background: linear-gradient(135deg, transparent 40%, #7dd3fc 50%, transparent 60%);
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: 0;
		transition: opacity 0.3s;
	}
	
	.city-selector:hover::before {
		opacity: 1;
		animation: border-spin 3s linear infinite;
	}
	
	@keyframes border-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
