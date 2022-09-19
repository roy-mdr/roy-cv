<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_esrat from '../../assets/projects/es_rat.jpg';

	const skills = [
		"shell",
		"nodejs",
		"autoit",
	]

	const content = {
		es: {
			title: "Remote Access Tool",
			descHTML: `
				<p>Aplicación para Estudio Sustenta y PCs personales para controlar funciones básicas remotamente. También funciona como una interfaz entre los flujos de trabajo web y los de escritorio.</p>
			`,
		},
		en: {
			title: "Remote Access Tool",
			descHTML: `
				<p>App for Estudio Sustenta and personal PCs to control basic functions remotely. Also works as an interface that bridges the web workflow with the desktop ones.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/roy-mdr/es-iot-pcwin" technologies={skills}>
	<div slot="preview">
		<img src={img_esrat} alt="IoT GUI">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>