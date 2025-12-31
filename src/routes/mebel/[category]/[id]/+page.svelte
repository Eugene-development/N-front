<script>
	import { page } from '$app/stores';
	
	// Моковые данные всех товаров
	const allProducts = {
		kuhni: [
			{ id: 1, name: 'Кухня "Модерн"', price: 185000, oldPrice: 215000, image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg', style: 'Современный', material: 'МДФ эмаль', color: 'Белый глянец', size: '3200 × 2100 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Современная кухня в стиле модерн с глянцевыми фасадами. Эргономичная планировка, встроенная техника, система плавного закрывания на всех ящиках.', features: ['Фасады МДФ с эмалевым покрытием', 'Фурнитура Blum (Австрия)', 'Столешница из искусственного камня', 'LED-подсветка рабочей зоны', 'Система плавного закрывания'], gallery: ['https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'] },
			{ id: 2, name: 'Кухня "Классика"', price: 245000, oldPrice: null, image: 'https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg', style: 'Классический', material: 'Массив дуба', color: 'Слоновая кость', size: '3600 × 2400 мм', warranty: '7 лет', delivery: '21-30 дней', description: 'Роскошная кухня в классическом стиле из натурального массива дуба. Резные элементы, патина, витражные вставки.', features: ['Фасады из массива дуба', 'Ручная резьба по дереву', 'Патинирование золотом', 'Витражные стёкла', 'Каменная столешница'], gallery: ['https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'] },
			{ id: 3, name: 'Кухня "Лофт"', price: 165000, oldPrice: 195000, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', style: 'Лофт', material: 'ЛДСП + металл', color: 'Бетон серый', size: '2800 × 2000 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Индустриальный стиль с открытыми полками и металлическими элементами. Брутальный дизайн для современных интерьеров.', features: ['Фасады с текстурой бетона', 'Металлический каркас', 'Открытые полки', 'Встроенная подсветка'], gallery: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'] },
			{ id: 4, name: 'Кухня "Минимализм"', price: 195000, oldPrice: null, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', style: 'Минимализм', material: 'МДФ пластик', color: 'Антрацит', size: '3000 × 2200 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Лаконичный дизайн без лишних деталей. Гладкие фасады, скрытые ручки, максимум функциональности.', features: ['Гладкие фасады без ручек', 'Система Push-to-open', 'Встроенная техника', 'Скрытое освещение'], gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'] },
			{ id: 5, name: 'Кухня "Прованс"', price: 275000, oldPrice: 320000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', style: 'Прованс', material: 'Массив ясеня', color: 'Фисташковый', size: '3400 × 2300 мм', warranty: '7 лет', delivery: '21-30 дней', description: 'Уютная кухня в стиле французского прованса. Пастельные тона, состаренные поверхности, керамические ручки.', features: ['Массив ясеня с патиной', 'Керамические ручки', 'Открытые полки для посуды', 'Декоративный карниз'], gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'] },
			{ id: 6, name: 'Кухня "Скандинавия"', price: 155000, oldPrice: null, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', style: 'Скандинавский', material: 'МДФ эмаль', color: 'Белый матовый', size: '2600 × 1800 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Светлая и функциональная кухня в скандинавском стиле. Простые формы, натуральные материалы, много света.', features: ['Матовые белые фасады', 'Деревянная столешница', 'Открытые полки', 'Минималистичный дизайн'], gallery: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800'] }
		],
		shkafy: [
			{ id: 1, name: 'Шкаф-купе "Премиум"', price: 125000, oldPrice: 145000, image: 'https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg', style: 'Современный', material: 'ЛДСП + зеркало', color: 'Чёрный матовый', size: '2400 × 2700 × 600 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Вместительный шкаф-купе с зеркальными дверями. Продуманное внутреннее наполнение для хранения одежды и аксессуаров.', features: ['Раздвижная система Aristo', 'Зеркальные двери', 'LED-подсветка', 'Выдвижные ящики', 'Штанги для одежды'], gallery: ['https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg'] },
			{ id: 2, name: 'Встроенный шкаф', price: 95000, oldPrice: null, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', style: 'Минимализм', material: 'МДФ эмаль', color: 'Белый', size: 'По размерам ниши', warranty: '5 лет', delivery: '14-21 день', description: 'Встроенный шкаф, идеально вписывающийся в нишу. Максимальное использование пространства.', features: ['Индивидуальные размеры', 'Гладкие фасады', 'Система Push-to-open'], gallery: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'] },
			{ id: 3, name: 'Шкаф с подсветкой', price: 145000, oldPrice: 165000, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600', style: 'Современный', material: 'ЛДСП + LED', color: 'Дуб сонома', size: '2000 × 2400 × 550 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Стильный шкаф с интегрированной LED-подсветкой. Автоматическое включение при открытии дверей.', features: ['LED-подсветка полок', 'Датчик движения', 'Стеклянные полки'], gallery: ['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'] },
			{ id: 4, name: 'Угловой шкаф', price: 115000, oldPrice: null, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', style: 'Классический', material: 'МДФ шпон', color: 'Орех', size: '1800 × 1800 × 2400 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Угловой шкаф для оптимального использования пространства. Классический дизайн с современным наполнением.', features: ['Угловая конструкция', 'Шпон натурального ореха', 'Карусельные полки'], gallery: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'] }
		],
		garderobnye: [
			{ id: 1, name: 'Гардеробная "Люкс"', price: 285000, oldPrice: 340000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', style: 'Премиум', material: 'МДФ + стекло', color: 'Капучино', size: '4000 × 3000 мм', warranty: '7 лет', delivery: '21-30 дней', description: 'Роскошная гардеробная комната с островом. Премиальные материалы, продуманная эргономика.', features: ['Остров с ящиками', 'Стеклянные витрины', 'Подсветка полок', 'Зеркала в полный рост'], gallery: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'] },
			{ id: 2, name: 'Гардеробная система', price: 165000, oldPrice: null, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600', style: 'Современный', material: 'ЛДСП', color: 'Белый', size: '3000 × 2500 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Модульная гардеробная система. Легко адаптируется под ваши потребности.', features: ['Модульная конструкция', 'Выдвижные корзины', 'Штанги на разных уровнях'], gallery: ['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'] },
			{ id: 3, name: 'Угловая гардеробная', price: 195000, oldPrice: 225000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', style: 'Минимализм', material: 'МДФ эмаль', color: 'Серый', size: '2500 × 2500 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Компактная угловая гардеробная для небольших помещений. Максимум функциональности.', features: ['Угловая планировка', 'Раздвижные двери', 'Встроенное освещение'], gallery: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'] }
		],
		prihozhie: [
			{ id: 1, name: 'Прихожая "Компакт"', price: 45000, oldPrice: 55000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', style: 'Современный', material: 'ЛДСП', color: 'Дуб', size: '1200 × 2100 × 350 мм', warranty: '3 года', delivery: '7-14 дней', description: 'Компактная прихожая для небольших помещений. Вешалка, полка для обуви, зеркало.', features: ['Вешалка для одежды', 'Полка для обуви', 'Зеркало', 'Крючки для сумок'], gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'] },
			{ id: 2, name: 'Прихожая с зеркалом', price: 65000, oldPrice: null, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', style: 'Классический', material: 'МДФ + зеркало', color: 'Венге', size: '1600 × 2200 × 400 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Элегантная прихожая с большим зеркалом и вместительным шкафом.', features: ['Большое зеркало', 'Шкаф для верхней одежды', 'Обувница', 'Полка для головных уборов'], gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'] },
			{ id: 3, name: 'Угловая прихожая', price: 75000, oldPrice: 85000, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', style: 'Минимализм', material: 'МДФ эмаль', color: 'Белый', size: '1400 × 1400 × 2100 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Угловая прихожая для оптимального использования пространства.', features: ['Угловой шкаф', 'Открытая вешалка', 'Банкетка с ящиком'], gallery: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800'] },
			{ id: 4, name: 'Прихожая "Премиум"', price: 95000, oldPrice: null, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', style: 'Премиум', material: 'Массив + кожа', color: 'Тёмный орех', size: '2000 × 2400 × 450 мм', warranty: '7 лет', delivery: '21-30 дней', description: 'Премиальная прихожая из массива с кожаными вставками.', features: ['Массив дуба', 'Кожаная банкетка', 'Латунная фурнитура', 'Подсветка'], gallery: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'] }
		],
		detskaya: [
			{ id: 1, name: 'Детская "Радуга"', price: 85000, oldPrice: 99000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', style: 'Детский', material: 'МДФ эмаль', color: 'Разноцветный', size: 'Комплект', warranty: '5 лет', delivery: '14-21 день', description: 'Яркий комплект детской мебели. Кровать, шкаф, стол, полки.', features: ['Экологичные материалы', 'Скруглённые углы', 'Яркие цвета', 'Система хранения игрушек'], gallery: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'] },
			{ id: 2, name: 'Кровать-чердак', price: 65000, oldPrice: null, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', style: 'Современный', material: 'ЛДСП', color: 'Белый/Голубой', size: '2000 × 900 × 1800 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Функциональная кровать-чердак с рабочей зоной внизу.', features: ['Спальное место наверху', 'Рабочий стол внизу', 'Шкаф и полки', 'Лестница с ящиками'], gallery: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'] },
			{ id: 3, name: 'Детский гарнитур', price: 125000, oldPrice: 145000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', style: 'Классический', material: 'Массив сосны', color: 'Натуральный', size: 'Комплект', warranty: '7 лет', delivery: '21-30 дней', description: 'Классический детский гарнитур из натурального дерева.', features: ['Натуральная сосна', 'Экологичное покрытие', 'Кровать, шкаф, комод', 'Письменный стол'], gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'] }
		],
		ofisnaya: [
			{ id: 1, name: 'Рабочий стол "Директор"', price: 75000, oldPrice: 89000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', style: 'Классический', material: 'МДФ шпон', color: 'Махагон', size: '1800 × 900 × 750 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Представительский рабочий стол для руководителя. Солидный дизайн, качественные материалы.', features: ['Шпон красного дерева', 'Кожаная вставка', 'Встроенный кабель-канал', 'Выдвижные ящики'], gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'] },
			{ id: 2, name: 'Компьютерный стол', price: 35000, oldPrice: null, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', style: 'Современный', material: 'ЛДСП', color: 'Белый/Дуб', size: '1400 × 700 × 750 мм', warranty: '3 года', delivery: '7-14 дней', description: 'Эргономичный компьютерный стол для домашнего офиса.', features: ['Выдвижная полка для клавиатуры', 'Отверстия для кабелей', 'Полка для системного блока'], gallery: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800'] },
			{ id: 3, name: 'Офисный шкаф', price: 55000, oldPrice: 65000, image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600', style: 'Минимализм', material: 'ЛДСП + стекло', color: 'Серый', size: '1200 × 450 × 2000 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Офисный шкаф для документов со стеклянными дверцами.', features: ['Стеклянные двери', 'Регулируемые полки', 'Замок', 'Антиопрокидывание'], gallery: ['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'] },
			{ id: 4, name: 'Стеллаж офисный', price: 45000, oldPrice: null, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', style: 'Современный', material: 'Металл + ЛДСП', color: 'Чёрный/Дуб', size: '1000 × 400 × 1800 мм', warranty: '5 лет', delivery: '14-21 день', description: 'Открытый стеллаж в индустриальном стиле.', features: ['Металлический каркас', 'Деревянные полки', 'Регулировка высоты полок'], gallery: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'] }
		]
	};

	const categoryNames = {
		kuhni: 'Кухни',
		shkafy: 'Шкафы',
		garderobnye: 'Гардеробные',
		prihozhie: 'Прихожие',
		detskaya: 'Детская мебель',
		ofisnaya: 'Офисная мебель'
	};

	$: categorySlug = $page.params.category;
	$: productId = parseInt($page.params.id);
	$: products = allProducts[categorySlug] || [];
	$: product = products.find(p => p.id === productId);
	$: categoryName = categoryNames[categorySlug] || 'Мебель';
	$: relatedProducts = products.filter(p => p.id !== productId).slice(0, 3);

	let selectedImage = 0;
	let quantity = 1;

	const formatPrice = (price) => {
		return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
	};

	const selectImage = (index) => {
		selectedImage = index;
	};
