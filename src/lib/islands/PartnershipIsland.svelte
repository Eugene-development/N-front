<script>
	/**
	 * Остров для модального окна партнёрства (slide-in справа)
	 * Форма заявки на обсуждение сотрудничества
	 */

	import { partnershipStore } from '$lib/stores/partnership.svelte.js';
	import PhoneInput from '$lib/components/PhoneInput.svelte';
	import { normalizePhone, isPhoneComplete } from '$lib/utils/phone.js';
	import { getGraphqlApiUrl, getAuthApiUrl } from '$lib/utils/config.js';
	import { cityStore } from '$lib/stores/city.svelte.js';

	// Состояние формы
	let name = $state('');
	let phoneDigits = $state('');
	let company = $state('');
	let partnerType = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let error = $state('');

	// Типы партнёров
	const partnerTypes = [
		{ value: '', label: 'Выберите тип партнёрства' },
		{ value: 'designer', label: 'Дизайнер интерьеров' },
		{ value: 'repair-team', label: 'Ремонтная бригада' },
		{ value: 'furniture-seller', label: 'Продавец мебели' },
		{ value: 'manufacturer', label: 'Мебельная фабрика / Поставщик' },
		{ value: 'individual', label: 'Физическое лицо' },
		{ value: 'other', label: 'Другое' }
	];

	// Закрытие модального окна
	function close() {
		partnershipStore.close();
		// Сброс формы после закрытия
		setTimeout(() => {
			name = '';
			phoneDigits = '';
			company = '';
			partnerType = '';
			message = '';
			isSuccess = false;
			error = '';
		}, 300);
	}

	// Закрытие по Escape
	function handleKeydown(e) {
		if (e.key === 'Escape' && partnershipStore.isOpen) {
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
		if (!isPhoneComplete(phoneDigits)) {
			error = 'Введите полный номер телефона';
			return;
		}

		isSubmitting = true;

		try {
			const sourceUrl = typeof window !== 'undefined' ? window.location.href : '';

			// Формируем сообщение с дополнительными полями
			const fullMessage = [
				partnerType ? `Тип партнёрства: ${partnerTypes.find((t) => t.value === partnerType)?.label || partnerType}` : '',
				company ? `Компания: ${company.trim()}` : '',
				message.trim() ? message.trim() : ''
			]
				.filter(Boolean)
				.join('\n');

			// Подготовка данных для отправки
			const requestData = {
				service_type: 'partnership',
				name: name.trim(),
				phone: normalizePhone(phoneDigits),
				message: fullMessage || null,
				source_url: sourceUrl,
				city: cityStore.city
			};

			// Сохраняем заявку в БД через GraphQL API
			const graphqlUrl = getGraphqlApiUrl();
			const graphqlMutation = `
				mutation CreateServiceRequest($input: CreateServiceRequestInput!) {
					createServiceRequest(input: $input) {
						id
						service_type
						name
						phone
						status
						created_at
					}
				}
			`;

			const graphqlResponse = await fetch(graphqlUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					query: graphqlMutation,
					variables: {
						input: requestData
					}
				})
			});

			const graphqlResult = await graphqlResponse.json();

			if (graphqlResult.errors) {
				console.error('GraphQL error:', graphqlResult.errors);
				throw new Error('Ошибка сохранения заявки');
			}

			// Отправляем email-уведомление через Auth API (асинхронно, не блокируем пользователя)
			const authApiUrl = getAuthApiUrl();
			fetch(`${authApiUrl}/notify/service-request`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(requestData)
			}).catch((emailError) => {
				// Логируем ошибку, но не показываем пользователю
				console.warn('Email notification failed:', emailError);
			});

			isSuccess = true;
		} catch (err) {
			console.error('Partnership request error:', err);
			error = 'Не удалось отправить заявку. Попробуйте позже.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
{#if partnershipStore.isOpen}
	<button
		type="button"
		class="fixed inset-0 z-50 cursor-default bg-black/50 backdrop-blur-sm transition-opacity duration-300"
		onclick={close}
		aria-label="Закрыть"
	></button>
{/if}

<!-- Slide-in Panel -->
<div
	class="fixed inset-y-0 right-0 z-50 w-full max-w-md transform shadow-2xl transition-transform duration-300 ease-out {partnershipStore.isOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
	role="dialog"
	aria-modal="true"
	aria-labelledby="partnership-title"
	style="background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0fdf4 100%);"
>
	<!-- Header -->
	<div
		class="flex items-center justify-between border-b border-slate-200/80 px-6 py-4"
		style="background: linear-gradient(135deg, #0284c7 0%, #0891b2 100%);"
	>
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
				<svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			</div>
			<h2 id="partnership-title" class="text-xl font-semibold text-white">Партнёрство</h2>
		</div>
		<button
			onclick={close}
			class="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
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
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
					<svg
						class="h-8 w-8 text-emerald-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-slate-900">Заявка отправлена!</h3>
				<p class="mt-2 text-slate-600">
					Наш менеджер свяжется с вами для обсуждения условий партнёрства
				</p>
				<button
					onclick={close}
					class="mt-6 rounded-xl bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
				>
					Закрыть
				</button>
			</div>
		{:else}
			<!-- Form -->
			<p class="mb-6 text-slate-600">
				Оставьте заявку и наш менеджер свяжется с вами для обсуждения условий сотрудничества
			</p>

			<form onsubmit={handleSubmit} class="space-y-4">
				<!-- Name -->
				<div>
					<label for="partnership-name" class="mb-1 block text-sm font-medium text-slate-700"
						>Ваше имя</label
					>
					<input
						type="text"
						id="partnership-name"
						bind:value={name}
						placeholder="Иван Иванов"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					/>
				</div>

				<!-- Phone -->
				<div>
					<label for="partnership-phone" class="mb-1 block text-sm font-medium text-slate-700"
						>Телефон</label
					>
					<PhoneInput
						id="partnership-phone"
						bind:digits={phoneDigits}
						inputClass="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					/>
				</div>

				<!-- Company -->
				<div>
					<label for="partnership-company" class="mb-1 block text-sm font-medium text-slate-700">
						Компания <span class="text-slate-400">(необязательно)</span>
					</label>
					<input
						type="text"
						id="partnership-company"
						bind:value={company}
						placeholder="Название компании"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					/>
				</div>

				<!-- Partner Type -->
				<div>
					<label for="partnership-type" class="mb-1 block text-sm font-medium text-slate-700">
						Тип партнёрства <span class="text-slate-400">(необязательно)</span>
					</label>
					<select
						id="partnership-type"
						bind:value={partnerType}
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
					>
						{#each partnerTypes as type (type.value)}
							<option value={type.value}>{type.label}</option>
						{/each}
					</select>
				</div>

				<!-- Message -->
				<div>
					<label for="partnership-message" class="mb-1 block text-sm font-medium text-slate-700">
						Сообщение <span class="text-slate-400">(необязательно)</span>
					</label>
					<textarea
						id="partnership-message"
						bind:value={message}
						rows="3"
						placeholder="Расскажите о вашем бизнесе или задайте вопрос"
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
						Обсудить сотрудничество
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
