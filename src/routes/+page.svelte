<svelte:head>
	<title>Компания Новострой – Мебель на заказ для вашего идеального интерьера</title>
	<meta
		name="description"
		content="Компания Новострой предлагает мебель на заказ по индивидуальным размерам и дизайну, а также мойки со смесителями, столешницы и бытовую технику. Высокое качество мебели, надежность и внимание к деталям – мы поможем вам реализовать все ваши идеи!"
	/>
</svelte:head>

<!-- Hero Section -->
<div class="animate-fade animate-duration-[4000ms]">
	<div class="relative isolate overflow-hidden">
		<img
			src="https://storage.yandexcloud.net/mine2024/novostroy/site/mainfoto.jpg"
			alt="Кухонный гарнитур"
			class="absolute inset-0 -z-10 hidden size-full scale-x-[-1] animate-fade object-cover animate-delay-500 animate-duration-[3000ms] sm:block"
		/>
		<div class="absolute inset-0 -z-10 hidden bg-black/20 sm:block"></div>
		<div class="mx-auto">
			<div class="-mt-24 mx-auto max-w-5xl py-32 sm:py-40 lg:py-48">
				<div class="animate-fade-up animate-duration-10000 animate-ease-in-out">
					<section class="rounded-lg bg-neutral-100/80 dark:bg-gray-900">
						<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
							<a
								href="/blog"
								class="mb-7 inline-flex items-center justify-between rounded-full bg-neutral-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-neutral-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
							>
								<span class="mr-3 rounded-full bg-neutral-200 px-4 py-1.5 text-xs text-red-700"
									>Это интересно</span
								>
								<span class="text-sm font-medium">Наш мебельный блог</span>
								<svg
									class="ml-2 h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									></path></svg
								>
							</a>
							<h1
								class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-7xl"
							>
								Мебель и техника
							</h1>
							<p
								class="my-8 text-xs font-normal text-gray-800 dark:text-gray-400 sm:px-10 lg:text-xl xl:px-12"
							>
								Изготовим мебель по вашим размерам с бесплатным проектом от дизайнера. Согласуем
								проект с фабрикой, подберём столешницу, технику и аксессуары. Значительно снизим
								затраты и сэкономим ваше время на поиске лучших решений.
							</p>
							<div
								class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0 lg:mb-16"
							>
								<a
									href="/actions"
									class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
								>
									Наши акции
									<svg
										class="-mr-1 ml-2 h-5 w-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path></svg
									>
								</a>
								<a
									href="/consultation"
									class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
								>
									Бесплатный проект и просчёт
								</a>
							</div>
							<div class="mx-auto px-4 text-center">
								<div class="mx-auto max-w-7xl rounded-lg bg-white p-4">
									<p class="p-2">Бренды, с которыми мы работаем:</p>
									<div
										class="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 p-2 *:hover:scale110 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none"
									>
										<a href="https://www.hettich.com/en-gb/home" target="_blank">
											<img
												class="col-span-2 col-start-2 mb-7 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
												src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_of_Hettich_%28company%29.svg"
												alt="Hettich"
											/>
										</a>
										<a href="https://www.egger.com/en/?country=GB" target="_blank">
											<img
												class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
												src="https://cdn.egger.com/img/cms/ff58d5b2-cb11-41dc-ba72-5cec737f1c8a/a6b3c90f-a0ba-4379-abab-9215f9071955/ORIGINAL/gen_egger_logo_en.svg"
												alt="Egger"
											/>
										</a>
										<a href="https://www.blum.com/gb/en" target="_blank">
											<img
												class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
												src="https://www.blum.com/corporate/layout/facelift/images/ci/logo.svg.svg"
												alt="Blum"
											/>
										</a>
										<a href="https://www.omoikiri.com/" target="_blank">
											<img
												class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
												src="https://www.omoikiri.com/wp-content/themes/twentynineteen/img/default/logo_black.svg"
												alt="omoikiri"
											/>
										</a>
										<a href="https://www.aristo.ru" target="_blank">
											<img
												class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
												src="https://www.aristo.ru/include/logo_header.png"
												alt="Аристо"
											/>
										</a>
										<a href="https://xn--80aaf1dfl.xn--p1ai/" target="_blank">
											<img
												class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
												src="https://static.tildacdn.com/tild6566-3232-4639-a231-643431313266/black2.svg"
												alt="Avarus"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Message Section -->
