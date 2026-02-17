<script>
	/**
	 * Компонент ввода телефона с маской +7 (XXX) XXX-XX-XX
	 * 
	 * Props:
	 *   digits - bindable: только цифры (10 штук), без +7
	 *   id - HTML id для label привязки
	 *   inputClass - CSS классы для input элемента
	 */

	import { extractDigits, formatPhone } from '$lib/utils/phone.js';

	let { digits = $bindable(''), id = 'phone', inputClass = '' } = $props();

	// Форматированное значение для отображения
	let displayValue = $derived(digits ? `+7 ${formatPhone(digits)}` : '+7 ');

	// Обработка ввода
	function handleInput(e) {
		const input = e.target;
		const raw = input.value;

		// Извлекаем только цифры после +7
		const afterPrefix = raw.startsWith('+7') ? raw.slice(2) : raw;
		digits = extractDigits(afterPrefix);

		// Устанавливаем отформатированное значение и курсор
		const formatted = digits ? `+7 ${formatPhone(digits)}` : '+7 ';
		input.value = formatted;

		// Ставим курсор в конец
		const pos = formatted.length;
		requestAnimationFrame(() => {
			input.setSelectionRange(pos, pos);
		});
	}

	// Обработка нажатия клавиш для предотвращения удаления +7
	function handleKeydown(e) {
		const input = e.target;
		const selStart = input.selectionStart ?? 0;

		// Не позволяем удалить +7 префикс
		if (e.key === 'Backspace' && selStart <= 3 && (input.selectionEnd ?? 0) <= 3) {
			e.preventDefault();
			// Очищаем все цифры
			if (selStart <= 3 && digits.length > 0) {
				// Если курсор в начале, ничего не делаем
			}
		}

		// Не позволяем курсор влево дальше позиции 3
		if (e.key === 'ArrowLeft' && selStart <= 3) {
			e.preventDefault();
		}
	}

	// При фокусе — ставим курсор после +7
	function handleFocus(e) {
		const input = e.target;
		if (!input.value || input.value.length < 3) {
			input.value = '+7 ';
		}
		requestAnimationFrame(() => {
			const pos = input.value.length;
			input.setSelectionRange(pos, pos);
		});
	}

	// При клике — не позволяем курсор до +7
	function handleClick(e) {
		const input = e.target;
		requestAnimationFrame(() => {
			const pos = input.selectionStart ?? 0;
			if (pos < 3) {
				const end = input.value.length;
				input.setSelectionRange(end, end);
			}
		});
	}
</script>

<input
	type="tel"
	{id}
	value={displayValue}
	oninput={handleInput}
	onkeydown={handleKeydown}
	onfocus={handleFocus}
	onclick={handleClick}
	placeholder="+7 (___) ___-__-__"
	class={inputClass}
	autocomplete="tel"
	inputmode="tel"
/>
