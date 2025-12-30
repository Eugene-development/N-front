<script>
	let visibleMobileMenu = $state(false);
	let showServiceMenu = $state(false);
	let showInformationMenu = $state(false);
	let showCatalogMenu = $state(false);

	// Экспортируем функцию для открытия меню из MobileButton
	export function open() {
		visibleMobileMenu = true;
	}
</script>

{#if visibleMobileMenu}
	<div class="" role="dialog" aria-modal="true">
		<!-- Background backdrop -->
		<div class="fixed inset-0 z-10"></div>
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 pt-16 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Логотип компании Новострой</span>
					<img
						class="h-8 w-auto"
						src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
						alt="Логотип компании Новострой"
					/>
				</a>
				<button
					onclick={() => (visibleMobileMenu = false)}
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Закрыть меню</span>
					<svg
						class="size-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						<div class="-mx-3">
							<button
								onclick={() => (showServiceMenu = !showServiceMenu)}
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
							>
								Услуги
								<svg
									class="size-7 flex-none animate-pulse {showServiceMenu
										? 'rotate-180 text-red-700'
										: ''}"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							{#if showServiceMenu}
								<div class="mt-2 space-y-2">
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/consultation"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Бесплатная консультация</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/design-project"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Дизайн интерьера</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/measurement"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Замер помещения</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/furniture-project"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Проектирование мебели</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/assembly"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Сборка и установка</a
									>
								</div>
							{/if}
						</div>
						<div class="-mx-3">
							<button
								onclick={() => (showCatalogMenu = !showCatalogMenu)}
								type="button"
								class="flex w-full justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
							>
								Каталог
								<svg
									class="size-7 flex-none animate-pulse {showCatalogMenu
										? 'rotate-180 text-red-700'
										: ''}"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>

							{#if showCatalogMenu}
								<div class="mt-2 space-y-2">
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/mebel"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Мебель</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/stoleshnica"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Столешницы</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/tehnika"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Бытовая техника</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/santehnika"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Сантехника</a
									>
								</div>
							{/if}
						</div>

						<div class="-mx-3">
							<button
								onclick={() => (showInformationMenu = !showInformationMenu)}
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
							>
								Информация
								<svg
									class="size-7 flex-none animate-pulse {showInformationMenu
										? 'rotate-180 text-red-700'
										: ''}"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							{#if showInformationMenu}
								<div class="mt-2 space-y-2">
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/about"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>О компании</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/partnership"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Партнёрство</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/testimonials"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Отзывы</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/installment"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Рассрочка</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/guarantees"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Гарантии</a
									>
									<a
										onclick={() => (visibleMobileMenu = false)}
										href="/contacts"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Контакты</a
									>
								</div>
							{/if}
						</div>
					</div>
					<div class="py-6">
						<a
							onclick={() => (visibleMobileMenu = false)}
							href="/actions"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
							>Акции</a
						>
						<a
							onclick={() => (visibleMobileMenu = false)}
							href="/blog"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
							>Блог</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
