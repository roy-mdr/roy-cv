<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_gtd_app from '../../assets/projects/gtd_app.jpg';

	const skills = [
		"xd",
		"svelte",
		"nodejs",
		"mariadb",
	]

	const content = {
		es: {
			title: "App Getting Things Done",
			descHTML: `
				<p><b>[En construcción]</b> Aplicación multiplataforma para un flujo personal de metodología Getting Things Done.</p>
			`,
		},
		en: {
			title: "App Getting Things Done",
			descHTML: `
				<p><b>[In the makings]</b> Multiplatform app for a personal workflow based on the Getting Things Done methodology.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/roy-mdr/gtd-app" technologies={skills}>
	<div slot="preview">
		<img src={img_gtd_app} alt="App GTD">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>