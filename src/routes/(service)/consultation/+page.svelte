<script>
	import ServiceOrderButton from '$lib/components/ServiceOrderButton.svelte';
</script>

<svelte:head>
	<title>Консультация дизайнера | Новострой</title>
	<meta name="description" content="Профессиональная консультация дизайнера интерьера" />
</svelte:head>

<!-- Hero секция -->
<section class="relative overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
	<!-- Диагональный декор -->
	<div class="absolute inset-0">
		<div
			class="absolute inset-0 bg-gray-800"
			style="clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);"
		></div>
	</div>
	<!-- Светящиеся круги -->
	<div class="absolute -left-40 top-0 size-80 rounded-full bg-white/5 blur-3xl"></div>
	<div class="absolute -right-40 bottom-0 size-96 rounded-full bg-sky-500/10 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
			<!-- Текст -->
			<div>
				<p class="text-base/7 font-semibold text-amber-400">Услуга компании</p>
				<h1
					class="mt-4 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
				>
					Консультация дизайнера
				</h1>
				<p class="mt-6 text-lg/8 text-gray-300">
					Профессиональный взгляд на ваше пространство. Получите экспертные рекомендации по стилю,
					планировке и подбору материалов от опытного дизайнера интерьеров.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<ServiceOrderButton
						serviceType="consultation"
						class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-amber-400 cursor-pointer"
					>
						Заказать консультацию
						<svg
							class="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</ServiceOrderButton>
					<a
						href="tel:+79154000020"
						class="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-gray-400"
					>
						<svg
							class="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						8 (915) 400-00-20
					</a>
				</div>
			</div>

			<!-- Изображение -->
			<div class="relative lg:scale-[1.15]">
				<div class="absolute -inset-4 rounded-2xl bg-sky-500/20 blur-3xl"></div>
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="/consultation_hero.png"
						alt="Консультация дизайнера"
						class="aspect-square w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Что входит в консультацию -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="max-w-2xl">
			<p class="text-base/7 font-semibold text-amber-600">Что вы получите</p>
			<h2 class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				Комплексный подход к вашему интерьеру
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Карточка 1 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-amber-100"
				>
					01
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-amber-500"
					>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Анализ пространства</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Оценка планировки, освещения и функциональных зон. Выявление потенциала помещения.
					</p>
				</div>
			</div>

			<!-- Карточка 2 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-amber-100"
				>
					02
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-amber-500"
					>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Концепция стиля</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Подбор стилистического направления, цветовой палитры и ключевых материалов.
					</p>
				</div>
			</div>

			<!-- Карточка 3 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-amber-100"
				>
					03
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-amber-500"
					>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">План действий</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Пошаговые рекомендации по реализации с учётом вашего бюджета и сроков.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Секция с изображением и преимуществами -->
<section class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Изображение с геометрией -->
			<div class="relative">
				<div class="absolute -bottom-6 -right-6 size-48 rounded-3xl bg-amber-500 lg:size-64"></div>
				<div class="absolute -left-4 -top-4 size-32 rounded-full bg-sky-500/30 blur-2xl"></div>
				<div
					class="relative overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
				>
					<img
						src="/consultation_process.png"
						alt="Дизайн интерьера"
						class="aspect-square w-full object-cover"
					/>
				</div>
			</div>

			<!-- Преимущества -->
			<div>
				<h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
					Почему начать с консультации?
				</h2>
				<dl class="mt-10 space-y-8">
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-amber-500">01</dt>
						<dd>
							<p class="font-semibold text-gray-900">Экономия бюджета</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Избежите дорогих ошибок при выборе мебели и материалов
							</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-amber-500">02</dt>
						<dd>
							<p class="font-semibold text-gray-900">Чёткое видение</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Получите понятный план действий ещё до начала ремонта
							</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-amber-500">03</dt>
						<dd>
							<p class="font-semibold text-gray-900">Индивидуальный подход</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Решения, учитывающие ваш образ жизни и предпочтения
							</p>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>

<!-- CTA секция -->
<section class="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
	<!-- Декоративный паттерн -->
	<div class="absolute inset-0 opacity-10">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid-pattern)" />
		</svg>
	</div>
	<!-- Светящиеся акценты -->
	<div
		class="absolute left-1/4 top-0 size-64 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 right-1/4 size-64 translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl"
	></div>

	<div class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
		<h2 class="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
			Готовы преобразить пространство?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-400">
			Запишитесь на консультацию и получите профессиональные рекомендации по созданию интерьера
			вашей мечты
		</p>
		<div class="mt-10">
			<ServiceOrderButton
				serviceType="consultation"
				class="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-sm font-semibold text-gray-900 shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/40 cursor-pointer"
			>
				Заказать консультацию
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</ServiceOrderButton>
		</div>
		<p class="mt-8 text-sm text-gray-500">
			Или позвоните: <a
				href="tel:+79154000020"
				class="text-amber-400 transition hover:text-amber-300">8 (915) 400-00-20</a
			>
		</p>
	</div>
</section>
