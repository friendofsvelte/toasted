<script lang="ts">
	import type { ToastNotification } from './interfaces.js';
	import { dismissToast } from './handleToast.js';

	const statusIcons = {
		success: 'bxs:check-circle',
		error: 'bxs:error',
		warning: 'fa6-solid:exclamation-triangle',
		info: 'bxs:info-circle'
	};
	export let toast: ToastNotification & { message_type: keyof typeof statusIcons };

	setTimeout(() => {
		dismissToast(toast.id);
	}, toast.duration);
</script>

<div class="relative toast-notification animate-shake"
		 class:success={toast.message_type === "success"}
		 class:error={toast.message_type === "error"}
		 class:warning={toast.message_type === "warning"}
		 class:info={toast.message_type === "info"}>
	<div class="toast-notification__head">
		<iconify-icon class="toast-notification__icon" icon="{statusIcons[toast.message_type]}" />
		<h3 class="toast-notification__message">{toast.message}</h3>
		<button class="toast-notification__close" on:click={() => dismissToast(toast.id)}>
			<iconify-icon icon="fa6-solid:xmark" />
		</button>
	</div>
</div>

