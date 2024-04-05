<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_dosis_sonora from '../../assets/projects/dosis_sonora.jpg';

	const skills = [
		"studioone"
	]

	const content = {
		es: {
			title: "Dosis Sonora",
			descHTML: `
				<div class="pad light small italic" style="margin-top: 1em;">
					<p>Dosis Sonoras es la serie de episodios narrativos del Programa de Política de Drogas. En esta segunda temporada nos adentraremos en los efectos de la pandemia en el mercado de sustancias, así como las respuestas de la sociedad civil en contextos en que la guerra ha dejado una estela de violencia a su paso.</p>
				</div>
				<h2>Participación</h2>
				<p>Musicalización y edición de audio.</p>
			`,
		},
		en: {
			title: "Dosis Sonora",
			descHTML: `
				<div class="pad light small italic" style="margin-top: 1em;">
					<p>Dosis Sonoras is the series of narrative episodes of the Drug Policy Program. In this second season we will delve into the effects of the pandemic on the substance market, as well as the responses of civil society in contexts where war has left a trail of violence in its wake.</p>
				</div>
				<h2>Participation</h2>
				<p>Musicalization and audio editing</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://www.youtube.com/playlist?list=PLh75K5CFar7l0iG8Von64yVBCquyzz3aS" technologies={skills}>
	<div slot="preview">
		<img src={img_dosis_sonora} alt="Dosis Sonora: Guerra contra las drogas">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
	img {
		max-width: 500px;
		margin: auto;
	}
</style>