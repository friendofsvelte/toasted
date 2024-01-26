import type { RequestHandler } from './$types';
import flash_redirect from '$lib/toasted/server/flash.js';

export const GET: RequestHandler = async ({ cookies }) => {
	throw flash_redirect(
		cookies,
		{
			messages: [
				'This is just a simple toast message.',
				'This is just another simple toast message'
			],
			message_type: 'success',
			alias: 'already_confirmed'
		},
		302,
		'/'
	);
};

