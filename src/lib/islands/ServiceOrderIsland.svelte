<script>
	/**
	 * Остров для модального окна заказа услуги (slide-in справа)
	 * Универсальная форма для всех типов услуг
	 */

	import { serviceOrderStore } from '$lib/stores/serviceOrder.svelte.js';

	// Состояние формы
	let name = $state('');
	let phone = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSuccess = $state(false);
	let error = $state('');

	// Закрытие модального окна
	function close() {
		serviceOrderStore.close();
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
		if (e.key === 'Escape' && serviceOrderStore.isOpen) {
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
			const serviceType = serviceOrderStore.serviceType;
			const sourceUrl = typeof window !== 'undefined' ? window.location.href : '';

			// Подготовка данных для отправки
			const requestData = {
				service_type: serviceType,
				name: name.trim(),
				phone: phone.trim(),
				message: message.trim() || null,
				source_url: sourceUrl
			};

			// 1. Сохраняем в базу данных через GraphQL API
			const graphqlUrl = import.meta.env.VITE_GRAPHQL_API_URL;
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

			// 2. Отправляем email-уведомление через Auth API
			const authApiUrl = import.meta.env.VITE_AUTH_API_URL;

			// Отправляем уведомление асинхронно (не блокируем пользователя)
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
			console.error('Service order error:', err);
			error = 'Не удалось отправить заявку. Попробуйте позже.';
		} finally {
			isSubmitting = false;
		}
	}

	// Динамические классы для акцентного цвета
	const accentClasses = {
		amber: {
			button: 'from-amber-500 to-yellow-500 shadow-amber-500/25 hover:shadow-amber-500/30',
			icon: 'bg-amber-100 text-amber-600',
			link: 'text-amber-500'
		},
		emerald: {
			button: 'from-emerald-500 to-teal-500 shadow-emerald-500/25 hover:shadow-emerald-500/30',
			icon: 'bg-emerald-100 text-emerald-600',
			link: 'text-emerald-500'
		},
		orange: {
			button: 'from-orange-500 to-amber-500 shadow-orange-500/25 hover:shadow-orange-500/30',
			icon: 'bg-orange-100 text-orange-600',
			link: 'text-orange-500'
		},
		rose: {
			button: 'from-rose-500 to-pink-500 shadow-rose-500/25 hover:shadow-rose-500/30',
			icon: 'bg-rose-100 text-rose-600',
			link: 'text-rose-500'
		},
		violet: {
			button: 'from-violet-500 to-purple-500 shadow-violet-500/25 hover:shadow-violet-500/30',
			icon: 'bg-violet-100 text-violet-600',
			link: 'text-violet-500'
		}
	};

	// Получение текущих классов акцента
	function getAccentClasses() {
		const config = serviceOrderStore.config;
		if (!config) return accentClasses.amber;
		return accentClasses[config.accentColor] || accentClasses.amber;
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
{#if serviceOrderStore.isOpen}
	<button
		type="button"
		class="fixed inset-0 z-50 cursor-default bg-black/50 backdrop-blur-sm transition-opacity duration-300"
		onclick={close}
		aria-label="Закрыть"
	></button>
{/if}

<!-- Slide-in Panel -->
<div
	class="fixed bottom-0 right-0 top-24 z-50 w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-out sm:top-28 {serviceOrderStore.isOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
	role="dialog"
	aria-modal="true"
	aria-labelledby="service-order-title"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-slate-200 px-6 py-4">
		<h2 id="service-order-title" class="text-xl font-semibold text-slate-900">
			{serviceOrderStore.config?.title || 'Заказать услугу'}
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
				<div
					class="mb-4 flex h-16 w-16 items-center justify-center rounded-full {getAccentClasses()
						.icon}"
				>
					<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
					class="mt-6 rounded-xl bg-linear-to-r px-6 py-3 font-semibold text-white transition-all {getAccentClasses()
						.button}"
				>
					Закрыть
				</button>
			</div>
		{:else}
			<!-- Form -->
			<p class="mb-6 text-slate-600">
				{serviceOrderStore.config?.description || 'Оставьте заявку и мы свяжемся с вами'}
			</p>

			<form onsubmit={handleSubmit} class="space-y-4">
				<!-- Hidden field for service type -->
				<input type="hidden" name="serviceType" value={serviceOrderStore.serviceType || ''} />

				<!-- Name -->
				<div>
					<label for="service-order-name" class="mb-1 block text-sm font-medium text-slate-700"
						>Ваше имя</label
					>
					<input
						type="text"
						id="service-order-name"
						bind:value={name}
						placeholder="Иван"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
					/>
				</div>

				<!-- Phone -->
				<div>
					<label for="service-order-phone" class="mb-1 block text-sm font-medium text-slate-700"
						>Телефон</label
					>
					<input
						type="tel"
						id="service-order-phone"
						bind:value={phone}
						placeholder="+7 (999) 123-45-67"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="service-order-message" class="mb-1 block text-sm font-medium text-slate-700">
						Сообщение <span class="text-slate-400">(необязательно)</span>
					</label>
					<textarea
						id="service-order-message"
						bind:value={message}
						rows="3"
						placeholder="Опишите ваш проект или задайте вопрос"
						class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
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
					class="w-full rounded-xl bg-linear-to-r px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 {getAccentClasses()
						.button}"
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
				<a href="/privacy" class="hover:underline {getAccentClasses().link}"
					>политикой конфиденциальности</a
				>
			</p>
		{/if}
	</div>
</div>
