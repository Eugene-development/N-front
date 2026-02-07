// Store для управления видимостью баннера при скролле
// Экспортируем состояние и функцию инициализации scroll listener

let isHidden = $state(false);
let lastScrollY = $state(0);
const scrollThreshold = 10; // Минимальная дельта скролла для реакции

export const bannerStore = {
	get isHidden() {
		return isHidden;
	},

	init() {
		if (typeof window === 'undefined') return () => {};

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY;

			// Скрываем только если прокрутили вниз на достаточное расстояние
			// и находимся не в самом верху страницы
			if (delta > scrollThreshold && currentScrollY > 50) {
				isHidden = true;
			} else if (delta < -scrollThreshold || currentScrollY < 50) {
				isHidden = false;
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}
};
