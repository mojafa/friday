import { writable } from "svelte/store";
import { session } from '$app/stores';




export const token = writable('');
export const authenticated = writable(false);
export const student =writable(null);
export const staff =writable(null);

export const user = writable(null);

export const faceAuth = writable(false);

