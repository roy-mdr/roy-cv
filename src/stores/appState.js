import { writable } from 'svelte/store';

export const appTheme    = writable('light');
export const appLang     = writable('en');
export const appProfile  = writable('all');
export const showProfPic = writable(false);

export const currSection = writable('presentation');
export const userInTab   = writable(false);
