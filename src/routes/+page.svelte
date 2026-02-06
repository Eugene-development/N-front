<script>
	import { consultationStore } from '$lib/stores/consultation.svelte.js';
	import Hero from '$lib/components/Hero.svelte';
	import HeroMinimal from '$lib/components/HeroMinimal.svelte';
</script>

<svelte:head>
	<title>Компания Новострой – Мебель на заказ для вашего идеального интерьера</title>
	<meta
		name="description"
		content="Компания Новострой предлагает мебель на заказ по индивидуальным размерам и дизайну, а также мойки со смесителями, столешницы и бытовую технику. Высокое качество мебели, надежность и внимание к деталям – мы поможем вам реализовать все ваши идеи!"
	/>
</svelte:head>

<Hero />

<!-- О компании (Message) -->
<section class="bg-slate-50">
	<div class="bg-slate-50 py-16 sm:py-40">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8"
		>
			<!-- Логотип -->
			<div class="w-full max-w-sm lg:w-92 lg:flex-none">
				<div class="relative">
					<div
						class="absolute -inset-4 rounded-3xl bg-linear-to-r from-sky-100 to-cyan-100 opacity-50 blur-xl"
					></div>
					<img
						src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
						alt="Логотип Новострой"
						class="relative w-full rounded-2xl object-contain"
					/>
				</div>
			</div>

			<!-- Текст -->
			<div class="flex-1 lg:py-8">
				<figure class="relative">
					<!-- Декоративные кавычки -->
					<svg
						viewBox="0 0 162 128"
						fill="none"
						aria-hidden="true"
						class="absolute -left-4 -top-8 h-20 w-20 text-sky-100"
					>
						<path
							d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
							fill="currentColor"
						/>
					</svg>

					<blockquote
						class="relative text-xl font-medium leading-relaxed text-slate-900 sm:text-2xl"
					>
						<p>
							Наша компания предлагает создание стильных дизайн-проектов корпусной мебели и
							интерьера с точным подбором бытовой техники, освещением, сантехники и кухонных
							столешниц в партнёрстве с лучшими фабриками и поставщиками
						</p>
					</blockquote>
				</figure>
			</div>
		</div>
	</div>
</section>

<!-- Комплектация проектов (Equipment) -->
<section class="bg-white py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center lg:max-w-none lg:text-left">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700"
			>
				Дополнительно
			</span>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
				Комплектация проектов
			</h2>
		</div>

		<div class="mt-12 grid gap-6 lg:grid-cols-6 lg:grid-rows-2">
			<!-- Столешницы -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl lg:col-span-3"
			>
				<div class="aspect-[16/9] overflow-hidden">
					<img
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="https://storage.yandexcloud.net/mine2024/novostroy/catalog/c8dbd6a37c3abb7bcc60eabf2dda8635.jpg"
						alt="Столешницы"
					/>
				</div>
				<div class="p-6">
					<h3 class="text-lg font-semibold text-slate-900">Столешницы и стеновые панели</h3>
					<p class="mt-2 text-sm text-slate-600">
						Широкий выбор дизайнов для вашей кухни. Качественные столешницы от ведущих
						производителей. Индивидуальный подбор материалов и цветов.
					</p>
				</div>
			</div>

			<!-- Системы выдвижения -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl lg:col-span-3"
			>
				<div class="aspect-[16/9] overflow-hidden">
					<img
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="https://www.blum.com/images/676/507/4067487/corporate/media/bilder/produkte/boxsysteme/legrabox-design/me18652757_aa_fot_fo_bau_-sall_-amc_-v1_4:3.jpg"
						alt="Системы выдвижения"
					/>
				</div>
				<div class="p-6">
					<h3 class="text-lg font-semibold text-slate-900">Системы выдвижения</h3>
					<p class="mt-2 text-sm text-slate-600">
						Современные механизмы, обеспечивающие плавность, надежность и бесшумность. Широкий
						ассортимент для комфортного хранения.
					</p>
				</div>
			</div>

			<!-- Бытовая техника -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl lg:col-span-2"
			>
				<div class="aspect-[4/3] overflow-hidden">
					<img
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="https://krona.ru/upload/iblock/118/uss0ccrd4e6qk9kjdnq0f2xl11klq4a4/5.webp"
						alt="Бытовая техника"
					/>
				</div>
				<div class="p-6">
					<h3 class="text-lg font-semibold text-slate-900">Бытовая техника</h3>
					<p class="mt-2 text-sm text-slate-600">
						Встраиваемая и отдельностоящая техника от проверенных производителей с гарантией.
					</p>
				</div>
			</div>

			<!-- Мойки и смесители -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl lg:col-span-2"
			>
				<div class="aspect-[4/3] overflow-hidden">
					<img
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="https://емар.рф/design/emar/images/main_content_1.jpg"
						alt="Мойки и смесители"
					/>
				</div>
				<div class="p-6">
					<h3 class="text-lg font-semibold text-slate-900">Мойки и смесители</h3>
					<p class="mt-2 text-sm text-slate-600">
						Качественная сантехника от ведущих мировых и российских производителей с гарантией до 5
						лет.
					</p>
				</div>
			</div>

			<!-- Освещение -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl lg:col-span-2"
			>
				<div class="aspect-[4/3] overflow-hidden">
					<img
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="https://storage.yandexcloud.net/mine2024/novostroy/catalog/mlZe9k3pajrkXpD9EFYv3fJsnqDxEqbMXMqEk1ZW.jpg"
						alt="Освещение"
					/>
				</div>
				<div class="p-6">
					<h3 class="text-lg font-semibold text-slate-900">Зональное освещение</h3>
					<p class="mt-2 text-sm text-slate-600">
						Комфортное освещение для создания уютной атмосферы в каждом уголке вашего дома.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Этапы работы (Stage) -->
