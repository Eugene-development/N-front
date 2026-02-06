<section class="hero-minimal">
	<div class="hero-bg">
		<img
			src="/modern_kitchen_hero_panoramic.png"
			alt="Luxury modern kitchen with panoramic view"
			class="hero-image"
		/>
		<div class="hero-overlay"></div>
	</div>

	<div class="hero-content">
		<h1 class="hero-title">
			<span class="line-1">Мебель и Техника</span>
			<span class="line-separator">-</span>
			<span class="line-2">HERO COLLECTION</span>
		</h1>
	</div>
</section>

<style>
	.hero-minimal {
		position: relative;
		width: 100%;
		height: 80vh; /* Высота меньше, чем у основного Hero */
		min-height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		font-family: 'Manrope', sans-serif;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center bottom; /* Фокус на нижней части, где кухня */
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.2); /* Легкое затемнение для читаемости */
	}

	.hero-content {
		position: relative;
		z-index: 10;
		text-align: center;
		color: white;
		padding: 0 1rem;
		width: 100%;
	}

	.hero-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-weight: 300; /* Тонкий шрифт как на референсе */
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Тень для читаемости */
	}

	.line-1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.line-separator {
		display: none;
	}

	.line-2 {
		font-size: 1.5rem;
		font-weight: 400;
	}

	/* Адаптивность под десктоп */
	@media (min-width: 768px) {
		.hero-minimal {
			height: 90vh; /* На десктопе повыше */
		}
		
		.hero-title {
			flex-direction: row; /* В строку */
			gap: 1rem;
			font-size: 3.5rem; /* Крупнее шрифт */
		}

		.line-1 {
			font-size: 3.5rem;
			margin-bottom: 0;
		}

		.line-separator {
			display: inline-block;
			font-size: 3.5rem;
		}

		.line-2 {
			font-size: 3.5rem;
			font-weight: 300;
		}
	}

	@media (min-width: 1280px) {
		.hero-title {
			font-size: 4.5rem; /* Еще крупнее на больших экранах */
		}
		
		.line-1, .line-separator, .line-2 {
			font-size: 4.5rem;
		}
	}
</style>
