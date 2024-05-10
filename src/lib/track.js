import { get } from 'svelte/store';
import * as appState from "../stores/appState";

const baseURL = 'https://cvm.estudiosustenta.com/track';

let init = false;

export const tracker = {

	async setRemoteTIDSettings() {
		const location = new URL(window.location.href);

		const tid = location.searchParams.get('tid');

		let data = undefined;
		let settingsFetched = [];

		try {
			const res = await fetch(baseURL + '/checkin?tid=' + tid);

			if (!res.ok) throw new Error();

			data = await res.json();

			if (!data) throw new Error();

			data?.tname && appState.visitorName.set(data.tname);
			data?.projMsg && appState.showProjMsg.set(data.projMsg);
			data?.welcomeMsg && appState.showWelcomeMsg.set(data.welcomeMsg);

			if (data?.highlightProj !== null) {
				appState.highlightProj.set(data.highlightProj);
				appState._fetched_highlightProj.set(structuredClone(data.highlightProj));
			}

			if (data?.hideProj !== null) {
				appState.hideProj.set(data.hideProj);
				appState._fetched_hideProj.set(structuredClone(data.hideProj));
			}

			if (data?.appTheme !== null) {
				appState.appTheme.set(data.appTheme);
				settingsFetched.push('appTheme');
			}

			if (data?.appLang !== null) {
				appState.appLang.set(data.appLang);
				settingsFetched.push('appLang');
			}

			if (data?.appProfile !== null) {
				appState.appProfile.set(data.appProfile);
				settingsFetched.push('appProfile');
			}

			if (data?.showProfPic !== null) {
				appState.showProfPic.set(data.showProfPic);
				settingsFetched.push('showProfPic');
			}
		} catch (error) {
			console.error("Error fetching tid info.");
		}

		appState.settingsFetched.set(settingsFetched);
		return { settingsFetched }
	},

	async checkin(callback) {
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
		})
			.finally(callback);

		init = true;
	},

	interaction: {
		async _sendAction(actionName, data) {

			if (!init) return;
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

		if (!init) return;
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