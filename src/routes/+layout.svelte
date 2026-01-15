<script>
	import '../app.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';

	import { ScrollSmoother, ScrollTrigger, gsap } from '$lib/gsap';
	import { initContentRevealScroll } from '$lib/contentreveal';

	let { children } = $props();

	let { data: metadata } = page?.data?.page ?? { data: {} };

	function initGlobalParallax() {
		const mm = gsap.matchMedia();

		mm.add(
			{
				isMobile: '(max-width:479px)',
				isMobileLandscape: '(max-width:767px)',
				isTablet: '(max-width:991px)',
				isDesktop: '(min-width:992px)'
			},
			(context) => {
				const { isMobile, isMobileLandscape, isTablet } = context.conditions;

				const ctx = gsap.context(() => {
					document.querySelectorAll('[data-parallax="trigger"]').forEach((trigger) => {
						// Check if this trigger has to be disabled on smaller breakpoints
						const disable = trigger.getAttribute('data-parallax-disable');
						if (
							(disable === 'mobile' && isMobile) ||
							(disable === 'mobileLandscape' && isMobileLandscape) ||
							(disable === 'tablet' && isTablet)
						) {
							return;
						}

						// Optional: you can target an element inside a trigger if necessary
						const target = trigger.querySelector('[data-parallax="target"]') || trigger;

						// Get the direction value to decide between xPercent or yPercent tween
						const direction = trigger.getAttribute('data-parallax-direction') || 'vertical';
						const prop = direction === 'horizontal' ? 'xPercent' : 'yPercent';

						// Get the scrub value, our default is 'true' because that feels nice with Lenis
						const scrubAttr = trigger.getAttribute('data-parallax-scrub');
						const scrub = scrubAttr ? parseFloat(scrubAttr) : true;

						// Get the start position in %
						const startAttr = trigger.getAttribute('data-parallax-start');
						const startVal = startAttr !== null ? parseFloat(startAttr) : 20;

						// Get the end position in %
						const endAttr = trigger.getAttribute('data-parallax-end');
						const endVal = endAttr !== null ? parseFloat(endAttr) : -20;

						// Get the start value of the ScrollTrigger
						const scrollStartRaw =
							trigger.getAttribute('data-parallax-scroll-start') || 'top bottom';
						const scrollStart = `clamp(${scrollStartRaw})`;

						// Get the end value of the ScrollTrigger
						const scrollEndRaw = trigger.getAttribute('data-parallax-scroll-end') || 'bottom top';
						const scrollEnd = `clamp(${scrollEndRaw})`;

						gsap.fromTo(
							target,
							{ [prop]: startVal },
							{
								[prop]: endVal,
								ease: 'none',
								scrollTrigger: {
									trigger,
									start: scrollStart,
									end: scrollEnd,
									scrub
								}
							}
						);
					});
				});

				return () => ctx.revert();
			}
		);
	}

	onMount(() => {
		if (ScrollTrigger.isTouch) {
			return;
		}

		ScrollSmoother.create({
			smooth: 0.5, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true
		});

		initGlobalParallax();
		initContentRevealScroll();
	});
</script>

<svelte:head>
	<title>{metadata.page_title}</title>
	{#if metadata.meta_description}
		<meta name="description" content={metadata.meta_description} />
	{/if}
	{#if metadata.meta_title}
		<meta name="og:title" content={metadata.meta_title} />
	{/if}
	{#if metadata.meta_image}
		<meta name="og:image" content={metadata.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<link rel="stylesheet" href="/fonts/satoshi/satoshi.css" />
	<link rel="stylesheet" href="/fonts/icons/iconly.css" />
</svelte:head>
<main>
	<Header />
	<div id="smooth-wrapper">
		<div id="smooth-content">
			{@render children()}
		</div>
	</div>
</main>
<PrismicPreview {repositoryName} />
