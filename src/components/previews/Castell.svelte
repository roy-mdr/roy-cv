<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img from '../../assets/projects/castell.jpg';

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
			title: "Castell de Ferro",
			descHTML: `[Proyecto estudiantil] Antes de que la hotelera contrucción en masa devore el estilo de vida del pueblo, un conjunto de edificios esculpe la roca de parcelas vacías en Castell de Ferro en Andalucía, España. Conectando cultura y tradición con una dinámica turística saludable.`,
		},
		en: {
			title: "Castell de Ferro",
			descHTML: `[Student project] Before the mass-construction hotel industry eats the town life-style, a set of buildings carve the rock of the empty parcels of Castell de Ferro in Andalicía, Spain. Connecting culture and tradition with a healty dynamic of tourist activities.`,
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