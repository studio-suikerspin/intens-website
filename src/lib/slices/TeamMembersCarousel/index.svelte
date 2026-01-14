<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';
	import SectionHeader from '$lib/components/SectionHeader/index.svelte';

	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { onMount } from 'svelte';

	type Props = SliceComponentProps<Content.TeamMembersCarouselSlice>;

	const { slice }: Props = $props();

	let swiper = null;

	onMount(() => {
		swiper = new Swiper('.team-members__carousel', {
			slidesPerView: 1.2,
			navigation: {
				nextEl: '.carousel-button--next',
				prevEl: '.carousel-button--prev',
				disabledClass: 'carousel-button--disabled',
				hiddenClass: 'carousel-button--hidden'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				576: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 3
				},
				1200: {
					slidesPerView: 4
				}
			}
		});
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="block-spacing--sm--end team-members {slice.primary.dark ? 'dark' : ''}"
	data-reveal-group
>
	<div class="team-members__inner">
		<div class="container">
			<SectionHeader
				eyebrow={slice.primary.eyebrow ? slice.primary.eyebrow : ''}
				title={slice.primary.section_title}
				description={slice.primary.section_description}
				cta={slice.primary.cta_link}
				isDark={slice.primary.dark}
			/>
		</div>
		<div class="team-members__carousel swiper">
			<div class="swiper-wrapper">
				{#each slice.primary.team_members as member, index (index)}
					<div class="carousel-item swiper-slide">
						<div class="carousel-item__inner">
							<div class="carousel-item__image">
								<PrismicImage field={member.photo} />
							</div>
							<div class="carousel-item__content">
								<div class="carousel-item__info">
									<h3 class="carousel-item__name">{member.name}</h3>
									<p class="carousel-item__title">{member.role}</p>
								</div>

								<PrismicLink field={member.social_linkedin} class="carousel-item__social-link">
									<i class="icon-linkedin"></i>
								</PrismicLink>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<nav class="container carousel-nav">
				<div class="swiper-scrollbar carousel-scrollbar"></div>

				<div class="carousel-buttons">
					<button type="button" class="carousel-button carousel-button--prev" title="Previous">
						<i class="icon-arrow-right"></i>
					</button>

					<button type="button" class="carousel-button carousel-button--next" title="Next">
						<i class="icon-arrow-right"></i>
					</button>
				</div>
			</nav>
		</div>
	</div>
</section>

<style lang="scss">
	.team-members {
		&__inner {
			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				gap: 5rem;
			}
		}

		&__carousel {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			@media (min-width: 1024px) {
				gap: 2.5rem;
			}
		}

		.carousel-nav {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			@media (min-width: 1024px) {
				flex-direction: row;
				align-items: center;
				gap: 5rem;
			}
		}

		.carousel-scrollbar {
			--swiper-scrollbar-size: 0.5rem;
			--swiper-scrollbar-bg-color: #fff;
			--swiper-scrollbar-border-radius: 0.75rem;
			--swiper-scrollbar-drag-bg-color: var(--accent-brown);

			position: static;
		}

		.carousel-buttons {
			display: flex;
			justify-content: center;
			gap: 1rem;
		}

		.carousel-button {
			display: flex;
			align-items: center;
			justify-content: center;

			width: fit-content;
			height: fit-content;
			padding: 0.5rem;

			font-size: 1.5rem;
			color: var(--white);
			background: var(--accent-brown);

			pointer-events: all;
			cursor: pointer;

			@media (min-width: 1024px) {
				padding: 1rem;
			}

			&--prev {
				transform: rotate(180deg);
			}
		}

		:global .carousel-button--disabled {
			opacity: 0.5;
			pointer-events: none;
		}

		.carousel-item {
			padding-inline: 1rem;

			&__inner {
				display: flex;
				flex-direction: column;
				gap: 0.625rem;
			}

			&__image {
				width: 100%;

				:global img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			&__content {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			&__info {
				display: flex;
				flex-direction: column;
			}

			&__name {
				font-size: 1.125rem;
				font-weight: 700;
			}

			&__title {
				font-size: 0.875rem;
				font-weight: 500;
			}

			:global .carousel-item__social-link {
				font-size: 1.5rem;
			}
		}
	}
</style>
