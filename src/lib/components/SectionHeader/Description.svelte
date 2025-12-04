<script>
	import { PrismicRichText } from '@prismicio/svelte';

	let { content, isDark = false } = $props();
</script>

<div class="section-header__description {isDark ? 'section-header__description--dark' : ''}">
	<PrismicRichText field={content} />
</div>

<style>
	.section-header__description {
		line-height: 140%;
		max-width: 43rem;
	}
</style>
