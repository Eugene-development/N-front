<!-- О компании (Message) -->
<section class="bg-slate-50">
	<div class="bg-slate-50 py-16 sm:py-28">
		<div class="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:px-8">
			<!-- Логотип -->
			<div class="w-full max-w-xs sm:max-w-sm">
				<div class="relative">
					<div
						class="absolute -inset-4 rounded-3xl bg-linear-to-r from-sky-100 to-cyan-100 opacity-50 blur-xl"
					></div>
					<img
						src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
						alt="Логотип Новострой"
						class="relative w-full rounded-2xl object-contain"
					/>
				</div>
			</div>

			<!-- Текст -->
			<div class="w-full max-w-3xl text-center">
				<figure class="relative">
					<blockquote
						class="relative text-lg font-medium leading-relaxed text-slate-900 sm:text-xl"
					>
						<p>
							Предлагаем мебель на заказ для вашего идеального интерьера с индивидуальным подбором
							размеров и дизайна. Нашими партнёрами являются фабрики, которые используют только
							качественные материалы и фурнитуру, поэтому мы гарантируем высокое качество продукции.
						</p>
					</blockquote>

					<!-- Разделительная линия -->
					<div class="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-sky-300 to-cyan-300"></div>
				</figure>
			</div>
		</div>

		<!-- Карточки преимуществ -->
		<div class="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
			<div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
				<!-- Карточка 1 -->
				<div
					class="message-card group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition-all duration-500 hover:shadow-lg hover:ring-slate-300 hover:-translate-y-1"
				>
					<div
						class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-50/80 transition-transform duration-500 group-hover:scale-125"
					></div>
					<div class="relative">
						<div class="mb-4 size-24 overflow-hidden rounded-xl">
							<img
								src="/message/design_project.png"
								alt="Дизайн-проект"
								class="h-full w-full object-cover"
							/>
						</div>
						<h3 class="text-sm font-bold text-slate-900 sm:text-base">Дизайн-проект</h3>
						<p class="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
							Бесплатный 3D-проект с визуализацией и точными замерами
						</p>
					</div>
				</div>

				<!-- Карточка 2 -->
				<div
					class="message-card group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition-all duration-500 hover:shadow-lg hover:ring-slate-300 hover:-translate-y-1"
				>
					<div
						class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-50/80 transition-transform duration-500 group-hover:scale-125"
					></div>
					<div class="relative">
						<div class="mb-4 size-24 overflow-hidden rounded-xl">
							<img
								src="/message/kitchen.png"
								alt="Мебель на заказ"
								class="h-full w-full object-cover"
							/>
						</div>
						<h3 class="text-sm font-bold text-slate-900 sm:text-base">Мебель</h3>
						<p class="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
							Производство по точным размерам и вашим предпочтениям
						</p>
					</div>
				</div>

				<!-- Карточка 3 -->
				<div
					class="message-card group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition-all duration-500 hover:shadow-lg hover:ring-slate-300 hover:-translate-y-1"
				>
					<div
						class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-50/80 transition-transform duration-500 group-hover:scale-125"
					></div>
					<div class="relative">
						<div class="mb-4 size-24 overflow-hidden rounded-xl">
							<img
								src="/message/partnership.png"
								alt="Партнёрство"
								class="h-full w-full object-cover"
							/>
						</div>
						<h3 class="text-sm font-bold text-slate-900 sm:text-base">Партнёрство</h3>
						<p class="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
							Сотрудничаем с лучшими фабриками и поставщиками
						</p>
					</div>
				</div>

				<!-- Карточка 4 -->
				<div
					class="message-card group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition-all duration-500 hover:shadow-lg hover:ring-slate-300 hover:-translate-y-1"
				>
					<div
						class="absolute -right-4 -top-4 size-24 rounded-full bg-cyan-50/80 transition-transform duration-500 group-hover:scale-125"
					></div>
					<div class="relative">
						<div class="mb-4 size-24 overflow-hidden rounded-xl">
							<img
								src="/message/quality.png"
								alt="Гарантия качества"
								class="h-full w-full object-cover"
							/>
						</div>
						<h3 class="text-sm font-bold text-slate-900 sm:text-base">Гарантия качества</h3>
						<p class="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
							Гарантия до 5 лет на мебель и полное сопровождение заказа
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.message-card {
		animation: message-fade-in 0.6s ease-out both;
	}
	.message-card:nth-child(1) { animation-delay: 0.1s; }
	.message-card:nth-child(2) { animation-delay: 0.2s; }
	.message-card:nth-child(3) { animation-delay: 0.3s; }
	.message-card:nth-child(4) { animation-delay: 0.4s; }

	@keyframes message-fade-in {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
