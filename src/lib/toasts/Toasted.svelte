<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { storedToasts } from '$lib/toasts/store.js';
	import Toast from '$lib/toasts/Toast.svelte';
	import InitToasts from '$lib/toasts/InitToasts.svelte';
</script>

<InitToasts duration={124} />

<div class="toast-notifications">
	{#each $storedToasts as toast (toast.id)}
		<div transition:fade animate:flip="{{easing: quintOut, duration: 500}}" class="toast-wrap">
			{#if $$slots.toast}
				<slot name="toast" {toast} />
			{:else}
				<Toast {toast} />
			{/if}
		</div>
	{/each}
</div>
