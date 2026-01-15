<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { PageProps } from './$types';

	import { components } from '$lib/slices';

	import Parallax from '$lib/components/Hero/Parallax.svelte';

	const { data } = $props();
</script>

<SliceZone slices={data.project.data.slices} {components} />
