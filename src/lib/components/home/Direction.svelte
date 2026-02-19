<script>
	import { consultationStore } from '$lib/stores/consultation.svelte.js';
</script>

<!-- Направления (Direction) -->
<section class="grid min-h-[40rem] grid-cols-1 gap-1 lg:grid-cols-2">
	<!-- Кухонные гарнитуры -->
	<div class="group relative flex min-h-[25rem] overflow-hidden">
		<img
			src="https://storage.yandexcloud.net/novostroy/bg/vector-kitchen.jpg"
			alt="Кухонные гарнитуры"
			class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
		/>
		<div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
		<div class="relative flex w-full flex-col items-start justify-end p-8 sm:p-12">
			<span
				class="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
			>
				Основное направление
			</span>
			<h3 class="mt-3 text-3xl font-bold text-white">Кухонные гарнитуры</h3>
			<button
				onclick={() => consultationStore.open()}
				class="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:bg-sky-50 hover:shadow-xl"
			>
				Просчитать ваш проект
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>

	<!-- Шкафы и гардеробы -->
	<div class="group relative flex min-h-[25rem] overflow-hidden">
		<img
			src="https://www.aristo.ru/upload/iblock/a5d/8ug9lv7q11uwb6mjqtg4114d68ts1vxr/aristo_Stilnaya-prikhozhaya-VERTA-_-INTU.jpg"
			alt="Шкафы и гардеробы"
			class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
		/>
		<div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
		<div class="relative flex w-full flex-col items-start justify-end p-8 sm:p-12">
			<span
				class="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
			>
				Основное направление
			</span>
			<h3 class="mt-3 text-3xl font-bold text-white">Шкафы и гардеробы</h3>
			<button
				onclick={() => consultationStore.open()}
				class="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:bg-sky-50 hover:shadow-xl"
			>
				Просчитать ваш проект
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>
</section>
