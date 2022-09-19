<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_infonavit_proj from '../../assets/projects/infonavit_proj.jpg';

	const skills = []

	const content = {
		es: {
			title: "Concurso INFONAVIT 2020",
			descHTML: `
				<p>Proyecto de regeneración urbana para el fraccionamiento Santa Isabel en San Francisco de los Romo, Ags, México.</p>
				<p>La prupuesta ataca problemas de marginación del sitio, el cual poco a poco ha generado abandono y una fuerte división de las zonas urbanas. Se plantean propuestas puntuales dependiendo de la ubicación y situación en 4 niveles de enfoque: Casa (3 propuestas de vivienda), Calle (Movilidad e identidad), Barrio (Actividades comunes) y Exterior (Accesibilidad y sustentabilidad).</p>
			`,
		},
		en: {
			title: "INFONAVIT Contest 2020",
			descHTML: `
				<p>Urban-regeneration project for the Santa Isabel community in San Francisco de los Romo, Ags, Mexico.</p>
				<p>The project tackles marginalization problems of the site, which with time has generated abandonment and a strong division of the urban area. Specific proposals are made taking account the location and general situation at 4 levels of focus: Home (3 housing models), Street (Mobility and identity), Neighborhood (Common activities) and Exterior (Accessibility and sustainability).</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://www.archdaily.mx/mx/953672/infonavit-anuncia-a-los-ganadores-del-septimo-concurso-de-estudiantes-2020" technologies={skills}>
	<div slot="preview">
		<img src={img_infonavit_proj} alt="IoT GUI">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>