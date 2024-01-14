<script>
	import '../app.pcss';
	import '$lib/toasts/style.pcss';
	import 'iconify-icon';
	import Toasted from '$lib/toasts/Toasted.svelte';
</script>

<slot />
<Toasted/>