</script>

<svelte:head>
	{#if product}
		<title>{product.name} | {categoryName} | Новострой</title>
		<meta name="description" content={product.description} />
	{:else}
		<title>Товар не найден | Новострой</title>
	{/if}
</svelte:head>

{#if product}
<div class="min-h-screen bg-slate-50">
	<!-- Хлебные крошки -->
	<div class="bg-white border-b border-slate-100">
		<div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
			<nav class="flex" aria-label="Breadcrumb">
				<ol class="flex items-center space-x-2 text-sm flex-wrap">
					<li>
						<a href="/" class="text-slate-500 hover:text-sky-600 transition-colors">Главная</a>
					</li>
					<li class="flex items-center">
						<svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</li>
					<li>
						<a href="/mebel" class="text-slate-500 hover:text-sky-600 transition-colors">Мебель</a>
					</li>
					<li class="flex items-center">
						<svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</li>
					<li>
						<a href="/mebel/{categorySlug}" class="text-slate-500 hover:text-sky-600 transition-colors">{categoryName}</a>
					</li>
					<li class="flex items-center">
						<svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</li>
					<li>
						<span class="text-slate-900 font-medium">{product.name}</span>
					</li>
				</ol>
			</nav>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<!-- Основной контент товара -->
		<div class="lg:grid lg:grid-cols-2 lg:gap-12">
			<!-- Галерея изображений -->
			<div>
				<div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
					<img 
						src={product.gallery[selectedImage]} 
						alt={product.name}
						class="h-full w-full object-cover"
					/>
					{#if product.oldPrice}
						<div class="absolute top-4 left-4 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
							-{Math.round((1 - product.price / product.oldPrice) * 100)}%
						</div>
					{/if}
				</div>
				
				<!-- Миниатюры -->
				{#if product.gallery.length > 1}
					<div class="mt-4 flex gap-3">
						{#each product.gallery as image, index}
							<button 
								onclick={() => selectImage(index)}
								class="relative h-20 w-20 overflow-hidden rounded-lg transition-all {selectedImage === index ? 'ring-2 ring-sky-500 ring-offset-2' : 'opacity-70 hover:opacity-100'}"
							>
								<img src={image} alt="" class="h-full w-full object-cover" />
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Информация о товаре -->
			<div>
				<div class="flex items-center gap-3">
					<span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">{product.style}</span>
					<span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">{product.material}</span>
				</div>
				
				<h1 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{product.name}</h1>
				
				<!-- Цена -->
				<div class="mt-6 flex items-baseline gap-4">
					<span class="text-4xl font-bold text-slate-900">{formatPrice(product.price)}</span>
					{#if product.oldPrice}
						<span class="text-xl text-slate-400 line-through">{formatPrice(product.oldPrice)}</span>
					{/if}
				</div>
				
				<!-- Характеристики -->
				<div class="mt-8 space-y-4">
					<div class="flex items-center justify-between border-b border-slate-100 pb-3">
						<span class="text-slate-600">Цвет</span>
						<span class="font-medium text-slate-900">{product.color}</span>
					</div>
					<div class="flex items-center justify-between border-b border-slate-100 pb-3">
						<span class="text-slate-600">Размер</span>
						<span class="font-medium text-slate-900">{product.size}</span>
					</div>
					<div class="flex items-center justify-between border-b border-slate-100 pb-3">
						<span class="text-slate-600">Гарантия</span>
						<span class="font-medium text-slate-900">{product.warranty}</span>
					</div>
					<div class="flex items-center justify-between border-b border-slate-100 pb-3">
						<span class="text-slate-600">Срок изготовления</span>
						<span class="font-medium text-slate-900">{product.delivery}</span>
					</div>
				</div>
				
				<!-- Кнопки действий -->
				<div class="mt-8 flex flex-col gap-4 sm:flex-row">
					<a href="/consultation" class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-sky-600 hover:shadow-xl">
						Заказать расчёт
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
					<button class="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-4 font-semibold text-slate-700 transition-all hover:border-sky-500 hover:text-sky-600">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
						В избранное
					</button>
				</div>
				
				<!-- Преимущества -->
				<div class="mt-8 grid grid-cols-2 gap-4">
					<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<div class="text-sm">
							<div class="font-medium text-slate-900">Бесплатный замер</div>
							<div class="text-slate-500">Выезд специалиста</div>
						</div>
					</div>
					<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<div class="text-sm">
							<div class="font-medium text-slate-900">Гарантия {product.warranty}</div>
							<div class="text-slate-500">На все изделия</div>
						</div>
					</div>
					<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
							</svg>
						</div>
						<div class="text-sm">
							<div class="font-medium text-slate-900">Доставка и монтаж</div>
							<div class="text-slate-500">Установка под ключ</div>
						</div>
					</div>
					<div class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
							</svg>
						</div>
						<div class="text-sm">
							<div class="font-medium text-slate-900">Рассрочка 0%</div>
							<div class="text-slate-500">До 24 месяцев</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Описание и особенности -->
		<div class="mt-16 lg:grid lg:grid-cols-2 lg:gap-12">
			<div>
				<h2 class="text-2xl font-bold text-slate-900">Описание</h2>
				<p class="mt-4 text-lg text-slate-600 leading-relaxed">{product.description}</p>
			</div>
			<div>
				<h2 class="text-2xl font-bold text-slate-900">Особенности</h2>
				<ul class="mt-4 space-y-3">
					{#each product.features as feature}
						<li class="flex items-start gap-3">
							<svg class="mt-1 h-5 w-5 shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-600">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Похожие товары -->
		{#if relatedProducts.length > 0}
			<div class="mt-16">
				<h2 class="text-2xl font-bold text-slate-900">Похожие товары</h2>
				<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each relatedProducts as item}
						<a href="/mebel/{categorySlug}/{item.id}" class="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
							<div class="relative aspect-[4/3] overflow-hidden">
								<img src={item.image} alt={item.name} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
								{#if item.oldPrice}
									<div class="absolute top-3 left-3 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
										-{Math.round((1 - item.price / item.oldPrice) * 100)}%
									</div>
								{/if}
							</div>
							<div class="p-5">
								<div class="flex items-center gap-2 text-xs text-slate-500">
									<span class="rounded-full bg-slate-100 px-2 py-1">{item.style}</span>
								</div>
								<h3 class="mt-2 font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">{item.name}</h3>
								<div class="mt-2 flex items-baseline gap-2">
									<span class="text-lg font-bold text-slate-900">{formatPrice(item.price)}</span>
									{#if item.oldPrice}
										<span class="text-sm text-slate-400 line-through">{formatPrice(item.oldPrice)}</span>
									{/if}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<!-- CTA секция -->
		<div class="mt-16 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-600 p-8 text-center text-white sm:p-12">
			<h2 class="text-2xl font-bold sm:text-3xl">Хотите такую же мебель?</h2>
			<p class="mx-auto mt-3 max-w-md text-sky-100">
				Оставьте заявку и получите бесплатный расчёт стоимости с учётом ваших размеров
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-4">
				<a href="/consultation" class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-sky-600 shadow-lg transition-all hover:bg-sky-50 hover:shadow-xl">
					Заказать расчёт
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
				<a href="tel:+74951234567" class="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-white/20">
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					Позвонить
				</a>
			</div>
		</div>
	</div>
</div>
{:else}
<!-- Товар не найден -->
<div class="min-h-screen bg-slate-50 flex items-center justify-center">
	<div class="text-center px-4">
		<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
			<svg class="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</div>
		<h1 class="mt-6 text-2xl font-bold text-slate-900">Товар не найден</h1>
		<p class="mt-2 text-slate-600">К сожалению, запрашиваемый товар не существует</p>
		<a href="/mebel/{categorySlug}" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition-all hover:bg-sky-600">
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			Вернуться в каталог
		</a>
	</div>
</div>
{/if}
