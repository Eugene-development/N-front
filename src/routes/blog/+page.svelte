<script>
	const posts = [
		{
			id: 1,
			title: 'Почему стоит доверить выбор мебели и техники профессионалам?',
			href: '#',
			preview: 'Создание уютного и функционального интерьера — это сложный процесс, который требует времени, знаний и опыта. Многие люди ...',
			date: '26 декабря, 2023',
			readingTime: '4 мин.',
			category: { title: 'Мебель', href: '#', color: 'sky' },
			image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600'
		},
		{
			id: 2,
			title: 'Как мы поможем вам с первого знакомства?',
			href: '#',
			preview: 'Создание уютного и функционального пространства для жизни или работы требует не только вкуса, но и профессиональных знаний...',
			date: '27 июля, 2024',
			readingTime: '4 мин.',
			category: { title: 'Консультация', href: '#', color: 'emerald' },
			image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600'
		},
		{
			id: 3,
			title: 'Почему заказ дизайн-проекта интерьера у нас — это решение многих проблем?',
			href: '#',
			preview: 'Создание интерьера — это сложный процесс, который требует учета множества факторов: от общего стиля до деталей, таких как цвет...',
			date: '22 апреля, 2024',
			readingTime: '4 мин.',
			category: { title: 'Дизайн-проект', href: '#', color: 'violet' },
			image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600'
		},
		{
			id: 4,
			title: 'Профессиональный замер помещения — это ключ к идеальному интерьеру.',
			href: '#',
			preview: 'Создание гармоничного и функционального интерьера начинается с точного замера помещения. Это один из самых важных этапов работы...',
			date: '12 мая, 2024',
			readingTime: '3 мин.',
			category: { title: 'Замер', href: '#', color: 'amber' },
			image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600'
		},
		{
			id: 5,
			title: 'Составление проекта мебели — это ключевой этап в создании интерьера.',
			href: '#',
			preview: 'Создание мебели на заказ — это не просто выбор размеров и материалов. Это сложный процесс, который требует учета множества факторов...',
			date: '26 июня, 2024',
			readingTime: '3 мин.',
			category: { title: 'Проектирование', href: '#', color: 'pink' },
			image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600'
		},
		{
			id: 6,
			title: 'Почему профессиональная установка мебели — это гарантия качества?',
			href: '#',
			preview: 'Сборка и установка мебели — это важный этап, который определяет не только внешний вид, но и функциональность готового изделия...',
			date: '14 октября, 2024',
			readingTime: '3 мин.',
			category: { title: 'Сборка и установка', href: '#', color: 'cyan' },
			image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600'
		}
	];

	const categories = [
		{ name: 'Все статьи', count: 6, active: true },
		{ name: 'Мебель', count: 1, active: false },
		{ name: 'Консультация', count: 1, active: false },
		{ name: 'Дизайн-проект', count: 1, active: false },
		{ name: 'Замер', count: 1, active: false },
		{ name: 'Проектирование', count: 1, active: false },
		{ name: 'Сборка и установка', count: 1, active: false }
	];

	const getCategoryColor = (color) => {
		const colors = {
			sky: 'bg-sky-100 text-sky-700',
			emerald: 'bg-emerald-100 text-emerald-700',
			violet: 'bg-violet-100 text-violet-700',
			amber: 'bg-amber-100 text-amber-700',
			pink: 'bg-pink-100 text-pink-700',
			cyan: 'bg-cyan-100 text-cyan-700'
		};
		return colors[color] || 'bg-slate-100 text-slate-700';
	};
</script>

<svelte:head>
	<title>Блог | Полезные статьи о мебели и интерьере | Новострой</title>
	<meta name="description" content="Блог компании Новострой. Полезные советы по выбору мебели, дизайну интерьера, уходу за мебелью и актуальные тренды." />
</svelte:head>