<div class="bg-white py-20 sm:py-24 xl:py-36">
	<div class="bg-gray-50/70 pb-20 sm:pb-24 xl:pb-0">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
		>
			<div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
				<div class="aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
					<img
						src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
						alt="логотип"
						class="inset-0 size-full rounded-2xl object-contain pb-4 shadow-2xl"
					/>
				</div>
			</div>
			<div class="w-full max-w-3xl xl:max-w-none xl:flex-auto xl:px-8 xl:py-24">
				<figure class="relative isolate pt-6 sm:pt-12">
					<svg
						viewBox="0 0 162 128"
						fill="none"
						aria-hidden="true"
						class="absolute left-0 top-0 -z-10 h-24 stroke-gray-300/40"
					>
						<path
							id="quote"
							d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
						/>
						<use href="#quote" x="86" />
					</svg>
					<blockquote class="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
						<p>
							Наша компания предлагает создание стильных дизайн-проектов корпусной мебели и интерьера
							с точным подбором бытовой техники, освещением, сантехники и кухонных столешниц.
						</p>
					</blockquote>
				</figure>
			</div>
		</div>
	</div>
</div>

<!-- Incentives Section -->
<div class="overflow-hidden py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-4">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
		>
			<div class="lg:col-end-1 lg:w-full lg:max-w-xl lg:pb-8">
				<h2 class="text-base/7 font-semibold text-sky-700">Экономия</h2>
				<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					С нами выгодно покупать мебель
				</h2>
				<div class="mt-8 border-l border-sky-400 pl-6">
					<p class="mt-3 text-base/6 text-gray-600">
						Помогаем клиентам сделать правильный выбор материалов, цвета материалов и производителя
						мебели. Это позволит <span class="font-semibold text-sky-600"
							>сэкономить время и материальные затраты!</span
						>
					</p>
					<p class="mt-3 text-base/6 text-gray-600">
						Опыт и знание рынка позволяют предложить решения, которые максимально соответствуют
						вашему стилю, бюджету и требованиям к высокому качеству мебели.
					</p>
					<p class="mt-3 text-base/6 text-gray-600">
						К кухонным гарнитурам подбирается качественная фурнитура, стильная столешница, техника и
						мойка со смесителем, чтобы создать функциональный и красивый дизайн.
					</p>
					<p class="mt-3 text-base/6 text-gray-600">
						Работая со шкафами и гардеробами, уделяется особое внимание удобству и функциональности,
						продумывая эргономику, необходимое освещение и системы хранения.
					</p>
				</div>
			</div>
			<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
				<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
					<img
						src="https://aristo.expert/upload/iblock/c03/u2v1fjrt1l89bvmymd1kmrjvk06euaaj/Razdvizhnaya_-vtsroennyy-shkaf-s-razdvizhnymi-dveryami_-chernyy-matovyy.jpeg"
						alt=""
						class="aspect-[7/5] w-[37rem] max-w-none scale-x-[-1] rounded-2xl bg-gray-50 object-cover"
					/>
				</div>
				<div
					class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
				>
					<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
						<img
							src="https://zovofficial.com/image/cache/catalog/products/kuhni/2024/fabi/cam-1-1087x890.jpg"
							alt=""
							class="aspect-[4/3] w-[24rem] max-w-none scale-x-[-1] flex-none rounded-2xl bg-gray-50 object-cover"
						/>
					</div>
					<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
						<img
							src="https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2023/air-sistema/2-1087x890.jpg"
							alt=""
							class="aspect-[7/5] w-[37rem] max-w-none scale-x-[-1] flex-none rounded-2xl bg-gray-50 object-cover"
						/>
					</div>
					<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
						<img
							src="https://zovofficial.com/image/cache/catalog/products/kuhni/2022/pemont-22/cam-1-1087x890.jpg"
							alt=""
							class="aspect-[4/3] w-[24rem] max-w-none scale-x-[-1] rounded-2xl bg-gray-50 object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
