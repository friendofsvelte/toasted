import Toasted from './toasted/Toasted.svelte';
import { flash_redirect } from './toasted/server/flash.js';
import Toast from './toasted/Toast.svelte';
import InitToasts from './toasted/InitToasts.svelte';

export { addToast, dismissAllToasts, dismissToast, triggerMessage, setFlashMessage } from './toasted/handleToast.js';

export { Toasted, flash_redirect, Toast, InitToasts };

export default Toasted;