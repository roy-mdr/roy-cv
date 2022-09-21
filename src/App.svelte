<script lang="ts">
	import {onMount} from 'svelte';

	import Navigator from './components/Navigator.svelte';
	import Main from './components/Main.svelte';
	import Modal from './components/Modal.svelte';
	import PreviewRouter from './components/PreviewRouter.svelte';

	import { appTheme, appLang, appProfile, showProfPic } from './stores/appState.js';

	let init = false;
	let modal = false;
	let setProfPicOnClose = false;

	onMount( async () => {
		init = true;
		const settingsJSON = localStorage.getItem('appSettings');

		if (!settingsJSON) {
			// Ask for settings
			modal = true;
			return;
		};

		const appSettings = JSON.parse(settingsJSON);

		$appTheme    = appSettings.theme;
		$appLang     = appSettings.lang;
		$appProfile  = appSettings.profile;
		$showProfPic = appSettings.ppic;
	});

	/* WATCHER */
	function onAppSettingsChange(theme, lang, profile, ppic) {
		if (!init) return;
		localStorage.appSettings = JSON.stringify({
			lang: lang,
			theme: theme == 'backrooms' ? 'vapor' : theme,
			profile: profile,
			ppic: ppic
		});
	}
	$: settingsChange = onAppSettingsChange($appTheme, $appLang, $appProfile, $showProfPic)

	function closeModal() {
		modal = false;
		$showProfPic = setProfPicOnClose;
	}
</script>



<div class="app-content" class:light-theme={$appTheme == 'light'} class:dark-theme={$appTheme == 'dark'} class:blue-theme={$appTheme == 'blue'} class:vapor-theme={$appTheme == 'vapor'} class:backrooms-theme={$appTheme == 'backrooms'}>
	<Navigator />
	<Main />
	<PreviewRouter />
	{#if modal}
	<Modal on:closeModal={closeModal}>
		<div class="card-seccion">
			<span class="titulo">Language / Idioma / Sprache</span>
			<button on:click={ () => { $appLang = 'en' } } class:current={$appLang == 'en'}>EN</button>
			<button on:click={ () => { $appLang = 'es' } } class:current={$appLang == 'es'}>ES</button>
			<!-- <button on:click={ () => { $appLang = 'de' } }>DE</button> -->
		</div>
		<div class="card-seccion">
			<span class="titulo">
				{#if $appLang == 'es'}
				Ver foto de perfil
				{:else if $appLang == 'de'}
				Profilbild anzeigen
				{:else}
				Show profile picture
				{/if}
			</span>
			<label>
				<input type="checkbox" bind:checked={setProfPicOnClose}>
				{#if setProfPicOnClose}
					{#if $appLang == 'es'}
					Sí
					{:else if $appLang == 'de'}
					Ja
					{:else}
					Yes
					{/if}
				{:else}
					{#if $appLang == 'es'}
					No
					{:else if $appLang == 'de'}
					Nein
					{:else}
					No
					{/if}
				{/if}
			</label>
		</div>
	</Modal>
	{/if}
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

	.current {
		font-weight: bold;
		color: var(--accent) !important;
	}
</style>