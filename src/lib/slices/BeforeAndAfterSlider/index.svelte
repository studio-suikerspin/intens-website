<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.SideBySideMediaSliderSlice>;

	const { slice }: Props = $props();

	import { gsap, Draggable } from '$lib/gsap';
	import { onMount } from 'svelte';

	function initBeforeAfterSplitSlider() {
		const splitters = document.querySelectorAll('[data-splitter="wrap"]');

		const setupSplitter = (splitter) => {
			const handle = splitter.querySelector('[data-splitter="handle"]');
			const after = splitter.querySelector('[data-splitter="after"]');

			let bounds = splitter.getBoundingClientRect();
			let currentPercent = parseFloat(splitter.getAttribute('data-splitter-initial')) || 50;

			const setPositions = (percent) => {
				bounds = splitter.getBoundingClientRect();
				const positionX = (percent / 100) * bounds.width;
				gsap.set(handle, { x: positionX, left: 'unset' });
				gsap.set(after, { clipPath: `inset(0 0 0 ${percent}%)` });
			};

			setPositions(currentPercent);

			Draggable.create(handle, {
				type: 'x',
				bounds: splitter,
				cursor: 'ew-resize',
				activeCursor: 'grabbing',
				onDrag() {
					currentPercent = (this.x / bounds.width) * 100;
					gsap.set(after, { clipPath: `inset(0 0 0 ${currentPercent}%)` });
				}
			});

			window.addEventListener('resize', () => setPositions(currentPercent));
		};

		splitters.forEach(setupSplitter);
	}

	onMount(() => {
		initBeforeAfterSplitSlider();
	});
</script>

<section
	class="before-after-slider block-spacing--end"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div data-splitter-initial="25" data-splitter="wrap" class="splitter-wrapper">
			<div class="splitter-content">
				<PrismicImage field={slice.primary.before} class="splitter-content__img" />
			</div>
			<div data-splitter="after" class="splitter-content is--after">
				<PrismicImage field={slice.primary.after} class="splitter-content__img" />
			</div>
			<div data-splitter="handle" class="splitter-handle">
				<div class="splitter-handle__center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						viewbox="0 0 24 24"
						fill="none"
						class="splitter-handle__icon"
					>
						<path
							d="M20.7931 11.5L15.2931 5.99995L16.0002 5.29285L22.3537 11.6464V12.3535L16.0002 18.7071L15.2931 18L20.793 12.5L3.20719 12.5L8.70714 18L8.00004 18.7071L1.64648 12.3535L1.64648 11.6464L8.00004 5.29285L8.70714 5.99995L3.2071 11.5L20.7931 11.5Z"
							fill="currentColor"
						></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.splitter-wrapper {
		aspect-ratio: 3 / 2;
		position: relative;
		overflow: hidden;

		:global img::selection {
			background: none;
		}
	}

	.splitter-content {
		z-index: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0%;
	}

	.splitter-content.is--after {
		-webkit-clip-path: inset(0 0 0 25%);
		clip-path: inset(0 0 0 25%);
	}

	:global .splitter-content__img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.splitter-handle {
		z-index: 2;
		cursor: ew-resize;
		background-color: var(--white);
		justify-content: center;
		align-items: center;
		width: 0.5em;
		height: 100%;
		display: flex;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 25%;
	}

	.splitter-handle__center {
		grid-column-gap: 0.125em;
		grid-row-gap: 0.125em;
		background-color: var(--bg-dark);
		flex: none;
		justify-content: center;
		align-items: center;
		width: 2.5em;
		height: 2.5em;
		display: flex;
		position: relative;
	}

	.splitter-handle__icon {
		justify-content: center;
		align-items: center;
		width: 1.25em;
		display: flex;
		color: var(--white);
	}

	.splitter-handle:hover .splitter-handle__center::after {
		width: 130%;
		height: 130%;
		opacity: 0.5;
	}
</style>
