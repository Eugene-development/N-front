<svelte:head>
	<title>Акции | Новострой</title>
	<meta name="description" content="Акции, скидки и подарки от компании Новострой" />
</svelte:head>

<!-- Hero секция -->
<section class="relative overflow-hidden bg-linear-to-br from-slate-50 to-white py-24 sm:py-32">
	<!-- Диагональный декор -->
	<div class="absolute inset-0">
		<div
			class="absolute inset-0 bg-linear-to-br from-red-50 to-amber-50"
			style="clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);"
		></div>
	</div>
	<!-- Светящиеся круги -->
	<div class="absolute -left-40 top-0 size-80 rounded-full bg-red-100/50 blur-3xl"></div>
	<div class="absolute -right-40 bottom-0 size-96 rounded-full bg-amber-100/50 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
		<p class="text-base/7 font-semibold text-red-500">Выгодные предложения</p>
		<h1
			class="mt-4 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
		>
			Акции, скидки и подарки
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg/8 text-slate-600">
			Получите актуальные акции наших партнёров и узнайте о подарках и скидках на проекты и услуги
		</p>
	</div>
</section>

<!-- Карточки акций -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Карточка 1 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-red-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/30"
					>
						<svg
							class="size-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Консультация дизайнера</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Наш специалист бесплатно приедет к вам на объект в пределах города и даст подробную
						консультацию.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
						>
							Бесплатно
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 2 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-red-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/30"
					>
						<svg
							class="size-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Замер помещения</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Осуществим замер с указанием углов, розеток и вывода воды. Его стоимость вычтем из
						договора.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
						>
							В счёт договора
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 3 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-red-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/30"
					>
						<svg
							class="size-7"
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
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Установка техники</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						При приобретении у нас бытовой техники мы подключим её к коммуникациям за счёт компании.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
						>
							Бесплатно
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 4 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-red-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/30"
					>
						<svg
							class="size-7"
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
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Дизайн-проект</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Дизайнер бесплатно составит проект мебели в соответствии с замером и вашими пожеланиями.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
						>
							Бесплатно
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 5 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-red-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/30"
					>
						<svg
							class="size-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Техника в подарок</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Предложим вам в подарок каждую пятую позицию бытовой техники, приобретённую у нас.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
						>
							Подарок
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 6 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-red-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-red-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/30"
					>
						<svg
							class="size-7"
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
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Сборка мебели</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Осуществим сборку нашими квалифицированными специалистами и оплатим их работу.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700"
						>
							Бесплатно
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Дополнительные акции -->
<section class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Карточка 7 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-amber-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-amber-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/30"
					>
						<svg
							class="size-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Особое предложение</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Если вы приобретаете мебель повторно, то для вас будет особое предложение в виде скидки
						или подарка.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700"
						>
							Для постоянных клиентов
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 8 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-amber-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-amber-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/30"
					>
						<svg
							class="size-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Скидки за большой заказ</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						Если вы заказываете несколько позиций мебели, то мы обязательно согласуем вам
						дополнительную скидку.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700"
						>
							Скидка
						</span>
					</div>
				</div>
			</div>

			<!-- Карточка 9 -->
			<div
				class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-amber-500"
			>
				<div
					class="absolute -right-4 -top-4 size-24 rounded-full bg-amber-500/10 transition duration-300 group-hover:scale-150"
				></div>
				<div class="relative">
					<div
						class="flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/30"
					>
						<svg
							class="size-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
							/>
						</svg>
					</div>
					<h3 class="mt-6 text-xl font-semibold text-gray-900">Такси до дома</h3>
					<p class="mt-3 text-base/7 text-gray-600">
						После оформления договора вызовем вам такси в пределах города за счёт нашей компании.
					</p>
					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700"
						>
							Бесплатно
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Баннер -->
<section class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">
		<div class="overflow-hidden rounded-3xl">
			<img
				alt="Акция"
				src="https://storage.yandexcloud.net/mine2024/novostroy/site/actionfoto.png"
				class="w-full object-cover"
			/>
		</div>
	</div>
</section>

<!-- CTA секция -->
<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-3xl px-6 text-center lg:px-8">
		<h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
			Хотите узнать больше об акциях?
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-600">
			Свяжитесь с нами и мы расскажем обо всех актуальных предложениях
		</p>
		<div class="mt-10">
			<a
				href="/contacts"
				class="inline-flex items-center gap-2 rounded-lg bg-red-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition duration-300 hover:-translate-y-1 hover:bg-red-400 hover:shadow-xl hover:shadow-red-500/40"
			>
				Связаться с нами
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
		<p class="mt-8 text-sm text-gray-500">
			Или позвоните: <a href="tel:+79154000020" class="text-red-500 transition hover:text-red-400"
				>8 (915) 400-00-20</a
			>
		</p>
	</div>
</section>
