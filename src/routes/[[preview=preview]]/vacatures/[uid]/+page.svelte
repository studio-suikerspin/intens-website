<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { PageProps } from './$types';

	import { components } from '$lib/slices';

	const { data } = $props();
</script>

<SliceZone slices={data.vacature.data.slices} {components} />