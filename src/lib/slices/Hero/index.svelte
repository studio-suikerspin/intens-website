<script lang="ts">
	import CallToAction from '$lib/components/UI/CallToAction.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroWithNavigationOverlaySlice>;

	const { slice }: Props = $props();
</script>

<section class="hero" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="hero__background">
		<video
			class="hero__background-video"
			src={slice.primary?.video_url?.url}
			autoplay
			muted
			loop
			playsinline
		></video>
	</div>

	<div class="hero__content">
		<div class="filled-cta">
			<CallToAction cta={slice.primary.cta_link} isDark={true} />
		</div>
		<div class="hero__headlines">
			<div class="headline">
				<PrismicRichText field={slice.primary.headline} />
			</div>

			<div class="subheadline">
				<PrismicRichText field={slice.primary.subheadline} />
			</div>
		</div>
	</div>
</section>

<style>
	.hero[data-slice-variation='fullscreen'] {
		height: 100vh;
		position: relative;

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
				max-width: 800px;

				@media screen and (min-width: 768px) {
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
	}

	.hero[data-slice-variation='parallax'] {
		min-height: 100vh;
	}
</style>
