<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.VacaturesGridSlice>;

	const { slice }: Props = $props();

	let vacatures = $state(
		slice.primary.vacatures
			.filter(({ vacature }) => isFilled.contentRelationship(vacature))
			.map(function ({ vacature }) {
				return {
					id: vacature.uid,
					title: vacature.data.vacature_title,
					image: vacature.data.vacature_image,
					label: vacature.data.vacature_label,
					url: `/vacatures/${vacature.uid}`
				};
			})
	);
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="block-spacing">
	<div class="container">
		<div class="vacatures__grid">
			{#each vacatures as vacature}
				<a href={vacature.url} class="vacature-card">
					
						<PrismicImage field={vacature.image} style="position: absolute; left: 0; top: 0; object-fit: cover; z-index: 1; height: 480px; width: 100%; height: 100%;" />
					
					<div class="vacature-card__content">
						{#if vacature.label}
							<div class="vacature-card__top-meta">
								<span class="vacature-card__label">{vacature.label}</span>
								<div class="vacature-card__arrow">
									<i class="icon-arrow-right btn__icon"></i>
								</div>
							</div>
						{/if}
						<h3 class="vacature-card__title">{vacature.title}</h3>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.vacatures__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.vacature-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.125rem;
		position: relative;
		height: 480px;

		:hover {
			.vacature-card__arrow i {
				transform: rotate(-40deg);
			}
		}
	}

	.vacature-card__image{
		position: absolute;
		left: 0;
		top: 0;
		object-fit: cover;
		z-index: 1;
	}

	.vacature-card__content {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		z-index: 99;
	}

	.vacature-card__top-meta{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.vacature-card__label {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-dark);
		color: var(--white);
		font-size: 14px;
		padding: 8px ;
	}

	.vacature-card__title {
		font-size: 2.5rem;
		font-weight: 700;		
		color: var(--white);
	}

	.vacature-card__arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 2px solid var(--white);
		background: var(--white);
		color: var(--black);
	}

	.vacature-card__arrow i {
		font-size: 1.5rem;
		transition: transform 0.3s ease;
	}

</style>
