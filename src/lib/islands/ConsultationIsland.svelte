<script>
	/**
	 * Остров для модального окна консультации (slide-in справа)
	 * Форма заявки на бесплатный проект и просчёт
	 */

	import { consultationStore } from '$lib/stores/consultation.svelte.js';

	// Состояние формы
	let name = $state('');
	let phone = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let error = $state('');

	// Закрытие модального окна
	function close() {
		consultationStore.close();
		// Сброс формы после закрытия
		setTimeout(() => {
			name = '';
			phone = '';
			message = '';
			isSuccess = false;
			error = '';
		}, 300);
	}

	// Закрытие по Escape
	function handleKeydown(e) {
		if (e.key === 'Escape' && consultationStore.isOpen) {
			close();
		}
	}

	// Отправка формы
	async function handleSubmit(e) {
		e.preventDefault();
		error = '';

		// Валидация
		if (!name.trim()) {
			error = 'Введите ваше имя';
			return;
		}
		if (!phone.trim()) {
			error = 'Введите номер телефона';
			return;
		}

		isSubmitting = true;

		try {
			// TODO: Заменить на реальный API endpoint
			const response = await fetch('/api/consultation', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, phone, message })
			});

			if (!response.ok) {
				throw new Error('Ошибка отправки');
			}

			isSuccess = true;
		} catch (err) {
			error = 'Не удалось отправить заявку. Попробуйте позже.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
{#if consultationStore.isOpen}
	<button
		type="button"
		class="fixed inset-0 z-50 cursor-default bg-black/50 backdrop-blur-sm transition-opacity duration-300"
		onclick={close}
		aria-label="Закрыть"
	></button>
{/if}

<!-- Slide-in Panel -->
<div
	class="fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-out {consultationStore.isOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
	role="dialog"
	aria-modal="true"
	aria-labelledby="consultation-title"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-slate-200 px-6 py-4">
		<h2 id="consultation-title" class="text-xl font-semibold text-slate-900">
			Бесплатный проект и просчёт
		</h2>
		<button
			onclick={close}
			class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
			aria-label="Закрыть"
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>

	<!-- Content -->
	<div class="overflow-y-auto p-6" style="height: calc(100% - 73px)">
		{#if isSuccess}
			<!-- Success State -->
			<div class="flex h-full flex-col items-center justify-center text-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
					<svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-slate-900">Заявка отправлена!</h3>
				<p class="mt-2 text-slate-600">Мы свяжемся с вами в ближайшее время</p>
				<button
					onclick={close}
					class="mt-6 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-600"
				>
					Закрыть
				</button>
			</div>
		{:else}
			<!-- Form -->
			<p class="mb-6 text-slate-600">
				Оставьте заявку и наш дизайнер свяжется с вами для бесплатной консультации и создания
				проекта
			</p>

			<form onsubmit={handleSubmit} class="space-y-4">
				<!-- Name -->
				<div>
					<label for="name" class="mb-1 block text-sm font-medium text-slate-700">Ваше имя</label>
					<input
						type="text"
						id="name"
						bind:value={name}
						placeholder="Иван"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					/>
				</div>

				<!-- Phone -->
				<div>
					<label for="phone" class="mb-1 block text-sm font-medium text-slate-700">Телефон</label>
					<input
						type="tel"
						id="phone"
						bind:value={phone}
						placeholder="+7 (999) 123-45-67"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="message" class="mb-1 block text-sm font-medium text-slate-700">
						Сообщение <span class="text-slate-400">(необязательно)</span>
					</label>
					<textarea
						id="message"
						bind:value={message}
						rows="3"
						placeholder="Опишите вашу задачу или задайте вопрос"
						class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					></textarea>
				</div>

				<!-- Error -->
				{#if error}
					<div class="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>
				{/if}

				<!-- Submit -->
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{#if isSubmitting}
						<span class="flex items-center justify-center gap-2">
							<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24">
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
									fill="none"
								/>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
							Отправка...
						</span>
					{:else}
						Отправить заявку
					{/if}
				</button>
			</form>

			<!-- Privacy -->
			<p class="mt-4 text-center text-xs text-slate-400">
				Нажимая кнопку, вы соглашаетесь с
				<a href="/privacy" class="text-sky-500 hover:underline">политикой конфиденциальности</a>
			</p>
		{/if}
	</div>
</div>
