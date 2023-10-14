<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_gtd_app from '../../assets/projects/dovele.png';

	const skills = []

	const content = {
		es: {
			title: "Dovele",
			descHTML: `
				<p>Hogar de algo de mi música electrónica...</p>
			`,
		},
		en: {
			title: "Dovele",
			descHTML: `
				<p>Home of some of my electronic music...</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://www.youtube.com/@lushed.dreams" technologies={skills}>
	<div slot="preview">
		<img src={img_gtd_app} alt="Konoha">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
	img {
		max-width: 300px;
		margin: auto;
	}
</style>