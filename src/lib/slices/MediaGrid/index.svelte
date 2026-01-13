<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	type Props = SliceComponentProps<Content.MediaGridSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="media-grid {slice.primary.light_or_dark ? 'media-grid--dark' : ''} block-spacing"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="media-grid__inner">
			<SectionHeader
				eyebrow={slice.primary.eyebrow}
				title={slice.primary.heading}
				description={slice.primary.description}
				cta={slice.primary.cta_link}
				isDark={slice.primary.light_or_dark}
			/>

			<div class="media-grid__grid">
				{#each slice.primary.items as item, index (index)}
					<div class="media-grid__item">
						{#if item.image.url}
							<PrismicImage field={item.image} />
						{:else if item.video_url.url}
							<video src={item.video_url.url} autoplay playsinline muted></video>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.media-grid--dark {
		background: var(--bg-dark);
	}

	.media-grid__grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1.25rem;

		@media (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (min-width: 1200px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.media-grid__item {
		width: 100%;
		height: auto;

		:global img,
		:global video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
