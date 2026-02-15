<script>
	import { page } from '$app/stores';
	
	const vacanciesData = {
		designer: {
			title: 'Дизайнер мебели',
			department: 'Дизайн',
			type: 'Полная занятость',
			location: 'Москва',
			salary: 'от 80 000 до 150 000 ₽',
			experience: 'от 1 года',
			color: 'violet',
			description: 'Мы ищем талантливого дизайнера мебели для создания уникальных проектов кухонь и корпусной мебели. Вы будете работать напрямую с клиентами, воплощая их идеи в реальность.',
			responsibilities: [
				'Создание 3D-проектов кухонь и корпусной мебели в специализированных программах',
				'Консультирование клиентов по выбору материалов, фурнитуры и техники',
				'Разработка индивидуальных дизайн-решений с учётом пожеланий клиента',
				'Подготовка технической документации для производства',
				'Контроль соответствия готовых изделий проекту',
				'Выезд на замеры к клиентам'
			],
			requirements: [
				'Опыт работы дизайнером мебели от 1 года',
				'Уверенное владение программами: PRO100, KitchenDraw или аналогами',
				'Знание материалов, фурнитуры и технологий производства мебели',
				'Умение работать с клиентами и понимать их потребности',
				'Внимательность к деталям и ответственность',
				'Готовность к выездам на замеры'
			],
			conditions: [
				'Официальное трудоустройство по ТК РФ',
				'Оклад + процент от продаж',
				'График работы 5/2 с 10:00 до 19:00',
				'Комфортный офис в центре Москвы',
				'Обучение работе с программами за счёт компании',
				'Корпоративные мероприятия и дружный коллектив'
			]
		},
		assembler: {
			title: 'Сборщик мебели',
			department: 'Производство',
			type: 'Полная занятость',
			location: 'Москва и МО',
			salary: 'от 70 000 до 120 000 ₽',
			experience: 'от 6 месяцев',
			color: 'amber',
			description: 'Приглашаем опытного сборщика мебели для профессиональной установки кухонь и корпусной мебели на объектах клиентов. Работа в команде с водителем-экспедитором.',
			responsibilities: [
				'Профессиональная сборка и установка кухонной мебели',
				'Монтаж корпусной мебели: шкафы, гардеробные, прихожие',
				'Установка и подключение встраиваемой техники',
				'Врезка моек и смесителей',
				'Регулировка фурнитуры и механизмов',
				'Консультирование клиентов по эксплуатации мебели'
			],
			requirements: [
				'Опыт сборки корпусной мебели от 6 месяцев',
				'Умение читать сборочные чертежи',
				'Наличие собственного инструмента (приветствуется)',
				'Аккуратность и внимательность к деталям',
				'Коммуникабельность и клиентоориентированность',
				'Физическая выносливость'
			],
			conditions: [
				'Официальное трудоустройство',
				'Сдельная оплата труда с высоким заработком',
				'Стабильный объём заказов',
				'Развозка на объекты служебным транспортом',
				'Обеспечение расходными материалами',
				'Возможность карьерного роста до бригадира'
			]
		},
		driver: {
			title: 'Водитель-экспедитор',
			department: 'Логистика',
			type: 'Полная занятость',
			location: 'Москва и МО',
			salary: 'от 65 000 до 95 000 ₽',
			experience: 'от 2 лет',
			color: 'emerald',
			description: 'Ищем ответственного водителя-экспедитора для доставки мебели клиентам. Работа на корпоративном транспорте, маршруты по Москве и Московской области.',
			responsibilities: [
				'Доставка мебели на объекты клиентов',
				'Погрузка и разгрузка мебели совместно со сборщиком',
				'Работа с сопроводительными документами',
				'Приём оплаты от клиентов',
				'Поддержание автомобиля в чистоте и исправном состоянии',
				'Соблюдение графика доставок'
			],
			requirements: [
				'Водительское удостоверение категории B (C — преимущество)',
				'Стаж вождения от 2 лет',
				'Знание Москвы и Московской области',
				'Опыт работы с грузами (приветствуется)',
				'Ответственность и пунктуальность',
				'Отсутствие вредных привычек'
			],
			conditions: [
				'Официальное трудоустройство по ТК РФ',
				'Работа на корпоративном автомобиле',
				'ГСМ и обслуживание за счёт компании',
				'График работы 5/2 или 2/2 (обсуждается)',
				'Оплата мобильной связи',
				'Премии за выполнение плана'
			]
		},
		marketer: {
			title: 'Маркетолог',
			department: 'Маркетинг',
			type: 'Полная занятость',
			location: 'Москва / Удалённо',
			salary: 'от 90 000 до 160 000 ₽',
			experience: 'от 2 лет',
			color: 'sky',
			description: 'Приглашаем маркетолога для развития бренда и привлечения клиентов. Вы будете отвечать за digital-маркетинг, контент и аналитику эффективности рекламных кампаний.',
			responsibilities: [
				'Разработка и реализация маркетинговой стратегии',
				'Управление рекламными кампаниями в Яндекс.Директ и Google Ads',
				'Ведение социальных сетей и создание контента',
				'Анализ эффективности рекламных каналов',
				'Работа с SEO и контент-маркетингом',
				'Организация фото- и видеосъёмок для каталога'
			],
			requirements: [
				'Опыт работы в digital-маркетинге от 2 лет',
				'Опыт настройки и ведения контекстной рекламы',
				'Знание инструментов аналитики (Яндекс.Метрика, Google Analytics)',
				'Навыки работы с графическими редакторами',
				'Понимание специфики мебельного рынка (преимущество)',
				'Креативность и аналитический склад ума'
			],
			conditions: [
				'Официальное трудоустройство',
				'Возможность удалённой работы (гибридный формат)',
				'Бюджет на рекламу и инструменты',
				'Свобода в принятии решений',
				'Профессиональное развитие и обучение',
				'Бонусы за достижение KPI'
			]
		}
	};

	$: slug = $page.params.slug;
	$: vacancy = vacanciesData[slug];

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
	{#if vacancy}
		<title>{vacancy.title} | Вакансии | Новострой</title>
		<meta name="description" content={vacancy.description} />
	{:else}
		<title>Вакансия не найдена | Новострой</title>
	{/if}
</svelte:head>

{#if vacancy}
	{@const colors = getColorClasses(vacancy.color)}
	<div class="min-h-screen bg-slate-50">
		<!-- Хлебные крошки -->
		<div class="bg-white border-b border-slate-100">
			<div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
				<nav class="flex" aria-label="Breadcrumb">
					<ol class="flex items-center space-x-2 text-sm">
						<li>
							<a href="/" class="text-slate-500 hover:text-sky-600 transition-colors">Главная</a>
						</li>
						<li class="flex items-center">
							<svg
								class="h-4 w-4 text-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</li>
						<li>
							<a href="/vacancy" class="text-slate-500 hover:text-sky-600 transition-colors"
								>Вакансии</a
							>
						</li>
						<li class="flex items-center">
							<svg
								class="h-4 w-4 text-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</li>
						<li>
							<span class="text-slate-900 font-medium">{vacancy.title}</span>
						</li>
					</ol>
				</nav>
			</div>
		</div>

		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-3 lg:gap-12">
				<!-- Основной контент -->
				<div class="lg:col-span-2">
					<!-- Заголовок -->
					<div class="rounded-2xl bg-white p-8 shadow-sm">
						<div class="flex items-center gap-3">
							<span class="rounded-full {colors.bg} {colors.text} px-3 py-1 text-sm font-medium"
								>{vacancy.department}</span
							>
							<span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
								>{vacancy.type}</span
							>
						</div>
						<h1 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{vacancy.title}</h1>
						<p class="mt-4 text-lg text-slate-600">{vacancy.description}</p>

						<div class="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
							<div class="flex items-center gap-2">
								<svg
									class="h-5 w-5 text-slate-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{vacancy.location}
							</div>
							<div class="flex items-center gap-2">
								<svg
									class="h-5 w-5 text-slate-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Опыт {vacancy.experience}
							</div>
						</div>
					</div>

					<!-- Обязанности -->
					<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
						<h2 class="text-xl font-bold text-slate-900">Обязанности</h2>
						<ul class="mt-4 space-y-3">
							{#each vacancy.responsibilities as item}
								<li class="flex items-start gap-3">
									<svg
										class="mt-1 h-5 w-5 shrink-0 text-sky-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span class="text-slate-600">{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Требования -->
					<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
						<h2 class="text-xl font-bold text-slate-900">Требования</h2>
						<ul class="mt-4 space-y-3">
							{#each vacancy.requirements as item}
								<li class="flex items-start gap-3">
									<svg
										class="mt-1 h-5 w-5 shrink-0 text-amber-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span class="text-slate-600">{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Условия -->
					<div class="mt-8 rounded-2xl bg-white p-8 shadow-sm">
						<h2 class="text-xl font-bold text-slate-900">Условия</h2>
						<ul class="mt-4 space-y-3">
							{#each vacancy.conditions as item}
								<li class="flex items-start gap-3">
									<svg
										class="mt-1 h-5 w-5 shrink-0 text-emerald-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span class="text-slate-600">{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<!-- Сайдбар -->
				<div class="mt-8 lg:mt-0">
					<div class="sticky top-24 space-y-6">
						<!-- Карточка зарплаты -->
						<div class="rounded-2xl bg-linear-to-br {colors.gradient} p-6 text-white shadow-lg">
							<div class="text-sm opacity-80">Заработная плата</div>
							<div class="mt-2 text-2xl font-bold">{vacancy.salary}</div>
							<a
								href="mailto:hr@novostroy.ru?subject=Отклик на вакансию: {vacancy.title}"
								class="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition-all hover:bg-slate-100"
							>
								Откликнуться
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>

						<!-- Контакты HR -->
						<div class="rounded-2xl bg-white p-6 shadow-sm">
							<h3 class="font-semibold text-slate-900">Контакты HR</h3>
							<div class="mt-4 space-y-3">
								<a
									href="mailto:hr@novostroy.ru"
									class="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									hr@novostroy.ru
								</a>
								<a
									href="tel:+79154000020"
									class="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors"
								>
									<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									+7 (495) 123-45-67
								</a>
							</div>
						</div>

						<!-- Другие вакансии -->
						<div class="rounded-2xl bg-white p-6 shadow-sm">
							<h3 class="font-semibold text-slate-900">Другие вакансии</h3>
							<div class="mt-4 space-y-3">
								{#if slug !== 'designer'}
									<a
										href="/vacancy/designer"
										class="block text-slate-600 hover:text-sky-600 transition-colors"
										>Дизайнер мебели</a
									>
								{/if}
								{#if slug !== 'assembler'}
									<a
										href="/vacancy/assembler"
										class="block text-slate-600 hover:text-sky-600 transition-colors"
										>Сборщик мебели</a
									>
								{/if}
								{#if slug !== 'driver'}
									<a
										href="/vacancy/driver"
										class="block text-slate-600 hover:text-sky-600 transition-colors"
										>Водитель-экспедитор</a
									>
								{/if}
								{#if slug !== 'marketer'}
									<a
										href="/vacancy/marketer"
										class="block text-slate-600 hover:text-sky-600 transition-colors">Маркетолог</a
									>
								{/if}
							</div>
							<a
								href="/vacancy"
								class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
							>
								Все вакансии
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<!-- Вакансия не найдена -->
	<div class="min-h-screen bg-slate-50 flex items-center justify-center">
		<div class="text-center px-4">
			<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
				<svg class="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<h1 class="mt-6 text-2xl font-bold text-slate-900">Вакансия не найдена</h1>
			<p class="mt-2 text-slate-600">К сожалению, запрашиваемая вакансия не существует</p>
			<a
				href="/vacancy"
				class="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600"
			>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Все вакансии
			</a>
		</div>
	</div>
{/if}
