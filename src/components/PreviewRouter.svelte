<script>
	import { prevProj } from '../stores/previewing.js';

	import Default from "./previews/Default.svelte";
	import EsProjViz from "./previews/EsProjViz.svelte";
	import GtdApp from './previews/GTDApp.svelte';
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
</script>



<div class="previewer">
	<div class="content">

		{#if $prevProj === ''}
		<Default />

		{:else if $prevProj === 'es-proj-viz'}
		<EsProjViz />

		{:else if $prevProj === 'app-gtd'}
		<GtdApp />

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
		min-height: calc(100% - 4em);
		margin: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>