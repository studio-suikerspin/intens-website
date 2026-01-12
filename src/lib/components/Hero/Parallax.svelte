<script lang="ts">
	import { type Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	import { gsap, ScrollTrigger } from '$lib/gsap';

	type Props = SliceComponentProps<Content.HeroWithNavigationOverlaySlice>;

	const { slice }: Props = $props();

	let columnCount = slice.primary.column_1?.length ? 1 : 0;
	columnCount += slice.primary.column_2?.length > 0 ? 1 : 0;
	columnCount += slice.primary.column_3?.length > 0 ? 1 : 0;

	onMount(() => {
		gsap.to('.hero-bg__media', {
			scale: 1.2,
			duration: 1,
			scrollTrigger: {
				trigger: '.hero-bg',
				start: 'top 80%',
				end: 'bottom 20%',
				scrub: true
			}
		});
	});
</script>

<div class="parallax-wrap">
	<div class="hero-bg">
		{#if slice.primary.video_url?.url}
			<video
				class="hero-bg__media"
				autoplay
				loop
				muted
				playsinline
				poster={slice.primary.poster_image?.url}
			>
				<source src={slice.primary.video_url.url} />
			</video>
		{:else}
			<PrismicImage class="hero-bg__media" field={slice.primary.poster_image} />
		{/if}

		<div class="hero-bg__overlay"></div>
	</div>

	<div class="hero-content">
		<div class="hero-content__top">
			<div class="container">
				<div class="hero-eyebrow">{slice.primary.eyebrow}</div>
				<h1 class="hero-headline">{slice.primary.headline}</h1>
			</div>
		</div>

		<div class="container">
			<div class="hero-content__bottom">
				{#each Array.from({ length: columnCount }).keys() as _, index (index)}
					<div class="column column-{index + 1}">
						{#each slice.primary[`column_${index + 1}`] as { item }, index (index)}
							<div class="column-item">
								<PrismicRichText field={item} />
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.hero-bg {
		position: absolute;
		height: 100%;
		width: 100%;

		:global img,
		:global video {
			width: 100%;
			min-height: 100vh;
			height: 100%;
			object-fit: cover;
		}

		.hero-bg__overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	.hero-content {
		position: relative;
		top: 0;
		z-index: 2;

		.hero-content__top {
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			padding-block-end: 0.75rem;

			.container {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				@media (min-width: 1024px) {
					gap: 1.5rem;
				}
			}
		}

		.hero-eyebrow {
			font-size: 1.125rem;
			font-weight: 700;
			color: var(--white);
			line-height: 85%;

			@media (min-width: 1024px) {
				font-size: 2rem;
			}
		}

		.hero-headline {
			font-size: 3rem;
			font-weight: 700;
			color: var(--white);
			line-height: 110%;

			@media (min-width: 1024px) {
				font-size: 4.5rem;
			}
		}

		.hero-content__bottom {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			justify-content: space-evenly;
			padding-block: 5.625rem;

			.column {
				display: flex;
				flex-direction: column;
				gap: 5rem;
			}

			.column-item {
				font-size: 0.825rem;
				color: var(--white);
				text-align: center;

				@media (min-width: 1024px) {
					font-size: 1.125rem;
				}
			}
		}

		.hero-content__bottom .column:first-child .column-item {
			text-align: left;
		}

		.hero-content__bottom .column:last-child .column-item {
			text-align: right;
		}
	}
</style>
