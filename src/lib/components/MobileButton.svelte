<script>
	import { mobileMenuStore } from '$lib/stores/mobileMenu.svelte.js';

	function handleClick() {
		mobileMenuStore.open();
	}
</script>

<button
	type="button"
	onclick={handleClick}
	class="group relative flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/10"
>
	<span class="sr-only">Открыть меню</span>
	<div class="flex flex-col items-center justify-center gap-1.5">
		<span
			class="block h-0.5 w-5 rounded-full bg-white transition-all duration-300 group-hover:w-6 group-hover:bg-pink-400"
		></span>
		<span
			class="block h-0.5 w-4 rounded-full bg-white transition-all duration-300 group-hover:w-6 group-hover:bg-pink-400"
		></span>
		<span
			class="block h-0.5 w-3 rounded-full bg-white transition-all duration-300 group-hover:w-6 group-hover:bg-pink-400"
		></span>
	</div>
</button>
