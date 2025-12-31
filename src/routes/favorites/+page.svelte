<svelte:head>
	<title>Избранное | Новострой</title>
	<meta name="description" content="Ваши избранные товары" />
</svelte:head>

<script>
	// Моковые данные избранных товаров
	const favorites = [
		{
			id: 1,
			name: 'Кухонный гарнитур "Модерн"',
			category: 'Кухни',
			price: 185000,
			oldPrice: 210000,
			image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg',
			inStock: true
		},
		{
			id: 2,
			name: 'Шкаф-купе "Премиум"',
			category: 'Шкафы',
			price: 95000,
			oldPrice: null,
			image: 'https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg',
			inStock: true
		},
		{
			id: 3,
			name: 'Гардеробная система "Air"',
			category: 'Гардеробные',
			price: 128000,
			oldPrice: 145000,
			image: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2023/air-sistema/2-1087x890.jpg',
			inStock: true
		},
		{
			id: 4,
			name: 'Кухня "Классика"',
			category: 'Кухни',
			price: 220000,
			oldPrice: null,
			image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg',
			inStock: false
		},
		{
			id: 5,
			name: 'Столешница из кварца',
			category: 'Столешницы',
			price: 45000,
			oldPrice: 52000,
			image: 'https://storage.yandexcloud.net/mine2024/novostroy/catalog/c8dbd6a37c3abb7bcc60eabf2dda8635.jpg',
			inStock: true
		},
		{
			id: 6,
			name: 'Встраиваемая вытяжка Krona',
			category: 'Техника',
			price: 28500,
			oldPrice: null,
			image: 'https://krona.ru/upload/iblock/118/uss0ccrd4e6qk9kjdnq0f2xl11klq4a4/5.webp',
			inStock: true
		}
	];

	function formatPrice(price) {
		return new Intl.NumberFormat('ru-RU').format(price);
	}

	function removeFromFavorites(id) {
		// В реальном приложении здесь будет логика удаления
		console.log('Удалить из избранного:', id);
	}
</script>

<!-- Hero секция -->
<section class="relative overflow-hidden bg-linear-to-br from-slate-50 to-white py-16 sm:py-20">
	<div class="absolute -left-40 top-0 size-80 rounded-full bg-pink-100/50 blur-3xl"></div>
	<div class="absolute -right-40 bottom-0 size-96 rounded-full bg-sky-100/50 blur-3xl"></div>
	
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
			<div>
				<div class="flex items-center gap-3">
					<div class="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
						</svg>
					</div>
					<div>
						<h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Избранное</h1>
						<p class="mt-1 text-slate-500">{favorites.length} товаров</p>
					</div>
				</div>
			</div>
			
			<a href="/mebel" class="group inline-flex items-center gap-2 text-sm font-medium text-sky-600 transition hover:text-sky-700">
				<svg class="size-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
				Продолжить покупки
			</a>
		</div>
	</div>
</section>

<!-- Список избранного -->
<section class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		{#if favorites.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each favorites as item}
					<div class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
						<!-- Изображение -->
						<div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
							<img 
								src={item.image} 
								alt={item.name}
								class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							
							<!-- Бейджи -->
							<div class="absolute left-3 top-3 flex flex-col gap-2">
								{#if item.oldPrice}
									<span class="rounded-full bg-pink-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
										-{Math.round((1 - item.price / item.oldPrice) * 100)}%
									</span>
								{/if}
								{#if !item.inStock}
									<span class="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-white">
										Нет в наличии
									</span>
								{/if}
							</div>
							
							<!-- Кнопка удаления -->
							<button 
								onclick={() => removeFromFavorites(item.id)}
								class="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-white/90 text-pink-500 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-pink-500 hover:text-white"
							>
								<svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
								</svg>
							</button>
						</div>
						
						<!-- Контент -->
						<div class="p-5">
							<p class="text-xs font-medium text-sky-600">{item.category}</p>
							<h3 class="mt-1 text-lg font-semibold text-slate-900 line-clamp-2">{item.name}</h3>
							
							<!-- Цена -->
							<div class="mt-3 flex items-baseline gap-2">
								<span class="text-xl font-bold text-slate-900">{formatPrice(item.price)} ₽</span>
								{#if item.oldPrice}
									<span class="text-sm text-slate-400 line-through">{formatPrice(item.oldPrice)} ₽</span>
								{/if}
							</div>
							
							<!-- Кнопки -->
							<div class="mt-4 flex gap-2">
								<button 
									class="flex-1 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-50"
									disabled={!item.inStock}
								>
									{item.inStock ? 'Заказать' : 'Нет в наличии'}
								</button>
								<a 
									href="/mebel/{item.id}"
									class="flex size-11 items-center justify-center rounded-xl border-2 border-slate-200 text-slate-500 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
								>
									<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
									</svg>
								</a>
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
							{formatPrice(favorites.filter(i => i.inStock).reduce((sum, i) => sum + i.price, 0))} ₽
						</p>
						<p class="mt-1 text-sm text-slate-500">
							{favorites.filter(i => i.inStock).length} из {favorites.length} товаров в наличии
						</p>
					</div>
					<a 
						href="/consultation"
						class="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
					>
						Оформить заказ
						<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			</div>
		{:else}
			<!-- Пустое состояние -->
			<div class="py-16 text-center">
				<div class="mx-auto flex size-24 items-center justify-center rounded-full bg-slate-100">
					<svg class="size-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</div>
				<h3 class="mt-6 text-xl font-semibold text-slate-900">В избранном пока пусто</h3>
				<p class="mt-2 text-slate-500">Добавляйте понравившиеся товары, чтобы не потерять их</p>
				<a 
					href="/mebel"
					class="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30"
				>
					Перейти в каталог
					<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
			<a href="/mebel" class="group inline-flex items-center gap-1 text-sm font-medium text-sky-600 transition hover:text-sky-700">
				Смотреть все
				<svg class="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
		
		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ name: 'Кухня "Лофт"', price: 175000, image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg' },
				{ name: 'Шкаф "Минимал"', price: 82000, image: 'https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg' },
				{ name: 'Гардероб "Стиль"', price: 115000, image: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2023/air-sistema/2-1087x890.jpg' },
				{ name: 'Кухня "Эко"', price: 198000, image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg' }
			] as item}
				<div class="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
					<div class="relative aspect-[4/3] overflow-hidden">
						<img src={item.image} alt={item.name} class="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
						<button aria-label="Добавить в избранное" class="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:text-pink-500">
							<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						</button>
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
