<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { PrismicImage, PrismicLink, type SliceComponentProps } from '@prismicio/svelte';


	type Props = SliceComponentProps<Content.NavigationalMediaGridSlice>;

	const { slice }: Props = $props();

	const { data: settings } = page.data.settings;

	const data = page.data
	const navigationItems = data.footerNavigation.data.footer_navigation_item

	console.log(data);

	const socialMediaItems = data.socialMedia.data.social_media_link


</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="block-spacing--start">
	<footer class="footer">
		<div class="container">
			<div class="footer__wrap">
				<div class="footer__top">
					<a href={resolve('/')} class="header__logo" title="Home" aria-label="Home">
						<PrismicImage field={settings.site_logo} />
					</a>
					<ul class="social-list">
						{#each socialMediaItems as link (link.key)}
							<li class="social-list__item">
								<PrismicLink field={link} class={['header__nav-link']}>
									{#if link.text === 'Instagram' || link.url?.includes('instagram.com')}
										<span class="icon-instagram"></span>
											{:else if link.text === 'Tiktok' || link.url?.includes('tiktok.com')}
										<span class="icon-tiktok"></span>
											{:else if link.text === 'Linkedin' || link.url?.includes('linkedin.com')}
										<span class="icon-linkedin"></span>
										{/if}
									</PrismicLink>
							</li>
						{/each}
					</ul>
				</div>

				<div class="footer__middle">
					{#each slice.primary.items as item}
					<PrismicLink field={item.destination} class="footer-link">
						<div class="footer-link__label">{item.label}</div>
						<PrismicImage field={item.media} class="footer-link__image" />
						<div class="footer-link__overlay"></div>
					</PrismicLink>
					{/each}
				</div>

				<div class="footer__bottom">
					<ul class="footer-list">
						{#each navigationItems as link (link.key)}
							<li class="header__nav-list-item">
								<PrismicLink field={link} class={['header__nav-link']} target="_blank" rel="noopener noreferrer" />
							</li>
						{/each}
					</ul>
					<div>Website by Studio Suikerspin</div>
				</div>
			</div>
		</div>
	</footer>
</section>

<style lang="scss">

	.footer{
		background: var(--bg-dark);
		padding: 3.5rem 0;
		color: var(--white);

		@media(max-width: 767px){
			padding: 1.5rem 0;
		}



		&__wrap{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__top{
			display: flex;
			align-items: end;
			justify-content: space-between;

			@media(max-width: 767px){
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1.5rem;
			}

			.social-list{
				display: flex;
				align-items: center;
				gap: 1.5rem;

				&__item span{
					font-size: 32px;

					@media(max-width: 767px){
						font-size: 24px;
					}
				}
			}
		}

		&__middle{
			display: flex;
			justify-content: space-between;
			align-items: stretch;
			gap: 0.5rem;

			@media(max-width: 767px){
				flex-direction: column;
			}
		}

		:global .footer-link{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			flex: 1;
			aspect-ratio: 1 / 1.1;

			@media(max-width: 767px){
				aspect-ratio: 1 / 0.7;
			}
				

			&__label{
				position: absolute;
				z-index: 9;
				color: var(--white);
				font-size: 1.5rem;
				font-weight: 700;
				
			}

			&__image{
				height: 100%;
				width: 100%;
				object-fit: cover;
				transition: transform 0.3s ease;
			}


			&__overlay{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				background: #00000033;
			}
		}

		:global(.footer-link){
			overflow: hidden;
			transition: all 0.3s ease;

			&:hover {
				:global(.footer-link__image) {
					transform: scale(1.1);
				}
			}
		}

		&__bottom{
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-top: 1px solid var(--accent-brown, var(--accent-brown));
			padding: 1.5rem 0;
			font-weight: 500;
			font-size: 14px;

			@media(max-width: 767px){
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 3.75rem;
			}

			.footer-list{
				display: flex;
				align-items: center;
				gap: 1.5rem;
				font-size: 0.875rem;

				@media(max-width: 767px){
					flex-wrap: wrap;
					justify-content: center;
					gap: 0.5rem;
				}
			}
		}

	}
</style>
