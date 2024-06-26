import { writable } from 'svelte/store';

export const settingsFetched = writable([]);

export const appTheme    = writable('light');
export const appLang     = writable('en');
export const appProfile  = writable('all');
export const showProfPic = writable(false);

export const _fetched_highlightProj  = writable([]);
export const _fetched_hideProj       = writable([]);

export const visitorName    = writable('');
export const highlightProj  = writable([]);
export const hideProj       = writable([]);
export const showProjMsg    = writable(false);
export const showWelcomeMsg = writable(false);

export const currSection = writable('presentation');
export const userInTab   = writable(false);
