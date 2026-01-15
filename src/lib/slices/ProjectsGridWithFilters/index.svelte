<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { page } from '$app/state';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';
	import LinkButton from '$lib/components/UI/LinkButton.svelte';
	import { resolve } from '$app/paths';
	import { crossfade, fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	type Props = SliceComponentProps<Content.ProjectsGridWithFiltersSlice>;

	const { slice }: Props = $props();

	const { projectTags } = page.data;

	let activeFilter = $state('all');
	let projects = $state(
		slice.primary.projects
			.filter(({ project }) => isFilled.contentRelationship(project))
			.map(function ({ project }) {
				const tags = project.data.tags.flatMap((tag) => tag.project_tag.data.tag);

				return {
					id: project.uid,
					title: project.data.title,
					summary: project.data.summary,
					type: project.data.project_type,
					image: project.data.featured_image,
					url: `/projecten/${project.uid}`,
					tags: tags
				};
			})
	);

	const handleFilterChange = (filter: string) => {
		activeFilter = filter;

		const filteredProjects = slice.primary.projects.filter(({ project }) => {
			if (!isFilled.contentRelationship(project)) return false;

			const tags = project.data.tags.flatMap((tag) => tag.project_tag.data.tag);

			if (filter === 'all') return true;

			return tags.includes(filter);
		});

		projects = filteredProjects.map(({ project }) => ({
			id: project.uid,
			title: project.data.title,
			summary: project.data.summary,
			type: project.data.project_type,
			image: project.data.featured_image,
			url: `/projecten/${project.uid}`,
			tags: project.data.tags.flatMap((tag) => tag.project_tag.data.tag)
		}));
	};
</script>

<section
	class="project-grid-section block-spacing"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="project-grid">
		<div class="project-grid__filters">
			<div class="project-grid__filter">
				<button
					class="btn btn--outline {activeFilter === 'all' ? 'btn--active' : ''}"
					onclick={() => handleFilterChange('all')}
				>
					Alle projecten
				</button>
			</div>
			{#each projectTags as projectTag, index (index)}
				{#if isFilled.contentRelationship(projectTag) && projectTag.data}
					<div class="project-grid__filter">
						<button
							class="btn btn--outline {activeFilter === projectTag.data.tag ? 'btn--active' : ''}"
							onclick={() => handleFilterChange(projectTag.data.tag)}
						>
							{projectTag.data.tag}
						</button>
					</div>
				{/if}
			{/each}
		</div>

		<div class="container">
			<div class="project-grid__projects">
				{#if projects.length > 0}
					{#each projects as project, index (index)}
						<div
							class="project-card"
							transition:scale={{ start: 0.95, duration: 160, easing: quintOut }}
						>
							<div class="project-card__bg">
								<PrismicImage field={project.image} />
							</div>

							<div class="project-card__inner">
								<div class="project-card__top">
									<div class="project-card__tags">
										<span class="project-card__tag">{project.type}</span>
									</div>
									<a href={resolve(project.url)} title={project.title} class="btn btn--icon-only">
										<i class="icon-arrow-right btn__icon"></i>
									</a>
								</div>

								<div class="project-card__content">
									<h2 class="project-card__title">{project.title}</h2>
									<p class="project-card__summary">{project.summary}</p>
								</div>
							</div>
						</div>
					{/each}
				{:else}
					<div class="project-card project-card--no-projects">
						<p>Er zijn geen projecten gevonden.</p>
					</div>
				{/if}
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

			.project-card__top {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
			}

			.project-card__tag {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.5rem;
				background: var(--bg-dark);
				color: var(--white);
				font-size: 0.875rem;
				font-weight: 500;
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
