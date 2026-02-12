<script>
	import { favoritesState, toggleFavorite, isFavorite } from '$lib/stores/favorites.svelte.js';

	/**
	 * @type {{
	 *   product: {
	 *     id: string | number,
	 *     value?: string,
	 *     name?: string,
	 *     images?: Array<{url: string}>,
	 *     image?: string,
	 *     price?: number,
	 *     old_price?: number,
	 *     oldPrice?: number,
	 *     short_description?: string,
	 *     category?: string,
	 *     slug?: string,
	 *     inStock?: boolean
	 *   },
	 *   size?: 'sm' | 'md' | 'lg',
	 *   class?: string
	 * }}
	 */
	let { product, size = 'md', class: className = '' } = $props();

	// Check if product is in favorites (reactive)
	let isInFavorites = $derived(isFavorite(product.id));

	// Re-check when favorites change
	$effect(() => {
		// Access favoritesState.current to track changes
		favoritesState.current;
	});

	function handleClick(event) {
		event.preventDefault();
		event.stopPropagation();
		
		// Normalize product data to ensure consistent structure for favorites page
		const normalizedProduct = {
			id: product.id,
			name: product.value || product.name || 'Без названия',
			image: product.images?.[0]?.url || product.image || '',
			price: product.price || null,
			oldPrice: product.old_price || product.oldPrice || null,
			category: typeof product.category === 'object' 
				? (product.category?.value || product.category?.name || '') 
				: (product.category || product.short_description || ''),
			slug: product.slug || '',
			categorySlug: product.categorySlug || product.category?.slug || '',
			inStock: product.inStock !== false
		};
		
		toggleFavorite(normalizedProduct);
	}

	// Size variants
	const sizeClasses = {
		sm: 'size-8',
		md: 'size-10',
		lg: 'size-12'
	};

	const iconSizeClasses = {
		sm: 'size-4',
		md: 'size-5',
		lg: 'size-6'
	};
</script>

<button
	type="button"
	aria-label={isInFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
	onclick={handleClick}
	class="flex items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 {sizeClasses[
		size
	]} {isInFavorites
		? 'text-pink-500 hover:bg-pink-50'
		: 'text-slate-400 hover:text-pink-500 hover:bg-white'} {className}"
>
	<svg
		class="{iconSizeClasses[size]} transition-transform duration-300 {isInFavorites
			? 'scale-110'
			: ''}"
		fill={isInFavorites ? 'currentColor' : 'none'}
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
</button>

<style>
	button:active {
		transform: scale(0.95);
	}
</style>
