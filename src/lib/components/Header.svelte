<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	const { data: settings } = page.data.settings;
	const { navigation_item: navigationItems } = page.data.navigation.data;
</script>

<header class="header">
	<div class="container header__container">
		<div class="header__inner">
			<a href={resolve('/')} class="header__logo">
				<PrismicImage field={settings.site_logo} />
			</a>
			<nav class="header__nav">
				{#each navigationItems as link (link.key)}
					<PrismicLink field={link} class={['header__nav-item']} />
				{/each}
			</nav>
		</div>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;

		.header__container {
			max-width: 1500px;
			margin-inline: auto;
		}

		.header__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.header__nav {
			display: flex;
			align-items: center;
			gap: 0.75rem;
		}

		.header__nav :global .header__nav-item {
			font-weight: 700;
		}
	}
</style>
