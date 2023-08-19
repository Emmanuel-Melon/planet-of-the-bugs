import { auth } from '$lib/auth/lucia';
import { fail, redirect } from '@sveltejs/kit';

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	console.log("mayn!");
	console.log("locals", await locals.auth.validate());
	const session = await locals.auth.validate();
    //console.log(session);
	if (!session) throw redirect(302, '/profile');
	return {
		userId: session.user.userId,
		githubUsername: session.user.githubUsername
	};
};
