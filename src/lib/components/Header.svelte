<!-- Хэдер: баннер + меню -->
<script>
	import { onMount } from 'svelte';
	import Banner from './Banner.svelte';
	import DevBanner from './DevBanner.svelte';
	import Nav from './Nav.svelte';
	import { bannerStore } from '$lib/stores/banner.svelte.js';

	onMount(() => {
		return bannerStore.init();
	});
</script>

<header
	class="sticky top-0 z-50 shadow-md transition-transform duration-300 ease-out"
	class:max-lg:-translate-y-full={bannerStore.isHidden}
>
	<div
		class="transition-all duration-300 ease-out overflow-hidden max-h-20"
		class:lg:max-h-0={bannerStore.isHidden}
		class:lg:opacity-0={bannerStore.isHidden}
	>
		<Banner />
	</div>
	<DevBanner />

	<Nav />
</header>
