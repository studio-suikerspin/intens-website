<script>
	import Eyebrow from './Eyebrow.svelte';
	import Title from './Title.svelte';
	import Description from './Description.svelte';
	import CallToAction from './CallToAction.svelte';

	const { eyebrow = '', title, description = null, cta = null, isDark = false } = $props();
</script>

<div class="section-header {isDark ? 'section-header--dark' : ''}">
	<div class="section-header__content">
		<div class="section-header__title">
			<Eyebrow {isDark}>{eyebrow}</Eyebrow>
			<Title {isDark}>{title}</Title>
		</div>

		{#if cta?.text}
			<CallToAction {isDark} {cta} />
		{/if}
	</div>

	{#if description}
		<Description content={description} {isDark} />
	{/if}
</div>

<style>
	.section-header {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.section-header__content {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			@media screen and (min-width: 1200px) {
				flex-direction: row;
				justify-content: space-between;
				align-items: flex-end;
				gap: unset;
			}
		}

		.section-header__title {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
