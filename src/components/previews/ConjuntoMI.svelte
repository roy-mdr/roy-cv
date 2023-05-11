<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img from '../../assets/projects/conjunto_mi.jpg';

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
			title: "Conjunto M.I.",
			descHTML: ``,
		},
		en: {
			title: "Conjunto M.I.",
			descHTML: ``,
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