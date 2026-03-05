<script>
	// Альтернативный компонент рекламного предложения — тёмная premium тема
	let isVisible = $state(false);

	$effect(() => {
		const timeout = setTimeout(() => {
			isVisible = true;
		}, 200);
		return () => clearTimeout(timeout);
	});
</script>

<section class="promo-alt">
	<!-- Фоновые декоративные элементы -->
	<div class="promo-alt__glow promo-alt__glow--top"></div>
	<div class="promo-alt__glow promo-alt__glow--bottom"></div>
	<div class="promo-alt__grid-pattern"></div>

	<div class="promo-alt__container" class:promo-alt__container--visible={isVisible}>
		<!-- Изображение с эффектом -->
		<div class="promo-alt__image-wrapper">
			<div class="promo-alt__image-frame">
				<img
					src="/images/promo-happy-person.png"
					alt="Счастливый клиент в новом интерьере"
					class="promo-alt__image"
				/>
				<!-- Градиентная рамка -->
				<div class="promo-alt__image-border"></div>
			</div>
			<!-- Плавающие элементы дизайна -->
			<div class="promo-alt__float promo-alt__float--1">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path
						d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="promo-alt__float promo-alt__float--2">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
					<path
						d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="promo-alt__float promo-alt__float--3">✓</div>
		</div>

		<!-- Информационный блок -->
		<div class="promo-alt__content">
			<!-- Метка -->
			<div class="promo-alt__badge">
				<span class="promo-alt__badge-dot"></span>
				Эксклюзивное предложение
			</div>

			<!-- Заголовок -->
			<h2 class="promo-alt__title">
				Главное
				<span class="promo-alt__title-accent">рекламное</span>
				предложение
			</h2>

			<!-- Текст -->
			<div class="promo-alt__text">
				<p class="promo-alt__text-primary">
					Здесь вы можете разместить любой читабельный рекламный текст, который привлечет внимание
					ваших клиентов и повысит конверсию.
				</p>
				<p class="promo-alt__text-secondary">
					Используйте этот блок для описания ваших акций, скидок, специальных предложений или
					уникальных преимуществ. Позитивное изображение и стильная подача помогут значительно
					повысить доверие.
				</p>
			</div>

			<!-- Преимущества -->
			<div class="promo-alt__features">
				<div class="promo-alt__feature">
					<div class="promo-alt__feature-icon">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
					<span>Преимущество 1</span>
				</div>
				<div class="promo-alt__feature">
					<div class="promo-alt__feature-icon">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
					<span>Преимущество 2</span>
				</div>
				<div class="promo-alt__feature">
					<div class="promo-alt__feature-icon">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
					<span>Преимущество 3</span>
				</div>
			</div>

			<!-- Кнопки -->
			<div class="promo-alt__actions">
				<button class="promo-alt__btn promo-alt__btn--primary">
					Получить предложение
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</button>
				<button class="promo-alt__btn promo-alt__btn--secondary"> Узнать больше </button>
			</div>
		</div>
	</div>
</section>

