<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps  } from '@prismicio/svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import ProjectBanner from '$lib/components/ProjectBanner.svelte';

	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { onMount } from 'svelte';

	type Props = SliceComponentProps<Content.ServicesSliderSlice>;

	const { slice }: Props = $props();

		let swiper = null;

	onMount(() => {
		swiper = new Swiper('.service-slider__slides', {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.carousel-button--next',
				prevEl: '.carousel-button--prev',
				disabledClass: 'carousel-button--disabled',
				hiddenClass: 'carousel-button--hidden'
			}
		});
	});
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="bg-dark">
	<div class="container">
		<div class="service-slider">
			<div class="service-slider__title">
				<PrismicRichText field={slice.primary.section_title} />
			</div>
		
			<div class="service-slider__slides swiper">
				
					<!-- <div class="carousel-buttons">
						<button type="button" class="carousel-button carousel-button--prev" title="Previous">
							<i class="icon-arrow-right"></i>
						</button>

						<button type="button" class="carousel-button carousel-button--next" title="Next">
							<i class="icon-arrow-right"></i>
						</button>
					</div> -->

				 <div class="swiper-wrapper">
					{#each slice.primary.projects as project, index (index)}
						<div class="swiper-slide">
							<div class="service-slider__slide-inner">
								<div class="service-slider__header">
									
										<div class="service-slider__text-content">
											<div class="service-slider__subtitle">
											<PrismicRichText field={project.service_title} />
											</div>
											<div clqass="service-slider__description">
											<PrismicRichText field={project.service_text} />
											</div>
										</div>

										<div class="carousel-buttons desktop-only">
											<button type="button" class="carousel-button carousel-button--prev" title="Previous">
												<i class="icon-arrow-right"></i>
											</button>

											<button type="button" class="carousel-button carousel-button--next" title="Next">
												<i class="icon-arrow-right"></i>
											</button>
										</div>

								</div>
							<ProjectBanner {project} />
							</div>
						</div>
					{/each}
				</div>
				<div class="carousel-buttons mobile-only">
					<button type="button" class="carousel-button carousel-button--prev" title="Previous">
						<i class="icon-arrow-right"></i>
					</button>

					<button type="button" class="carousel-button carousel-button--next" title="Next">
						<i class="icon-arrow-right"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.service-slider{
		padding: 6.25rem 0;
		&__title {
			font-size: 2.5rem;
			font-weight: 700;
			letter-spacing: -1px;
			line-height: 100%;
			margin-bottom: 2.5rem;
			color: var(--white);
			@media(min-width: 768px) {
				font-size: 4.5rem;
			}
		}
	}

	.service-slider__slide-inner{
		display: flex;
		flex-direction: column;
		gap: 5rem;
		height: 900px;
		@media(min-width: 768px){
			height: 1000px;
		}
	}

	.service-slider__header{
		display: flex;
		justify-content: space-between;
		align-items: end;
	}

	.service-slider__text-content{
		display: flex;
		flex-direction: column;
		max-width: 685px;
		gap: 1.5rem;
		color: var(--white);
	}

	.carousel-buttons{
		display: flex;
		gap: 1rem;
		color: var(--white);


		i{
			font-size: 1.5rem;
		}
	}

	.carousel-buttons.desktop-only{
		display: none;
		@media(min-width: 768px){
			display: flex;
		}
	}
	.carousel-buttons.mobile-only{
		justify-content: center;
		align-items: end;
		margin-top: 1.5rem;
		@media(min-width: 768px){
			display: none;
		}
	}

	.carousel-button--prev{
		transform: rotate(180deg);
	}

	.carousel-button--prev,
	.carousel-button--next{
		background: var(--accent-brown);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		cursor: pointer;
	}

	.service-slider__subtitle {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -1px;
		@media(min-width: 768px) {
			font-size: 2.5rem;
		}
	}
	.service-slider__description {
		font-size: 1rem;
		line-height: 160%;

		@media(min-width: 768px) {
			font-size: 1.25rem;
		}
	}
</style>
