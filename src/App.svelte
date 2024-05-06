<script lang="ts">
	import {onMount} from 'svelte';

	import { tracker } from './lib/track';

	import Navigator from './components/Navigator.svelte';
	import MobileNavigator from './components/MobileNavigator.svelte';
	import Main from './components/Main.svelte';
	import Modal from './components/Modal.svelte';
	import PreviewRouter from './components/PreviewRouter.svelte';

	import { appTheme, appLang, appProfile, showProfPic, currSection } from './stores/appState.js';
	import { prevProj, existingProjId } from './stores/previewing.js';

	let init = false;
	let modal = false;
	let setProfPicOnClose = false;

	onMount( async () => {

		if (window.location.hash != "" && window.location.hash != "#") {
			$prevProj = window.location.hash.slice(1);
		}

		window.addEventListener('hashchange', (ev) => {
			const newURL = new URL(ev.newURL);

			if (newURL.hash == "" || newURL.hash == "#") {
				$prevProj = "";
			} else {
				$prevProj = newURL.hash.slice(1);
			}
		});

		window.addEventListener('keydown', (ev) => {
			if (ev.key != "Escape") return;

			if (modal) {
				closeModal();
				return;
			}

			if ($prevProj) {
				$prevProj = "";
				history.pushState("", document.title, window.location.pathname + window.location.search);
				return;
			}
		})

		const sections = document.querySelectorAll('main > section');

		window.addEventListener('scroll', (ev) => {
			let closest = null;

			sections.forEach( (section) => {
				let position = section.getBoundingClientRect();
				/* IF TOP OF SECTION IS ABOVE 1/3 SCREEN */
				if (position.top < (window.innerHeight / 3)) {
					closest = section.id;
				}
			} );

			$currSection = closest;
		})

		// --------------------------------------------------------

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

		if (settingsJSON) {
			tracker.checkin();
		}
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
		onAppSettingsChange($appTheme, $appLang, $appProfile, $showProfPic);

		tracker.checkin();
	}
</script>



<div class="app-content" class:light-theme={$appTheme == 'light'} class:dark-theme={$appTheme == 'dark'} class:blue-theme={$appTheme == 'blue'} class:vapor-theme={$appTheme == 'vapor'} class:backrooms-theme={$appTheme == 'backrooms'}>
	<div class="r-navigator">
		<Navigator />
	</div>
	<div class="t-navigator" class:previewing={$existingProjId}>
		<MobileNavigator />
	</div>
	<div class="main-wrapper">
		<Main />
		<div class="r-previewer" class:no-proj={!$existingProjId}>
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

		.t-navigator.previewing {
			position: absolute;
		}
	}
</style>