<style>
	/* ====== Альтернативный промо-блок — тёмная premium тема ====== */
	.promo-alt {
		position: relative;
		width: 100%;
		padding: 4rem 1rem;
		display: flex;
		justify-content: center;
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
		overflow: hidden;
	}

	/* Фоновые свечения */
	.promo-alt__glow {
		position: absolute;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.15;
		pointer-events: none;
	}

	.promo-alt__glow--top {
		top: -150px;
		right: -100px;
		background: linear-gradient(135deg, #f97316, #eab308);
	}

	.promo-alt__glow--bottom {
		bottom: -150px;
		left: -100px;
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
	}

	/* Фоновый паттерн-сетка */
	.promo-alt__grid-pattern {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 60px 60px;
		pointer-events: none;
	}

	/* Контейнер */
	.promo-alt__container {
		position: relative;
		z-index: 10;
		max-width: 72rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
		border-radius: 1.5rem;
		padding: 2rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow:
			0 0 0 1px rgba(255, 255, 255, 0.05),
			0 25px 50px -12px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease-out, transform 0.8s ease-out;
	}

	.promo-alt__container--visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* ====== Изображение ====== */
	.promo-alt__image-wrapper {
		position: relative;
		width: 100%;
	}

	.promo-alt__image-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		border-radius: 1rem;
		overflow: hidden;
	}

	.promo-alt__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: transform 0.7s ease;
	}

	.promo-alt__image-frame:hover .promo-alt__image {
		transform: scale(1.05);
	}

	/* Градиентная рамка вокруг изображения */
	.promo-alt__image-border {
		position: absolute;
		inset: 0;
		border-radius: 1rem;
		border: 2px solid transparent;
		background: linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(139, 92, 246, 0.4)) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
	}

	/* Плавающие элементы */
	.promo-alt__float {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		animation: promo-float 6s ease-in-out infinite;
		pointer-events: none;
	}

	.promo-alt__float--1 {
		top: -12px;
		right: -8px;
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #f97316, #eab308);
		color: white;
		box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4);
		animation-delay: 0s;
	}

	.promo-alt__float--2 {
		bottom: 20px;
		left: -10px;
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #ec4899, #f43f5e);
		color: white;
		box-shadow: 0 8px 25px rgba(236, 72, 153, 0.3);
		animation-delay: 2s;
	}

	.promo-alt__float--3 {
		bottom: -8px;
		right: 30%;
		width: 36px;
		height: 36px;
		background: linear-gradient(135deg, #22c55e, #10b981);
		color: white;
		font-weight: 800;
		font-size: 16px;
		box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
		animation-delay: 4s;
	}

	@keyframes promo-float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-12px); }
	}

	/* ====== Контент ====== */
	.promo-alt__content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* Метка */
	.promo-alt__badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #f97316;
		margin-bottom: 1rem;
	}

	.promo-alt__badge-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #f97316;
		animation: promo-pulse 2s ease-in-out infinite;
	}

	@keyframes promo-pulse {
		0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.5); }
		50% { opacity: 0.7; box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
	}

	/* Заголовок */
	.promo-alt__title {
		font-size: 1.875rem;
		font-weight: 800;
		color: #f1f5f9;
		line-height: 1.15;
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}

	.promo-alt__title-accent {
		background: linear-gradient(135deg, #f97316, #eab308);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	/* Текст */
	.promo-alt__text {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.promo-alt__text-primary {
		font-size: 1.05rem;
		font-weight: 500;
		line-height: 1.7;
		color: #cbd5e1;
	}

	.promo-alt__text-secondary {
		font-size: 0.9rem;
		line-height: 1.7;
		color: #94a3b8;
	}

	/* Преимущества */
	.promo-alt__features {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.promo-alt__feature {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: #e2e8f0;
		font-weight: 500;
	}

	.promo-alt__feature-icon {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(249, 115, 22, 0.15);
		color: #f97316;
		flex-shrink: 0;
	}

	/* Кнопки */
	.promo-alt__actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.promo-alt__btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 600;
		padding: 1rem 2rem;
		border-radius: 0.75rem;
		border: none;
		cursor: pointer;
		font-size: 0.95rem;
		transition: all 0.3s ease;
	}

	.promo-alt__btn--primary {
		background: linear-gradient(135deg, #f97316, #ea580c);
		color: white;
		box-shadow: 0 4px 20px rgba(249, 115, 22, 0.3);
	}

	.promo-alt__btn--primary:hover {
		background: linear-gradient(135deg, #ea580c, #c2410c);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
	}

	.promo-alt__btn--secondary {
		background: rgba(255, 255, 255, 0.06);
		color: #e2e8f0;
		border: 1px solid rgba(255, 255, 255, 0.12);
	}

	.promo-alt__btn--secondary:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	/* ====== DESKTOP (md: 768px+) ====== */
	@media (min-width: 768px) {
		.promo-alt {
			padding: 5rem 1.5rem;
		}

		.promo-alt__container {
			flex-direction: row;
			gap: 3rem;
			padding: 2.5rem;
			border-radius: 2rem;
		}

		.promo-alt__image-wrapper {
			width: 50%;
			flex-shrink: 0;
		}

		.promo-alt__image-frame {
			aspect-ratio: 1 / 1;
			max-height: 520px;
			border-radius: 1.25rem;
		}

		.promo-alt__content {
			width: 50%;
		}

		.promo-alt__title {
			font-size: 2.5rem;
			margin-bottom: 1.5rem;
		}

		.promo-alt__text {
			gap: 1rem;
			margin-bottom: 2rem;
		}

		.promo-alt__text-primary {
			font-size: 1.15rem;
		}

		.promo-alt__text-secondary {
			font-size: 0.95rem;
		}

		.promo-alt__features {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 1rem;
		}

		.promo-alt__actions {
			flex-direction: row;
			gap: 1rem;
		}

		.promo-alt__float--1 {
			top: -16px;
			right: -12px;
			width: 56px;
			height: 56px;
		}

		.promo-alt__float--2 {
			bottom: 30px;
			left: -14px;
			width: 48px;
			height: 48px;
		}

		.promo-alt__float--3 {
			bottom: -12px;
			right: 25%;
			width: 44px;
			height: 44px;
		}
	}

	/* ====== LARGE DESKTOP (lg: 1024px+) ====== */
	@media (min-width: 1024px) {
		.promo-alt__container {
			padding: 3rem;
		}

		.promo-alt__title {
			font-size: 3rem;
		}

		.promo-alt__text-primary {
			font-size: 1.2rem;
		}
	}
</style>
