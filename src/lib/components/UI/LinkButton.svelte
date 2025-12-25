<script>
	import { PrismicLink } from '@prismicio/svelte';
	import { resolve } from '$app/paths';

	let {
		linkField = null,
		href = '',
		variant = 'primary',
		icon = 'circle',
		isDark = false
	} = $props();
</script>

{#if linkField}
	<PrismicLink field={linkField} class={['btn', `btn--${variant}`, isDark ? 'btn--dark' : '']}>
		<span>{linkField.text}</span>
		<i class="icon-{icon} btn__icon"></i>
	</PrismicLink>
{:else if href}
	<a href={resolve(href)} class={['btn', `btn--${variant}`, isDark ? 'btn--dark' : '']}>
		<span>{href}</span>
		<i class="icon-{icon} btn__icon"></i>
	</a>
{/if}
