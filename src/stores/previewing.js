import { writable } from 'svelte/store';
import { tracker } from '../lib/track';

export const prevProj = writable('');

function initExistingProjId() {
	const store = writable('');

	return {
		subscribe: store.subscribe,
		update: store.update,

		set(projId) {
			store.set(projId);
			if (projId) tracker.interaction.proj_view(projId);
		}
	}
}

export const existingProjId = initExistingProjId();
