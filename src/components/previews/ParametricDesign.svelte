<script lang="ts">
	import PreviewTemplate from "../PreviewTemplate.svelte";
	import { appLang } from "../../stores/appState.js";

	/* IMAGES */
	import vid_dyn_facade from "../../assets/projects/dyn_facade.mp4";
	import vid_dyn_contours from "../../assets/projects/dyn_contours.mp4";
	import shadows_arrollo_iso from "../../assets/projects/shadows_arrollo_iso-op2.gif";
	import shadows_arrollo_top from "../../assets/projects/shadows_arrollo_top-op2.gif";

	const skills = ["rhinoceros", "grasshopper"];

	const content = {
		es: {
			title: "Diseño paramétrico y herramientas",
			contours: "Datos de puntos dispersos a terreno",
			shadows: "Geometría a proyección sólida de sombras solares",
			descHTML: ``,
		},
		en: {
			title: "Parametric design and tooling",
			contours: "Sparse point data to terrain",
			shadows: "Geometry to solid Sun shadow projection",
			descHTML: ``,
		},
		de: {
			title: "",
			contours: "",
			shadows: "",
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
		<video src={vid_dyn_facade} autoplay loop muted playsinline></video>

		<hr />

		<h2>{content[$appLang].contours || content["en"].contours}</h2>
		<video src={vid_dyn_contours} autoplay loop muted playsinline></video>

		<hr />

		<h2>{content[$appLang].shadows || content["en"].shadows}</h2>
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
