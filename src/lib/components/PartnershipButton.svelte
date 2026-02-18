<script>
	import { partnershipStore } from '$lib/stores/partnership.svelte.js';

	/** @type {string} */
	let { class: className = '', children } = $props();

	function handleClick() {
		partnershipStore.open();
	}
</script>

<button type="button" class={className} onclick={handleClick}>
	{@render children()}
</button>
