<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';

	/* IMAGES */
	import img_project_map from '../../assets/projects/project_map.jpg';

</script>



<PreviewTemplate title="Desktop Project Visualizer" link="https://github.com/roy-mdr/es-electron-project-viz">
	<div slot="preview">
		<img src={img_project_map} alt="Project Map">
	</div>
	<span slot="description">
		<p>Visualizador de proyectos [genérico] en forma de ramas y versiones estilo Git.</p>
		<p>A partir de una estructura de subdirectorios y archivos <i>.json</i> donde se especifica origen de ramificación, responsable y nota de versión, genera el árbol de visualización. La estructura de directorios puede ser cualquiera, sin embargo se recomienda utilizar una convención de versionado.</p>
	</span>
</PreviewTemplate>



<style>
</style>