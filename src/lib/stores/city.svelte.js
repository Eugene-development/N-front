/**
 * Глобальный store для выбранного города
 * Используется в Nav, MobileMenu и всех формах (islands)
 * Сохраняется в localStorage для персистентности
 */

const STORAGE_KEY = 'novostroy_city';
const DEFAULT_CITY = 'Москва и МО';

function getInitialCity() {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) return saved;
	}
	return DEFAULT_CITY;
}

let _city = $state(getInitialCity());

export const cityStore = {
	get city() {
		return _city;
	},
	set(newCity) {
		_city = newCity;
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, newCity);
		}
	}
};
