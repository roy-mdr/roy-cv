<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_lshdrms from '../../assets/projects/lshdrms.jpg';

	const skills = [
		"apache",
		"php"
	]

	const content = {
		es: {
			title: "LUSHED // DREAMS (2019)",
			descHTML: `
				<p>Red social para el fomento de artes digitales locales y de la región. La idea consiste en mostrar aleaoreamente una publicación de artistas locales previamente seleccionados e interactuar con la ciudad y el espacio físico (un poco como CICADA 3301).</p>
				<p>Desarrollé una extensión de Google Chrome donde cada pestala es una pieza distinta (imagen / Gif / audio / video) y la pieza puede ser descargada o ir al link que señale el artista. El sitio principal se convierte sólo en un portal de administración.</p>
				`,
			},
		en: {
			title: "LUSHED // DREAMS (2019)",
			descHTML: `
				<p>Social network for the promotion of local digital arts. The idea is to show a random post of previously selected artists of the region and interact with the city and physical space (a little bit like CICADA 3301).</p>
				<p>I delvoped a Chrome Extension where each new tab is a different piece of art (image / Gif / audio / video) and the piece can be downloaded or go to a link posted by the artist. The main site remains as a admin portal.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="http://lshdrms.c1.biz/demo" technologies={skills}>
	<div slot="preview">
		<img src={img_lshdrms} alt="LSHD//DRMS">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>