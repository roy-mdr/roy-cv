<script>
	import { prevProj } from '../stores/previewing.js';
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

	function setBodyPreviewingClass(previewing) {
		if (previewing) {
			document.body.classList.add("previewing");
		} else {
			document.body.classList.remove("previewing");
		}
	}
	$: setBodyPreviewingClass($prevProj);
</script>



<div class="previewer">
	<div class="content">

		{#if $prevProj === ''}
		<Default />

		{:else if $prevProj === 'castell'}
		<Castell />

		{:else if $prevProj === 'conjunto-mi'}
		<ConjuntoMi />

		{:else if $prevProj === 'black-box'}
		<BlackBox />

		{:else if $prevProj === 'cenco-pv'}
		<CenCoPv />

		{:else if $prevProj === 'es-proj-viz'}
		<EsProjViz />

		{:else if $prevProj === 'app-gtd'}
		<GtdApp />

		{:else if $prevProj === 'hornedo'}
		<Hornedo />

		{:else if $prevProj === 'infonavit-proj'}
		<InfonavitProj />

		{:else if $prevProj === 'iot'}
		<IoTFirmware />

		{:else if $prevProj === 'es-pcwin'}
		<IotPcWin />

		{:else if $prevProj === 'lshdrms'}
		<Lshdrms />

		{:else if $prevProj === 'no-poll'}
		<NoPoll />

		{:else if $prevProj === 'splash-creator'}
		<QuickSplashCreator />

		{:else if $prevProj === 'vigilost'}
		<VigiLost />

		{:else if $prevProj === '2521'}
		<Web2521 />

		{:else if $prevProj === 'es-web'}
		<WebESustenta />

		{:else if $prevProj === 'landa'}
		<LANDA />

		{:else if $prevProj === 'lade'}
		<LADE />

		{:else if $prevProj === 'bluish'}
		<Bluish />

		{:else if $prevProj === 'dovele'}
		<Dovele />

		{:else if $prevProj === 'palmasur'}
		<Palmasur />

		{:else if $prevProj === 'antidoto'}
		<Antidoto />

		{:else if $prevProj === 'pangea'}
		<Pangea />

		{:else}
		<NotFound projKey={$prevProj} />
		{/if}
	</div>
</div>



<style>
	.previewer {
		/* max-width: 50%; */
		width: 100%;
		position: sticky;
		top: 0px;
		height: 100vh;
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