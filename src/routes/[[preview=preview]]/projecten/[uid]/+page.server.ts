import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	if (!params.uid) return { status: 404 };

	const project = await client.getByUID('project', params.uid);

	return {
		project
	};
}

export async function entries() {
	const client = createClient();

	const projects = await client.getAllByType('project');

	return projects
		.filter((project) => project.uid)
		.map((project) => {
			return { uid: project.uid };
		});
}
