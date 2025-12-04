<script>
	import { resolve } from '$app/paths';
	import { PrismicLink } from '@prismicio/svelte';

	let { cta, isDark = false } = $props();
</script>

<PrismicLink
	field={cta}
	class={['section-header__cta', isDark ? 'section-header__cta--dark' : '']}
/>
