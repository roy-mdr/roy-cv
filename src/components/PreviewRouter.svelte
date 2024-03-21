<script>
	import { prevProj, existingProjId } from '../stores/previewing.js';
    import BlackBox from './previews/BlackBox.svelte';
    import Castell from './previews/Castell.svelte';
    import CenCoPv from './previews/CenCoPV.svelte';
    import ConjuntoMi from './previews/ConjuntoMI.svelte';

	import Default from "./previews/Default.svelte";
	import EsProjViz from "./previews/EsProjViz.svelte";
	import GtdApp from './previews/GTDApp.svelte';
    import Hornedo from './previews/Hornedo.svelte';
	import InfonavitProj from './previews/InfonavitProj.svelte';
	import IoTFirmware from './previews/IoTFirmware.svelte';
	import IotPcWin from './previews/IotPCWin.svelte';
	import Lshdrms from './previews/LSHDRMS.svelte';
	import NoPoll from "./previews/NoPoll.svelte";
	import NotFound from './previews/NotFound.svelte';
	import QuickSplashCreator from './previews/QuickSplashCreator.svelte';
	import VigiLost from './previews/VigiLost.svelte';
	import Web2521 from "./previews/Web2521.svelte";
	import WebESustenta from './previews/WebESustenta.svelte';
	import LANDA from './previews/LANDA.svelte';
	import LADE from './previews/LADE.svelte';
	import Bluish from './previews/Bluish.svelte';
	import Dovele from './previews/Dovele.svelte';
	import Palmasur from './previews/Palmasur.svelte';
	import Antidoto from './previews/Antidoto.svelte';
	import Pangea from './previews/Pangea.svelte';
    import GhostShow from './previews/GhostShow.svelte';

	function checkProjIdExists(previewing) {
		if (!previewing) {
			$existingProjId = "";
			return;
		}

		const elementExist = document.querySelector(`#projects project[proj-id=${previewing}]`);

		if (elementExist) {
			$existingProjId = previewing;
		} else if (window.screen.width < 1500) {
			$existingProjId = "";
		}
	}
	$: checkProjIdExists($prevProj);

	function setBodyPreviewingClass(previewing) {
		if (previewing) {
			document.body.classList.add("previewing");
		} else {
			document.body.classList.remove("previewing");
		}
	}
	$: setBodyPreviewingClass($existingProjId);
</script>



<div class="previewer">
	<div class="content">

		{#if $existingProjId === ''}
		<Default />

		{:else if $existingProjId === 'castell'}
		<Castell />

		{:else if $existingProjId === 'conjunto-mi'}
		<ConjuntoMi />

		{:else if $existingProjId === 'black-box'}
		<BlackBox />

		{:else if $existingProjId === 'cenco-pv'}
		<CenCoPv />

		{:else if $existingProjId === 'es-proj-viz'}
		<EsProjViz />

		{:else if $existingProjId === 'app-gtd'}
		<GtdApp />

		{:else if $existingProjId === 'hornedo'}
		<Hornedo />

		{:else if $existingProjId === 'infonavit-proj'}
		<InfonavitProj />

		{:else if $existingProjId === 'iot'}
		<IoTFirmware />

		{:else if $existingProjId === 'es-pcwin'}
		<IotPcWin />

		{:else if $existingProjId === 'lshdrms'}
		<Lshdrms />

		{:else if $existingProjId === 'no-poll'}
		<NoPoll />

		{:else if $existingProjId === 'splash-creator'}
		<QuickSplashCreator />

		{:else if $existingProjId === 'vigilost'}
		<VigiLost />

		{:else if $existingProjId === '2521'}
		<Web2521 />

		{:else if $existingProjId === 'es-web'}
		<WebESustenta />

		{:else if $existingProjId === 'landa'}
		<LANDA />

		{:else if $existingProjId === 'lade'}
		<LADE />

		{:else if $existingProjId === 'bluish'}
		<Bluish />

		{:else if $existingProjId === 'dovele'}
		<Dovele />

		{:else if $existingProjId === 'palmasur'}
		<Palmasur />

		{:else if $existingProjId === 'antidoto'}
		<Antidoto />

		{:else if $existingProjId === 'pangea'}
		<Pangea />

		{:else if $existingProjId === 'ghost-show'}
		<GhostShow />

		{:else}
		<NotFound projKey={$existingProjId} />
		{/if}
	</div>
</div>



<style>
	.previewer {
		/* max-width: 50%; */
		width: 100%;
		position: sticky;
		top: 0px;
		height: 100dvh;
		/* background-color: red; */
		display: flex;
		flex-direction: column;
		transition: background-color var(--speed-normal);
	}

	.previewer .content {
		/* height: calc(100% - 4em); */
		height: 100%;
		min-height: calc(100% - 4em);
		margin: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.previewer .content :global(.pad) {
		padding: 1em 2em;
		position: relative;
	}

	.previewer .content :global(.light) {
		background-color: var(--carpet);
		color: var(--main-text);
		transition: background-color var(--speed-normal);
	}

	/* @container (width < 1500px) {
		.previewer .content {
			margin: 0;
		}
	} */

	@container (width < 700px) {
		.previewer .content {
			margin: 0;
		}
	}
</style>