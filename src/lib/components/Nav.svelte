<!-- Навигационное меню - нижняя часть хэдера -->
<nav class="nav">
	<div class="nav-content">
		<a href="/" class="logo">ЛОГО</a>
		<ul class="menu">
			<li><a href="/">Главная</a></li>
			<li><a href="/catalog">Каталог</a></li>
			<li><a href="/about">О нас</a></li>
			<li><a href="/contacts">Контакты</a></li>
		</ul>
	</div>
</nav>

<style>
	.nav {
		background-color: #fff;
		border-bottom: 1px solid #e5e5e5;
		padding: 1rem;
	}

	.nav-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a2e;
		text-decoration: none;
	}

	.menu {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu a {
		color: #333;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.menu a:hover {
		color: #1a1a2e;
	}
</style>
