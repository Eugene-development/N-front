<script>
	import Hero from '$lib/components/Hero.svelte';
	import Message from '$lib/components/home/Message.svelte';
	import Equipment from '$lib/components/home/Equipment.svelte';
	import Stage from '$lib/components/home/Stage.svelte';
	import Incentives from '$lib/components/home/Incentives.svelte';
	import Direction from '$lib/components/home/Direction.svelte';
	import Brands from '$lib/components/home/Brands.svelte';
</script>

<svelte:head>
	<title>Компания Новострой – Мебель на заказ для вашего идеального интерьера</title>
	<meta
		name="description"
		content="Компания Новострой предлагает мебель на заказ по индивидуальным размерам и дизайну, а также мойки со смесителями, столешницы и бытовую технику. Высокое качество мебели, надежность и внимание к деталям – мы поможем вам реализовать все ваши идеи!"
	/>
</svelte:head>

<Hero />
<Message />
<Equipment />
<Stage />
<Incentives />
<Direction />
<Brands />
