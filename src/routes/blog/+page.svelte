<script>
	const posts = [
		{
			id: 1,
			title: 'Почему стоит доверить выбор мебели и техники профессионалам?',
			href: '#',
			preview:
				'Создание уютного и функционального интерьера — это сложный процесс, который требует времени, знаний и опыта. Многие люди ...',
			date: '26 декабря, 2023',
			readingTime: '4 мин.',
			category: { title: 'Мебель', href: '#' }
		},
		{
			id: 2,
			title: 'Как мы поможем вам с первого знакомства?',
			href: '#',
			preview:
				'Создание уютного и функционального пространства для жизни или работы требует не только вкуса, но и профессиональных знаний...',
			date: '27 июля, 2024',
			readingTime: '4 мин.',
			category: { title: 'Консультация', href: '#' }
		},
		{
			id: 3,
			title: 'Почему заказ дизайн-проекта интерьера у нас — это решение многих проблем?',
			href: '#',
			preview:
				'Создание интерьера — это сложный процесс, который требует учета множества факторов: от общего стиля до деталей, таких как цвет...',
			date: '22 апреля, 2024',
			readingTime: '4 мин.',
			category: { title: 'Дизайн-проект', href: '#' }
		},
		{
			id: 4,
			title: 'Профессиональный замер помещения — это ключ к идеальному интерьеру.',
			href: '#',
			preview:
				'Создание гармоничного и функционального интерьера начинается с точного замера помещения. Это один из самых важных этапов работы...',
			date: '12 мая, 2024',
			readingTime: '3 мин.',
			category: { title: 'Замер', href: '#' }
		},
		{
			id: 5,
			title: 'Составление проекта мебели — это ключевой этап в создании интерьера.',
			href: '#',
			preview:
				'Создание мебели на заказ — это не просто выбор размеров и материалов. Это сложный процесс, который требует учета множества факторов...',
			date: '26 июня, 2024',
			readingTime: '3 мин.',
			category: { title: 'Проектирование', href: '#' }
		},
		{
			id: 6,
			title: 'Почему профессиональная установка мебели — это гарантия качества?',
			href: '#',
			preview:
				'Сборка и установка мебели — это важный этап, который определяет не только внешний вид, но и функциональность готового изделия...',
			date: '14 октября, 2024',
			readingTime: '3 мин.',
			category: { title: 'Сборка и установка', href: '#' }
		}
	];
</script>

<svelte:head>
	<title>Новострой | Блог</title>
	<meta name="description" content="Блог компании Новострой." />
</svelte:head>

<div
	class="animate-ease-in-outsm:py-32 animate-fade bg-white py-24 animate-duration-500 animate-once"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				Наш Блог
			</h2>
			<p class="mt-2 text-lg/8 text-gray-600">
				Получайте полезные советы и новости от наших специалистов.
			</p>
		</div>
		<div
			class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each posts.reverse() as post}
				<article
					class="flex max-w-xl flex-col items-start justify-between border-b border-gray-200 pb-10"
				>
					<div class="flex items-center gap-x-4 text-xs">
						<time datetime="2020-03-16" class="text-gray-500">{post.date}</time>
						<span
							class="relative z-10 rounded-full bg-gray-50 px-4 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>{post.category.title}</span
						>
					</div>
					<div class="group relative">
						<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
							<a href="/post/{post.id}">
								<span class="absolute inset-0"></span>
								{post.title}
							</a>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
							{post.preview}
						</p>
					</div>
					<div class="relative mt-8 flex items-center gap-x-4">
						<div class="text-sm/6">
							<p class="font-semibold text-gray-900">
								Время чтения
							</p>
							<p class="text-gray-600">{post.readingTime}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</div>
