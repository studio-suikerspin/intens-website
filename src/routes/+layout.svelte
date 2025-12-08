<script>
	import '../app.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';

	import { ScrollSmoother, ScrollTrigger } from '$lib/gsap';

	let { children } = $props();

	let { data: metadata } = page?.data?.page ?? { data: {} };

	onMount(() => {
		if (ScrollTrigger.isTouch) {
			return;
		}

		ScrollSmoother.create({
			smooth: 0.5, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true
		});
	});
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

	<link rel="stylesheet" href="fonts/satoshi/satoshi.css" />
	<link rel="stylesheet" href="fonts/icons/iconly.css" />
</svelte:head>
<main>
	<Header />
	<div id="smooth-wrapper">
		<div id="smooth-content">
			{@render children()}
		</div>
	</div>
</main>
<PrismicPreview {repositoryName} />
