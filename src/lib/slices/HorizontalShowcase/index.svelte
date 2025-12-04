<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ProjectShowcaseSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	const { slice }: Props = $props();
</script>

<section
	class="block-spacing--sm horizontal-showcase-section {slice.primary.dark
		? 'bg-dark'
		: 'bg-light'}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<SectionHeader
			eyebrow={slice.primary.eyebrow || ''}
			title={slice.primary.headline || ''}
			description={slice.primary.description}
			cta={slice.primary.cta_link}
			isDark={slice.primary.dark}
		/>
	</div>
</section>
