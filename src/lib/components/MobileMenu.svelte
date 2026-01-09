<script>
	import { fly, fade, slide } from 'svelte/transition';
	import { cubicOut, quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { getRubrics } from '$lib/api/graphql.js';

	let visibleMobileMenu = $state(false);
	let showServiceMenu = $state(false);
	let showInformationMenu = $state(false);
	let showCatalogMenu = $state(false);

	// Динамически загружаемые рубрики для каталога
	let catalogItems = $state([]);
	let loadingCatalog = $state(true);

	onMount(async () => {
		try {
			const rubrics = await getRubrics();
			catalogItems = rubrics.map(rubric => ({
				href: `/${rubric.slug}`,
				label: rubric.value
			}));
		} catch (error) {
			console.error('Failed to load rubrics:', error);
			catalogItems = [];
		} finally {
			loadingCatalog = false;
		}
	});

	const serviceItems = [
		{ href: '/consultation', label: 'Бесплатная консультация' },
		{ href: '/design-project', label: 'Дизайн интерьера' },
		{ href: '/measurement', label: 'Замер помещения' },
		{ href: '/furniture-project', label: 'Проектирование мебели' },
		{ href: '/assembly', label: 'Сборка и установка' }
	];

	const infoItems = [
		{ href: '/about', label: 'О компании' },
		{ href: '/partnership', label: 'Партнёрство' },
		{ href: '/testimonials', label: 'Отзывы' },
		{ href: '/installment', label: 'Рассрочка' },
		{ href: '/guarantees', label: 'Гарантии' },
		{ href: '/contacts', label: 'Контакты' }
	];

	function closeMenu() {
		visibleMobileMenu = false;
		showServiceMenu = false;
		showInformationMenu = false;
		showCatalogMenu = false;
	}

	export function open() {
		visibleMobileMenu = true;
	}
</script>

{#if visibleMobileMenu}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
		transition:fade={{ duration: 200 }}
		onclick={closeMenu}
		role="presentation"
	></div>

	<!-- Menu Panel -->
	<div
		class="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-hidden bg-white shadow-2xl"
		transition:fly={{ x: 300, duration: 300, easing: quintOut }}
		role="dialog"
		aria-modal="true"
	>
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
			<a href="/" onclick={closeMenu} class="flex items-center gap-3">
				<img
					class="h-10 w-auto"
					src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
					alt="Логотип компании Новострой"
				/>
				<span class="text-lg font-semibold text-slate-900">Новострой</span>
			</a>
			<button
				onclick={closeMenu}
				type="button"
				class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-200 hover:bg-pink-100 hover:text-pink-600"
			>
				<span class="sr-only">Закрыть меню</span>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>

		<!-- City Selector -->
		<div class="border-b border-slate-100 px-6 py-4">
			<button
				class="flex w-full items-center justify-between rounded-xl bg-linear-to-r from-pink-50 to-rose-50 px-4 py-3 text-left"
			>
				<div class="flex items-center gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
						<svg
							class="h-4 w-4 text-pink-600"
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
					</div>
					<div>
						<p class="text-xs text-slate-500">Ваш город</p>
						<p class="font-medium text-slate-900">Москва и МО</p>
					</div>
				</div>
				<svg class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<!-- Navigation -->
		<div class="flex-1 overflow-y-auto px-4 py-4">
			<nav class="space-y-1">
				<!-- Услуги -->
				<div class="overflow-hidden rounded-xl">
					<button
						onclick={() => (showServiceMenu = !showServiceMenu)}
						type="button"
						class="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors duration-200 hover:bg-slate-50"
					>
						<div class="flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-pink-100 to-rose-100 text-pink-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<span class="text-base font-semibold text-slate-900">Услуги</span>
						</div>
						<svg
							class="h-5 w-5 text-slate-400 transition-transform duration-300 {showServiceMenu
								? 'rotate-180 text-pink-500'
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
					{#if showServiceMenu}
						<div class="pb-2 pl-4" transition:slide={{ duration: 200, easing: cubicOut }}>
							{#each serviceItems as item, i}
								<a
									href={item.href}
									onclick={closeMenu}
									class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-all duration-200 hover:bg-pink-50 hover:text-pink-600"
									transition:fly={{ x: -10, duration: 150, delay: i * 30 }}
								>
									<span class="h-1.5 w-1.5 rounded-full bg-pink-300"></span>
									{item.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Каталог -->
				<div class="overflow-hidden rounded-xl">
					<button
						onclick={() => (showCatalogMenu = !showCatalogMenu)}
						type="button"
						class="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors duration-200 hover:bg-slate-50"
					>
						<div class="flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-violet-100 to-purple-100 text-violet-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
									/>
								</svg>
							</div>
							<span class="text-base font-semibold text-slate-900">Каталог</span>
						</div>
						<svg
							class="h-5 w-5 text-slate-400 transition-transform duration-300 {showCatalogMenu
								? 'rotate-180 text-violet-500'
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
					{#if showCatalogMenu}
						<div class="pb-2 pl-4" transition:slide={{ duration: 200, easing: cubicOut }}>
							{#if loadingCatalog}
								<div class="flex items-center py-3 px-4">
									<svg
										class="h-4 w-4 animate-spin text-violet-500"
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
								<div class="py-3 px-4 text-sm text-slate-500">Нет доступных категорий</div>
							{:else}
								{#each catalogItems as item, i}
									<a
										href={item.href}
										onclick={closeMenu}
										class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-all duration-200 hover:bg-violet-50 hover:text-violet-600"
										transition:fly={{ x: -10, duration: 150, delay: i * 30 }}
									>
										<span class="h-1.5 w-1.5 rounded-full bg-violet-300"></span>
										{item.label}
									</a>
								{/each}
							{/if}
						</div>
					{/if}
				</div>

				<!-- Информация -->
				<div class="overflow-hidden rounded-xl">
					<button
						onclick={() => (showInformationMenu = !showInformationMenu)}
						type="button"
						class="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors duration-200 hover:bg-slate-50"
					>
						<div class="flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-sky-100 to-blue-100 text-sky-600"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<span class="text-base font-semibold text-slate-900">Информация</span>
						</div>
						<svg
							class="h-5 w-5 text-slate-400 transition-transform duration-300 {showInformationMenu
								? 'rotate-180 text-sky-500'
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
					{#if showInformationMenu}
						<div class="pb-2 pl-4" transition:slide={{ duration: 200, easing: cubicOut }}>
							{#each infoItems as item, i}
								<a
									href={item.href}
									onclick={closeMenu}
									class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-all duration-200 hover:bg-sky-50 hover:text-sky-600"
									transition:fly={{ x: -10, duration: 150, delay: i * 30 }}
								>
									<span class="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
									{item.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Прямые ссылки -->
				<div class="mt-4 border-t border-slate-100 pt-4">
					<a
						href="/actions"
						onclick={closeMenu}
						class="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-amber-50"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-amber-100 to-orange-100 text-amber-600"
						>
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
								/>
							</svg>
						</div>
						<span class="text-base font-semibold text-slate-900">Акции</span>
						<span
							class="ml-auto flex h-5 items-center rounded-full bg-pink-500 px-2 text-xs font-medium text-white"
							>NEW</span
						>
					</a>

					<a
						href="/blog"
						onclick={closeMenu}
						class="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-emerald-50"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-100 to-green-100 text-emerald-600"
						>
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
						</div>
						<span class="text-base font-semibold text-slate-900">Блог</span>
					</a>
				</div>
			</nav>
		</div>

		<!-- Footer -->
		<div class="border-t border-slate-100 bg-slate-50 px-6 py-4">
			<a
				href="tel:+79154000020"
				class="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-pink-500 to-rose-500 px-4 py-3 text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30"
			>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				<span class="font-semibold">8 (915) 400-00-20</span>
			</a>
		</div>
	</div>
{/if}
