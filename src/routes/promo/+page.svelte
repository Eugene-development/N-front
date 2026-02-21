<script>
	import { onMount } from 'svelte';
	import PartnershipButton from '$lib/components/PartnershipButton.svelte';
	
	// Action for revealing elements on scroll
	function reveal(node) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('opacity-100', 'translate-y-0');
					node.classList.remove('opacity-0', 'translate-y-10');
					observer.unobserve(node);
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
		
		node.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
		observer.observe(node);
		
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
	
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>Партнёрская программа Новострой | Уникальное предложение</title>
</svelte:head>

<!-- Wrap everything in a dark slate container -->
<div
	class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden"
>
	<!-- Header -->
	<header
		class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {scrollY > 50
			? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4'
			: 'bg-transparent py-6'}"
	>
		<div class="container mx-auto px-6 flex justify-between items-center">
			<div class="flex items-center">
				<a
					href="/"
					class="group relative transition-transform duration-300 hover:scale-105 z-30 flex items-center"
				>
					<span class="sr-only">Компания Новострой</span>
					<img
						class="h-24 w-auto"
						src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
						alt="Логотип компании Новострой"
					/>
				</a>
			</div>
			<PartnershipButton
				class="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors border border-white/10 relative overflow-hidden group"
			>
				<span class="relative z-10">Стать партнёром</span>
				<div
					class="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
				></div>
			</PartnershipButton>
		</div>
	</header>

	<!-- Hero Section -->
	<section
		class="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center min-h-[90vh]"
	>
		<!-- Decorative background effects -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div
				class="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-sky-500/20 blur-[120px] mix-blend-screen"
			></div>
			<div
				class="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[100px] mix-blend-screen"
			></div>
			<div
				class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"
			></div>
		</div>

		<div class="container mx-auto relative z-10 max-w-6xl text-center">
			<div
				class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-8 animate-fade-down"
			>
				<span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
				Специальное коммерческое предложение
			</div>

			<h1
				class="text-5xl md:text-7xl font-bold tracking-wide tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-fade-down"
				style="animation-delay: 100ms;"
			>
				Клиенты для вашего <br class="hidden md:block" />
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400"
					>бизнеса</span
				>
			</h1>

			<p
				class="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up"
				style="animation-delay: 200ms;"
			>
				В сложный экономический кризис важно держаться вместе и находить выгоду в сотрудничестве. Мы
				предлагаем клиентуру для ващего производства или магазина.
			</p>

			<div
				class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
				style="animation-delay: 300ms;"
			>
				<a
					href="#how-it-works"
					class="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-sky-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
				>
					Подробнее
				</a>
				<!-- <a
					href="#join"
					class="px-8 py-4 rounded-full bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-all border-white/10"
				>
					Начать сотрудничество
				</a> -->
			</div>
		</div>
	</section>

	<!-- Workflow Section -->
	<section id="how-it-works" class="scroll-mt-24 py-24 relative z-10 bg-slate-950">
		<div class="container mx-auto px-6 max-w-6xl">
			<div class="text-center mb-24" use:reveal>
				<h2 class="text-3xl md:text-5xl font-bold mb-6">Как это работает</h2>
				<p class="text-slate-400 text-lg max-w-2xl mx-auto">
					Мы создали надёжную систему, в которой выигрывают все. Плавный процесс конвертации
					рекомендации в продажу.
				</p>
			</div>

			<div class="relative">
				<!-- Path line connecting elements -->
				<div
					class="absolute left-8 md:left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-sky-500/50 via-indigo-500/50 to-emerald-500/20 transform md:-translate-x-1/2"
				></div>

				<div class="space-y-32 text-white">
					<!-- Step 1 -->
					<div
						class="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
						use:reveal
					>
						<div
							class="w-full md:w-5/12 text-left md:text-right md:pr-16 pl-24 md:pl-0 order-2 md:order-1 relative"
						>
							<h3 class="text-4xl font-bold mb-3 text-sky-400">Заявка</h3>
							<p class="text-slate-400 leading-relaxed text-lg">
								Заявки на изготовление мебели от ремонтных бригад, дизайнеров и продавцов мебели
								регистрируются на нашей платформе и обрабатываются нашими кураторами.
							</p>
						</div>
						<div
							class="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.2)] group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500"
						>
							<div class="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center">
								<svg
									class="w-4 h-4 text-sky-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
									></path></svg
								>
							</div>
						</div>
						<div class="w-full md:w-5/12 pl-24 md:pl-16 order-3 md:order-2">
							<div
								class="bg-gradient-to-r from-slate-900/80 to-slate-900/40 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-sky-500/30 transition-colors"
							>
								<div class="flex gap-4">
									<div
										class="w-1.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
									></div>
									<div>
										<h4 class="font-semibold text-white mb-3">Главные участники этапа:</h4>
										<ul class="space-y-3 text-slate-300 text-sm font-medium">
											<li class="flex items-center gap-3">
												<div
													class="flex items-center justify-center w-6 h-6 rounded-md bg-slate-800 border border-slate-700"
												>
													<div class="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
												</div>
												Дизайнеры
											</li>
											<li class="flex items-center gap-3">
												<div
													class="flex items-center justify-center w-6 h-6 rounded-md bg-slate-800 border border-slate-700"
												>
													<div class="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
												</div>
												Ремонтные бригады
											</li>
											<li class="flex items-center gap-3">
												<div
													class="flex items-center justify-center w-6 h-6 rounded-md bg-slate-800 border border-slate-700"
												>
													<div class="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
												</div>
												Продавцы и консультанты
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 2 -->
					<div
						class="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
						use:reveal
					>
						<div
							class="w-full md:w-5/12 text-left md:text-right md:pr-16 pl-24 md:pl-0 order-2 md:order-1 relative"
						>
							<h3 class="text-4xl font-bold mb-3 text-indigo-400">Проект</h3>
							<p class="text-slate-400 leading-relaxed text-lg">
								Наши кураторы обрабатывают каждую заявку и создают комплексный проект. Они
								связываются с клиентом, уточняют все детали и формируют чёткое техническое задание.
							</p>
						</div>
						<div
							class="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500"
						>
							<div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
								<svg
									class="w-4 h-4 text-indigo-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									></path></svg
								>
							</div>
						</div>
						<div class="w-full md:w-5/12 pl-24 md:pl-16 order-3 md:order-2">
							<div
								class="bg-gradient-to-r from-slate-900/80 to-slate-900/40 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 transition-colors relative overflow-hidden"
							>
								<div
									class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"
								></div>
								<div class="relative">
									<p class="text-slate-300 italic">
										"Мы берём на себя всю важную работу — коммуникацию с клиентом и подготовку ТЗ,
										экономя ваше время и ресурсы."
									</p>
									<p class="text-sm text-indigo-400 font-bold mt-4 tracking-wide">
										— Отдел кураторов
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 3 -->
					<div
						class="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
						use:reveal
					>
						<div
							class="w-full md:w-5/12 text-left md:text-right md:pr-16 pl-24 md:pl-0 order-2 md:order-1"
						>
							<h3 class="text-4xl font-bold mb-3 text-emerald-400">Просчёт</h3>
							<p class="text-slate-400 leading-relaxed text-lg mb-6">
								Техническое задание передаётся вам на просчёт. Все нюансы обсуждаются с нашим
								куратором проекта
							</p>

							<div class="inline-flex flex-col items-start md:items-end w-full">
								<div class="text-xs uppercase tracking-widest text-emerald-500/80 font-bold mb-2">
									Наш приоритет
								</div>
								<div
									class="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-4 rounded-xl shadow-lg border-l-4 border-l-emerald-500 text-left md:text-right"
								>
									Мы ожидаем адекватную цену, качественное выполнение работ и разуумные сроки
								</div>
							</div>
						</div>
						<div
							class="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500"
						>
							<div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
								<svg
									class="w-4 h-4 text-emerald-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
									></path></svg
								>
							</div>
						</div>
						<div class="w-full md:w-5/12 pl-24 md:pl-16 order-3 md:order-2">
							<div
								class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-white/10 group-hover:-translate-y-2 transition-transform duration-700"
							>
								<!-- Industrial placeholder visually distinct -->
								<div
									class="absolute inset-0 bg-gradient-to-br from-emerald-900/60 to-slate-900 text-center flex flex-col items-center justify-center p-6 z-10"
								>
									<!-- <div
										class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 flex items-center justify-center mb-6 shadow-inner border border-emerald-500/20"
									>
										<span class="text-emerald-400 font-black text-4xl">N</span>
									</div> -->
									<h4
										class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white tracking-widest uppercase"
									>
										Важно
									</h4>
									<p class="text-emerald-400 mt-2 font-medium tracking-wide">
										Если озвученный вами бюджет и прочие условия на изготовление проекта устраивает
										клиента, то мы незамедлительно передаём его вам.
									</p>
								</div>
								<div
									class="absolute inset-0 bg-white/5 opacity-50 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
								></div>
							</div>
						</div>
					</div>

					<!-- Step 4 -->
					<div
						class="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
						use:reveal
					>
						<div
							class="w-full md:w-5/12 text-left md:text-right md:pr-16 pl-24 md:pl-0 order-2 md:order-1 relative"
						>
							<h3 class="text-4xl font-bold mb-3 text-amber-400">Клиент</h3>
							<p class="text-slate-400 leading-relaxed text-lg">
								После финального согласования проекта и его стоимости, клиент приобретает у вас
								мебель или технику.
							</p>
						</div>
						<div
							class="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.2)] group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500"
						>
							<div class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
								<svg
									class="w-4 h-4 text-amber-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									></path></svg
								>
							</div>
						</div>
						<div class="w-full md:w-5/12 pl-24 md:pl-16 order-3 md:order-2">
							<div
								class="bg-gradient-to-r from-slate-900/80 to-slate-900/40 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-amber-500/30 transition-colors"
							>
								<div class="flex items-center gap-4">
									<div
										class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-shrink-0 items-center justify-center"
									>
										<svg
											class="w-6 h-6 text-amber-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											></path></svg
										>
									</div>
									<div>
										<h4 class="font-bold text-white mb-1">Сделка заключена</h4>
										<p class="text-sm text-slate-400">
											В этот момент мы подразумеваем, что наша работа выполнена.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 5 -->
					<div
						class="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
						use:reveal
					>
						<div
							class="w-full md:w-5/12 text-left md:text-right md:pr-16 pl-24 md:pl-0 order-2 md:order-1 relative"
						>
							<h3 class="text-4xl font-bold mb-3 text-violet-400">Выплата</h3>
							<p class="text-slate-400 leading-relaxed text-lg">
								После заключения договора вами с клиентом мы ожидаем выплату оговоренных ранее
								процентов за сделку.
							</p>
						</div>
						<div
							class="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500"
						>
							<div class="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
								<svg
									class="w-4 h-4 text-violet-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
									></path></svg
								>
							</div>
						</div>
						<div class="w-full md:w-5/12 pl-24 md:pl-16 order-3 md:order-2">
							<div
								class="bg-gradient-to-r from-slate-900/80 to-slate-900/40 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-violet-500/30 transition-colors"
							>
								<div class="flex gap-4">
									<div
										class="w-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
									></div>
									<div class="w-full">
										<h4 class="font-semibold text-white mb-3">Далее мы сами выплачиваем:</h4>
										<div class="grid grid-cols-2 gap-3">
											<div
												class="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center text-xs text-slate-300 font-medium"
											>
												Агентам
											</div>
											<div
												class="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center text-xs text-slate-300 font-medium"
											>
												Дизайнерам
											</div>
											<div
												class="bg-slate-800 border border-slate-700 rounded-lg p-2 text-center text-xs text-slate-300 font-medium col-span-2"
											>
												Кураторам
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Financial Scheme Section -->
	<section class="py-24 md:py-32 relative overflow-hidden bg-slate-900 border-y border-white/5">
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"
		></div>

		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/10 via-slate-900 to-slate-950"
		></div>

		<div class="container mx-auto px-6 relative z-10 text-center">
			<div use:reveal>
				<h2 class="text-3xl md:text-7xl font-bold mb-6">Финансовая схема</h2>
				<!-- <p class="text-lg text-slate-400 mb-20 max-w-2xl mx-auto">
					Фиксированные условия сотрудничества с чётким распределением комиссии на каждом этапе.
				</p> -->
			</div>

			<div
				class="flex items-center justify-center gap-6 lg:gap-16 flex-col lg:flex-row mt-12 max-w-5xl mx-auto"
				use:reveal
			>
				<!-- Factory Box -->
				<div
					class="relative w-full lg:w-[30%] bg-slate-800 p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:-translate-y-2 transition-transform duration-300"
				>
					<div
						class="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 mx-auto rounded-2xl flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
					>
						<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path></svg
						>
					</div>
					<h3 class="text-lg font-bold text-white mb-2">Выплата</h3>
					<p class="text-slate-400 text-sm">Вы оплачиваете нам комиссию за полученный заказ</p>
					<div
						class="mt-6 font-mono font-bold text-2xl text-emerald-400/80 bg-slate-900/50 py-2 rounded-xl border border-slate-700"
					>
						Выплата
					</div>
				</div>

				<!-- Divider Arrow -->
				<div class="hidden lg:flex flex-col items-center">
					<div class="w-12 h-0.5 bg-gradient-to-r from-emerald-500/40 to-sky-500/40"></div>
				</div>
				<div
					class="flex lg:hidden flex-row items-center my-2 h-12 w-0.5 bg-gradient-to-b from-emerald-500/40 to-sky-500/40"
				></div>

				<!-- Split Box -->
				<div
					class="w-full lg:w-[60%] grid grid-cols-2 bg-slate-800 rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden relative"
				>
					<div
						class="absolute right-0 top-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none"
					></div>

					<!-- Реклама -->
					<div
						class="p-8 border-b border-r border-slate-700/50 flex flex-col justify-center relative"
					>
						<p class="text-slate-400 text-sm mb-6 flex-1">
							Мы продвигаем ваш бизнес через нашу клиентскую базу и рекомендательную сеть
						</p>
						<div class="space-y-3 mt-auto">
							<div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden shadow-inner">
								<div
									class="bg-indigo-500/80 h-full w-[20%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
								></div>
							</div>
							<div
								class="font-mono text-xl text-indigo-300 font-bold bg-indigo-500/10 border border-indigo-500/20 py-2 rounded-xl w-full text-center"
							>
								Реклама
							</div>
						</div>
					</div>

					<!-- Комиссия -->
					<div class="p-8 border-b border-slate-700/50 flex flex-col justify-center relative">
						<p class="text-slate-400 text-sm mb-6 flex-1">
							Платим вознаграждение за каждую сделку, поступившую на нашу платформу
						</p>
						<div class="space-y-3 mt-auto">
							<div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden shadow-inner">
								<div
									class="bg-indigo-500/80 h-full w-[20%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
								></div>
							</div>
							<div
								class="font-mono text-xl text-indigo-300 font-bold bg-indigo-500/10 border border-indigo-500/20 py-2 rounded-xl w-full text-center"
							>
								Комиссия
							</div>
						</div>
					</div>

					<!-- Блок 3 -->
					<div class="p-8 border-r border-slate-700/50 flex flex-col justify-center relative">
						<p class="text-slate-400 text-sm mb-6 flex-1">
							Часть остаётся в платформе для оплаты работы кураторов и поддержки сервиса
						</p>
						<div class="space-y-3 mt-auto">
							<div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden shadow-inner">
								<div
									class="bg-indigo-500/80 h-full w-[20%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
								></div>
							</div>
							<div
								class="font-mono text-xl text-indigo-300 font-bold bg-indigo-500/10 border border-indigo-500/20 py-2 rounded-xl w-full text-center"
							>
								Платформа
							</div>
						</div>
					</div>

					<!-- Блок 4 -->
					<div class="p-8 flex flex-col justify-center relative">
						<p class="text-slate-400 text-sm mb-6 flex-1">
							Инвестируем в развитие системы, новые инструменты и расширение партнёрской сети
						</p>
						<div class="space-y-3 mt-auto">
							<div class="w-full bg-slate-900 rounded-full h-2 overflow-hidden shadow-inner">
								<div
									class="bg-indigo-500/80 h-full w-[20%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
								></div>
							</div>
							<div
								class="font-mono text-xl text-indigo-300 font-bold bg-indigo-500/10 border border-indigo-500/20 py-2 rounded-xl w-full text-center"
							>
								Развитие
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section id="join" class="scroll-mt-24 py-24 md:py-32 relative overflow-hidden bg-slate-950">
		<div class="container mx-auto px-6 text-center">
			<div
				class="max-w-4xl mx-auto bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden"
				use:reveal
			>
				<!-- Subtle animated background -->
				<div
					class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-sky-500/10 pointer-events-none"
				></div>
				<div
					class="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(14,165,233,0.1)_0deg,transparent_60deg)] animate-[spin_10s_linear_infinite] pointer-events-none origin-center opacity-40"
				></div>

				<h2
					class="text-4xl md:text-5xl font-extrabold mb-8 text-white relative z-10 tracking-tight leading-tight"
				>
					Для начала сотрудничества<br />оставьте заявку
				</h2>
				<p
					class="text-xl md:text-2xl text-slate-300 md:leading-relaxed mb-12 relative z-10 font-light max-w-2xl mx-auto"
				>
					После отправки заявки наш менеджер свяжется с вами и расскажет подробнее о сотрудничестве.
				</p>

				<div class="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
					<PartnershipButton
						class="px-10 py-5 rounded-full bg-white text-slate-950 font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105 group flex items-center justify-center gap-3 text-lg"
					>
						Оставить заявку
						<svg
							class="w-5 h-5 group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							></path></svg
						>
					</PartnershipButton>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	
	/* Animation delays for stagger effect */
	:global(.animate-fade-down) { animation-name: fadeDown; animation-duration: 1s; animation-fill-mode: both; }
	:global(.animate-fade-up) { animation-name: fadeUp; animation-duration: 1s; animation-fill-mode: both; }
	:global(.animate-pulse) { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
	
	@keyframes fadeDown {
		from { opacity: 0; transform: translateY(-20px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
