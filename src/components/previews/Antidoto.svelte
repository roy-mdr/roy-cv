<script lang="ts">
	import PreviewTemplate from "../PreviewTemplate.svelte";
	import { appLang } from "../../stores/appState.js";

	/* IMAGES */
	import img_antidoto from "../../assets/projects/antidoto.jpg";

	const skills = [];

	const content = {
		es: {
			title: "Podcast Antídoto",
			descHTML: `
				<p>Sonorización y dirección creativa del podcast <b>Antídoto</b> <i>un espacio para sanar</i></p>
				<br />
				Puedes escuchar el tema sonoro <a href="https://youtu.be/m_V5qJTCZvk" target="_blank">aquí</a>.
			`,
		},
		en: {
			title: "Antidoto Podcast",
			descHTML: `
				<p>Soundtrack production and creative direction of the podcast <b>Antídoto</b> <i>a space to heal</i></p>
				<br />
				You can listen to the theme track <a href="https://youtu.be/m_V5qJTCZvk" target="_blank">here</a>.
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
	link="https://spotify.link/fo9Ka5mASDb"
	technologies={skills}
>
	<div slot="preview">
		<img src={img_antidoto} alt="Antidoto Podcast" />
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
