<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	 import { PrismicLink } from '@prismicio/svelte';
	import { PrismicText } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.JobDescriptionOverviewSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="container">
		<div class="vacature__description">
			<div class="vacature__description-content">
				<PrismicRichText field={slice.primary.intro_text} />
				{#each slice.primary.text_block as item}
				<div class="text-block">
					<div class="title">
						{item.title}
					</div>
					<div class="text">
						<PrismicRichText field={item.text} />
					</div>
				</div>
				{/each}
			</div>
			<div class="vacature__cta">
				<div class="vacature__description-cta">
					<div class="title">
						<PrismicRichText field={slice.primary.sidebar_heading} />
					</div>
					<div class="button">
						<a href="mailto:jeffrey@intensserviceenonderhoud.nl" class="btn">
							{slice.primary.button_text}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.vacature__description {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 140px;
		padding-top: 100px;
		padding-bottom: 200px;
		gap: 40px;
	}

	@media(min-width: 768px) {
		.vacature__description {
			flex-direction: row;
		}
	}

	.vacature__description-content {
		flex: 1;
		max-width: 1050px;
	}

	.text-block {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.text-block .title {
		font-size: 2.5rem;
		font-weight: 700;
		letter-spacing: -1px;
	}

	.vacature__description-cta {
		width: 350px;
		padding: 1.25rem;
		background: var(--accent-brown);
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 5rem;
		color: var(--white);
		position: sticky;
		top: 100px;
		align-self: flex-start;

	}

	.vacature__description-cta .title{
		font-size: 2.5rem;
		line-height: 120%;
		font-weight: 700;

	}

	.vacature__description-cta .btn {
		display: flex;
		background: var(--white);
		color: var(--black);
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		font-weight: 700;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		width: 100%;
	}
</style>
