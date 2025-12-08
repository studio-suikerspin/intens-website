<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { gsap } from '$lib/gsap';

	type Props = SliceComponentProps<Content.ProjectShowcaseSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';
	import { onMount } from 'svelte';
	import CarouselBanner from '$lib/components/CarouselBanner.svelte';

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
			{#each slice.primary.featured_projects as project (project.title)}
				<div data-horizontal-scroll-panel class="horizontal-showcase__panel">
					<div class="horizontal-showcase__panel-inner">
						<CarouselBanner title={project.title} summary={project.summary} image={project.image} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.horizontal-showcase {
		&__wrap {
			padding-block-start: 5rem;
			flex-flow: row;
			display: flex;
			gap: 1.5rem;
			min-height: 90dvh;
			overflow: hidden;

			@media screen and (min-width: 768px) {
				flex-flow: row;
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
