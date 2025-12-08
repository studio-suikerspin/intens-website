<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { gsap } from '$lib/gsap';

	type Props = SliceComponentProps<Content.ProjectShowcaseSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';
	import { onMount } from 'svelte';

	const { slice }: Props = $props();

	function initHorizontalScrolling() {
		const mm = gsap.matchMedia();

		mm.add(
			{
				isMobile: '(max-width:479px)',
				isMobileLandscape: '(max-width:767px)',
				isTablet: '(max-width:991px)',
				isDesktop: '(min-width:992px)'
			},
			(context) => {
				const { isMobile, isMobileLandscape, isTablet, isDesktop } = context.conditions;

				const ctx = gsap.context(() => {
					const wrappers = document.querySelectorAll('[data-horizontal-scroll-wrap]');
					if (!wrappers.length) return;

					wrappers.forEach((wrap) => {
						const disable = wrap.getAttribute('data-horizontal-scroll-disable');
						if (
							(disable === 'mobile' && isMobile) ||
							(disable === 'mobileLandscape' && isMobileLandscape) ||
							(disable === 'tablet' && isTablet)
						) {
							return;
						}

						const panels = gsap.utils.toArray('[data-horizontal-scroll-panel]', wrap);
						if (panels.length < 2) return;

						gsap.to(panels, {
							x: () => -(wrap.scrollWidth - window.innerWidth),
							ease: 'none',
							scrollTrigger: {
								trigger: wrap,
								start: 'top top',
								end: () => '+=' + (wrap.scrollWidth - window.innerWidth),
								scrub: true,
								pin: true,
								invalidateOnRefresh: true
							}
						});
					});
				});

				return () => ctx.revert();
			}
		);
	}

	onMount(() => {
		initHorizontalScrolling();
	});
</script>

<section
	class="block-spacing--sm horizontal-showcase {slice.primary.dark ? 'bg-dark' : ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="horizontal-showcase__container">
		<div class="container">
			<SectionHeader
				eyebrow={slice.primary.eyebrow || ''}
				title={slice.primary.headline || ''}
				description={slice.primary.description}
				cta={slice.primary.cta_link}
				isDark={slice.primary.dark}
			/>
		</div>

		<div class="horizontal-showcase__wrap" data-horizontal-scroll-wrap>
			<div data-horizontal-scroll-panel class="horizontal-showcase__panel">
				<div class="horizontal-showcase__panel-inner">
					<div class="demo-card">
						<div class="demo-card__bg">
							<img
								src="https://cdn.prod.website-files.com/68f8bc9dc83dc1aacaa172e7/68f8cf7185c9dcfbedc6d4aa_Dramatic%20Mountain%20Range%20at%20Sunrise.avif"
								class="demo-card__bg-img"
							/>
						</div>
						<div class="demo-card__inner">
							<h2 class="demo-header__h1">Dolomites</h2>
						</div>
					</div>
				</div>
			</div>
			<div data-horizontal-scroll-panel class="horizontal-showcase__panel">
				<div class="horizontal-showcase__panel-inner">
					<div class="demo-card">
						<div class="demo-card__bg">
							<img
								src="https://cdn.prod.website-files.com/68f8bc9dc83dc1aacaa172e7/68f8cf71364a2fdf36e25d26_Tranquil%20Dawn%20over%20the%20Pastel%20Peak%20Range.avif"
								class="demo-card__bg-img"
							/>
						</div>
						<div class="demo-card__inner">
							<h2 class="demo-header__h1">Patagonia</h2>
						</div>
					</div>
				</div>
			</div>
			<div data-horizontal-scroll-panel class="horizontal-showcase__panel">
				<div class="horizontal-showcase__panel-inner">
					<div class="demo-card">
						<div class="demo-card__bg">
							<img
								src="https://cdn.prod.website-files.com/68f8bc9dc83dc1aacaa172e7/68f8cf712f57198f963fd7eb_Majestic%20Mountain%20Landscape.avif"
								class="demo-card__bg-img"
							/>
						</div>
						<div class="demo-card__inner">
							<h2 class="demo-header__h1">Yosemite Park</h2>
						</div>
					</div>
				</div>
			</div>
			<div data-horizontal-scroll-panel class="horizontal-showcase__panel">
				<div class="horizontal-showcase__panel-inner">
					<div class="demo-card">
						<div class="demo-card__bg">
							<img
								src="https://cdn.prod.website-files.com/68f8bc9dc83dc1aacaa172e7/68f8cf71cb5249dc6ea2eb35_Subdued%20Mountain%20Serenity.avif"
								class="demo-card__bg-img"
							/>
						</div>
						<div class="demo-card__inner">
							<h2 class="demo-header__h1">Pyrenees</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.horizontal-showcase {
		&__wrap {
			padding-block-start: 5rem;
			flex-flow: column;
			display: flex;

			@media screen and (min-width: 768px) {
				flex-flow: row;
				min-height: 90dvh;
				overflow: hidden;
			}
		}

		&__panel {
			flex: none;
			width: 100%;

			:not(:first-child) .horizontal-showcase__panel-inner {
				padding-inline: 1.25rem;
			}
		}

		&__panel-inner {
			width: 100%;
			height: 100%;
			padding-inline: 0.75rem 1.25rem;
		}

		.demo-card {
			border-radius: 1.25em;
			flex-flow: column;
			justify-content: flex-end;
			align-items: flex-start;
			width: 100%;
			height: 100%;
			padding: 3em;
			display: flex;
			position: relative;
			overflow: hidden;

			&__bg {
				z-index: 0;
				position: absolute;
				inset: 0%;
			}

			&__inner {
				z-index: 1;
				position: relative;
			}

			&__bg-img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
