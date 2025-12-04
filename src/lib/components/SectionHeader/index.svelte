<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Eyebrow from './Eyebrow.svelte';
	import Title from './Title.svelte';
	import Description from './Description.svelte';

	const { eyebrow, title, description } = $props();
</script>

<div class="section-header">
	<Eyebrow>{eyebrow}</Eyebrow>
	<Title>{title}</Title>
	<Description content={description} />
</div>
