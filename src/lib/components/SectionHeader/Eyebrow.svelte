<script>
	let { children, isDark = false } = $props();
</script>

<div class={['section-eyebrow', isDark ? 'section-eyebrow--dark' : '']}>
	{@render children()}
</div>

<style>
	.section-eyebrow {
		font-size: 1.25rem;
		line-height: 100%;
		color: var(--black);
	}

	.section-eyebrow--dark {
		color: var(--white);
	}
</style>
