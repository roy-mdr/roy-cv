import { get } from 'svelte/store';
import * as appState from "../stores/appState";

const baseURL = 'https://cvm.estudiosustenta.com/track';

export const tracker = {

	async setRemoteTIDSettings() {
		const location = new URL(window.location.href);

		const tid = location.searchParams.get('tid');

		let data = undefined;
		let modalSettingsApplied = 0;

		try {
			const res = await fetch(baseURL + '/checkin?tid=' + tid);
			data = await res.json();

			data?.tname && appState.visitorName.set(data.tname);
			data?.projMsg && appState.showProjMsg.set(data.projMsg);
			data?.welcomeMsg && appState.showWelcomeMsg.set(data.welcomeMsg);
			data?.highlightProj && appState.highlightProj.set(data.highlightProj);
			data?.hideProj && appState.hideProj.set(data.hideProj);

			if (data?.appTheme !== null) {
				appState.appTheme.set(data.appTheme);
			}

			if (data?.appLang !== null) {
				appState.appLang.set(data.appLang);
				modalSettingsApplied++;
			}

			if (data?.appProfile !== null) {
				appState.appProfile.set(data.appProfile);
				modalSettingsApplied++;
			}

			if (data?.showProfPic !== null) {
				appState.showProfPic.set(data.showProfPic);
				modalSettingsApplied++;
			}
		} catch (error) {
			console.error("Error fetching tid info.");
		}

		appState.modalSettingsApplied.set(modalSettingsApplied);
		return { modalSettingsApplied }
	},

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