<section class="relative isolate overflow-hidden py-24 sm:py-32">
	<!-- Фоновое изображение -->
	<img
		src="https://www.aristo.ru/upload/iblock/fde/z7l9t7wd13bsaqo3dzm2fwxv89ff3rh1/Aristo_SHkaf_kupe_CHernyi_-kashemir-4.jpg"
		alt="Шкаф-купе"
		class="absolute inset-0 -z-20 h-full w-full scale-x-[-1] object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-black/50"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl rounded-2xl bg-black/30 p-8 backdrop-blur-sm lg:mx-0">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-sm font-medium text-sky-300"
			>
				Это важно
			</span>
			<h2 class="mt-4 text-4xl font-bold text-white sm:text-5xl">Наша работа</h2>
			<p class="mt-6 text-lg leading-relaxed text-slate-200">
				Мы поддержим вас на всех этапах работы над мебельным проектом: от первой консультации до дня
				финальной сборки. Наша задача — сделать процесс максимально комфортным и результат
				безупречным.
			</p>
		</div>

		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<!-- Консультация -->
			<div
				class="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-white"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-white">Консультация</h3>
						<p class="mt-2 text-sm text-slate-300">
							Наш менеджер даст консультацию по материалам и возможным решениям в проектировании
							мебели
						</p>
					</div>
				</div>
			</div>

			<!-- Замер -->
			<div
				class="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-white"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-white">Замер</h3>
						<p class="mt-2 text-sm text-slate-300">
							Организуем проектный замер помещения с обозначением углов, коммуникаций и розеток
						</p>
					</div>
				</div>
			</div>

			<!-- Проект -->
			<div
				class="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-white"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-white">Проект</h3>
						<p class="mt-2 text-sm text-slate-300">
							Дизайнер составит проект мебели с учётом всех ваших пожеланий и размеров помещения
						</p>
					</div>
				</div>
			</div>

			<!-- Договор -->
			<div
				class="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-white"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-white">Договор</h3>
						<p class="mt-2 text-sm text-slate-300">
							Поможем комфортно заключить договор с указанием всех условий выполнения вашего проекта
						</p>
					</div>
				</div>
			</div>

			<!-- Изготовление -->
			<div
				class="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-white"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-white">Изготовление</h3>
						<p class="mt-2 text-sm text-slate-300">
							Фабрика изготовит заказ на высокотехнологичном оборудовании под контролем технологов
						</p>
					</div>
				</div>
			</div>

			<!-- Сборка -->
			<div
				class="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-white"
					>
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-white">Сборка</h3>
						<p class="mt-2 text-sm text-slate-300">
							Профессиональные сборщики компании качественно выполнят монтаж и установку мебели
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Преимущества (Incentives) -->
<section class="overflow-hidden bg-white py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Текст -->
			<div class="lg:py-8">
				<span
					class="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700"
				>
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					Экономия
				</span>

				<h2 class="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					С нами выгодно покупать мебель
				</h2>

				<div class="mt-8 space-y-4 border-l-4 border-sky-400 pl-6">
					<p class="text-base leading-relaxed text-slate-600">
						Помогаем клиентам сделать правильный выбор материалов, цвета и производителя мебели. Это
						позволит <span class="font-semibold text-sky-600"
							>сэкономить время и материальные затраты!</span
						>
					</p>
					<p class="text-base leading-relaxed text-slate-600">
						Опыт и знание рынка позволяют предложить решения, которые максимально соответствуют
						вашему стилю, бюджету и требованиям к качеству.
					</p>
					<p class="text-base leading-relaxed text-slate-600">
						К кухонным гарнитурам подбирается качественная фурнитура, стильная столешница, техника и
						мойка со смесителем для функционального и красивого дизайна.
					</p>
					<p class="text-base leading-relaxed text-slate-600">
						Работая со шкафами и гардеробами, уделяем особое внимание удобству и функциональности,
						продумывая эргономику, освещение и системы хранения.
					</p>
				</div>

				<!-- Статистика -->
				<div class="mt-10 grid grid-cols-3 gap-6">
					<div class="text-center">
						<div class="text-3xl font-bold text-sky-600">10+</div>
						<div class="mt-1 text-sm text-slate-500">лет опыта</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-sky-600">500+</div>
						<div class="mt-1 text-sm text-slate-500">проектов</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-sky-600">5 лет</div>
						<div class="mt-1 text-sm text-slate-500">гарантия</div>
					</div>
				</div>
			</div>

			<!-- Галерея -->
			<div class="grid gap-4">
				<div class="grid grid-cols-2 gap-4">
					<div class="group relative overflow-hidden rounded-2xl">
						<img
							src="https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg"
							alt="Встроенный шкаф"
							class="aspect-[4/3] w-full scale-x-[-1] object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div
							class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<p class="text-sm font-medium">Шкафы-купе</p>
						</div>
					</div>
					<div class="group relative overflow-hidden rounded-2xl">
						<img
							src="https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg"
							alt="Кухня"
							class="aspect-[4/3] w-full scale-x-[-1] object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div
							class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<p class="text-sm font-medium">Кухни</p>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="group relative overflow-hidden rounded-2xl">
						<img
							src="https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2023/air-sistema/2-1087x890.jpg"
							alt="Гардеробная система"
							class="aspect-[4/3] w-full scale-x-[-1] object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div
							class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<p class="text-sm font-medium">Гардеробные</p>
						</div>
					</div>
					<div class="group relative overflow-hidden rounded-2xl">
						<img
							src="https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg"
							alt="Кухонный гарнитур"
							class="aspect-[4/3] w-full scale-x-[-1] object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div
							class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<p class="text-sm font-medium">Кухонные гарнитуры</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Направления (Direction) -->
