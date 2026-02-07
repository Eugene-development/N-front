<script>
	/**
	 * Кнопка для открытия модального окна консультации
	 * Переиспользуемый компонент для замены ссылок href="/consultation"
	 * Использует serviceOrderStore с типом 'consultation' для открытия формы заказа
	 */
	import { serviceOrderStore } from '$lib/stores/serviceOrder.svelte.js';

	let { class: className = '', children } = $props();
</script>

<button type="button" onclick={() => serviceOrderStore.open('consultation')} class={className}>
	{@render children()}
</button>
