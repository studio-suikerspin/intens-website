<script>
	import { PrismicLink } from '@prismicio/svelte';

	let { cta, isDark = false } = $props();
</script>

<div class="cta-wrapper">
	<PrismicLink field={cta} class={['cta', isDark ? 'cta--dark' : '']} />
	<i class="icon-circle cta-icon {isDark ? 'cta-icon--dark' : ''}"></i>

	<div class="cta-underline"></div>
</div>

<style>
	.cta-wrapper {
		position: relative;
		width: fit-content;

		padding-block-end: 0.25rem;
		border-bottom: 1px solid var(--accent-brown);
	}

	.cta-wrapper :global .cta {
		font-size: 1.125rem;
		font-weight: bold;
		color: var(--black);
		padding-inline-end: 1.25rem;
		text-wrap: nowrap;
	}

	.cta-wrapper :global .cta--dark {
		color: var(--white);
	}

	.cta-wrapper .cta-icon {
		position: absolute;
		font-size: 1.25rem;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
	}

	.cta-icon--dark {
		color: var(--white);
	}
</style>
