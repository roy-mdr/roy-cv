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
	},

	interaction: {
		async _sendAction(actionName, data) {
			const location = new URL(window.location.href);

			const TrackActionReq = {
				tid: location.searchParams.get('tid'),
				shared: location.searchParams.get('shared') == "true" ? true : false,
				no_log: location.searchParams.get('no_log') == "true" ? true : false,
				action: actionName,
				data
			};

			fetch(baseURL + '/interaction', {
				method: 'POST',
				body: JSON.stringify(TrackActionReq)
			});
		},

		ack_welcome() {
			this._sendAction("ack-welcome", "true");
		},

		ack_proj_sel() {
			this._sendAction("ack-proj-sel", "true");
		},

		proj_view(projId) {
			this._sendAction("proj-view", projId);
		},

		proj_go_ext(projId) {
			this._sendAction("proj-go-ext", projId);
		},

		proj_share(projId) {
			this._sendAction("proj-share", projId);
		},

		theme(themeName) {
			this._sendAction("theme", themeName);
		},

		exit() {
			this._sendAction("exit", "true");
		}
	},

	async ping(viewing, interval) {
		const location = new URL(window.location.href);

		const TrackActionReq = {
			tid: location.searchParams.get('tid'),
			no_log: location.searchParams.get('no_log') == "true" ? true : false,
			view: viewing,
			intervalMs: interval
		};

		fetch(baseURL + '/ping', {
			method: 'POST',
			body: JSON.stringify(TrackActionReq)
		});

	}
}