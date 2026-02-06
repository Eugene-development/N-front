<script>
	/**
	 * SafeImage - Компонент изображения с обработкой ошибок загрузки
	 * Показывает заглушку, если изображение не может быть загружено
	 */

	let {
		src,
		alt = '',
		class: className = '',
		fit = 'cover',
		loading = 'lazy',
		fallbackSrc = null
	} = $props();

	/** @type {boolean} */
	let hasError = $state(false);

	/** @type {boolean} */
	let isLoading = $state(true);

	function handleError() {
		hasError = true;
		isLoading = false;
	}

	function handleLoad() {
		isLoading = false;
	}

	// Сбрасываем состояние при изменении src
	$effect(() => {
		if (src) {
			hasError = false;
			isLoading = true;
		}
	});
</script>

<div class="safe-image-container {className}">
	{#if !hasError}
		<img
			{src}
			{alt}
			{loading}
			class="safe-image"
			style="object-fit: {fit};"
			onerror={handleError}
			onload={handleLoad}
		/>
	{/if}

	{#if hasError}
		{#if fallbackSrc}
			<img src={fallbackSrc} {alt} class="safe-image" style="object-fit: {fit};" />
		{:else}
			<div class="safe-image-placeholder">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="placeholder-icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
					/>
				</svg>
				<span class="placeholder-text">Изображение недоступно</span>
			</div>
		{/if}
	{/if}

	{#if isLoading && !hasError}
		<div class="safe-image-loader">
			<div class="loader-spinner"></div>
		</div>
	{/if}
</div>

<style>
	.safe-image-container {
		position: relative;
		overflow: hidden;
	}

	.safe-image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.safe-image-placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		min-height: 120px;
		background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
		color: #94a3b8;
		gap: 0.75rem;
	}

	.placeholder-icon {
		width: 3rem;
		height: 3rem;
		opacity: 0.6;
	}

	.placeholder-text {
		font-size: 0.875rem;
		font-weight: 500;
		opacity: 0.8;
	}

	.safe-image-loader {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
	}

	.loader-spinner {
		width: 2rem;
		height: 2rem;
		border: 3px solid #e2e8f0;
		border-top-color: #0ea5e9;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
