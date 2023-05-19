<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_gtd_app from '../../assets/projects/palmasur.jpg';

	const skills = []

	const content = {
		es: {
			title: "Palmasur Collab",
			descHTML: `
				<p>Colaboración con Mariana Red — Beats para mimir</p>
			`,
		},
		en: {
			title: "Palmasur Collab",
			descHTML: `
			<p>Collab with Mariana Red — Sleepy beats</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://open.spotify.com/album/48iAWaLA0eDyV2O7b1oSYZ" technologies={skills}>
	<div slot="preview">
		<img src={img_gtd_app} alt="Mariana Red - Beats para mimir">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>