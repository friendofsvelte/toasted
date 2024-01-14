import Toasted from '$lib/toasts/Toasted.svelte';
import InitToasts from '$lib/toasts/InitToasts.svelte';
import { storedToasts } from '$lib/toasts/store.js';
import { flash_redirect, setMessages } from '$lib/toasts/server/flash.js';
import { addToast, dismissToast, dismissAllToasts, setFlashMessage, triggerMessage } from '$lib/toasts/handleToast.js';

const handle = {
	addToast, dismissToast, dismissAllToasts, setFlashMessage, triggerMessage
};

export { handle, storedToasts, InitToasts, Toasted, flash_redirect, setMessages };