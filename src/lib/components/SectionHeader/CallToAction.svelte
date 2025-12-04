<script>
	import { PrismicLink } from '@prismicio/svelte';

	let { cta, isDark = false } = $props();
</script>

<div class="section-header__cta-wrapper">
	<PrismicLink
		field={cta}
		class={['section-header__cta', isDark ? 'section-header__cta--dark' : '']}
	/>
	<i class="icon-circle"></i>

	<div class="section-header__cta-underline"></div>
</div>

<style>
	.section-header__cta-wrapper {
		position: relative;
		width: fit-content;

		padding-block-end: 0.25rem;
		border-bottom: 1px solid var(--accent-brown);
	}

	.section-header__cta-wrapper :global .section-header__cta {
		font-size: 1.125rem;
		color: var(--black);
		padding-inline-end: 1.25rem;
		text-wrap: nowrap;
	}

	.section-header__cta-wrapper i {
		position: absolute;
		font-size: 1.25rem;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
	}
</style>
