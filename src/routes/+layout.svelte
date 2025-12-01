<script>
	import '../app.css';
	import '$lib/fonts/iconly.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();

	let { data: metadata } = page.data.page;
</script>

<svelte:head>
	<title>{metadata.page_title}</title>
	{#if metadata.meta_description}
		<meta name="description" content={metadata.meta_description} />
	{/if}
	{#if metadata.meta_title}
		<meta name="og:title" content={metadata.meta_title} />
	{/if}
	{#if metadata.meta_image}
		<meta name="og:image" content={metadata.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
<main>
	<Header />

	{@render children()}

	<i class="icon-arrow-left"></i>
</main>
<PrismicPreview {repositoryName} />
