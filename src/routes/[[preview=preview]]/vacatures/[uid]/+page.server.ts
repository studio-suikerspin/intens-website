import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	if (!params.uid) return { status: 404 };

	const vacature = await client.getByUID('vacature_detail', params.uid);

	return {
		vacature
	};
}

export async function entries() {
	const client = createClient();

	const vacatures = await client.getAllByType('vacature_detail');

	return vacatures
		.filter((vacature) => vacature.uid)
		.map((vacature) => {
			return { uid: vacature.uid };
		});
}