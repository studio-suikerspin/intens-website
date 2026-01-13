<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';
	import { onMount } from 'svelte';

	type Props = SliceComponentProps<Content.MediaGridSlice>;

	const { slice }: Props = $props();

	function initMasonryGrid() {
		document.querySelectorAll('[data-masonry-list]').forEach((container) => {
			const shuffle = container.dataset.masonryShuffle !== 'false';
			let cols, gapPx, colHeights;

			// Take columns and gaps from CSS
			const getVars = () => {
				const cs = getComputedStyle(container);
				cols = parseInt(cs.getPropertyValue('--masonry-col'));
				const rawGap = cs.getPropertyValue('--masonry-gap').trim();
				if (rawGap.endsWith('px')) {
					gapPx = parseFloat(rawGap);
				} else if (rawGap.endsWith('em')) {
					gapPx = parseFloat(rawGap) * parseFloat(cs.fontSize);
				} else if (rawGap.endsWith('rem')) {
					gapPx =
						parseFloat(rawGap) * parseFloat(getComputedStyle(document.documentElement).fontSize);
				} else {
					gapPx = parseFloat(rawGap);
				}
			};

			// Set the layout
			const layout = () => {
				getVars();
				const wCalc = `(100% - ${cols - 1}*var(--masonry-gap)) / ${cols}`;
				colHeights = Array(cols).fill(0);
				container.style.position = 'relative';
				const items = Array.from(container.children);
				items.forEach((el) => {
					el.style.position = 'absolute';
					el.style.width = `calc(${wCalc})`;
				});
				items.forEach((el, i) => {
					const h = el.offsetHeight;
					const idx = shuffle ? colHeights.indexOf(Math.min(...colHeights)) : i % cols;
					el.style.top = `${colHeights[idx]}px`;
					el.style.left = `calc(${wCalc}*${idx} + var(--masonry-gap)*${idx})`;
					colHeights[idx] += h + gapPx;
				});
				container.style.height = `${Math.max(...colHeights)}px`;
			};

			// Debounce function
			const debounce = (fn, delay) => {
				let t;
				return () => {
					clearTimeout(t);
					t = setTimeout(fn, delay);
				};
			};

			// Resize handler
			const onResize = debounce(layout, 100);
			window.addEventListener('resize', onResize);

			// Watch for image loads (fallback if no aspect-ratio defined)
			const debouncedLayout = debounce(layout, 50);
			const imgLoad = () => {
				container.querySelectorAll('img').forEach((img) => {
					if (!img.complete) {
						img.addEventListener('load', debouncedLayout, { once: true });
						img.addEventListener('error', debouncedLayout, { once: true });
					}
				});
			};

			// Run layout immediately, then watch for straggler images
			layout();
			imgLoad();

			// Constructor with destroy and recalc function
			container._masonry = {
				recalc: () => {
					layout();
					imgLoad();
				},
				destroy: () => {
					window.removeEventListener('resize', onResize);
					const items = Array.from(container.children);
					items.forEach((el) => {
						el.style.position = el.style.width = el.style.top = el.style.left = '';
					});
					container.style.position = container.style.height = '';
				}
			};
		});
	}

	onMount(() => {
		initMasonryGrid();
	});
</script>

<section
	class="media-grid {slice.primary.light_or_dark ? 'media-grid--dark' : ''} block-spacing"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="media-grid__inner">
			<SectionHeader
				eyebrow={slice.primary.eyebrow}
				title={slice.primary.heading}
				description={slice.primary.description}
				cta={slice.primary.cta_link}
				isDark={slice.primary.light_or_dark}
			/>

			<div class="masonry-wrap">
				<div class="masonry-collection">
					<div data-masonry-list="" class="masonry-list">
						{#each slice.primary.items as item, index (index)}
							<div class="masonry-item">
								<div class="masonry-item__visual">
									{#if item.image.url}
										<PrismicImage field={item.image} />
									{:else if item.video_url.url}
										<video src={item.video_url.url} autoplay playsinline muted></video>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.media-grid--dark {
		background: var(--bg-dark);
	}

	.media-grid__inner {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	.masonry-list {
		grid-column-gap: var(--masonry-gap);
		grid-row-gap: var(--masonry-gap);
		flex-flow: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		display: flex;
		position: relative;
	}

	.masonry-item {
		width: calc(
			((100% - 1px) - (var(--masonry-col) - 1) * var(--masonry-gap)) / var(--masonry-col)
		);
	}

	.masonry-item__visual {
		border-radius: 1.25em;
		width: 100%;
		overflow: hidden;
	}

	:global .masonry-item__visual img,
	:global .masonry-item__visual video {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	[data-masonry-list] {
		--masonry-col: 1;
		--masonry-gap: 1.25rem;
	}

	@media screen and (min-width: 768px) {
		[data-masonry-list] {
			--masonry-col: 2;
		}
	}

	@media screen and (min-width: 1024px) {
		[data-masonry-list] {
			--masonry-col: 3;
		}
	}

	@media screen and (min-width: 1200px) {
		[data-masonry-list] {
			--masonry-col: 4;
		}
	}
</style>
