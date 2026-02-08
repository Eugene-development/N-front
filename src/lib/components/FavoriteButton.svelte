<script>
	import { favoritesState } from '$lib/stores/favorites.svelte.js';
	
	// Reactive count of favorites
	let count = $derived(favoritesState.current.length);
</script>

<a
	href="/favorites"
	class="relative isolate z-20 flex items-center px-3 focus-visible:outline-offset-[-4px]"
>
	<span class="sr-only">Избранное</span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill={count > 0 ? 'currentColor' : 'none'}
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="icon size-5 transition-colors duration-300 {count > 0
			? 'text-pink-500'
			: 'text-gray-50'}"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
	</svg>

	{#if count > 0}
		<span
			class="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white shadow-lg animate-in zoom-in duration-200"
		>
			{count > 99 ? '99+' : count}
		</span>
	{/if}
</a>
