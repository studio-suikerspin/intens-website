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

		@media screen and (min-width: 992px) {
			font-size: 1.125rem;
		}
	}

	.section-header__description--dark {
		color: var(--white);
	}
</style>
