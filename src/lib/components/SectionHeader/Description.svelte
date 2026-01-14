<script>
	import { PrismicRichText } from '@prismicio/svelte';

	let { content, isDark = false } = $props();
</script>

<div class="section-header__description {isDark ? 'section-header__description--dark' : ''}">
	<PrismicRichText field={content} />
</div>

<style>
	.section-header__description {
		font-size: 1rem;
		line-height: 140%;
		max-width: 43rem;

		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		@media screen and (min-width: 768px) {
			font-size: 1.125rem;
		}

		@media screen and (min-width: 1024px) {
			flex-direction: row;
			max-width: unset;
			justify-content: space-between;

			:global p {
				width: 50%;
				max-width: 43em;
			}
		}
	}

	.section-header__description--dark {
		color: var(--white);
	}
</style>
