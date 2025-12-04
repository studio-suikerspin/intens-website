<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroWithNavigationOverlaySlice>;

	const { slice }: Props = $props();
</script>

<section class="hero" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="hero__background">
		<video
			class="hero__background-video"
			src={slice.primary?.video_url?.url}
			autoplay
			muted
			loop
			playsinline
		></video>
	</div>
</section>

<style>
	.hero[data-slice-variation='fullscreen'] {
		height: 100vh;

		.hero__background {
			height: 100%;
			width: 100%;

			.hero__background-video {
				height: 100%;
				width: 100%;
				object-fit: cover;
				pointer-events: none;
			}
		}
	}

	.hero[data-slice-variation='parallax'] {
		min-height: 100vh;
	}
</style>
