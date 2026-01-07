<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	type Props = SliceComponentProps<Content.CustomerReviewsSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="reviews-section block-spacing"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="reviews-section__inner">
		<div class="container">
			<SectionHeader eyebrow={slice.primary.eyebrow} title={slice.primary.headline} isDark={true} />
		</div>

		<div class="reviews-wrap">
			{#each slice.primary.reviews as item, index (index)}
				<div class="review">
					<div class="review__inner">
						<div class="review__top">
							<div class="review__avatar">
								<PrismicImage field={item.avatar} />
							</div>

							<div class="review__info">
								<p class="review__author">{item.name}</p>
								<p class="review__date">{item.date}</p>
							</div>
						</div>
						<div class="review__stars">
							{#each Array.from(Array(parseInt(item.rating)).keys()) as index (index)}
								<span class="review__star review__star--filled">&#9733;</span>
							{/each}
							{#each Array.from(Array(5 - parseInt(item.rating)).keys()) as index (index)}
								<span class="review__star">&#9734;</span>
							{/each}
						</div>
						<div class="review__content">
							<PrismicRichText field={item.content} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.reviews-section {
		background: var(--bg-dark);

		@media (min-width: 768px) {
			padding-block-start: 20rem;
			margin-top: -8rem;
		}

		.reviews-section__inner {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}
	}

	.reviews-wrap {
		display: flex;
		align-items: flex-start;

		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		width: auto;
	}

	.review {
		scroll-snap-align: start;
		padding-inline: 0.75rem;

		.review__inner {
			min-width: 80vw;

			background: #fff;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			@media (min-width: 768px) {
				min-width: 60vw;
			}

			@media (min-width: 1024px) {
				min-width: 40vw;
			}

			@media (min-width: 1200px) {
				min-width: fit-content;
			}
		}

		.review__top {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		.review__info {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.review__avatar {
			height: 4rem;
			width: 4rem;
			border-radius: 50%;
			overflow: hidden;

			:global img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.review__author {
			color: var(--black);
			font-weight: 600;
		}

		.review__date {
			font-size: 0.9rem;
			opacity: 0.5;
		}

		.review__stars {
			display: flex;
			gap: 0.25rem;
		}

		.review__star {
			font-size: 1.5rem;
			color: #ffc107;
		}

		.review__content {
			font-size: 1rem;
			line-height: 125%;

			min-width: 250px;
			max-width: 350px;
		}
	}
</style>
