<script>
	import ConsultationButton from '$lib/components/ConsultationButton.svelte';
	import ProductFavoriteButton from '$lib/components/ProductFavoriteButton.svelte';
	import { favoritesState, removeFromFavorites, clearFavorites } from '$lib/stores/favorites.svelte.js';
	
	// Reactive favorites list from persisted state
	let favorites = $derived(favoritesState.current);

	function formatPrice(price) {
		if (!price) return 'По запросу';
		return new Intl.NumberFormat('ru-RU').format(price);
	}

	function handleRemove(id) {
		removeFromFavorites(id);
	}

	function handleClearAll() {
		if (confirm('Вы уверены, что хотите очистить всё избранное?')) {
			clearFavorites();
		}
	}

	// Calculate total price of in-stock items
	let totalPrice = $derived(
		favorites
			.filter(item => item.inStock !== false && item.price)
			.reduce((sum, item) => sum + (item.price || 0), 0)
	);

	let inStockCount = $derived(
		favorites.filter(item => item.inStock !== false).length
	);

	// Recommendations for empty state or suggestions
	const recommendations = [
		{
			id: 'rec-1',
			name: 'Кухня "Лофт"',
			price: 175000,
			image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg',
			inStock: true
		},
		{
			id: 'rec-2',
			name: 'Шкаф "Минимал"',
			price: 82000,
			image: 'https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg',
			inStock: true
		},
		{
			id: 'rec-3',
			name: 'Гардероб "Стиль"',
			price: 115000,
			image: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2023/air-sistema/2-1087x890.jpg',
			inStock: true
		},
		{
			id: 'rec-4',
			name: 'Кухня "Эко"',
			price: 198000,
			image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg',
			inStock: true
		}
	];
</script>

<svelte:head>
	<title>Избранное | Новострой</title>
	<meta name="description" content="Ваши избранные товары" />
</svelte:head>

<!-- Hero секция -->
<section class="relative overflow-hidden bg-linear-to-br from-slate-50 to-white py-16 sm:py-20">
	<div class="absolute -left-40 top-0 size-80 rounded-full bg-pink-100/50 blur-3xl"></div>
	<div class="absolute -right-40 bottom-0 size-96 rounded-full bg-sky-100/50 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
			<div>
				<div class="flex items-center gap-3">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25"
					>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					</div>
					<div>
						<h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Избранное</h1>
						<p class="mt-1 text-slate-500">{favorites.length} товаров</p>
					</div>
				</div>
			</div>

			<div class="flex gap-3">
				{#if favorites.length > 0}
					<button
						onclick={handleClearAll}
						class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-red-600"
					>
						<svg
							class="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
						Очистить всё
					</button>
				{/if}
				<a
					href="/mebel"
					class="group inline-flex items-center gap-2 text-sm font-medium text-sky-600 transition hover:text-sky-700"
				>
					<svg
						class="size-4 rotate-180 transition-transform group-hover:-translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
					Продолжить покупки
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Список избранного -->
<section class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		{#if favorites.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each favorites as item (item.id)}
					<div
						class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<!-- Изображение -->
						<div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
							{#if item.image}
								<img
									src={item.image}
									alt={item.name}
									class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							{:else}
								<div
									class="flex size-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
								>
									<svg
										class="size-16 text-slate-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1"
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
							{/if}

							<!-- Бейджи -->
							<div class="absolute left-3 top-3 flex flex-col gap-2">
								{#if item.oldPrice && item.price && item.oldPrice > item.price}
									<span
										class="rounded-full bg-pink-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg"
									>
										-{Math.round((1 - item.price / item.oldPrice) * 100)}%
									</span>
								{/if}
								{#if item.inStock === false}
									<span
										class="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-white"
									>
										Нет в наличии
									</span>
								{/if}
							</div>

							<!-- Кнопка удаления (использует ProductFavoriteButton) -->
							<div class="absolute right-3 top-3">
								<ProductFavoriteButton product={item} />
							</div>
						</div>

						<!-- Контент -->
						<div class="p-5">
							{#if item.category}
								<p class="text-xs font-medium text-sky-600">{item.category}</p>
							{/if}
							<h3 class="mt-1 text-lg font-semibold text-slate-900 line-clamp-2">{item.name}</h3>

							<!-- Цена -->
							<div class="mt-3 flex items-baseline gap-2">
								{#if item.price}
									<span class="text-xl font-bold text-slate-900">{formatPrice(item.price)} ₽</span>
									{#if item.oldPrice && item.oldPrice > item.price}
										<span class="text-sm text-slate-400 line-through"
											>{formatPrice(item.oldPrice)} ₽</span
										>
									{/if}
								{:else}
									<span class="text-lg font-semibold text-slate-900">По запросу</span>
								{/if}
							</div>

							<!-- Кнопки -->
							<div class="mt-4 flex gap-2">
								<ConsultationButton
									class="flex-1 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-50"
								>
									{item.inStock !== false ? 'Заказать' : 'Уточнить наличие'}
								</ConsultationButton>
								{#if item.slug}
									<a
										href="/mebel/{item.slug}"
										aria-label="Подробнее о товаре"
										class="flex size-11 items-center justify-center rounded-xl border-2 border-slate-200 text-slate-500 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
									>
										<svg
											class="size-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
											/>
										</svg>
									</a>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Итого -->
			<div class="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-8">
				<div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
					<div>
						<p class="text-sm text-slate-500">Общая стоимость избранных товаров</p>
						<p class="mt-1 text-3xl font-bold text-slate-900">
							{formatPrice(totalPrice)} ₽
						</p>
						<p class="mt-1 text-sm text-slate-500">
							{inStockCount} из {favorites.length} товаров в наличии
						</p>
					</div>
					<ConsultationButton
						class="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
					>
						Оформить заказ
						<svg
							class="size-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</ConsultationButton>
				</div>
			</div>
		{:else}
			<!-- Пустое состояние -->
			<div class="py-16 text-center">
				<div class="mx-auto flex size-24 items-center justify-center rounded-full bg-slate-100">
					<svg
						class="size-12 text-slate-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
				</div>
				<h3 class="mt-6 text-xl font-semibold text-slate-900">В избранном пока пусто</h3>
				<p class="mt-2 text-slate-500">Добавляйте понравившиеся товары, чтобы не потерять их</p>
				<a
					href="/mebel"
					class="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
				>
					Перейти в каталог
					<svg
						class="size-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>

<!-- Рекомендации -->
<section class="bg-slate-50 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold tracking-tight text-slate-900">Вам может понравиться</h2>
			<a
				href="/mebel"
				class="group inline-flex items-center gap-1 text-sm font-medium text-sky-600 transition hover:text-sky-700"
			>
				Смотреть все
				<svg
					class="size-4 transition-transform group-hover:translate-x-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>

		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each recommendations as item (item.id)}
				<div
					class="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="relative aspect-[4/3] overflow-hidden">
						<img
							src={item.image}
							alt={item.name}
							class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute right-3 top-3">
							<ProductFavoriteButton product={item} />
						</div>
					</div>
					<div class="p-4">
						<h3 class="font-semibold text-slate-900">{item.name}</h3>
						<p class="mt-1 text-lg font-bold text-slate-900">{formatPrice(item.price)} ₽</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
