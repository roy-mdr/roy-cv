<script lang="ts">
	import {onMount} from 'svelte';

	import Navigator from './components/Navigator.svelte';
	import Main from './components/Main.svelte';
	import PreviewRouter from './components/PreviewRouter.svelte';

	import { appTheme, appLang, appProfile } from './stores/appState.js';

	let init = false;

	onMount( async () => {
		init = true;
		const settingsJSON = localStorage.getItem('appSettings');
		if (!settingsJSON) return; // Ask for settings (modal)
		const appSettings = JSON.parse(settingsJSON);

		$appTheme = appSettings.theme;
		$appLang = appSettings.lang;
		$appProfile = appSettings.profile;
	});

	/* WATCHER */
	function onAppSettingsChange(theme, lang, profile) {
		if (!init) return;
		localStorage.appSettings = JSON.stringify({
			lang: lang,
			theme: theme == 'backrooms' ? 'vapor' : theme,
			profile: profile
		});
	}
	$: settingsChange = onAppSettingsChange($appTheme, $appLang, $appProfile)
</script>



<div class="app-content" class:light-theme={$appTheme == 'light'} class:dark-theme={$appTheme == 'dark'} class:blue-theme={$appTheme == 'blue'} class:vapor-theme={$appTheme == 'vapor'} class:backrooms-theme={$appTheme == 'backrooms'}>
	<Navigator />
	<Main />
	<PreviewRouter />
</div>



<style>
	.app-content {
		display: flex;
		width: 100%;
		max-width: 1920px;
		color: var(--main-text);
		background-color: var(--background);
		transition: background-color var(--speed-normal);
	}
</style>