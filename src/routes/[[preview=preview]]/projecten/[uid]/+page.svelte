<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { PageProps } from './$types';

	import { components } from '$lib/slices';

	const { data }: PageProps = $props();
	console.log(data);
</script>
