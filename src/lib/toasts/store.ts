import type { ToastNotification } from './interfaces.js';
import { writable, type Writable } from 'svelte/store';

export const storedToasts: Writable<ToastNotification[]> = writable([] as ToastNotification[]);
