<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ImpactStatisticsSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';

	const { slice }: Props = $props();

	onMount(() => {
		const items = gsap.utils.toArray('.stat__number');

		items.forEach((item) => {
			gsap.from(item, {
				textContent: 0,
				duration: 1,
				ease: 'power2.in',
				scrollTrigger: {
					trigger: item,
					start: 'bottom bottom'
				},
				onUpdate() {
					const currentValue = Math.round(this.targets()[0].textContent);
					const formattedValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
					item.textContent = formattedValue;
				}
			});
		});
	});
</script>

<section
	class="block-spacing impact-numbers-section {slice.primary.dark ? 'bg-dark' : ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="impact-numbers-section__inner">
			<SectionHeader
				title={slice.primary.headline}
				eyebrow={slice.primary.eyebrow}
				description={slice.primary.description || undefined}
				cta={slice.primary.cta_link}
				isDark={slice.primary.dark}
			/>

			<div class="stats">
				{#each slice.primary.stats as item, index (index)}
					<div class="stat">
						<div class="stat__image">
							<PrismicImage field={item.image} />
						</div>
						<div class="stat__content">
							<div class="stat__number-wrap">
								<span class="stat__number">{item.value}</span>{item.number_symbol}
							</div>
							<h3 class="stat__title">{item.label}</h3>
							<p class="stat__description">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.impact-numbers-section__inner {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.stats {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		@media (min-width: 1024px) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: flex-start;
			gap: 2.5rem;
		}

		@media (min-width: 1200px) {
			gap: 5rem;
		}
	}

	.stats .stat:last-child {
		@media (min-width: 1200px) {
			margin-top: -8rem;
		}
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&:nth-child(even) {
			.stat__image {
				@media (min-width: 1024px) {
					order: 2;
				}
			}
		}

		.stat__image {
			max-height: 600px;
			height: 100%;

			:global img {
				height: 100%;
				width: 100%;
				object-fit: contain;
				object-position: left;

				@media (min-width: 1024px) {
					max-height: 500px;
					max-width: 400px;
				}
			}
		}

		.stat__number-wrap {
			font-size: 3.5rem;
			font-weight: 500;
			line-height: 100%;
			color: var(--accent-brown);
		}

		.stat__content {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.stat__title {
			font-size: 1.5rem;
			font-weight: 500;
			line-height: 100%;
			color: var(--black);
		}

		.stat__description {
			font-size: 1rem;
			font-weight: 400;
			line-height: 140%;
			color: var(--black);
		}
	}
</style>
