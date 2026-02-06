<script>
	import { consultationStore } from '$lib/stores/consultation.svelte.js';

	// Бренды для секции партнёров
	const brands = [
		{
			name: 'Hettich',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_of_Hettich_%28company%29.svg',
			url: 'https://www.hettich.com/en-gb/home'
		},
		{
			name: 'Egger',
			logo: 'https://cdn.egger.com/img/cms/ff58d5b2-cb11-41dc-ba72-5cec737f1c8a/a6b3c90f-a0ba-4379-abab-9215f9071955/ORIGINAL/gen_egger_logo_en.svg',
			url: 'https://www.egger.com/en/?country=GB'
		},
		{
			name: 'Blum',
			logo: 'https://www.blum.com/corporate/layout/facelift/images/ci/logo.svg.svg',
			url: 'https://www.blum.com/gb/en'
		},
		{
			name: 'Аристо',
			logo: 'https://www.aristo.ru/include/logo_header.png',
			url: 'https://www.aristo.ru'
		},
		{
			name: 'Avarus',
			logo: 'https://static.tildacdn.com/tild6566-3232-4639-a231-643431313266/black2.svg',
			url: 'https://xn--80aaf1dfl.xn--p1ai/'
		}
	];
</script>

<section
	class="relative w-full min-h-screen flex items-start justify-center pt-8 md:pt-10 overflow-hidden text-gray-900"
>
	<!-- Фоновое изображение -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://storage.yandexcloud.net/novostroy/bg/hero-2.jpg"
			alt="Modern minimal kitchen interior with marble countertops and sage green cabinets"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
	</div>

	<!-- Основной контент -->
	<div class="relative z-10 w-full max-w-4xl px-4 py-8 md:px-8 md:py-16 xl:px-4 xl:py-16">
		<!-- Стеклянная панель -->
		<div
			class="glass-panel w-full rounded-3xl border border-white/40 shadow-2xl overflow-hidden flex flex-col items-center"
		>
			<!-- Контент -->
			<div
				class="px-6 py-12 md:px-12 md:py-14 text-center max-w-3xl mx-auto flex flex-col items-center"
			>
				<!-- Название компании -->
				<span class="text-sm font-semibold text-slate-600 uppercase tracking-[0.5em] mb-6">
					Компания «Новострой»
				</span>

				<!-- Заголовок -->
				<h1
					class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-none mb-6"
				>
					Мебель и Техника
				</h1>

				<!-- Описание -->
				<p
					class="text-lg md:text-lg text-slate-800 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
				>
					Мебель по вашим размерам с бесплатным проектом от дизайнера. Согласуем проект с фабрикой,
					подберём столешницу, технику и аксессуары. Значительно снизим затраты и сэкономим ваше
					время.
				</p>

				<!-- Кнопки -->
				<div
					class="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16 w-full md:w-auto"
				>
					<button
						type="button"
						class="bg-transparent text-slate-900 border border-slate-900/40 font-semibold text-base py-4 px-10 rounded-xl cursor-pointer shadow-sm transition-all duration-300 ease-out hover:bg-white/80 hover:border-transparent hover:shadow-xl hover:-translate-y-0.5"
						onclick={() => consultationStore.open()}
					>
						Бесплатный дизайн-проект с расчётом стоимости
					</button>
				</div>
			</div>

			<!-- Разделитель -->
			<div class="w-full flex justify-center px-6 md:px-12">
				<div class="w-full max-w-xl h-px bg-slate-300/50"></div>
			</div>

			<!-- Секция брендов -->
			<div class="w-full px-6 pb-8 md:px-12 md:pb-12 pt-8 flex justify-center">
				<div class="w-full flex flex-col items-center">
					<p class="text-xs text-slate-700 mb-8 font-semibold uppercase tracking-widest">
						РАБОТАЕМ С ЛУЧШИМИ БРЕНДАМИ:
					</p>
					<div
						class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center"
					>
						{#each brands as brand}
							<a
								href={brand.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group w-full h-10 flex items-center justify-center opacity-90 transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5"
							>
								<img
									class="max-w-full max-h-full object-contain transition-all duration-300"
									src={brand.logo}
									alt={brand.name}
								/>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Glassmorphism эффект - требует кастомного CSS */
	.glass-panel {
		background: linear-gradient(
			145deg,
			rgba(255, 255, 255, 0.45) 0%,
			rgba(255, 255, 255, 0.3) 100%
		);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
</style>
