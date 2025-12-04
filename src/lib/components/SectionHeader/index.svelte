<script>
	import Eyebrow from './Eyebrow.svelte';
	import Title from './Title.svelte';
	import Description from './Description.svelte';
	import CallToAction from './CallToAction.svelte';

	const { eyebrow = '', title, description = '', cta = null, isDark = false } = $props();
</script>

<div class={['section-header', isDark ? 'section-header--dark' : '']}>
	<div class="section-header__content">
		<div class="section-header__title">
			<Eyebrow {isDark}>{eyebrow}</Eyebrow>
			<Title {isDark}>{title}</Title>
		</div>

		{#if cta}
			<CallToAction {isDark} {cta} />
		{/if}
	</div>
	<Description content={description} {isDark} />
</div>
