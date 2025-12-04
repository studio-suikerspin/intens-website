<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ServiceHighlightsSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	const { slice }: Props = $props();
</script>

<section
	class="block-spacing image-text-section {slice.primary.dark ? 'bg-dark' : ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="image-text-section__inner">
			<SectionHeader
				eyebrow={slice.primary.eyebrow ? slice.primary.eyebrow : undefined}
				title={slice.primary.headline}
				description={slice.primary.description ? slice.primary.description : undefined}
				cta={slice.primary.cta_link ? slice.primary.cta_link : undefined}
				isDark={slice.primary.dark}
			/>
		</div>
	</div>
</section>
