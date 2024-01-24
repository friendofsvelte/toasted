import type { Cookies } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { FlashMessage, MessageOut } from '../interfaces.js';


type RedirectStatus = 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;

type FlashRedirect = (
	cookies: Cookies,
	message: MessageOut,
	status: RedirectStatus,
	location: string | URL
) => ReturnType<typeof redirect>;

export const setMessages = (cookies: Cookies, messages: FlashMessage, maxAge = 1) => {
	// set max age 1 second
	cookies.set('flash_message', btoa(JSON.stringify(messages)), {
		secure: false,
		httpOnly: false,
		path: '/',
		maxAge
	});
};

export const flash_redirect: FlashRedirect = (
	cookies,
	message,
	status,
	location
) => {
	console.log(message);
	setMessages(cookies, {
		...message,
		path: location.toString()
	});
	return redirect(status, location);
};

export default flash_redirect;