<!-- Хэдер: баннер + меню -->
<script>
	import { onMount } from 'svelte';
	import Banner from './Banner.svelte';
	import Nav from './Nav.svelte';
	import { bannerStore } from '$lib/stores/banner.svelte.js';

	onMount(() => {
		return bannerStore.init();
	});
</script>

<header class="sticky top-0 z-50 shadow-md">
	<div
		class="transition-all duration-300 ease-out overflow-hidden"
		class:max-h-0={bannerStore.isHidden}
		class:opacity-0={bannerStore.isHidden}
		class:max-h-20={!bannerStore.isHidden}
	>
		<Banner />
	</div>
	<Nav />
</header>
