<svelte:head>
	<title>Контакты</title>
	<meta name="description" content="Контакты" />
</svelte:head>

<div
	class="isolate animate-fade bg-white px-6 py-24 animate-duration-500 animate-ease-in-out sm:py-24 lg:px-8"
>
	<div class="mx-auto max-w-3xl sm:text-center">
		<h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
			Связь с нами
		</h2>
		<p class="mt-2 text-lg/8 text-gray-600">
			Мы работаем с понедельника по субботу с 10 до 20 по Москве.
		</p>
		<p class="text-lg/8 text-gray-600">
			В иное время воспользуйтесь нашим он-лайн чатом или почтой.
		</p>
	</div>
	<div class="mx-auto mt-20 max-w-xl space-y-8">
		<div class="flex gap-x-6">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600">
				<svg
					class="size-6 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
					/>
				</svg>
			</div>
			<div>
				<h3 class="text-lg/7 font-semibold text-gray-900">Он-лайн чат</h3>
				<p class="mt-2 text-base/7 text-gray-600">
					Мы всегда готовы помочь вам в режиме реального времени. Наша команда ответит на все ваши
					вопросы.
				</p>
				<div class="mt-4 text-sm/6 font-semibold">
					<p class="text-sky-600">Чат у вас на экране <span aria-hidden="true">&rarr;</span></p>
				</div>
			</div>
		</div>
		<div class="flex gap-x-6">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
					/>
				</svg>
			</div>
			<div>
				<h3 class="text-lg/7 font-semibold text-gray-900">Телефон</h3>
				<p class="mt-2 text-base/7 text-gray-600">
					Позвоните нам, и мы проконсультируем вас по любым вопросам. Работаем с понедельника по
					субботу.
				</p>
				<div class="mt-4 text-sm/6 font-semibold">
					<p class="text-sky-600">8 (915) 400-00-20</p>
				</div>
			</div>
		</div>
		<div class="flex gap-x-6">
			<div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
					/>
				</svg>
			</div>
			<div>
				<h3 class="text-lg/7 font-semibold text-gray-900">Почта</h3>
				<p class="mt-2 text-base/7 text-gray-600">
					Свяжитесь с нами по электронной почте. Мы постараемся ответить в течение 24 часов.
				</p>
				<div class="mt-4 text-sm/6 font-semibold">
					<p class="text-sky-600">info@novostroy.org</p>
				</div>
			</div>
		</div>
	</div>
</div>
