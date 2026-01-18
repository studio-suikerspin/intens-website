<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	type Props = SliceComponentProps<Content.VacaturesGridSlice>;

	const { slice }: Props = $props();

	let activeFilter = $state('all');

	// Alle vacatures data
	const allVacatures = slice.primary.vacatures
		.filter(({ vacature }) => isFilled.contentRelationship(vacature))
		.map(function ({ vacature }) {
			return {
				id: vacature.uid,
				title: vacature.data.vacature_title,
				image: vacature.data.vacature_image,
				label: vacature.data.vacature_label,
				url: `/vacatures/${vacature.uid}`
			};
		});

	// Unieke labels voor filters
	const uniqueLabels = [...new Set(allVacatures.map(vacature => vacature.label).filter(Boolean))];

	let vacatures = $state(allVacatures);

	const handleFilterChange = (filter: string) => {
		activeFilter = filter;

		if (filter === 'all') {
			vacatures = allVacatures;
		} else {
			vacatures = allVacatures.filter(vacature => vacature.label === filter);
		}
	};
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="">
	<div class="vacature-section">
		<!-- Filters -->
		<div class="vacature-section__filters">
			<div class="vacature-section__filter">
				<button
					class="btn btn--outline {activeFilter === 'all' ? 'btn--active' : ''}"
					onclick={() => handleFilterChange('all')}
				>
					Alle vacatures
				</button>
			</div>
			{#each uniqueLabels as label}
				<div class="vacature-section__filter">
					<button
						class="btn btn--outline {activeFilter === label ? 'btn--active' : ''}"
						onclick={() => handleFilterChange(label)}
					>
						{label}
					</button>
				</div>
			{/each}
		</div>

		<!-- Vacatures Grid -->
		<div class="container">
			<div class="vacatures__grid">
				{#if vacatures.length > 0}
					{#each vacatures as vacature, index (vacature.id)}
						<a 
							href={vacature.url} 
							class="vacature-card"
							transition:scale={{ start: 0.95, duration: 160, easing: quintOut }}
						>
						<div class="vacature-card__image">
							<PrismicImage field={vacature.image} style="position: absolute; left: 0; top: 0; object-fit: cover; z-index: 1; height: 480px; width: 100%; height: 100%;" />
						</div>
							
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
				{:else}
					<div class="vacature-card vacature-card--no-vacatures">
						<p>Er zijn geen vacatures gevonden.</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.vacature-section {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		padding-top: 100px;
		padding-bottom: 200px;
	}

	.vacature-section__filters {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		&::-webkit-scrollbar {
			display: none;
		}

		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		width: 100%;
	}

	.vacature-section__filter {
		scroll-snap-align: start;

		&:first-child {
			padding-inline-start: 0.75rem;
		}

		&:last-child {
			padding-inline-end: 0.75rem;
		}

		.btn {
			text-wrap: nowrap;
			cursor: pointer;
		}
	}

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
		overflow: hidden;

		:hover {
			.vacature-card__arrow i {
				transform: rotate(-40deg);
			}
		}
	}

.vacature-card__image :global img { 
	transition: transform 0.3s ease;
}

.vacature-card:hover .vacature-card__image :global img { 
	transform: scale(1.05);
}



	.vacature-card--no-vacatures {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-light);
		color: var(--text-primary);
		grid-column: 1 / -1;
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
