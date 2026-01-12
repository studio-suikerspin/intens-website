<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.MultiBlockTextImageSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="multi-text-image block-spacing--end"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="multi-text-image__container container">
		<div class="multi-text-image__inner">
			<div class="text-blocks">
				{#each slice.primary.blocks as block, index (index)}
					<div class="text-block">
						<h3 class="text-block__title">{block.title}</h3>
						<div class="text-block__description">
							<PrismicRichText field={block.description} />
						</div>
					</div>
				{/each}
			</div>

			<div class="side-image">
				<PrismicImage field={slice.primary.side_image} />
			</div>
		</div>
	</div>
</section>

<style>
	.multi-text-image {
		padding-block-start: 6rem;
	}

	.multi-text-image__inner {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.5rem;

		@media (min-width: 768px) {
			flex-direction: row;
		}

		@media (min-width: 1024px) {
			padding-inline-start: 5rem;
		}

		@media (min-width: 1200px) {
			padding-inline-start: 8rem;
		}
	}

	.text-blocks {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		max-width: 860px;
	}

	.text-block {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.text-block__title {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.4;
		color: var(--black);
	}

	.text-block__description {
		font-weight: 500;
		color: var(--black);
		line-height: 1.4;
	}

	.side-image {
		max-width: 300px;
		height: fit-content;
		margin-inline: auto;

		@media (min-width: 768px) {
			margin-inline: unset;
		}
	}
</style>
