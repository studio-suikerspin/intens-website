<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	import { PrismicRichText } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.TextOnlySlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="block-spacing text-only-section"
	data-reveal-group
>
	<div class="container">
		<div class="text-only">
			<div class="text-only__title">
				<PrismicRichText field={slice.primary.title} />
			</div>
			<div class="text-only__text">
				<PrismicRichText field={slice.primary.text} />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.text-only-section {
		padding-top: 6.25rem;
	}
	.text-only {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		&__title {
			font-size: 2.5rem;
			font-weight: 700;
			letter-spacing: -1px;
			line-height: 100%;
			font-size: 2rem;
			max-width: 1200px;
			@media (min-width: 768px) {
				font-size: 4.5rem;
			}
		}
		&__text {
			font-size: 1rem;
			line-height: 160%;
			color: var(--color-text-secondary);
			max-width: 840px;
			@media (min-width: 768px) {
				font-size: 1.125rem;
			}
		}
	}

	:global .text-only h2 {
		font-size: 4.5rem;
	}
</style>
