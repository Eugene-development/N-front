<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

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

	// Определяем, является ли устройство мобильным
	let isMobile = $state(false);

	onMount(() => {
		// Проверяем ширину экрана (мобильные устройства обычно < 768px)
		isMobile = window.innerWidth < 768;
		
		// Обновляем при изменении размера окна
		const handleResize = () => {
			isMobile = window.innerWidth < 768;
		};
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

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

	// Получаем класс анимации (отключаем для мобильных)
	const animationClass = $derived(!isMobile ? (animationClasses[type] || animationClasses['fade']) : '');
	
	// Получаем класс длительности (отключаем для мобильных)
	const durationClass = $derived(!isMobile ? (durationClasses[duration] || 'animate-duration-300') : '');
</script>

<div class="{animationClass} {durationClass} {!isMobile ? 'animate-ease-in-out' : ''}">
	{@render children?.()}
</div>
