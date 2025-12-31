<script>
	import '../layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PageTransition } from '$lib';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{#key $page.url.pathname}
			<PageTransition type="fade" duration={300}>
				{@render children()}
			</PageTransition>
		{/key}
	</main>
	<Footer />
</div>
