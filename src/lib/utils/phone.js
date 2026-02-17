/**
 * Утилиты для форматирования телефонного номера
 */

/**
 * Извлекает только цифры из строки (без +7 префикса)
 * @param {string} value
 * @returns {string} - до 10 цифр
 */
export function extractDigits(value) {
	return value.replace(/\D/g, '').slice(0, 10);
}

/**
 * Форматирует цифры в маску +7 (XXX) XXX-XX-XX
 * @param {string} digits - только цифры (до 10 штук)
 * @returns {string} - отформатированный номер
 */
export function formatPhone(digits) {
	if (!digits) return '';

	let result = '';
	if (digits.length > 0) result += `(${digits.slice(0, 3)}`;
	if (digits.length >= 3) result += ') ';
	else if (digits.length > 0) return result;

	if (digits.length > 3) result += digits.slice(3, 6);
	if (digits.length >= 6) result += '-';

	if (digits.length > 6) result += digits.slice(6, 8);
	if (digits.length >= 8) result += '-';

	if (digits.length > 8) result += digits.slice(8, 10);

	return result;
}

/**
 * Нормализует телефон для записи в БД: +7XXXXXXXXXX
 * @param {string} digits - только цифры (10 штук)
 * @returns {string} - нормализованный номер или пустая строка
 */
export function normalizePhone(digits) {
	if (digits.length !== 10) return '';
	return `+7${digits}`;
}

/**
 * Проверяет, что введено ровно 10 цифр (полный номер)
 * @param {string} digits
 * @returns {boolean}
 */
export function isPhoneComplete(digits) {
	return digits.length === 10;
}
