<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_vigilost from '../../assets/projects/vigilost.jpg';

	const skills = [
		"cpp",
		"qt"
	]

	const content = {
		es: {
			title: "VigiLost (2016)",
			descHTML: `
				<p>Proyecto escolar para encontrar objetos perdidos. Consta de un programa server (admin) para registrar los objetos y un cliente para buscarlos.</p>
			`,
		},
		en: {
			title: "VigiLost (2016)",
			descHTML: `
				<p>School project to find lost objects. It consists of a server (admin) app to register the objects and a client to search for them.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/roy-mdr/vigilost" technologies={skills}>
	<div slot="preview">
		<img src={img_vigilost} alt="VigiLost">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>