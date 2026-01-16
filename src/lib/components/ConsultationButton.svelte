<script>
	/**
	 * Кнопка для открытия модального окна консультации
	 * Переиспользуемый компонент для замены ссылок href="/consultation"
	 */
	import { consultationStore } from '$lib/stores/consultation.svelte.js';

	let { class: className = '', children } = $props();
</script>

<button type="button" onclick={() => consultationStore.open()} class={className}>
	{@render children()}
</button>
