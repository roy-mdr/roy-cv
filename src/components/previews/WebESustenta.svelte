<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_esustenta from '../../assets/projects/esustenta.jpg';

	const skills = [
		"apache",
		"php",
		"nodejs",
		"vue",
		"svelte",
		"mariadb",
	]

	const content = {
		es: {
			title: "Estudio Sustenta Web Tools",
			descHTML: `
				<p>Probablemente el proyecto con mayor desarrollo y tiempo invertido, ya que consiste en múltiples aplicaciones y herramientas de fines arquitectónicos. Herramientas ayudan a llevar el proceso desde la entrevista con el cliente, proceso de diseño, dibujo CAD/BIM, presentación de proyecto, obra y evaluación post-entrega.</p>
				<p>Algunas herrramientas incluyen cuestionarios interactivos, gestores de proyectos, basas de datos CAD, administrador de usuarios, recolección de datos climáticos, panel de control IoT personalizado, presentación de nubes de puntos 3D, entre otros...</p>
				<p><small>Debido al acceso restringido a las aplicaciones y código propietario, sólo se muestra la página principal. ¡Para demostraciones puedes <a href="#contact">contactarme</a>!</small></p>
				`,
			},
		en: {
			title: "Estudio Sustenta Web Tools",
			descHTML: `
				<p>Probably the project qith most development and time invested, as consist of multiple apps and tools with architectural purposes. Tools help to carry the workflow from the client interview, design process, CAD/BIM drawing, project visualization, contruction and post-construction evaluation.</p>
				<p>Some tools include ineractive forms, projet managers, CAD databases, users administrator, climate data collection, custom IoT control panel, 3D point-cloud visualizer, and others...</p>
				<p><small>Due to the restricted access to the apps and close source code, it only shows the landing page. For a demo you can <a href="#contact">contact me</a>!</small></p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://estudiosustenta.myds.me/" technologies={skills}>
	<div slot="preview">
		<img src={img_esustenta} alt="Estudio Sustenta Website">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>