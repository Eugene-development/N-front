<!-- Хэдер: баннер + меню -->
<script>
	import Banner from './Banner.svelte';
	import Nav from './Nav.svelte';
</script>

<header class="header">
	<Banner />
	<Nav />
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