<div class="min-h-screen bg-slate-50">
	<!-- Hero секция -->
	<div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
		<div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
		<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 shadow-lg shadow-sky-500/25">
					<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
					</svg>
				</div>
				<h1 class="text-4xl font-bold text-white sm:text-5xl">
					Блог Новострой
				</h1>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
					Полезные советы, тренды дизайна и экспертные рекомендации от наших специалистов
				</p>
			</div>
		</div>
		<!-- Волна снизу -->
		<div class="absolute bottom-0 left-0 right-0">
			<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
			</svg>
		</div>
	</div>

	<!-- Категории -->
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="flex flex-wrap gap-3">
			{#each categories as category}
				<button 
					class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all {category.active ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm'}"
				>
					{category.name}
					<span class="rounded-full {category.active ? 'bg-white/20' : 'bg-slate-100'} px-2 py-0.5 text-xs">
						{category.count}
					</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Главная статья -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<a href="/post/{posts[posts.length - 1].id}" class="group block">
			<div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl">
				<div class="absolute inset-0">
					<img 
						src={posts[posts.length - 1].image} 
						alt={posts[posts.length - 1].title}
						class="h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
				</div>
				<div class="relative p-8 sm:p-12 lg:p-16">
					<div class="max-w-2xl">
						<div class="flex items-center gap-4">
							<span class="inline-flex items-center rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300 backdrop-blur">
								{posts[posts.length - 1].category.title}
							</span>
							<span class="text-sm text-slate-400">{posts[posts.length - 1].date}</span>
						</div>
						<h2 class="mt-6 text-3xl font-bold text-white sm:text-4xl group-hover:text-sky-300 transition-colors">
							{posts[posts.length - 1].title}
						</h2>
						<p class="mt-4 text-lg text-slate-300 line-clamp-2">
							{posts[posts.length - 1].preview}
						</p>
						<div class="mt-8 inline-flex items-center gap-2 text-sky-400 font-semibold group-hover:text-sky-300 transition-colors">
							Читать статью
							<svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>

	<!-- Сетка статей -->
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each posts.slice(0, -1).reverse() as post}
				<article class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
					<!-- Изображение -->
					<div class="relative h-48 overflow-hidden">
						<img 
							src={post.image} 
							alt={post.title}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
						<div class="absolute bottom-4 left-4">
							<span class="inline-flex items-center rounded-full {getCategoryColor(post.category.color)} px-3 py-1 text-xs font-medium">
								{post.category.title}
							</span>
						</div>
					</div>
					
					<!-- Контент -->
					<div class="flex flex-1 flex-col p-6">
						<div class="flex items-center gap-4 text-sm text-slate-500">
							<time>{post.date}</time>
							<span class="flex items-center gap-1">
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								{post.readingTime}
							</span>
						</div>
						
						<h3 class="mt-4 text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors">
							<a href="/post/{post.id}">
								<span class="absolute inset-0"></span>
								{post.title}
							</a>
						</h3>
						
						<p class="mt-3 flex-1 text-sm text-slate-600 line-clamp-3">
							{post.preview}
						</p>
						
						<div class="mt-4 flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700">
							Читать далее
							<svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>

	<!-- Подписка на рассылку -->
	<div class="bg-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-600 px-8 py-16 shadow-xl sm:px-16">
				<div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>
				<div class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>
				<div class="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
					<div>
						<h2 class="text-3xl font-bold text-white">Подпишитесь на рассылку</h2>
						<p class="mt-4 text-lg text-sky-100">
							Получайте полезные статьи, советы по дизайну интерьера и эксклюзивные предложения первыми
						</p>
					</div>
					<div class="mt-8 lg:mt-0">
						<form class="flex flex-col gap-4 sm:flex-row">
							<input 
								type="email" 
								placeholder="Ваш email" 
								class="flex-1 rounded-xl border-0 px-6 py-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:ring-2 focus:ring-white"
							/>
							<button 
								type="submit" 
								class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-slate-800"
							>
								Подписаться
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</button>
						</form>
						<p class="mt-4 text-sm text-sky-100">
							Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Популярные темы -->
	<div class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h2 class="text-2xl font-bold text-slate-900">Популярные темы</h2>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#кухни
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#дизайн интерьера
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#современный стиль
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#бытовая техника
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#столешницы
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#фурнитура
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#тренды 2024
				</a>
				<a href="#" class="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-sky-50 hover:text-sky-700 hover:shadow">
					#советы
				</a>
			</div>
		</div>
	</div>
</div>
