<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	type Props = SliceComponentProps<Content.TeamMembersCarouselSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="block-spacing"
>
	<div class="container">
		<div class="team-members-carousel__inner">
			<SectionHeader
				eyebrow={slice.primary.eyebrow ? slice.primary.eyebrow : ''}
				title={slice.primary.section_title}
				description={slice.primary.section_description}
				cta={slice.primary.cta_link}
			/>
		</div>
	</div>
</section>
