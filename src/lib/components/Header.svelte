<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	import { gsap } from '$lib/gsap';

	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	const { data: settings } = page.data.settings;
	const { navigation_item: navigationItems } = page.data.navigation.data;

	const openMobileMenu = () => {
		gsap
			.timeline()
			.to('.mobile-menu', {
				duration: 0.4,
				x: 0,
				ease: 'power3.inOut'
			})
			.to('.mobile-menu__nav-link', {
				duration: 0.5,
				y: 0,
				ease: 'power3.inOut',
				stagger: 0.1
			})
			.to('.mobile-menu__close-bar', {
				duration: 0.1,
				y: 0,
				autoAlpha: 1
			})
			.to('.mobile-menu__close-bar--first', {
				duration: 0.1,
				transform: 'translate(-50%, -50%) rotate(45deg)'
			})
			.to('.mobile-menu__close-bar--second', {
				duration: 0.1,
				transform: 'translate(-50%, -50%) rotate(-45deg)'
			})
			.play();
	};

	const closeMobileMenu = () => {
		gsap
			.timeline()
			.to('.mobile-menu__close-bar--first', {
				duration: 0.1,
				transform: 'translate(-50%, -50%) rotate(0)'
			})
			.to('.mobile-menu__close-bar--second', {
				duration: 0.1,
				transform: 'translate(-50%, -50%) rotate(0)'
			})
			.to('.mobile-menu__close-bar', {
				duration: 0.1,
				y: -10,
				autoAlpha: 0
			})
			.to('.mobile-menu__nav-link', {
				duration: 0.4,
				y: 100,
				ease: 'power3.inOut',
				stagger: 0.05
			})
			.to('.mobile-menu', {
				duration: 0.3,
				x: '100%',
				ease: 'power3.inOut'
			})
			.play();
	};

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				window.document.querySelector('.header')?.classList.add('scrolled');
			} else {
				window.document.querySelector('.header')?.classList.remove('scrolled');
			}
		});
	});
</script>

<header class="header">
	<div class="header__container">
		<div class="header__inner">
			<a href={resolve('/')} class="header__logo" title="Home" aria-label="Home">
				<PrismicImage field={settings.site_logo} class="logo--light" />
				<PrismicImage field={settings.site_logo_dark} class="logo--dark" />
			</a>

			<nav class="header__nav" aria-label="Primary navigation">
				<ul class="header__nav-list">
					{#each navigationItems as link (link.key)}
						<li class="header__nav-list-item">
							<PrismicLink field={link} class={['header__nav-link']} />
						</li>
					{/each}
				</ul>

				<button
					on:click={() => openMobileMenu()}
					class="menu-toggle"
					aria-label="Toggle navigation"
				>
					<i class="icon-menu"></i>
				</button>
			</nav>
		</div>
	</div>
</header>

<div class="mobile-menu">
	<button
		on:click={() => closeMobileMenu()}
		class="mobile-menu__close"
		aria-label="Toggle navigation"
	>
		<span class="mobile-menu__close-bar mobile-menu__close-bar--first"></span>
		<span class="mobile-menu__close-bar mobile-menu__close-bar--second"></span>
	</button>
	<nav class="mobile-menu__nav" aria-label="Primary navigation">
		<ul class="mobile-menu__nav-list">
			{#each navigationItems as link (link.key)}
				<li class="mobile-menu__nav-list-item">
					<PrismicLink field={link} class={['mobile-menu__nav-link']} />
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: var(--header-z-index);
		transition: background-color 0.3s ease-in-out;

		.header__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-block: 1.25rem;
			padding-inline: 0.75rem;
		}

		.header__logo {
			max-width: clamp(8rem, 5vw, 11.25rem);
			position: relative;
		}

		:global .header__logo .logo--dark {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		:global .header__logo .logo--dark {
			opacity: 0;
		}

		.menu-toggle {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2.5rem;
			height: 2.5rem;

			border-radius: 2.5rem;

			color: var(--white);
			font-size: 1.5rem;
		}

		.header__nav-list {
			display: none;
		}

		@media screen and (min-width: 992px) {
			.header__nav-list {
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}

			.menu-toggle {
				display: none;
			}
		}

		.header__nav :global .header__nav-link {
			font-size: 1rem;
			font-weight: 700;
			color: var(--white);
		}
	}

	:global .header.scrolled {
		background-color: var(--white);
		transition: background-color 0.3s ease-in-out;
	}

	:global .header.scrolled .header__nav .header__nav-link {
		color: var(--bg-dark);
		transition: color 0.3s ease-in-out;
	}

	:global .header.scrolled .header__logo .logo--dark {
		opacity: 1;
	}

	:global .header.scrolled .menu-toggle {
		color: var(--bg-dark);
	}

	.mobile-menu {
		position: fixed;
		z-index: calc(var(--header-z-index) + 1);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		transform: translateX(100%);

		height: 100dvh;
		width: 100%;

		background: var(--bg-sand-light);

		.mobile-menu__nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}

		.mobile-menu__nav-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.25rem;
		}

		.mobile-menu__nav-list-item {
			display: flex;
			align-items: center;
			overflow: hidden;
			height: fit-content;
		}

		.mobile-menu__nav :global .mobile-menu__nav-link {
			font-size: 2.25rem;
			transform: translateY(100%);
		}

		.mobile-menu__close {
			position: fixed;
			top: 1.25rem;
			right: 1.25rem;
			width: 1.5rem;
			height: 1.5rem;
		}

		.mobile-menu__close-bar {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			height: 0.175rem;
			background: var(--black);
			border-radius: 0.25rem;
			transform: translate(-50%, -50%);
		}
	}
</style>