<section class="grid min-h-[50rem] grid-cols-1 gap-1 lg:grid-cols-2">
	<!-- Кухонные гарнитуры -->
	<div class="group relative flex min-h-[25rem] overflow-hidden">
		<img
			src="https://storage.yandexcloud.net/mine2024/novostroy/catalog/1726652041_2353.jpg"
			alt="Кухонные гарнитуры"
			class="absolute inset-0 h-full w-full scale-x-[-1] object-cover transition-transform duration-700 group-hover:scale-105"
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
				Консультация
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
			class="absolute inset-0 h-full w-full scale-x-[-1] object-cover transition-transform duration-700 group-hover:scale-105"
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
				Консультация
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>
</section>

<!-- Бренды материалов (Brands) -->
<section class="bg-white py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700"
			>
				Материалы
			</span>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
				Бренды, говорящие о качестве
			</h2>
		</div>

		<!-- Карточки брендов -->
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div
				class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
			>
				<div class="flex items-center gap-4">
					<img
						class="h-12 w-auto"
						src="https://avatars.mds.yandex.net/i?id=1d1d8921520f354e5488f26d3015ec591ed887c4-5031604-images-thumbs&n=13"
						alt="BLUM"
					/>
					<div>
						<h3 class="font-semibold text-slate-900">BLUM</h3>
						<p class="text-sm text-slate-500">Австрия</p>
					</div>
				</div>
				<p class="mt-4 text-sm text-slate-600">
					Компания BLUM занимается производством премиальной мебельной фурнитуры
				</p>
			</div>

			<div
				class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
			>
				<div class="flex items-center gap-4">
					<img
						class="h-12 w-auto"
						src="https://avatars.mds.yandex.net/i?id=3121a17134e862686c9e9adeba4322bbdd7745de-5231861-images-thumbs&n=13"
						alt="Hettich"
					/>
					<div>
						<h3 class="font-semibold text-slate-900">Hettich</h3>
						<p class="text-sm text-slate-500">Германия</p>
					</div>
				</div>
				<p class="mt-4 text-sm text-slate-600">
					Бренд, специализирующийся на производстве мебельной фурнитуры высокого класса
				</p>
			</div>

			<div
				class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
			>
				<div class="flex items-center gap-4">
					<img
						class="h-12 w-auto"
						src="https://avatars.mds.yandex.net/i?id=d8338ae7f892f1b8478da83c4e8d535a_sr-7106899-images-thumbs&n=13"
						alt="FGV"
					/>
					<div>
						<h3 class="font-semibold text-slate-900">FGV</h3>
						<p class="text-sm text-slate-500">Италия</p>
					</div>
				</div>
				<p class="mt-4 text-sm text-slate-600">
					Компания, специализирующаяся на производстве систем выдвижения и мебельных петель
				</p>
			</div>

			<div
				class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
			>
				<div class="flex items-center gap-4">
					<img
						class="h-12 w-auto"
						src="https://logos-world.net/wp-content/uploads/2022/07/Egger-Logo-700x394.png"
						alt="Egger"
					/>
					<div>
						<h3 class="font-semibold text-slate-900">Egger</h3>
						<p class="text-sm text-slate-500">Австрия</p>
					</div>
				</div>
				<p class="mt-4 text-sm text-slate-600">
					Производство плитных материалов различной толщины для каркасов и мебельных фасадов
				</p>
			</div>

			<div
				class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
			>
				<div class="flex items-center gap-4">
					<img
						class="h-8 w-auto"
						src="https://www.renolit.com/typo3conf/ext/renolit/Resources/Public/Svg/RENOLIT_Rely_on_it.svg"
						alt="Renolit"
					/>
					<div>
						<h3 class="font-semibold text-slate-900">Renolit</h3>
						<p class="text-sm text-slate-500">Германия</p>
					</div>
				</div>
				<p class="mt-4 text-sm text-slate-600">
					Высококачественные полимерные пленки и термопластик для фасадов различного цвета
				</p>
			</div>

			<div
				class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-sky-200 hover:shadow-lg"
			>
				<div class="flex items-center gap-4">
					<img
						class="h-12 w-auto"
						src="https://avatars.mds.yandex.net/i?id=a03767dd6a932bb1ef750ad2ee69b774_l-10136504-images-thumbs&n=13"
						alt="GTV"
					/>
					<div>
						<h3 class="font-semibold text-slate-900">GTV</h3>
						<p class="text-sm text-slate-500">Польша</p>
					</div>
				</div>
				<p class="mt-4 text-sm text-slate-600">
					Доступная и качественная мебельная фурнитура и освещение с доставкой по всему миру
				</p>
			</div>
		</div>

		<!-- Партнёры-производители -->
		<div class="mt-16 border-t border-slate-200 pt-12">
			<p class="text-center text-sm font-medium text-slate-500">Наши партнёры-производители</p>
			<div class="mt-8 grid grid-cols-3 items-center gap-8 sm:grid-cols-6">
				<a href="https://zov.top/" target="_blank" class="group flex items-center justify-center">
					<img
						class="h-10 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
						src="https://storage.yandexcloud.net/zovrus/brand/logo-rus-x2.png"
						alt="ЗОВ"
					/>
				</a>
				<a
					href="https://www.stilkuhni.ru/"
					target="_blank"
					class="group flex items-center justify-center"
				>
					<img
						class="h-10 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
						src="https://avatars.mds.yandex.net/i?id=ada48033e9cfa95f38d69fc9ae7b5bcc25b72f13-5037427-images-thumbs&n=13"
						alt="Стильные кухни"
					/>
				</a>
				<a
					href="https://www.marya.ru/"
					target="_blank"
					class="group flex items-center justify-center"
				>
					<img
						class="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
						src="https://avatars.mds.yandex.net/i?id=b761d395235060d89bd5d574233ee6bca202edcb-2037526-images-thumbs&n=13"
						alt="Мария"
					/>
				</a>
				<a
					href="https://www.mrdoors.ru/"
					target="_blank"
					class="group flex items-center justify-center"
				>
					<img
						class="h-8 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
						src="https://avatars.mds.yandex.net/i?id=cf4673eacc853d6f062852c16c8f10af8dd28ace-7909006-images-thumbs&n=13"
						alt="Мистер Дорс"
					/>
				</a>
				<a
					href="https://www.kuxni.net/"
					target="_blank"
					class="group flex items-center justify-center"
				>
					<img
						class="h-8 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
						src="https://avatars.mds.yandex.net/i?id=a74ec62d72576744e414d4b9ac3b0455aa296a51-4477047-images-thumbs&n=13"
						alt="Кухонный двор"
					/>
				</a>
				<a
					href="https://www.aristo.ru"
					target="_blank"
					class="group flex items-center justify-center"
				>
					<img
						class="h-8 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
						src="https://www.aristo.ru/include/logo_header.png"
						alt="Аристо"
					/>
				</a>
			</div>

			<div class="mt-12 text-center">
				<p
					class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-2 text-sm text-slate-600"
				>
					<span>В нашей партнёрской сети уже более 140 компаний.</span>
					<a href="/partnership" class="font-semibold text-sky-600 hover:text-sky-700">
						Присоединяйтесь →
					</a>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* Animated gradient orbs */
	.hero-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.4;
		animation: float 20s ease-in-out infinite;
	}
	
	.hero-orb-1 {
		width: 300px;
		height: 300px;
		background: linear-gradient(135deg, #0ea5e9, #06b6d4);
		top: 10%;
		left: -5%;
		animation-delay: 0s;
	}
	
	.hero-orb-2 {
		width: 250px;
		height: 250px;
		background: linear-gradient(135deg, #06b6d4, #14b8a6);
		top: 60%;
		right: -5%;
		animation-delay: -7s;
	}
	
	.hero-orb-3 {
		width: 200px;
		height: 200px;
		background: linear-gradient(135deg, #0284c7, #0ea5e9);
		bottom: 5%;
		left: 30%;
		animation-delay: -14s;
	}
	
	@keyframes float {
		0%, 100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(30px, -30px) scale(1.05);
		}
		50% {
			transform: translate(-20px, 20px) scale(0.95);
		}
		75% {
			transform: translate(20px, 30px) scale(1.02);
		}
	}
	
	/* Hero card with glassmorphism */
	.hero-card {
		position: relative;
		border-radius: 1rem;
	}
	
	.hero-card-border {
		position: absolute;
		inset: -2px;
		border-radius: 1.1rem;
		background: linear-gradient(
			135deg,
			rgba(14, 165, 233, 0.5),
			rgba(6, 182, 212, 0.3),
			rgba(255, 255, 255, 0.2),
			rgba(6, 182, 212, 0.3),
			rgba(14, 165, 233, 0.5)
		);
		background-size: 300% 300%;
		animation: borderGlow 8s ease-in-out infinite;
		opacity: 0.6;
		transition: opacity 0.3s ease;
	}
	
	.hero-card:hover .hero-card-border {
		opacity: 1;
	}
	
	@keyframes borderGlow {
		0%, 100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
	
	.hero-card-content {
		position: relative;
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		box-shadow: 
			0 25px 50px -12px rgba(0, 0, 0, 0.15),
			0 0 0 1px rgba(255, 255, 255, 0.5) inset;
	}
	
	@media (min-width: 640px) {
		.hero-card-content {
			background: rgba(249, 250, 251, 0.75);
		}
	}
	
	/* Primary button effects */
	.hero-btn-primary {
		position: relative;
		overflow: hidden;
		box-shadow: 
			0 10px 25px -5px rgba(14, 165, 233, 0.4),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
	}
	
	.hero-btn-primary::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
		opacity: 0;
		transition: opacity 0.3s ease;
	}
	
	.hero-btn-primary::after {
		content: '';
		position: absolute;
		inset: -50%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.3),
			transparent
		);
		transform: translateX(-100%) rotate(45deg);
		transition: transform 0.6s ease;
	}
	
	.hero-btn-primary:hover::before {
		opacity: 1;
	}
	
	.hero-btn-primary:hover::after {
		transform: translateX(100%) rotate(45deg);
	}
	
	.hero-btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 
			0 20px 40px -10px rgba(14, 165, 233, 0.5),
			0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	}
	
	
	/* Brand logo hover lift */
	.brand-logo:hover {
		transform: translateY(-2px);
	}

	/* Version comparison labels */
	.hero-wrapper,
	.original-hero-wrapper {
		position: relative;
	}

	.version-label {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 1rem;
		z-index: 100;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: rgba(15, 23, 42, 0.9);
		backdrop-filter: blur(12px);
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	}

	.version-label__badge {
		font-size: 0.625rem;
		font-weight: 700;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.version-label--v1 .version-label__badge {
		background: linear-gradient(135deg, #0ea5e9, #0284c7); /* Sky blue */
		color: white;
	}

	.version-label--v2 .version-label__badge {
		background: linear-gradient(135deg, #8b5cf6, #7c3aed); /* Violet */
		color: white;
	}

	.version-label--original .version-label__badge {
		background: linear-gradient(135deg, #64748b, #475569); /* Slate */
		color: white;
	}

	.version-label__text {
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
	}

	.comparison-divider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		padding: 2rem 1rem;
		background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
	}

	.comparison-divider__line {
		flex: 1;
		max-width: 200px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #64748b, transparent);
	}

	.comparison-divider__text {
		font-size: 1rem;
		font-weight: 600;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		white-space: nowrap;
	}
</style>
