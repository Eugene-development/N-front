<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(true);
	let isClosing = $state(false);

	function closeBanner() {
		isClosing = true;
		setTimeout(() => {
			isVisible = false;
			// Сохраняем в localStorage что баннер был закрыт
			if (typeof window !== 'undefined') {
				localStorage.setItem('devBannerClosed', 'true');
			}
		}, 300);
	}

	onMount(() => {
		// Проверяем был ли баннер закрыт ранее
		if (typeof window !== 'undefined') {
			const wasClosed = localStorage.getItem('devBannerClosed');
			if (wasClosed === 'true') {
				isVisible = false;
			}
		}
	});
</script>

{#if isVisible}
	<div
		class="relative bg-linear-to-r from-amber-500 via-orange-500 to-amber-500 px-4 py-2.5 transition-all duration-300"
		class:opacity-0={isClosing}
		class:translate-y-[-100%]={isClosing}
	>
		<!-- Анимированный фон -->
		<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
		
		<div class="relative mx-auto flex max-w-7xl items-center justify-between gap-x-4">
			<!-- Иконка -->
			<div class="flex items-center gap-x-3">
				<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
					<svg class="h-5 w-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				
				<!-- Текст -->
				<div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-2">
					<p class="text-sm font-semibold text-white">
						Сайт находится в разработке
					</p>
					<p class="text-xs text-white/90 sm:text-sm">
						Некоторые функции могут работать нестабильно
					</p>
				</div>
			</div>

			<!-- Кнопка закрытия -->
			<button
				type="button"
				onclick={closeBanner}
				class="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:rotate-90"
				aria-label="Закрыть уведомление"
			>
				<svg class="h-4 w-4 text-white transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</div>
{/if}
