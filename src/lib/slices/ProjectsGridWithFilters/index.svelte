<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ProjectsGridWithFiltersSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="projects-grid-section"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="projects-grid">
		<div class="projects-grid__filters"></div>
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
</section>
