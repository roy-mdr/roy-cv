<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_gtd_app from '../../assets/projects/arbol_demo.gif';

	const skills = [
		"svelte",
	]

	const content = {
		es: {
			title: "LANDA Arch Tools",
			descHTML: `
				<p>LANDA se enfoca en servir herramientas para el desarrollo de la arquitectura, cubriendo espacios que la metodología BIM no cubre y acompañando siempre una metodología para el desarrollo y diseño de proyectos arquitectónicos.</p>
				<p>Actualmente se ha desarrollado sólamente una aplicación del roadmap planeado: <b><i>SysTree</i></b> ayuda a estudiantes y despachos de arquitectura a dimensionar los espacios de sus proyectos a partir de actividades generadoras basadas en los requerimientos del cliente.</p>
			`,
		},
		en: {
			title: "LANDA Arch Tools",
			descHTML: `
			<p>LANDA focuses on providing tools for architectural development, covering areas that the BIM methodology does not cover, while always serving a methodology for the development and design of architectural projects.</p>
<p>Currently, only one application from the planned roadmap has been developed: <b><i>SysTree</i></b> assists architecture firms and students in sizing the spaces of their projects based on seed-activities from the client requirements.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://es-web-arbol.vercel.app/" technologies={skills}>
	<div slot="preview">
		<img src={img_gtd_app} alt="LANDA">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>