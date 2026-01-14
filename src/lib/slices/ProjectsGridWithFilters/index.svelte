<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { page } from '$app/state';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ProjectsGridWithFiltersSlice>;

	const { slice }: Props = $props();

	const { projectTags } = page.data;
</script>

<section
	class="projects-grid-section block-spacing"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="projects-grid">
		<div class="projects-grid__filters">
			{#each projectTags as projectTag, index (index)}
				<button class="btn btn--outline">
					{projectTag.tag}
				</button>
			{/each}
		</div>

		<div class="container">
			<div class="projects-grid__projects">
				{#each slice.primary.projects as { project }, index (index)}
					{#if isFilled.contentRelationship(project) && project.data}
						<div class="project-card">
							<h2 class="project-card__title">{project.data.title}</h2>
							<p class="project-card__summary">{project.data.summary}</p>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
