<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { type SliceComponentProps, PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	type Props = SliceComponentProps<Content.LogoGridSlice>;

	const { slice }: Props = $props();

	onMount(() => {
		if (browser) {
			initLogoWallCycle();
		}
	});

	function initLogoWallCycle() {
  const loopDelay = 1.5;   // Loop Duration
  const duration  = 0.9;   // Animation Duration

  document.querySelectorAll('[data-logo-wall-cycle-init]').forEach(root => {
    const list   = root.querySelector('[data-logo-wall-list]');
    const items  = Array.from(list.querySelectorAll('[data-logo-wall-item]'));

    const shuffleFront = root.getAttribute('data-logo-wall-shuffle') !== 'false';
    const originalTargets = items
      .map(item => item.querySelector('[data-logo-wall-target]'))
      .filter(Boolean);

    let visibleItems   = [];
    let visibleCount   = 0;
    let pool           = [];
    let pattern        = [];
    let patternIndex   = 0;
    let tl;

    function isVisible(el) {
      return window.getComputedStyle(el).display !== 'none';
    }

    function shuffleArray(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function setup() {
      if (tl) {
        tl.kill();
      }
      visibleItems = items.filter(isVisible);
      visibleCount = visibleItems.length;

      pattern = shuffleArray(
        Array.from({ length: visibleCount }, (_, i) => i)
      );
      patternIndex = 0;

      // remove all injected targets
      items.forEach(item => {
        item.querySelectorAll('[data-logo-wall-target]').forEach(old => old.remove());
      });

      pool = originalTargets.map(n => n.cloneNode(true));

      let front, rest;
      if (shuffleFront) {
        const shuffledAll = shuffleArray(pool);
        front = shuffledAll.slice(0, visibleCount);
        rest  = shuffleArray(shuffledAll.slice(visibleCount));
      } else {
        front = pool.slice(0, visibleCount);
        rest  = shuffleArray(pool.slice(visibleCount));
      }
      pool = front.concat(rest);

      for (let i = 0; i < visibleCount; i++) {
        const parent =
          visibleItems[i].querySelector('[data-logo-wall-target-parent]') ||
          visibleItems[i];
        parent.appendChild(pool.shift());
      }

      tl = gsap.timeline({ repeat: -1, repeatDelay: loopDelay });
      tl.call(swapNext);
      tl.play();
    }

    function swapNext() {
      const nowCount = items.filter(isVisible).length;
      if (nowCount !== visibleCount) {
        setup();
        return;
      }
      if (!pool.length) return;

      const idx = pattern[patternIndex % visibleCount];
      patternIndex++;

      const container = visibleItems[idx];
      const parent =
        container.querySelector('[data-logo-wall-target-parent]') ||
        container.querySelector('*:has(> [data-logo-wall-target])') ||
        container;
      const existing = parent.querySelectorAll('[data-logo-wall-target]');
      if (existing.length > 1) return;

      const current  = parent.querySelector('[data-logo-wall-target]');
      const incoming = pool.shift();

      gsap.set(incoming, { yPercent: 50, autoAlpha: 0 });
      parent.appendChild(incoming);

      if (current) {
        gsap.to(current, {
          yPercent: -50,
          autoAlpha: 0,
          duration,
          ease: "expo.inOut",
          onComplete: () => {
            current.remove();
            pool.push(current);
          }
        });
      }

      gsap.to(incoming, {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        delay: 0.1,
        ease: "expo.inOut"
      });
    }

    setup();

    ScrollTrigger.create({
      trigger: root,
      start: 'top bottom',
      end: 'bottom top',
      onEnter:     () => tl.play(),
      onLeave:     () => tl.pause(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.pause()
    });

    document.addEventListener('visibilitychange', () =>
      document.hidden ? tl.pause() : tl.play()
    );
  });
}
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="block-spacing--end " data-reveal-group>
	<div data-logo-wall-shuffle="false" data-logo-wall-cycle-init="" class="logo-wall">
		<div class="container">
			
			<div class="logo-wall__inner">
				<SectionHeader
				eyebrow={slice.primary.section_eyebrow ? slice.primary.section_eyebrow : ''}
				title={slice.primary.section_title}
			/>
			
			<div class="logo-wall__collection">
				<div data-logo-wall-list="" class="logo-wall__list">
					{#each slice.primary.logos as item}
						<div data-logo-wall-item="" class="logo-wall__item">
							<div data-logo-wall-target-parent="" class="logo-wall__logo">
								<div class="logo-wall__logo-before"></div>
								<div data-logo-wall-target="" class="logo-wall__logo-target">
									<PrismicImage field={item.logo_image} class="logo-wall__logo-img" />
								</div>
							</div>
						</div>
					{/each}
					{#each slice.primary.logos as item}
						<div data-logo-wall-item="" class="logo-wall__item">
							<div data-logo-wall-target-parent="" class="logo-wall__logo">
								<div class="logo-wall__logo-before"></div>
								<div data-logo-wall-target="" class="logo-wall__logo-target">
									<PrismicImage field={item.logo_image} class="logo-wall__logo-img" />
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
.logo-wall {  

	&__inner{
		display: flex;
		flex-direction: column;
		gap: 5rem;

		@media screen and (max-width: 767px) {
			gap: 2.5rem;
		}
	}

	&__list{
		display: flex;
  	flex-flow: wrap;	
		gap: 1.5rem;

		@media(max-width: 767px){
			gap: 1rem;
		}
	}

	&__item{
		width: 24%;
  	position: relative;	
		background: var(--bg-sand-dark);
		aspect-ratio: 2 / 1;
		max-height: 200px;

		@media screen and (max-width: 1800px) {
			width: 23%;
		}
		
		@media screen and (max-width: 991px) {
				width: 30%;
		}

		@media(max-width: 767px){
			width: 47%;
			max-height: unset;
			aspect-ratio: 1 / 1;
		}
	}

	&__logo{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 100%;
	}

	&__logo-before{
		padding-top: 66.66%;
	}

	&__logo-target{
		justify-content: center;
		align-items: center;
		width: 66.66%;
		height: 40%;
		display: flex;
		position: absolute;
	}

	&__logo-img{
		width: 100%;
		height: 100%;
		max-height: 100%;
	}
}

[data-logo-wall-list] [data-logo-wall-item]:nth-child(n+9) {
  display: none;
}


@media screen and (max-width: 991px) {
  [data-logo-wall-list] [data-logo-wall-item]:nth-child(n+7) {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  [data-logo-wall-list] [data-logo-wall-item]:nth-child(n+5) {
    display: none;
  }
}
</style>
