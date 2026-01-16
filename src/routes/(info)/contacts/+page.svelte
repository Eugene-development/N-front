<svelte:head>
	<title>Контакты | Новострой</title>
	<meta name="description" content="Свяжитесь с нами — телефон, почта, адрес" />
</svelte:head>

<!-- Hero секция -->
<section class="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
	<!-- Диагональный декор -->
	<div class="absolute inset-0">
		<div class="absolute inset-0 bg-gray-800" style="clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);"></div>
	</div>
	<!-- Светящиеся круги -->
	<div class="absolute -left-40 top-0 size-80 rounded-full bg-white/5 blur-3xl"></div>
	<div class="absolute -right-40 bottom-0 size-96 rounded-full bg-sky-500/10 blur-3xl"></div>
	
	<div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
		<p class="text-base/7 font-semibold text-sky-400">Связь с нами</p>
		<h1 class="mt-4 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
			Контакты
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg/8 text-gray-300">
			Мы работаем с понедельника по субботу с 10:00 до 20:00 по Москве. 
			В иное время воспользуйтесь онлайн-чатом или почтой.
		</p>
	</div>
</section>

<!-- Способы связи -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-3">
			<!-- Телефон -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-sky-500">
				<div class="absolute -right-4 -top-4 size-24 rounded-full bg-sky-500/10 transition duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex size-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/30">
						<svg class="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Телефон</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Позвоните нам, и мы проконсультируем вас по любым вопросам
					</p>
					<a href="tel:+79154000020" class="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-sky-600 transition hover:text-sky-500">
						8 (915) 400-00-20
						<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Почта -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-sky-500">
				<div class="absolute -right-4 -top-4 size-24 rounded-full bg-sky-500/10 transition duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex size-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/30">
						<svg class="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Почта</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Напишите нам, и мы ответим в течение 24 часов
					</p>
					<a href="mailto:info@novostroy.org" class="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-sky-600 transition hover:text-sky-500">
						info@novostroy.org
						<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Онлайн-чат -->
			<div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-sky-500">
				<div class="absolute -right-4 -top-4 size-24 rounded-full bg-sky-500/10 transition duration-300 group-hover:scale-150"></div>
				<div class="relative">
					<div class="flex size-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/30">
						<svg class="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Онлайн-чат</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Мы готовы помочь вам в режиме реального времени
					</p>
					<p class="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-sky-600">
						Чат на экране
						<span class="relative flex size-3">
							<span class="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
							<span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Адрес и карта -->
<section class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Информация об адресе -->
			<div>
				<p class="text-base/7 font-semibold text-sky-600">Наш офис</p>
				<h2 class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
					Приезжайте к нам
				</h2>
				<p class="mt-6 text-lg/8 text-gray-600">
					Мы находимся в удобном месте с хорошей транспортной доступностью. 
					Приезжайте на консультацию или для обсуждения вашего проекта.
				</p>
				
				<dl class="mt-10 space-y-6">
					<div class="flex gap-4">
						<dt class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white">
							<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
							</svg>
						</dt>
						<dd>
							<p class="font-semibold text-gray-900">Адрес</p>
							<p class="mt-1 text-base/7 text-gray-600">г. Москва, ул. Примерная, д. 1</p>
						</dd>
					</div>
					<div class="flex gap-4">
						<dt class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white">
							<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</dt>
						<dd>
							<p class="font-semibold text-gray-900">Часы работы</p>
							<p class="mt-1 text-base/7 text-gray-600">Пн–Сб: 10:00 – 20:00</p>
							<p class="text-base/7 text-gray-600">Вс: выходной</p>
						</dd>
					</div>
					<div class="flex gap-4">
						<dt class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white">
							<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
							</svg>
						</dt>
						<dd>
							<p class="font-semibold text-gray-900">Парковка</p>
							<p class="mt-1 text-base/7 text-gray-600">Бесплатная парковка для клиентов</p>
						</dd>
					</div>
				</dl>
			</div>

			<!-- Карта / Изображение -->
			<div class="relative">
				<div class="absolute -bottom-6 -right-6 size-48 rounded-3xl bg-sky-500 lg:size-64"></div>
				<div class="absolute -left-4 -top-4 size-32 rounded-full bg-indigo-500/30 blur-2xl"></div>
				<div class="relative overflow-hidden rounded-3xl bg-gray-200 shadow-2xl">
					<!-- Заглушка для карты -->
					<div class="flex aspect-square items-center justify-center bg-gray-100">
						<div class="text-center">
							<svg class="mx-auto size-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
							</svg>
							<p class="mt-4 text-lg font-medium text-gray-500">Карта</p>
							<p class="mt-1 text-sm text-gray-400">Здесь будет интерактивная карта</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Мессенджеры -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="text-center">
			<p class="text-base/7 font-semibold text-sky-600">Социальные сети</p>
			<h2 class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				Мы в мессенджерах
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-lg/8 text-gray-600">
				Выберите удобный способ связи — мы ответим в течение нескольких минут
			</p>
		</div>

		<div class="mt-16 flex flex-wrap justify-center gap-6">
			<!-- MAX -->
			<a href="https://max.ru/novostroy" target="_blank" rel="noopener noreferrer" 
			   class="group flex items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500">
				<div class="flex size-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110">
					<img src="https://logo-teka.com/wp-content/uploads/2025/07/max-messenger-sign-logo.svg" alt="SVG logo Max" class="size-14" />
				</div>
				<div>
					<p class="font-semibold text-gray-900">MAX</p>
					<p class="text-sm text-gray-500">Быстрые ответы</p>
				</div>
			</a>

			<!-- Telegram -->
			<a href="https://t.me/novostroy" target="_blank" rel="noopener noreferrer"
			   class="group flex items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-sky-500">
				<div class="flex size-14 items-center justify-center rounded-2xl bg-sky-500 text-white transition duration-300 group-hover:scale-110">
					<svg class="size-8" fill="currentColor" viewBox="0 0 24 24">
						<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
					</svg>
				</div>
				<div>
					<p class="font-semibold text-gray-900">Telegram</p>
					<p class="text-sm text-gray-500">Удобный чат</p>
				</div>
			</a>

			<!-- VK -->
			<a href="https://vk.com/novostroy" target="_blank" rel="noopener noreferrer"
			   class="group flex items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-blue-500">
				<div class="flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white transition duration-300 group-hover:scale-110">
					<svg class="size-8" fill="currentColor" viewBox="0 0 24 24">
						<path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.684 4 8.21c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.455 2.27 4.607 2.862 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
					</svg>
				</div>
				<div>
					<p class="font-semibold text-gray-900">ВКонтакте</p>
					<p class="text-sm text-gray-500">Сообщество</p>
				</div>
			</a>
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
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid-pattern)"/>
		</svg>
	</div>
	<!-- Светящиеся акценты -->
	<div class="absolute left-1/4 top-0 size-64 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl"></div>
	<div class="absolute bottom-0 right-1/4 size-64 translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl"></div>
	
	<div class="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
		<h2 class="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
			Остались вопросы?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-400">
			Свяжитесь с нами любым удобным способом — мы всегда рады помочь с выбором мебели и дизайном интерьера
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<a href="tel:+79154000020" class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/40">
				<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
				</svg>
				Позвонить
			</a>
			<a href="https://max.ru/novostroy" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-white/5">
				Написать в MAX
			</a>
		</div>
	</div>
</section>
