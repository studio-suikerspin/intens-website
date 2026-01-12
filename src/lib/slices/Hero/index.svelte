<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { type SliceComponentProps } from '@prismicio/svelte';

	import Fullscreen from '$lib/components/Hero/Fullscreen.svelte';
	import Parallax from '$lib/components/Hero/Parallax.svelte';

	type Props = SliceComponentProps<Content.HeroWithNavigationOverlaySlice>;

	const { slice }: Props = $props();
</script>

<section class="hero" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.variation === 'fullscreen'}
		<Fullscreen {slice} />
	{:else if slice.variation === 'parallax'}
		<Parallax {slice} />
	{/if}
</section>

<style>
	.hero[data-slice-variation='fullscreen'] {
		height: 100vh;
		position: relative;
	}

	.hero[data-slice-variation='parallax'] {
		position: relative;
		min-height: 100vh;
	}
</style>
