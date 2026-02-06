/**
 * Store для управления модальным окном заказа услуги
 * Поддерживает разные типы услуг с соответствующими заголовками
 */

/**
 * @typedef {'consultation' | 'design-project' | 'furniture-project' | 'assembly' | 'measurement'} ServiceType
 */

/**
 * Конфигурация услуг с заголовками и описаниями
 */
export const serviceConfig = {
	consultation: {
		title: 'Заказать консультацию дизайнера',
		description: 'Оставьте заявку и наш дизайнер свяжется с вами для бесплатной консультации',
		accentColor: 'amber'
	},
	'design-project': {
		title: 'Заказать дизайн-проект',
		description: 'Оставьте заявку на разработку дизайн-проекта интерьера',
		accentColor: 'emerald'
	},
	'furniture-project': {
		title: 'Заказать проект мебели',
		description: 'Оставьте заявку на разработку индивидуального проекта мебели',
		accentColor: 'orange'
	},
	assembly: {
		title: 'Заказать сборку мебели',
		description: 'Оставьте заявку на профессиональную сборку и установку мебели',
		accentColor: 'rose'
	},
	measurement: {
		title: 'Заказать замер помещения',
		description: 'Оставьте заявку на профессиональный замер помещения',
		accentColor: 'violet'
	}
};

let isOpen = $state(false);
/** @type {ServiceType | null} */
let serviceType = $state(null);

export const serviceOrderStore = {
	get isOpen() {
		return isOpen;
	},
	get serviceType() {
		return serviceType;
	},
	get config() {
		return serviceType ? serviceConfig[serviceType] : null;
	},
	/**
	 * Открыть модальное окно для конкретной услуги
	 * @param {ServiceType} type
	 */
	open(type) {
		serviceType = type;
		isOpen = true;
	},
	close() {
		isOpen = false;
		// Сброс типа после закрытия анимации
		setTimeout(() => {
			serviceType = null;
		}, 300);
	}
};
