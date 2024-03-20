<script lang="ts">
	import {onMount} from 'svelte';

	import Navigator from './components/Navigator.svelte';
	import MobileNavigator from './components/MobileNavigator.svelte';
	import Main from './components/Main.svelte';
	import Modal from './components/Modal.svelte';
	import PreviewRouter from './components/PreviewRouter.svelte';

	import { appTheme, appLang, appProfile, showProfPic } from './stores/appState.js';
	import { prevProj } from './stores/previewing.js';

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
		onAppSettingsChange($appTheme, $appLang, $appProfile, $showProfPic)
	}
</script>



<div class="app-content" class:light-theme={$appTheme == 'light'} class:dark-theme={$appTheme == 'dark'} class:blue-theme={$appTheme == 'blue'} class:vapor-theme={$appTheme == 'vapor'} class:backrooms-theme={$appTheme == 'backrooms'}>
	<div class="r-navigator">
		<Navigator />
	</div>
	<div class="t-navigator">
		<MobileNavigator />
	</div>
	<div class="main-wrapper">
		<Main />
		<div class="r-previewer" class:no-proj={!$prevProj}>
			<PreviewRouter />
		</div>
	</div>
	{#if modal}
	<Modal on:closeModal={closeModal}>
		<div class="card-seccion">
			<span class="titulo">Language / Idioma / Sprache</span>
			<div class="radio-style-1">
				<label for="lan_en">
					<input type="radio" name="lan" bind:group={$appLang} id="lan_en" value="en">
					<span>EN</span>
				</label>
				<label for="lan_es">
					<input type="radio" name="lan" bind:group={$appLang} id="lan_es" value="es">
					<span>ES</span>
				</label>
				<!--
				<label for="lan_de">
					<input type="radio" name="lan" bind:group={$appLang} id="lan_de" value="de">
					<span>DE</span>
				</label>
				-->
			</div>
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
			<div class="radio-style-1">
				<label>
					<input type="radio" name="ppic" checked={!setProfPicOnClose}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span on:click={ () => { setProfPicOnClose = false } }>
						{#if $appLang == 'es'}
						No
						{:else if $appLang == 'de'}
						Nein
						{:else}
						No
						{/if}
					</span>
				</label>
				<label>
					<input type="radio" name="ppic" checked={setProfPicOnClose}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span on:click={ () => { setProfPicOnClose = true } }>
						{#if $appLang == 'es'}
						Sí
						{:else if $appLang == 'de'}
						Ja
						{:else}
						Yes
						{/if}
					</span>
				</label>
			</div>
		</div>
		<hr>
		<div class="card-seccion">
			<button on:click={closeModal}>OK</button>
		</div>
	</Modal>
	{/if}
</div>



<style>
	.app-content {
		display: flex;
		width: 100%;
		height: 100%;
		/* max-width: 1920px; */
		color: var(--main-text);
		background-color: var(--background);
		transition: background-color var(--speed-normal);
	}

	.main-wrapper {
		display: flex;
		position: relative;
		width: 100%;
	}

	.r-previewer {
		width: 100%;
		z-index: 2;
	}

	@container (width < 1500px) {
		.r-previewer {
			position: absolute;
			height: 100%;
			max-width: 785px;
			background-color: var(--carpet);
		}

		.r-previewer.no-proj {
			display: none;
		}
	}

	.r-navigator {
		height: 100%;
	}

	.t-navigator {
		background-color: var(--background);
		display: none;
		position: sticky;
		top: 0;
		z-index: 1;
		transition: background-color var(--speed-normal);
	}

	@container (width < 700px) {
		.app-content {
			flex-direction: column;
		}

		.r-navigator {
			display: none;
		}

		.t-navigator {
			display: flex;
		}
	}
</style>