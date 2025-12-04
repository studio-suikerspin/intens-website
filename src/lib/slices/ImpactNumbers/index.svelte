<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ImpactStatisticsSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	const { slice }: Props = $props();
</script>

<section
	class="block-spacing impact-numbers-section {slice.primary.dark ? 'bg-dark' : ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="impact-numbers-section__inner">
			<SectionHeader
				title={slice.primary.headline}
				description={slice.primary.description || undefined}
				cta={slice.primary.cta_link}
				isDark={slice.primary.dark}
			/>
		</div>
	</div>
</section>
