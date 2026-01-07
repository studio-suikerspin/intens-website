<script lang="ts">
	import { type Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { gsap } from '$lib/gsap';

	type Props = SliceComponentProps<Content.ProjectShowcaseSlice>;

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';
	import { onMount } from 'svelte';
	import ProjectBanner from '$lib/components/ProjectBanner.svelte';

	const { slice }: Props = $props();

	function initHorizontalScrolling() {
		const mm = gsap.matchMedia();

		mm.add(
			{
				isMobile: '(max-width:479px)',
				isMobileLandscape: '(max-width:767px)',
				isTablet: '(max-width:1023px)',
				isDesktop: '(min-width:1024px)'
			},
			(context) => {
				console.log(context.conditions);
				const { isMobile, isMobileLandscape, isTablet, isDesktop } = context.conditions;

				if (!isDesktop) return;

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
								start: '-50px top',
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
			{#each slice.primary.projects as project, index (index)}
				<div data-horizontal-scroll-panel class="horizontal-showcase__panel">
					<div class="horizontal-showcase__panel-inner">
						<ProjectBanner {project} />
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
			overflow-x: scroll;
			padding-inline: 0.75rem;

			scroll-snap-type: x mandatory;

			&::-webkit-scrollbar {
				display: none;
			}

			@media screen and (min-width: 1024px) {
				scroll-snap-type: none;
				overflow-x: hidden;
			}
		}

		&__panel {
			flex: none;
			width: 100%;

			scroll-snap-align: center;
		}

		&__panel-inner {
			width: 100%;
			height: 100%;
		}
	}
</style>
