<script>
	let { children, isDark = false } = $props();
</script>

<h2 class={['section-title', isDark ? 'section-title--dark' : '']}>
	{@render children()}
</h2>

<style>
	.section-title {
		font-size: 4.5rem;
		color: var(--black);
		font-weight: 700;
		line-height: 100%;
	}

	.section-title--dark {
		color: var(--white);
	}
</style>
