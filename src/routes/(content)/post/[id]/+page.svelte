<script>
	export let data;
</script>

<svelte:head>
	<title>{data.post.metaTitle}</title>
	<meta name="description" content={data.post.metaDescription} />
</svelte:head>

<div
	class="animate-fade overflow-hidden bg-linear-to-b from-white via-white to-gray-50 px-4 py-16 animate-duration-500 animate-ease-in-out sm:px-6 lg:px-8 xl:py-36"
>
	<div class="mx-auto max-w-max lg:max-w-7xl">
		<div class="relative z-10 mb-8 md:mb-2 md:px-6">
			<div class="max-w-prose text-base lg:max-w-none">
				<h2 class="font-semibold uppercase leading-6 tracking-wide text-sky-600">
					Пост от <span>{data.post.date}</span>
				</h2>
			</div>
		</div>
		<div class="relative">
			<svg
				class="absolute right-0 top-0 -mr-20 -mt-20 hidden md:block"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="95e8f2de-6d30-4b7e-8159-f791729db21b"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
			</svg>
			<svg
				class="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
			</svg>
			<div class="relative bg-linear-to-b from-white via-white to-gray-50 md:p-6">
				<div class="lg:grid lg:grid-cols-1 lg:gap-12">
					<div class="prose prose-base prose-indigo text-gray-500 lg:max-w-none">
						{@html data.post.content}
					</div>
				</div>
				<div class="mt-8 inline-flex rounded-md shadow">
					<a
						href="/blog"
						class="flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-5 py-3 text-base font-medium text-white hover:bg-sky-700"
					>
						Вернуться в блог
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
