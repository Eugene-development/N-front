<script>
	const vacancies = [
		{
			slug: 'designer',
			title: 'Дизайнер мебели',
			department: 'Дизайн',
			type: 'Полная занятость',
			location: 'Москва',
			salary: 'от 80 000 ₽',
			color: 'violet',
			icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
			description: 'Создание 3D-проектов кухонь и корпусной мебели, работа с клиентами'
		},
		{
			slug: 'assembler',
			title: 'Сборщик мебели',
			department: 'Производство',
			type: 'Полная занятость',
			location: 'Москва и МО',
			salary: 'от 70 000 ₽',
			color: 'amber',
			icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
			description: 'Профессиональная сборка и установка мебели на объектах клиентов'
		},
		{
			slug: 'driver',
			title: 'Водитель-экспедитор',
			department: 'Логистика',
			type: 'Полная занятость',
			location: 'Москва и МО',
			salary: 'от 65 000 ₽',
			color: 'emerald',
			icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
			description: 'Доставка мебели клиентам, работа с документами'
		},
		{
			slug: 'marketer',
			title: 'Маркетолог',
			department: 'Маркетинг',
			type: 'Полная занятость',
			location: 'Москва / Удалённо',
			salary: 'от 90 000 ₽',
			color: 'sky',
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
			description: 'Продвижение бренда, управление рекламными кампаниями, аналитика'
		}
	];

	const getColorClasses = (color) => {
		const colors = {
			violet: { bg: 'bg-violet-100', text: 'text-violet-600', gradient: 'from-violet-500 to-purple-600' },
			amber: { bg: 'bg-amber-100', text: 'text-amber-600', gradient: 'from-amber-500 to-orange-600' },
			emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', gradient: 'from-emerald-500 to-teal-600' },
			sky: { bg: 'bg-sky-100', text: 'text-sky-600', gradient: 'from-sky-500 to-cyan-600' }
		};
		return colors[color] || colors.sky;
	};
</script>

<svelte:head>
	<title>Вакансии | Работа в компании Новострой</title>
	<meta name="description" content="Актуальные вакансии компании Новострой. Присоединяйтесь к нашей команде профессионалов в сфере мебельной индустрии." />
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<!-- Hero секция -->
	<div class="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-sky-900">
		<div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
		<div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-cyan-500 shadow-lg shadow-sky-500/25">
					<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</div>
				<h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
					Вакансии
				</h1>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
					Присоединяйтесь к команде профессионалов. Мы создаём качественную мебель и ценим каждого сотрудника.
				</p>
			</div>
		</div>
		<div class="absolute bottom-0 left-0 right-0">
			<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
			</svg>
		</div>
	</div>

	<!-- Преимущества работы -->
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-slate-900">Почему выбирают нас</h2>
			<p class="mx-auto mt-4 max-w-2xl text-slate-600">Мы заботимся о наших сотрудниках</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-2xl bg-white p-6 shadow-sm text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
					<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="mt-4 text-lg font-semibold text-slate-900">Достойная зарплата</h3>
				<p class="mt-2 text-sm text-slate-600">Конкурентная оплата труда и бонусы за результат</p>
			</div>

			<div class="rounded-2xl bg-white p-6 shadow-sm text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
					<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
					</svg>
				</div>
				<h3 class="mt-4 text-lg font-semibold text-slate-900">Карьерный рост</h3>
				<p class="mt-2 text-sm text-slate-600">Возможности для профессионального развития</p>
			</div>

			<div class="rounded-2xl bg-white p-6 shadow-sm text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
					<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				</div>
				<h3 class="mt-4 text-lg font-semibold text-slate-900">Обучение</h3>
				<p class="mt-2 text-sm text-slate-600">Бесплатное обучение и повышение квалификации</p>
			</div>

			<div class="rounded-2xl bg-white p-6 shadow-sm text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
					<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</div>
				<h3 class="mt-4 text-lg font-semibold text-slate-900">Дружный коллектив</h3>
				<p class="mt-2 text-sm text-slate-600">Комфортная атмосфера и поддержка коллег</p>
			</div>
		</div>
	</div>

	<!-- Список вакансий -->
	<div class="bg-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-3xl font-bold text-slate-900">Открытые вакансии</h2>
				<p class="mx-auto mt-4 max-w-2xl text-slate-600">Выберите подходящую позицию и отправьте резюме</p>
			</div>

			<div class="mt-12 grid gap-6 lg:grid-cols-2">
				{#each vacancies as vacancy}
					{@const colors = getColorClasses(vacancy.color)}
					<a href="/vacancy/{vacancy.slug}" class="group relative overflow-hidden rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
						<div class="flex items-start gap-4">
							<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br {colors.gradient} text-white shadow-lg">
								<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={vacancy.icon} />
								</svg>
							</div>
							<div class="flex-1">
								<div class="flex items-center gap-2">
									<span class="rounded-full {colors.bg} {colors.text} px-3 py-1 text-xs font-medium">{vacancy.department}</span>
									<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{vacancy.type}</span>
								</div>
								<h3 class="mt-3 text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{vacancy.title}</h3>
								<p class="mt-2 text-slate-600">{vacancy.description}</p>
								<div class="mt-4 flex items-center justify-between">
									<div class="flex items-center gap-4 text-sm text-slate-500">
										<span class="flex items-center gap-1">
											<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
											{vacancy.location}
										</span>
									</div>
									<span class="text-lg font-bold text-slate-900">{vacancy.salary}</span>
								</div>
							</div>
						</div>
						<div class="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
							<svg class="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- CTA секция -->
	<div class="bg-linear-to-r from-sky-500 to-cyan-600 py-16">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Не нашли подходящую вакансию?</h2>
			<p class="mx-auto mt-4 max-w-xl text-lg text-sky-100">
				Отправьте нам своё резюме, и мы свяжемся с вами, когда появится подходящая позиция
			</p>
			<div class="mt-8">
				<a href="mailto:hr@novostroy.ru" class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-sky-600 shadow-lg transition-all hover:bg-sky-50 hover:shadow-xl">
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					Отправить резюме
				</a>
			</div>
		</div>
	</div>
</div>
