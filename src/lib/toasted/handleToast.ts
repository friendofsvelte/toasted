import { storedToasts } from './store.js';
import type { FlashMessage, MessageOut, ToastNotification } from './interfaces.js';
import { parse } from 'cookie';

export function addToast(message: MessageOut, duration = 5000) {
	const toast = { id: crypto.randomUUID(), ...message, duration } as ToastNotification;
	storedToasts.update((toasts) => {
		return [...toasts, toast];
	});
}

export function dismissToast(toastId: string) {
	storedToasts.update((toasts) => {
		return toasts.filter((toast) => toast.id !== toastId);
	});
}

export function dismissAllToasts() {
	storedToasts.set([]);
}


export function triggerMessage(msg_source: MessageOut, duration = 5000) {
	if (msg_source && (msg_source?.message || msg_source?.messages)) {
		if (msg_source?.message) {
			addToast({ ...msg_source, message_type: msg_source.message_type || 'warning' }, duration);
		}
		if (msg_source?.messages) {
			msg_source.messages.forEach((message: string) => {
				addToast({
					alias: msg_source.alias,
					message: message,
					message_type: msg_source.message_type || 'warning',
					action_path: msg_source.action_path
				}, duration);
			});
		}
	}
}

/*
 * This function is used to set a flash message and trigger it. It also deletes the cookie after triggering the message.
 */
export function setFlashMessage(pathname: string, duration = 1) {
	try {
		const raw_flash_message = parse(document.cookie)[`flash_message`];

		if (raw_flash_message) {
			const flash_message = JSON.parse(atob(raw_flash_message) || '{}') as FlashMessage;
			if (flash_message.path !== pathname) return;
			triggerMessage(flash_message as MessageOut, duration * 1000);
			document.cookie = `flash_message=; max-age=0; path=/;`;
		}
	} catch (e) {
		console.error(e);
	}
}