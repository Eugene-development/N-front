<script>
	/**
	 * Компонент для плавных переходов между страницами
	 * @param {string} type - Тип анимации: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom'
	 * @param {number} duration - Длительность анимации в миллисекундах (150, 300, 500, 700, 1000)
	 */
	let { 
		type = 'fade', 
		duration = 300,
		children 
	} = $props();

	// Маппинг типов анимации на CSS классы tailwindcss-animated
	const animationClasses = {
		'fade': 'animate-fade',
		'slide-up': 'animate-fade-up',
		'slide-down': 'animate-fade-down',
		'slide-left': 'animate-fade-left',
		'slide-right': 'animate-fade-right',
		'zoom': 'animate-zoom-in'
	};

	// Маппинг длительности на классы
	const durationClasses = {
		150: 'animate-duration-150',
		200: 'animate-duration-200',
		300: 'animate-duration-300',
		500: 'animate-duration-500',
		700: 'animate-duration-700',
		1000: 'animate-duration-1000'
	};

	// Получаем класс анимации
	const animationClass = $derived(animationClasses[type] || animationClasses['fade']);
	
	// Получаем класс длительности (ближайшее значение)
	const durationClass = $derived(durationClasses[duration] || 'animate-duration-300');
</script>

<div class="{animationClass} {durationClass} animate-ease-in-out">
	{@render children?.()}
</div>
