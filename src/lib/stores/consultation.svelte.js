/**
 * Store для управления модальным окном консультации
 * Используется для открытия формы из любого места приложения
 */

let isOpen = $state(false);

export const consultationStore = {
	get isOpen() {
		return isOpen;
	},
	open() {
		isOpen = true;
	},
	close() {
		isOpen = false;
	}
};
