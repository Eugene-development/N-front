<script>
	// Простая реализация без store пока
	let isFavorite = $state(false);
</script>

<a
	href="/favorites"
	class="relative isolate z-20 flex items-center px-3 focus-visible:outline-offset-[-4px]"
>
	<span class="sr-only">Избранное</span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="icon size-5 {isFavorite ? 'animate-pulse fill-red-500 text-red-700' : 'text-gray-50'}"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
	</svg>
</a>
