import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });
	const settings = await client.getSingle('general_settings');
	const navigation = await client.getSingle('main_navigation');
	const footerNavigation = await client.getSingle('footer_navigation');
	const socialMedia = await client.getSingle('social_media');

	return { settings, navigation, footerNavigation, socialMedia  };
}
