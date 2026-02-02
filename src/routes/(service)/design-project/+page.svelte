<svelte:head>
	<title>Дизайн-проект интерьера | Новострой</title>
	<meta name="description" content="Профессиональный дизайн-проект интерьера под ключ" />
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
				<p class="text-base/7 font-semibold text-emerald-400">Услуга</p>
				<h1
					class="mt-4 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
				>
					Дизайн-проект интерьера
				</h1>
				<p class="mt-6 text-lg/8 text-gray-300">
					Полный комплект документации для реализации интерьера вашей мечты. От концепции до рабочих
					чертежей — всё для безупречного результата.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<a
						href="/contacts"
						class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400"
					>
						Заказать проект
						<svg
							class="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
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
						src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
						alt="Дизайн-проект интерьера"
						class="aspect-4/3 w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Что входит в проект -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="max-w-2xl">
			<p class="text-base/7 font-semibold text-emerald-600">Состав проекта</p>
			<h2 class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				Полный комплект документации
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Карточка 1 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-emerald-100"
				>
					01
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-emerald-500"
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
								d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Концепция и стиль</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Мудборды, цветовые палитры, подбор материалов и общая стилистика интерьера.
					</p>
				</div>
			</div>

			<!-- Карточка 2 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-emerald-100"
				>
					02
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-emerald-500"
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
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Планировочные решения</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Обмерный план, планировка мебели, план демонтажа и монтажа перегородок.
					</p>
				</div>
			</div>

			<!-- Карточка 3 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-emerald-100"
				>
					03
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-emerald-500"
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
								d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Электрика и освещение</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						План розеток и выключателей, схема освещения, расположение светильников.
					</p>
				</div>
			</div>

			<!-- Карточка 4 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-emerald-100"
				>
					04
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-emerald-500"
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
								d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">3D-визуализация</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Фотореалистичные рендеры каждого помещения для полного понимания результата.
					</p>
				</div>
			</div>

			<!-- Карточка 5 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-emerald-100"
				>
					05
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-emerald-500"
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
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Спецификации</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Ведомости отделочных материалов, мебели, светильников и декора с артикулами.
					</p>
				</div>
			</div>

			<!-- Карточка 6 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
			>
				<div
					class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-emerald-100"
				>
					06
				</div>
				<div class="relative">
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-emerald-500"
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
								d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Авторский надзор</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Контроль реализации проекта, выезды на объект, консультации строителей.
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
				<div
					class="absolute -bottom-6 -right-6 size-48 rounded-3xl bg-emerald-500 lg:size-64"
				></div>
				<div class="absolute -left-4 -top-4 size-32 rounded-full bg-sky-500/30 blur-2xl"></div>
				<div
					class="relative overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
				>
					<img
						src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
						alt="Дизайн интерьера"
						class="aspect-square w-full object-cover"
					/>
				</div>
			</div>

			<!-- Преимущества -->
			<div>
				<h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
					Почему нужен дизайн-проект?
				</h2>
				<dl class="mt-10 space-y-8">
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-emerald-500">01</dt>
						<dd>
							<p class="font-semibold text-gray-900">Точный бюджет</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Знаете стоимость ремонта до его начала, без неприятных сюрпризов
							</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-emerald-500">02</dt>
						<dd>
							<p class="font-semibold text-gray-900">Экономия времени</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Строители работают по готовым чертежам без простоев и переделок
							</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-emerald-500">03</dt>
						<dd>
							<p class="font-semibold text-gray-900">Гарантия результата</p>
							<p class="mt-1 text-base/7 text-gray-600">
								Видите итоговый интерьер на 3D-визуализациях до начала работ
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
				<pattern id="grid-pattern-dp" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid-pattern-dp)" />
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
			Готовы начать проект?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-400">
			Закажите дизайн-проект и получите интерьер, который будет радовать вас долгие годы
		</p>
		<div class="mt-10">
			<a
				href="/contacts"
				class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/40"
			>
				Заказать дизайн-проект
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
		<p class="mt-8 text-sm text-gray-500">
			Или позвоните: <a
				href="tel:+79154000020"
				class="text-emerald-400 transition hover:text-emerald-300">8 (915) 400-00-20</a
			>
		</p>
	</div>
</section>
