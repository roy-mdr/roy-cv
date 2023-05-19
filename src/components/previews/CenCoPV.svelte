<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img from '../../assets/projects/cenco_pv.jpg';

	const skills = [
		"_3dsmax",
		"autocad",
		"illustrator",
		"photoshop",
		"lumion",
		"sketchup",
		"vray",
		"cinema4d"
	]

	const content = {
		es: {
			title: "Centro Comunitario Primo Verdad",
			descHTML: `El Centro Comunitario Primo Verdad en la colonia Primo Verdad alberga acividades que la misma comunidad ya hace sin un lugar dedicado, provocando que las calles se aglomeren y en ocaciones se vuelvan hostiles. Este desarrollo urbano facilitará una mejor dinámica en el barrio, promoviendo que ciudadanos externos y locales coexistan.`,
		},
		en: {
			title: "Primo Verdad Community Center",
			descHTML: `The Community Center in the suburb "Primo Verdad" hosts activities that the community don't have a place to do, so the streets get clogged and sometimes hostile. This urban development will facilitate a better dynamic for the community, encouraging external citizens and locals to live together.`,
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