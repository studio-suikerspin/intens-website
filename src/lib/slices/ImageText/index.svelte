<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ServiceHighlightsSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';
	import LinkButton from '$lib/components/UI/LinkButton.svelte';
	import { resolve } from '$app/paths';

	const { slice }: Props = $props();

	// let tag = $state('div');
</script>

<section
	class="block-spacing image-text {slice.primary.dark ? 'bg-dark' : ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="image-text__inner">
			<SectionHeader
				eyebrow={slice.primary.eyebrow ? slice.primary.eyebrow : undefined}
				title={slice.primary.headline}
				description={slice.primary.description ? slice.primary.description : undefined}
				cta={slice.primary.cta_link ? slice.primary.cta_link : undefined}
				isDark={slice.primary.dark}
			/>

			<div class="image-text__blocks">
				{#each slice.primary.image_text_block as block, index (index)}
					<div class="image-text__block">
						
						
						<!-- {#if block.cta_button.url} -->
						<!-- <a
							href={resolve(block.cta_button.url)}
							class="image-text__block-image image-text__block-image--{block.image_right
								? 'right'
								: 'left'}"
						> -->
						<svelte:element this={block.cta_button.url ? 'a' : 'div'} class="image-text__block-image image-text__block-image--{block.image_right
								? 'right'
								: 'left'}">

						{#if block.cta_button.url}
							{@html `<link rel="preload" as="image" href="${block.image.url}" />`}
							<div class="image-button">
								<i class="icon-arrow-right"></i>
							</div>
						{/if}
							<PrismicImage field={block.image} />				
						</svelte:element>
						
						<!-- </a> -->
						
						<div class="image-text__block-wrap">
							<div class="image-text__block-content">
								<h3 class="image-text__block-title">{block.title}</h3>
								<div class="image-text__block-text">
									<PrismicRichText field={block.text} />
								</div>
							</div>
							{#if block.cta_button.url}
								<LinkButton linkField={block.cta_button} />
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.image-text {
		&__inner {
			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				gap: 5rem;
			}
		}

		&__blocks {
			display: flex;
			flex-flow: column;
			gap: 5rem;

			@media (min-width: 1024px) {
				gap: unset;
			}
		}

		&__block {
			display: grid;
			grid-auto-flow: row;
			gap: 1.5rem;

			@media (min-width: 1024px) {
				grid-template-columns: 1fr 1fr;
				grid-template-rows: auto;
				align-items: center;
				gap: unset;
			}
		}

		&__block-image {
			order: 1;
			aspect-ratio: 1 / 1;
			overflow: hidden;

			position: relative;

			@media (min-width: 1024px) {
				&--right {
					order: 2;
				}
			}

			.image-button {
				position: absolute;
				top: 0.75rem;
				right: 0.75rem;

				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.5rem;

				background-color: var(--bg-sand-dark);
				color: var(--black);
				font-size: 1rem;
				cursor: pointer;

				@media (min-width: 1024px) {
					top: 1.25rem;
					right: 1.25rem;

					padding: 1rem;
					font-size: 1.5rem;
				}
			}

			:global img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		&__block-wrap {
			order: 2;

			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				order: 1;
				padding-inline-start: 2.5rem;
			}
		}

		&__block-content {
			display: flex;
			flex-flow: column;
			gap: 1rem;

			max-width: 525px;
		}

		&__block-title {
			font-size: 2rem;
			font-weight: 700;
			line-height: normal;
			color: var(--black);

			@media (min-width: 1024px) {
				font-size: 2.5rem;
			}
		}

		&__block-text {
			font-weight: 500;
			line-height: 140%;
			color: var(--black);

			@media (min-width: 1024px) {
				font-size: 1.125rem;
			}
		}
	}
</style>
