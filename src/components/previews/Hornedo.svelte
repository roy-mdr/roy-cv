<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img from '../../assets/projects/hornedo.jpg';

	const skills = [
		"_3dsmax",
		"autocad",
		"illustrator",
		"photoshop",
		"lumion",
		"sketchup",
		"vray",
	]

	const content = {
		es: {
			title: "Remodelación Hornedo",
			descHTML: ``,
		},
		en: {
			title: "Remodelación Hornedo",
			descHTML: `[Student project] Redesign of the Hornedo Street in Aguascalientes, México. Taking care for the importance and heritage of this street, the old buildings, houses and communities live together with a new pedestrian-oriented design and new building development for the sostainable growth of the city.`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} technologies={skills}>
	<div slot="preview">
		<img src={img} alt="Castell de Ferro">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>