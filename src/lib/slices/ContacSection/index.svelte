<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ContactInfoSidebarSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="block-spacing--end">
	<div class="contact-section">
		<div class="container">
			<div class="contact-section__inner">
				<div class="contact-section__content">
					{#each slice.primary.contact_categories as item}
						<div class="contact-section__category">
							<div class="contact-section__label">
								{item.category_label}
							</div>
							<div class="contact-section__details">
								<div class="first">{item.email}</div>
								<div class="second">{item.phone_number}</div>
							</div>
						</div>
					{/each}
				</div>
				<div class="contact-section__image">
					<PrismicImage field={slice.primary.side_image} style="max-height: 750px; object-fit: cover; width: 100%; height: auto;" />
				</div>
			</div>
		</div>
	</div>
</section>


<style>

	.contact-section__inner {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		/* flex-direction: column; */

		@media(min-width: 768px) {
			/* flex-direction: row; */
		}
	}

	.contact-section__content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.contact-section__category {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-section__label{
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--accent-brown);

		@media(min-width: 768px) {
			font-size: 1.5rem;
		}
	}

	.contact-section__details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-section__details .first,
	.contact-section__details .second {
		font-size: 1rem;
	}

	.contact-section__image {
		flex: 1;
	}

</style>
