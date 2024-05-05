import { get } from 'svelte/store';
import * as appState from "../stores/appState";

const baseURL = 'https://track.roy.estudiosustenta.com/track';

export const tracker = {

	async checkin() {
		const location = new URL(window.location.href);

		const TrackCheckinReq = {
			tid: location.searchParams.get('tid'),
			shared: location.searchParams.get('shared') == "true" ? true : false,
			no_log: location.searchParams.get('no_log') == "true" ? true : false,
			appTheme: get(appState.appTheme),
			appLang: get(appState.appLang),
			appProfile: get(appState.appProfile),
			showProfPic: get(appState.showProfPic),
		};

		fetch(baseURL + '/checkin', {
			method: 'POST',
			body: JSON.stringify(TrackCheckinReq)
		});
	}
}