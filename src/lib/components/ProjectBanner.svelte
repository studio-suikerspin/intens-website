<script>
	import { resolve } from '$app/paths';
	import { isFilled } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	let { project } = $props();
	let projectData = project.project;
</script>

<div class="carousel-banner">
	<div class="carousel-banner__bg">
		{#if isFilled.contentRelationship(projectData.data.featured_image)}
			<PrismicImage field={projectData.data.featured_image} />
		{/if}
	</div>

	<div class="carousel-banner__inner">
		<div class="carousel-banner__text-wrap">
			{#if projectData.data.title}
				<div class="carousel-banner__title">
					{projectData.data.title}
				</div>
			{/if}
			{#if projectData.data.summary}
				<div class="carousel-banner__summary">
					{projectData.data.summary}
				</div>
			{/if}
		</div>

		<div class="carousel-banner__link">
			<a href={resolve(`/projecten/${projectData.uid}`)} title={projectData.data.title}>
				<span>Bekijk project</span>
				<i class="icon-arrow-right"></i>
			</a>
		</div>

		<div class="carousel-banner__tags">
			{#each projectData.data.tags as item, index (index)}
				<div class="carousel-banner__tag">{item.tag}</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.carousel-banner {
		position: relative;
		height: 100%;
		width: 100%;

		&__bg {
			position: absolute;
			z-index: 0;
			inset: 0%;

			:global img,
			:global picture,
			:global video {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}

		&__inner {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;

			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			gap: 1.5rem;

			padding-inline: 0.75rem;
			padding-block: 2.5rem;

			@media (min-width: 992px) {
				padding-block: 2.5rem;
				padding-inline: 2.5rem;
			}
		}

		&__text-wrap {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		&__title {
			font-size: 1.25rem;
			font-weight: bold;
			color: var(--white);
			text-wrap: balance;

			@media (min-width: 768px) {
				font-size: 1.5rem;
			}
		}

		&__summary {
			font-size: 0.875rem;
			color: var(--white);

			@media (min-width: 768px) {
				font-size: 1rem;
				max-width: 650px;
			}
		}

		&__link {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			color: var(--white);
		}

		&__tags {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		:global .carousel-banner__tag {
			background-color: var(--bg-sand-dark);
			color: var(--black);
			padding: 0.5rem 0.75rem;
			font-size: 0.875rem;
		}
	}
</style>
