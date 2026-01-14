<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { page } from '$app/state';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';
	import LinkButton from '$lib/components/UI/LinkButton.svelte';

	type Props = SliceComponentProps<Content.ProjectsGridWithFiltersSlice>;

	const { slice }: Props = $props();

	const { projectTags } = page.data;
</script>

<section
	class="project-grid-section block-spacing"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="project-grid">
		<div class="project-grid__filters">
			{#each projectTags as projectTag, index (index)}
				{#if isFilled.contentRelationship(projectTag) && projectTag.data}
					<div class="project-grid__filter">
						<button class="btn btn--outline">
							{projectTag.data.tag}
						</button>
					</div>
				{/if}
			{/each}
		</div>

		<div class="container">
			<div class="project-grid__projects">
				{#each slice.primary.projects as { project }, index (index)}
					{#if isFilled.contentRelationship(project) && project.data}
						<div class="project-card">
							<div class="project-card__bg">
								<PrismicImage field={project.data.featured_image} />
							</div>

							<div class="project-card__inner">
								<div class="project-card__top">
									<div class="project-card__tags">
										{#each project.data.tags as item, index (index)}
											{item.tag}
										{/each}
									</div>
									<LinkButton href={project.url} />
								</div>

								<div class="project-card__content">
									<h2 class="project-card__title">{project.data.title}</h2>
									<p class="project-card__summary">{project.data.summary}</p>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.project-grid {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.project-grid__filters {
			display: flex;
			align-items: center;
			gap: 1.5rem;

			&::-webkit-scrollbar {
				display: none;
			}

			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			width: 100%;

			.project-grid__filter {
				scroll-snap-align: start;

				&:first-child {
					padding-inline-start: 0.75rem;
				}

				&:last-child {
					padding-inline-end: 0.75rem;
				}

				.btn {
					text-wrap: nowrap;
				}
			}
		}

		.project-grid__projects {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1.5rem;

			@media (min-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (min-width: 1024px) {
				grid-template-columns: repeat(3, 1fr);
			}

			@media (min-width: 1400px) {
				grid-template-columns: repeat(4, 1fr);
			}
		}

		.project-card {
			position: relative;
			overflow: hidden;
			height: 100%;
			min-height: 450px;

			.project-card__bg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				:global img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}

			.project-card__inner {
				position: relative;
				z-index: 2;
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 1.25rem;

				background: rgba(0, 0, 0, 0.3);
			}

			.project-card__content {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				color: var(--white);
			}

			.project-card__title {
				font-size: 1.125rem;
				font-weight: 700;
				line-height: 1.4;
			}

			.project-card__summary {
				font-weight: 500;
			}
		}
	}
</style>
