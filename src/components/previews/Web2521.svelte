<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_2521 from '../../assets/projects/web_2521.jpg';

	const skills = [
		"cinema4d",
		"photoshop",
		"muse",
		"flash",
		"actionscript"
	]

	const content = {
		es: {
			title: "Website 2521 La Película (2015)",
			descHTML: `
				<p>Web para proyecto independiente "2521 la película" para el ilustrador Javier Esq. Toda la interfaz fue modelada en Cinema 4D y la web construida en Adobe Muse. Cuenta con un mini-sitio el cual sólo es accesible con Flash Player.</p>
			`,
		},
		en: {
			title: "Website 2521 the movie (2015)",
			descHTML: `
				<p>Web for independent project "2521 the movie" for the illustrator Javier Esq. All the interface graphics were made in Cinema 4D and the site built in Adobe Muse. It has a mini-site only accessible with Adobe Flash Player.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="http://2521lapelicula.com.mx/" technologies={skills}>
	<div slot="preview">
		<img src={img_2521} alt="Web 2521">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>