<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	type Props = SliceComponentProps<Content.TextWithFeatureGridSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="text-with-feature-grid block-spacing--start"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="text-with-feature-grid__inner">
		<div class="text-with-feature-grid__bg">
			{#if slice.primary.background_image.url}
				<PrismicImage field={slice.primary.background_image} />
			{/if}
		</div>

		<div class="container">
			<SectionHeader
				eyebrow={slice.primary.eyebrow}
				title={slice.primary.headline}
				description={slice.primary.description}
				isDark={!slice.primary.text_is_dark}
			/>
		</div>

		<div class="feature-grid">
			{#each slice.primary.features as item, index (index)}
				<div class="feature-item">
					<div class="feature-item__inner">
						<div class="feature-item__title">{item.feature_title}</div>
						<div class="feature-item__bullets">
							<PrismicRichText field={item.feature_bullets} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.text-with-feature-grid__inner {
		position: relative;
		overflow: hidden;
		padding-block: 6.25rem;

		display: flex;
		flex-direction: column;
		gap: 5rem;

		.text-with-feature-grid__bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;

			:global img {
				height: 100%;
				object-fit: cover;
			}
		}

		.feature-grid {
			display: grid;
			grid-auto-flow: column;
			min-height: 0;
			min-width: 0;

			overflow-x: scroll;
			scroll-snap-type: x mandatory;

			@media (min-width: 768px) {
				grid-auto-flow: unset;
				grid-template-columns: repeat(2, 1fr);
			}

			@media (min-width: 1024px) {
				grid-auto-flow: unset;
				grid-template-columns: repeat(3, 1fr);
			}
		}

		.feature-item {
			scroll-snap-align: start;
			padding-inline: 1.125rem;
			height: 100%;

			@media (min-width: 768px) {
				padding-block: 1.125rem;
			}

			.feature-item__inner {
				background: rgba(178, 158, 132, 0.3);
				color: var(--white);

				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				height: 100%;

				padding: 1.25rem;

				@media (min-width: 1024px) {
					gap: 2.5rem;
				}
			}

			.feature-item__title {
				font-size: 1.5rem;
				font-weight: 700;
				line-height: 1.4;
			}

			.feature-item__bullets {
				font-weight: 500;
				line-height: 1.4;

				:global ul {
					list-style-type: disc;
					list-style-position: outside;
					margin-inline-start: 1.25rem;
				}
			}
		}
	}
</style>
