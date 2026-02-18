/**
 * Store для управления модальным окном формы партнёрства
 * Используется для открытия формы из любого места приложения
 */

let isOpen = $state(false);

export const partnershipStore = {
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
