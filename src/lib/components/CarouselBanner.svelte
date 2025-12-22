<script>
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	let { title, summary = null, link = null, tags = [], image = null } = $props();
</script>

<div class="carousel-banner">
	<div class="carousel-banner__bg">
		{#if image}
			<PrismicImage field={image} />
		{/if}
	</div>

	<div class="carousel-banner__inner">
		<div class="carousel-banner__text-wrap">
			<div class="carousel-banner__title">
				<PrismicRichText field={title} />
			</div>
			{#if summary}
				<div class="carousel-banner__summary">
					<PrismicRichText field={summary} />
				</div>
			{/if}
		</div>

		{#if link}
			<div class="carousel-banner__link">
				<PrismicLink field={link}>
					<span>{link.text}</span>
					<i class="icon-arrow-right"></i>
				</PrismicLink>
			</div>
		{/if}

		{#if tags.length > 0}
			<div class="carousel-banner__tags">
				{#each tags as tag (tag.title)}
					<div class="carousel-banner__tag">{tag.title}</div>
				{/each}
			</div>
		{/if}
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

			@media (min-width: 768px) {
				font-size: 1.5rem;
			}
		}

		&__summary {
			font-size: 0.75rem;
			color: var(--white);

			@media (min-width: 768px) {
				font-size: 1rem;
			}
		}

		&__link {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			color: var(--white);
		}
	}
</style>
