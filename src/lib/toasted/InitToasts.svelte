<script lang="ts">
	import type { Fallback, MessageOut } from './interfaces.js';
	import { browser } from '$app/environment';
	import { addToast, setFlashMessage, triggerMessage } from './handleToast.js';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	export let duration = 5000;
	export let fallback: Fallback = {
		message: 'Something went wrong during the request. Please report this to the developers.',
		message_type: 'error',
		duration
	};

	$: if (browser) {
		triggerMessage($page.form, duration);
		triggerMessage($page.data as MessageOut, duration);
		triggerMessage($page.error as MessageOut, duration);

		if (fallback && $page.status >= 400 && !$page.form?.message && !$page.error?.message && !$page.form?.inline) {
			addToast({
				message: fallback.message,
				message_type: fallback.message_type,
				alias: 'fallback'
			}, fallback.duration);
		}
	}

	afterNavigate(() => {
		setFlashMessage($page.url.pathname, duration);
	});
</script>