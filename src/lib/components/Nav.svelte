<!-- Навигационное меню - нижняя часть хэдера -->
<script>
	import { fade } from 'svelte/transition';
	import MobileMenu from './MobileMenu.svelte';

	let visibleServicesMenu = $state(false);
</script>

<header class="bg-gray-50">
	<nav
		class="max-w-9xl mx-auto hidden items-center justify-between p-2 lg:flex lg:px-8"
		aria-label="Global"
	>
		<div class="flex items-center lg:flex-1">
			<a href="/" class="-m-1.5 -mb-8 rounded-b-lg bg-gray-50 p-1.5 shadow-lg z-30">
				<span class="sr-only">Компания Новострой</span>
				<img
					class="size-20 w-auto"
					src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
					alt="Логотип компании Новострой"
				/>
			</a>
		</div>
		<div class="-ml-7 flex items-center lg:gap-x-12">
			<a href="/" class="text-base font-medium text-gray-900 hover:text-pink-700">Главная</a>

			<div onmouseleave={() => (visibleServicesMenu = false)} class="relative" role="navigation">
				<button
					onmouseenter={() => (visibleServicesMenu = true)}
					type="button"
					class="flex items-center gap-x-1 py-3 text-base font-medium text-gray-900 hover:text-pink-700"
					aria-expanded={visibleServicesMenu}
				>
					Наши услуги
				</button>

				{#if visibleServicesMenu}
					<div
						transition:fade={{ duration: 100, delay: 50 }}
						role="menu"
						tabindex="0"
						class="absolute -left-8 top-full z-20 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
					>
						<a
							href="/consultation"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Бесплатная консультация</a
						>
						<a
							href="/design-project"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Дизайн интерьера</a
						>
						<a
							href="/measurement"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Замер помещения</a
						>
						<a
							href="/furniture-project"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Проектирование мебели</a
						>
						<a
							href="/assembly"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Сборка и установка</a
						>
					</div>
				{/if}
			</div>

			<a href="/mebel" class="text-base font-medium text-gray-900 hover:text-pink-700"
				>Каталог мебели</a
			>
			<a href="/stoleshnica" class="text-base font-medium text-gray-900 hover:text-pink-700"
				>Столешницы</a
			>
			<a href="/actions" class="text-base font-medium text-gray-900 hover:text-pink-700">Акции</a>
		</div>

		<div class="flex items-center lg:flex-1 lg:justify-end">
			<p
				class="duration-400 group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_70%)_inset] transition-colors"
			>
				<span>
					<span
						class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-full w-full overflow-hidden rounded-xl [mask:linear-gradient(white,transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:-rotate-90 before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:inset-[0_auto_auto_50%] before:[translate:-50%_-15%]"
					></span>
				</span>
				<span
					class="backdrop absolute inset-px rounded-[11px] bg-gray-50/90 transition-colors duration-200 group-hover:bg-gray-50"
				></span>
				<span class="z-10 flex text-base font-normal text-gray-900">
					<span>г. Москва и МО</span>
				</span>
			</p>
		</div>
	</nav>

	<MobileMenu />
</header>
