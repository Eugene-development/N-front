<script>
	/**
	 * Кнопка для открытия модального окна заказа услуги
	 * Переиспользуемый компонент для страниц услуг
	 * 
	 * @example
	 * <ServiceOrderButton serviceType="consultation" class="btn-primary">
	 *   Заказать консультацию
	 * </ServiceOrderButton>
	 */
	import { serviceOrderStore } from '$lib/stores/serviceOrder.svelte.js';

	/**
	 * @type {{
	 *   serviceType: 'consultation' | 'design-project' | 'furniture-project' | 'assembly' | 'measurement',
	 *   data?: Object,
	 *   class?: string,
	 *   children: import('svelte').Snippet
	 * }}
	 */
	let { serviceType, data = null, class: className = '', children } = $props();
</script>

<button type="button" onclick={() => serviceOrderStore.open(serviceType, data)} class={className}>
	{@render children()}
</button>
