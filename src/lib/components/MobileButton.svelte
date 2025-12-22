<script>
	// Простая реализация без store пока
	let visibleMobileMenu = $state(false);

	function handleClick() {
		visibleMobileMenu = true;
		// TODO: Открыть мобильное меню
	}
</script>

<button
	type="button"
	onclick={handleClick}
	class="relative isolate z-20 px-2 focus-visible:outline-offset-[-4px]"
>
	<span class="sr-only">Мобильное Меню</span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width={1.5}
		stroke="currentColor"
		class="size-5 text-gray-50"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
</button>
