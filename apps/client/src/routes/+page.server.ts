import { auth } from '$lib/auth/lucia';
import { fail, redirect } from '@sveltejs/kit';

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
    console.log(session);
	if (!session) throw redirect(302, '/login');
	return {
		userId: session.user.userId,
		githubUsername: session.user.githubUsername
	};
};
