<script lang="ts">
	import LinkButton from '$lib/components/UI/LinkButton.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.VideoBannerSectionSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="fs-video-banner"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="fs-video-banner__wrap">
			<div class="fs-video-banner__content-wrap">
				<h2 class="banner-title">{slice.primary.headline}</h2>
				<div class="banner-content">
					<PrismicRichText field={slice.primary.content} />
				</div>
				<LinkButton linkField={slice.primary.cta_link} icon={false} />
			</div>
			<div class="fs-video-banner__video">
				<video autoplay muted loop playsinline poster={slice.primary.poster_image?.url}>
					<source src={slice.primary.video.url} type="video/mp4" />
				</video>
			</div>
		</div>
	</div>
</section>

<style>
	.fs-video-banner {
		.container {
			padding-inline: unset;

			@media (min-width: 768px) {
				padding-inline: 0.75rem;
			}
		}
	}

	.fs-video-banner__wrap {
		position: relative;
	}

	.fs-video-banner__content-wrap {
		position: relative;
		z-index: 1;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding-inline: 0.75rem;

		min-height: 80vh;
	}

	.fs-video-banner__video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.banner-title {
		font-size: 3rem;
		font-weight: 700;
		line-height: 100%;
		color: var(--white);
		text-align: center;
		text-wrap: balance;
		margin-bottom: 1.5rem;

		@media (min-width: 1024px) {
			font-size: 5.875rem;
		}
	}

	.banner-content {
		font-size: 1rem;
		line-height: 1.4;
		font-weight: 500;
		text-align: center;
		color: var(--white);
		margin-bottom: 2rem;

		max-width: 600px;
	}
</style>
