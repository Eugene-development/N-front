<svelte:head>
	<title>Проектный замер помещения | Новострой</title>
	<meta name="description" content="Профессиональный замер помещения для дизайн-проекта" />
</svelte:head>

<!-- Hero секция -->
<section class="relative overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
	<!-- Диагональный декор -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 bg-gray-800" style="clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);"></div>
	</div>
	<!-- Светящиеся круги -->
	<div class="absolute -left-40 top-0 size-80 rounded-full bg-white/5 blur-3xl"></div>
	<div class="absolute -right-40 bottom-0 size-96 rounded-full bg-sky-500/10 blur-3xl"></div>
	
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
			<!-- Текст -->
			<div>
				<p class="text-base/7 font-semibold text-violet-400">Услуга</p>
				<h1 class="mt-4 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
					Проектный замер помещения
				</h1>
				<p class="mt-6 text-lg/8 text-gray-300">
					Точные обмеры — основа качественного дизайн-проекта. 
					Профессиональный замер с фиксацией всех коммуникаций и особенностей помещения.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<a href="/contacts" class="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-violet-400">
						Заказать замер
						<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
						</svg>
					</a>
					<a href="tel:+79154000020" class="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-gray-400">
						8 (915) 400-00-20
					</a>
				</div>
			</div>

			<!-- Изображение -->
			<div class="relative">
				<div class="absolute -inset-4 rounded-2xl bg-sky-500/20 blur-3xl"></div>
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<img 
						src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
						alt="Проектный замер помещения"
						class="aspect-4/3 w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Что входит в замер -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="max-w-2xl">
			<p class="text-base/7 font-semibold text-violet-600">Что мы фиксируем</p>
			<h2 class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				Детальный обмер помещения
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Карточка 1 -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
				<div class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-violet-100">01</div>
				<div class="relative">
					<div class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-violet-500">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Габариты помещений</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Точные размеры стен, высота потолков, ниши, выступы и все архитектурные особенности.
					</p>
				</div>
			</div>

			<!-- Карточка 2 -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
				<div class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-violet-100">02</div>
				<div class="relative">
					<div class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-violet-500">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Окна и двери</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Размеры и расположение оконных и дверных проёмов, направление открывания.
					</p>
				</div>
			</div>

			<!-- Карточка 3 -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
				<div class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-violet-100">03</div>
				<div class="relative">
					<div class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-violet-500">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Электрика</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Расположение розеток, выключателей, электрощитка и точек подключения.
					</p>
				</div>
			</div>

			<!-- Карточка 4 -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
				<div class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-violet-100">04</div>
				<div class="relative">
					<div class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-violet-500">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Вентиляция и отопление</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Вентиляционные каналы, радиаторы, стояки и точки подключения климатической техники.
					</p>
				</div>
			</div>

			<!-- Карточка 5 -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
				<div class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-violet-100">05</div>
				<div class="relative">
					<div class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-violet-500">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Водоснабжение</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Точки подвода воды, канализационные выводы, расположение стояков.
					</p>
				</div>
			</div>

			<!-- Карточка 6 -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
				<div class="absolute right-4 top-4 text-7xl font-bold text-gray-100 transition duration-300 group-hover:text-violet-100">06</div>
				<div class="relative">
					<div class="flex size-12 items-center justify-center rounded-xl bg-gray-900 text-white transition duration-300 group-hover:bg-violet-500">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Фотофиксация</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Детальная фотосъёмка всех помещений, узлов и особенностей для работы над проектом.
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
				<div class="absolute -bottom-6 -right-6 size-48 rounded-3xl bg-violet-500 lg:size-64"></div>
				<div class="absolute -left-4 -top-4 size-32 rounded-full bg-sky-500/30 blur-2xl"></div>
				<div class="relative overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105">
					<img 
						src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" 
						alt="Замер помещения"
						class="aspect-square w-full object-cover"
					/>
				</div>
			</div>

			<!-- Преимущества -->
			<div>
				<h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
					Зачем нужен профессиональный замер?
				</h2>
				<dl class="mt-10 space-y-8">
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-violet-500">01</dt>
						<dd>
							<p class="font-semibold text-gray-900">Точность до миллиметра</p>
							<p class="mt-1 text-base/7 text-gray-600">Используем лазерное оборудование для максимальной точности измерений</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-violet-500">02</dt>
						<dd>
							<p class="font-semibold text-gray-900">Учёт всех нюансов</p>
							<p class="mt-1 text-base/7 text-gray-600">Фиксируем коммуникации, неровности стен и все особенности помещения</p>
						</dd>
					</div>
					<div class="flex gap-6">
						<dt class="text-4xl font-bold text-violet-500">03</dt>
						<dd>
							<p class="font-semibold text-gray-900">Готовый обмерный план</p>
							<p class="mt-1 text-base/7 text-gray-600">Получаете оформленный чертёж для дальнейшей работы над проектом</p>
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
				<pattern id="grid-pattern-m" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid-pattern-m)"/>
		</svg>
	</div>
	<!-- Светящиеся акценты -->
	<div class="absolute left-1/4 top-0 size-64 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl"></div>
	<div class="absolute bottom-0 right-1/4 size-64 translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl"></div>
	
	<div class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
		<h2 class="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
			Готовы начать с точного замера?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-400">
			Закажите профессиональный замер — первый шаг к идеальному интерьеру
		</p>
		<div class="mt-10">
			<a href="/contacts" class="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-xl hover:shadow-violet-500/40">
				Заказать замер
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
				</svg>
			</a>
		</div>
		<p class="mt-8 text-sm text-gray-500">
			Или позвоните: <a href="tel:+79154000020" class="text-violet-400 transition hover:text-violet-300">8 (915) 400-00-20</a>
		</p>
	</div>
</section>
