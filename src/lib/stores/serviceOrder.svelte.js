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
		title: 'Консультация',
		description: 'Оставьте заявку и наш специалист свяжется с вами для бесплатной консультации',
		accentColor: 'amber'
	},
	'design-project': {
		title: 'Дизайн-проект',
		description: 'Оставьте заявку на разработку дизайн-проекта интерьера вашего помещения',
		accentColor: 'emerald'
	},
	'furniture-project': {
		title: 'Проект мебели',
		description: 'Оставьте заявку на комплексную разработку индивидуального проекта мебели',
		accentColor: 'orange'
	},
	assembly: {
		title: 'Сборка мебели',
		description: 'Оставьте заявку на профессиональную сборку специалистами и установку мебели',
		accentColor: 'rose'
	},
	measurement: {
		title: 'Замер помещения',
		description: 'Оставьте заявку на профессиональный замер помещения лазерным инструментом',
		accentColor: 'violet'
	}
};

let isOpen = $state(false);
/** @type {ServiceType | null} */
let serviceType = $state(null);
let data = $state(null);

export const serviceOrderStore = {
	get isOpen() {
		return isOpen;
	},
	get serviceType() {
		return serviceType;
	},
	get data() {
		return data;
	},
	get config() {
		return serviceType ? serviceConfig[serviceType] : null;
	},
	/**
	 * Открыть модальное окно для конкретной услуги
	 * @param {ServiceType} type
	 * @param {Object} [payload] - Дополнительные данные (например, название проекта)
	 */
	open(type, payload = null) {
		serviceType = type;
		data = payload;
		isOpen = true;
	},
	close() {
		isOpen = false;
		// Сброс типа после закрытия анимации
		setTimeout(() => {
			serviceType = null;
			data = null;
		}, 300);
	}
};
