<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ImageGalleryTwoColumnSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="media-gallery"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="media-gallery__inner">
		<div class="media-gallery">
			{#each slice.primary.media as item, index (index)}
				{#if item.image.url || item.video.url}
					<div class="media-gallery__item">
						{#if item.image.url}
							<PrismicImage field={item.image} />
						{/if}

						{#if item.video.url}
							<video src={item.video.url} controls muted autoplay playsinline></video>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.media-gallery {
		display: flex;
		align-items: stretch;

		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		scroll-snap-type: x mandatory;

		max-height: 400px;

		@media (min-width: 768px) {
			max-height: 500px;
		}

		@media (min-width: 1024px) {
			max-height: 600px;
		}

		:global .media-gallery__item {
			scroll-snap-align: start;
			aspect-ratio: 1 / 1;
			width: 330px;
			padding-inline: 0.75rem;

			@media (min-width: 768px) {
				width: 500px;
			}

			@media (min-width: 1024px) {
				width: 600px;
			}
		}

		:global .media-gallery__item img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
</style>
