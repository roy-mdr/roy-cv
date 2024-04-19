<script lang="ts">
	import PreviewTemplate from "../PreviewTemplate.svelte";
	import { appLang } from "../../stores/appState.js";

	/* IMAGES */
	import vid_AMEHOS_louvers from "../../assets/projects/AMEHOS_louvers.mp4";
	import shadows_arrollo_iso from "../../assets/projects/shadows_arrollo_iso-op1.gif";
	import shadows_arrollo_top from "../../assets/projects/shadows_arrollo_top-op1.gif";

	const skills = ["rhinoceros", "grasshopper"];

	const content = {
		es: {
			title: "Estudio solar y soluciones",
			passivesol: "Soluciones pasivas",
			shadowfx: "Afectaciones de sombras",
			descHTML: ``,
		},
		en: {
			title: "Sun study & solutions",
			passivesol: "Passive solutions",
			shadowfx: "Building shadows side-effects",
			descHTML: ``,
		},
		de: {
			title: "",
			passivesol: "",
			shadowfx: "",
			descHTML: ``,
		},
	};
</script>

<PreviewTemplate
	title={content[$appLang].title || content["en"].title}
	link=""
	technologies={skills}
>
	<div slot="preview">
		<h2>{content[$appLang].passivesol || content["en"].passivesol}</h2>
		<video src={vid_AMEHOS_louvers} autoplay loop muted playsinline></video>

		<hr />

		<h2>{content[$appLang].shadowfx || content["en"].shadowfx}</h2>
		<img src={shadows_arrollo_iso} alt="Projected shadows isometric" />
		<img src={shadows_arrollo_top} alt="Projected shadows top view" />
	</div>

	<span slot="description">
		{@html content[$appLang].descHTML || content["en"].descHTML}
	</span>
</PreviewTemplate>

<style>
	video {
		width: 100%;
	}

	img {
		margin-bottom: 1em;
	}
</style>
