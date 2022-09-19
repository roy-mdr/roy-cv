<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_project_map from '../../assets/projects/project_map.jpg';

	const skills = [
		"electron",
		"nodejs",
		"mermaidjs"
	]

	const content = {
		es: {
			title: "Desktop Project Visualizer",
			descHTML: `
				<p>Visualizador de proyectos [genérico] en forma de ramas y versiones estilo Git.</p>
				<p>A partir de una estructura de subdirectorios y archivos <i>.json</i> donde se especifica origen de ramificación, responsable y nota de versión, genera el árbol de visualización. La estructura de directorios puede ser cualquiera, sin embargo se recomienda utilizar una convención de versionado.</p>
			`,
		},
		en: {
			title: "Desktop Project Visualizer",
			descHTML: `
				<p>Generic project visualizer for generating git-like branch and version graphics.</p>
				<p>From a sub-folder structure and <i>.json</i> files where is specified the branch origin, person asigned and version note, it generates the tree graphic. The folder structure can be any, however is recommended to stick to a versioning convention across all projects.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/roy-mdr/es-electron-project-viz" technologies={skills}>
	<div slot="preview">
		<img src={img_project_map} alt="Project Map">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>