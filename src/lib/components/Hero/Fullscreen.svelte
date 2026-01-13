<script lang="ts">
	import { type Content } from '@prismicio/client';
	import { type SliceComponentProps, PrismicImage } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroWithNavigationOverlaySlice>;

	import CallToAction from '$lib/components/UI/CallToAction.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	const { slice }: Props = $props();
</script>

<div class="hero__background">
	{#if slice.primary.video_url?.url}
	<video
		class="hero__background-video"
		src={slice.primary?.video_url?.url}
		autoplay
		muted
		loop
		playsinline
	></video>
	{:else}
	<PrismicImage field={slice.primary?.image} class="hero__background-image" style="object-fit: cover; width: 100%; height: 100%;" />
	{/if}
</div>

<div class="hero__content">
	{#if slice.primary.cta_link && slice.primary.video_url?.url}
	<div class="filled-cta">
		<CallToAction cta={slice.primary.cta_link} isDark={true} />
	</div>
	{/if}
	<div class="hero__headlines">
		<div class="hero__headlines_first">
			<div class="hero__eyebrow">
				<PrismicRichText field={slice.primary.eyebrow} />
			</div>
			<div class="headline">
				<PrismicRichText field={slice.primary.headline} />
			</div>
		</div>

		<div class="subheadline">
			<PrismicRichText field={slice.primary.subheadline} />
		</div>
	</div>
</div>

<style lang="scss">
	.hero__background {
		height: 100%;
		width: 100%;

		.hero__background-video {
			height: 100%;
			width: 100%;
			object-fit: cover;
			pointer-events: none;
		}
	}

	.hero__content {
		position: absolute;
		top: 0;
		left: 0;

		height: 100%;
		width: 100%;

		padding-inline: 0.75rem;
		padding-block: 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		.filled-cta {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		.headline {
			font-size: 3rem;
			font-weight: bold;
			color: var(--white);
			line-height: 85%;
			max-width: 900px;

			@media(min-width: 768px) {
				font-size: 5.875rem;
			}
		}

		.subheadline {
			font-size: 1.25rem;
			font-weight: medium;
			color: var(--white);
			line-height: 140%;
			max-width: 400px;
			text-wrap: balance;
			display: none;
			@media(min-width: 768px) {
				display: block;
			}
		}
	}

	.hero__headlines {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;

		@media screen and (min-width: 992px) {
			flex-direction: row;
			align-items: flex-end;
		}
	}
	.hero__headlines_first {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		@media(min-width: 768px) {
			gap: 1rem;
		}
	}
	.hero__eyebrow{
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 85%;
		letter-spacing: -1px;
		color: #ffffff;
		opacity: 0.5;

		@media(min-width: 768px) {
			font-size: 2rem;
		}
	}
</style>
