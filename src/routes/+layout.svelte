<script>
	import '../layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import ConsultationIsland from '$lib/islands/ConsultationIsland.svelte';
	import ServiceOrderIsland from '$lib/islands/ServiceOrderIsland.svelte';
	import PartnershipIsland from '$lib/islands/PartnershipIsland.svelte';
	import { PageTransition } from '$lib';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	let { children } = $props();

	let isPromoPage = $derived($page.url.pathname === '/promo' || $page.url.pathname.startsWith('/promo/'));

	// Глобальный обработчик ошибок загрузки изображений
	// Это предотвращает бесконечную загрузку страницы из-за недоступных внешних изображений
	onMount(() => {
		function handleImageError(event) {
			const img = event.target;
			if (img.tagName === 'IMG' && !img.dataset.errorHandled) {
				img.dataset.errorHandled = 'true';
				
				// Используем data URL для placeholder SVG чтобы избежать дополнительных запросов
				const placeholderSvg = `
					<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
						<defs>
							<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style="stop-color:#f1f5f9"/>
								<stop offset="100%" style="stop-color:#e2e8f0"/>
							</linearGradient>
						</defs>
						<rect width="400" height="300" fill="url(#bg)"/>
						<g fill="#94a3b8" opacity="0.6">
							<path d="M180 130h40v40h-40z" fill="none" stroke="#94a3b8" stroke-width="2"/>
							<circle cx="190" cy="140" r="5"/>
							<path d="M175 165l15-15 10 10 15-15 15 15v10h-55z"/>
						</g>
					</svg>
				`;
				
				img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(placeholderSvg.trim());
				img.alt = img.alt || 'Изображение недоступно';
			}
		}

		// Перехватываем ошибки на этапе захвата, чтобы успеть обработать
		document.addEventListener('error', handleImageError, true);

		return () => {
			document.removeEventListener('error', handleImageError, true);
		};
	});
</script>

<svelte:head>
	{#if !dev}
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
			(function (m, e, t, r, i, k, a) {
				m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
				m[i].l = 1 * new Date();
				for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
				k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
			})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(87611228, "init", {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true
			});
		</script>
		<noscript>
			<div><img src="https://mc.yandex.ru/watch/87611228" style="position:absolute; left:-9999px;" alt="" /></div>
		</noscript>
		<!-- /Yandex.Metrika counter -->

		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-LDQHHN5N6W"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() { window.dataLayer.push(arguments); }
			gtag('js', new Date());

			gtag('config', 'G-LDQHHN5N6W');
		</script>
	{/if}
</svelte:head>

<div class="flex min-h-screen flex-col">
	{#if !isPromoPage}
		<Header />
	{/if}
	<main class="flex-1">
		{#key $page.url.pathname}
			<PageTransition type="fade" duration={500}>
				{@render children()}
			</PageTransition>
		{/key}
	</main>
	<Footer />
</div>

{#if !isPromoPage}
	<!-- Глобальное мобильное меню -->
	<MobileMenu />

	<!-- Глобальное модальное окно консультации -->
	<ConsultationIsland />

	<!-- Глобальное модальное окно заказа услуги -->
	<ServiceOrderIsland />
{/if}

<!-- Глобальное модальное окно партнёрства -->
<PartnershipIsland />
