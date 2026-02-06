<script>
	import ServiceOrderButton from '$lib/components/ServiceOrderButton.svelte';
</script>

<svelte:head>
	<title>Сборка мебели | Новострой</title>
	<meta name="description" content="Профессиональная сборка и установка мебели" />
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
				<p class="text-base/7 font-semibold text-rose-400">Услуга</p>
				<h1
					class="mt-4 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
				>
					Сборка и установка мебели
				</h1>
				<p class="mt-6 text-lg/8 text-gray-300">
					Профессиональная сборка и установка мебели любой сложности. Быстро, аккуратно и с
					гарантией качества.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<ServiceOrderButton
						serviceType="assembly"
						class="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-400 cursor-pointer"
					>
						Заказать сборку
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
			<div class="relative">
				<div class="absolute -inset-4 rounded-2xl bg-sky-500/20 blur-3xl"></div>
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="/kitchen_assembly_modern.png"
						alt="Сборка мебели"
						class="aspect-square w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Что входит в услугу -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="max-w-2xl">
			<p class="text-base/7 font-semibold text-rose-600">Наши услуги</p>
			<h2 class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				Полный комплекс работ
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Карточка 1 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-rose-100"
				>
					01
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-rose-500"
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
								d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Корпусная мебель</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Сборка шкафов, комодов, стеллажей, тумб и другой корпусной мебели.
					</p>
				</div>
			</div>

			<!-- Карточка 2 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-rose-100"
				>
					02
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-rose-500"
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
								d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Кухонные гарнитуры</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Монтаж кухонь с подключением техники, установкой мойки и столешницы.
					</p>
				</div>
			</div>

			<!-- Карточка 3 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-rose-100"
				>
					03
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-rose-500"
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
								d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Встроенная мебель</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Установка встроенных шкафов-купе, гардеробных систем и ниш.
					</p>
				</div>
			</div>

			<!-- Карточка 4 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-rose-100"
				>
					04
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-rose-500"
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
								d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Регулировка фурнитуры</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Настройка петель, доводчиков, направляющих для идеальной работы.
					</p>
				</div>
			</div>

			<!-- Карточка 5 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-rose-100"
				>
					05
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-rose-500"
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
								d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Подключение подсветки</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Монтаж LED-подсветки в шкафах, витринах и на кухне.
					</p>
				</div>
			</div>

			<!-- Карточка 6 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-rose-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-rose-100"
				>
					06
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-rose-500"
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
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Вывоз упаковки</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Уборка после сборки и вывоз всей упаковки и строительного мусора.
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
				<div class="absolute -bottom-6 -right-6 size-48 rounded-3xl bg-rose-500 lg:size-64"></div>
				<div class="absolute -left-4 -top-4 size-32 rounded-full bg-sky-500/30 blur-2xl"></div>
				<div
					class="relative overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
				>
					<img
						src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
						alt="Сборка мебели"
						class="aspect-square w-full object-cover"
					/>
				</div>
			</div>

			<!-- Преимущества -->
			<div>
				<h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
					Почему выбирают нас?
				</h2>
				<dl class="mt-10 space-y-8">
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-rose-500">01</dt>
						<dd>
							<p class="font-semibold text-gray-900">Опытные мастера</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Сборщики с опытом работы от 5 лет, знающие все нюансы
							</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-rose-500">02</dt>
						<dd>
							<p class="font-semibold text-gray-900">Профессиональный инструмент</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Работаем качественным инструментом для идеального результата
							</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-rose-500">03</dt>
						<dd>
							<p class="font-semibold text-gray-900">Гарантия на работы</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Даём гарантию на все выполненные работы по сборке
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
				<pattern id="grid-pattern-a" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid-pattern-a)" />
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
			Нужна сборка мебели?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-400">
			Оставьте заявку и мы соберём вашу мебель быстро и качественно
		</p>
		<div class="mt-10">
			<ServiceOrderButton
				serviceType="assembly"
				class="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition duration-300 hover:-translate-y-1 hover:bg-rose-400 hover:shadow-xl hover:shadow-rose-500/40 cursor-pointer"
			>
				Заказать сборку
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</ServiceOrderButton>
		</div>
		<p class="mt-8 text-sm text-gray-500">
			Или позвоните: <a href="tel:+79154000020" class="text-rose-400 transition hover:text-rose-300"
				>8 (915) 400-00-20</a
			>
		</p>
	</div>
</section>
