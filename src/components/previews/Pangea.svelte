<script lang="ts">
	import PreviewTemplate from "../PreviewTemplate.svelte";
	import { appLang } from "../../stores/appState.js";

	/* IMAGES */
	import img_pangea from "../../assets/projects/pangea.png";

	const skills = [];

	const content = {
		es: {
			title: "PANGEA - Mapamundi",
			descHTML: `
				<p>Participación en el festival PANGEA edición 2021 para el 25 Aniversario del Museo Interactivo de Ciencia y Tecnología <i>Descubre</i>.</p>
				<p>Mapamundi es la sinergia y resultado de once artistas sonoros reflexionando sobre los ecos del planeta tierra utilizando la tecnología ‘Science On a Sphere’, (Ciencia En una Esfera; SOS por su acrónimo en inglés) un sistema de proyección esférica desarrollado por la Administración Nacional Oceánica y Atmosférica (NOAA).</p>
				<p>Puedes escuchar el track aportado con una interpretación visual <a href="https://youtu.be/Axlk3-T4BEE" target="_blank">aquí</a>.</p>
			`,
		},
		en: {
			title: "PANGEA - Mapamundi",
			descHTML: `
				<p>Participation in the festival <i>"PANGEA"</i> 2021 edition for the 25th Anniversary of the Interactive Museum of Science and Technology <i>"Descubre"</i>.</p>
				<p><i>"Mapamundi"</i> is the synergy and result of eleven sound artists reflecting on the echoes of planet using the 'Science On a Sphere' technology, a spherical projection system developed by the National Administration. Oceanic and Atmospheric (NOAA).</p>
				<p>You can listen to the contributed track with a visual interpretation <a href="https://youtu.be/Axlk3-T4BEE" target="_blank">here</a>.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};
</script>

<PreviewTemplate
	title={content[$appLang].title || content["en"].title}
	link="https://festivalpangea.bandcamp.com/album/mapamundi"
	technologies={skills}
>
	<div slot="preview">
		<img src={img_pangea} alt="Antidoto Podcast" />
	</div>
	<span slot="description"
		>{@html content[$appLang].descHTML || content["en"].descHTML}</span
	>
</PreviewTemplate>

<style>
	img {
		max-width: 300px;
		margin: auto;
	}
</style>
