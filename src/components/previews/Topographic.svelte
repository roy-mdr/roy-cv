<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	let activePointcloud = "san-carlos";

	/* IMAGES */
	import img_topo_san_carlos from '../../assets/projects/topo_san_carlos.gif';
	import prev_ptcl_san_carlos from '../../assets/projects/prev_ptcl_san_carlos.png';
	import prev_ptcl_interior from '../../assets/projects/prev_ptcl_interior.png';
	import prev_ptcl_jardines_del_rio from '../../assets/projects/prev_ptcl_jardines_del_rio.png';
	import prev_ptcl_herradura from '../../assets/projects/prev_ptcl_herradura.png';

	const skills = [
		"metashape",
		"arcgis",
	]

	const content = {
		es: {
			title: "Trabajos de topografía y levantamiento",
			descHTML: ``,
		},
		en: {
			title: "Topographic and site-survey works",
			descHTML: ``,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="" technologies={skills}>
	<div slot="preview">
		<h2>Planimetric assets generation</h2>
		<img src={img_topo_san_carlos} alt="Topografía San Carlos">
		<div class="pad light small" style="margin: 1em 0;">
			{#if activePointcloud == "san-carlos"}
				<iframe src="https://estudiosustenta.com/potree/examples/__embed__san_carlos" frameborder="0" title="Topografía San Carlos"></iframe>
			{:else}
				<button on:click={() => activePointcloud = "san-carlos"} class="ptclprev {$appLang}">
					<img src={prev_ptcl_san_carlos} alt="Preview topografía San Carlos">
				</button>
			{/if}
			<a href="https://estudiosustenta.com/potree/examples/san_carlos" target="_blank">Open full screen</a>
		</div>

		<hr>

		<h2>Interior</h2>
		<div class="pad light small" style="margin: 1em 0;">
			{#if activePointcloud == "interior"}
				<iframe src="https://estudiosustenta.com/potree/examples/__embed__interior" frameborder="0" title="Levantamiento interior"></iframe>
			{:else}
				<button on:click={() => activePointcloud = "interior"} class="ptclprev {$appLang}">
					<img src={prev_ptcl_interior} alt="Preview pointcloud interior">
				</button>
			{/if}
			<a href="https://estudiosustenta.com/potree/examples/claudia" target="_blank">Open full screen</a>
		</div>

		<hr>

		<h2>Historic evolution</h2>
		<div class="pad light small" style="margin: 1em 0;">
			{#if activePointcloud == "historic"}
				<iframe src="https://estudiosustenta.com/potree/examples/jardines_del_rio" frameborder="0" title="Jardines del río"></iframe>
			{:else}
				<button on:click={() => activePointcloud = "historic"} class="ptclprev {$appLang}">
					<img src={prev_ptcl_jardines_del_rio} alt="Preview pointcloud interior">
				</button>
			{/if}
			<a href="https://estudiosustenta.com/potree/examples/jardines_del_rio" target="_blank">Open full screen</a>
		</div>

		<hr>

		<h2>Dense vegetation</h2>
		<div class="pad light small" style="margin: 1em 0;">
			{#if activePointcloud == "herradura"}
				<iframe src="https://estudiosustenta.com/potree/examples/herradura" frameborder="0" title="La Herradura"></iframe>
			{:else}
				<button on:click={() => activePointcloud = "herradura"} class="ptclprev {$appLang}">
					<img src={prev_ptcl_herradura} alt="Preview pointcloud interior">
				</button>
			{/if}
			<a href="https://estudiosustenta.com/potree/examples/herradura" target="_blank">Open full screen</a>
		</div>

	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
	iframe {
		width: 100%;
		aspect-ratio: 21 / 9;
	}

	.ptclprev {
		position: relative;
		padding: 0;
		background-color: transparent;
	}

	.ptclprev img {
		opacity: 100%;
	}

	.es.ptclprev::after {
		content: 'CLICK PARA INTERACTUAR';
	}

	.en.ptclprev::after {
		content: 'CLICK TO INTERACT';
	}

	.de.ptclprev::after {
		content: 'CLICK TO INTERACT';
	}

	.ptclprev::after {
		position: absolute;
		font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
		font-weight: bold;
		font-size: 4em;
		color: var(--main-text);
		opacity: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		/* width: 50%; */
		/* height: 100%; */
		line-height: 1.1;
	}

	.ptclprev:hover::after {
		opacity: 100%;
	}
</style>