<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.TestimonialImageSideSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-dark">
	<div class="container">
		<div class="testimonial__wrap">
			<div class="testimonial__text">
				<div class="title">
					<PrismicRichText field={slice.primary.quote} />
				</div>
				<div class="author">
					<div class="author__name">{slice.primary.author_name}</div>
					<div class="author__role">{slice.primary.author_role}</div>
				</div>
			</div>
			<div class="testimonial__image">
				<PrismicImage field={slice.primary.side_image} />
			</div>
		</div>
	</div>
</section>


<style>
	.testimonial__wrap {
		display: flex;
		flex-direction: column;
		gap: 5rem;
		padding: 100px 0;
	}

	@media(min-width: 768px) {
		.testimonial__wrap {
			flex-direction: row;
		}
	}


	.testimonial__text {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.testimonial__text .title{
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 140%;
		letter-spacing: -1px;
		color: var(--white);
	}

	@media(min-width: 768px) {
		.testimonial__text .title{
			font-size: 2.5rem;
		}
	}

	.testimonial__text .author{
		display: flex;
		flex-direction: column;
		color: var(--white);
		font-size: 18px;
	}

	.testimonial__image {
		flex: 1;
		height: 650px;
	}

	.testimonial__image :global(img){
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>