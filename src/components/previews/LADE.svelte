<script lang="ts">
	import PreviewTemplate from "../PreviewTemplate.svelte";
	import { appLang } from "../../stores/appState.js";

	/* IMAGES */
	import img_lade from "../../assets/projects/lade.jpg";
	import demo_pc from "../../assets/projects/lade_demo_pc.webm";
	import demo_cel from "../../assets/projects/lade_demo_cel.webm";
	import demo_vr from "../../assets/projects/lade_demo_vr.webm";

	const skills = ["javascript", "A-Frame"];

	const content = {
		es: {
			title: "Los Archivos del Ejercito",
			descHTML: `
				<p>Sitio de experiencia virtual desrrollado para el Programa Política de Drogas (PPD).</p>
				<p>“Los archivos del ejército” es un esfuerzo por reunir sentencias que involucran serias violaciones a derechos humanos y que se ubican en el contexto de lo que conocemos como “guerra contra las drogas”.</p>
				<p>Esta página presenta una forma distinta de adentrarse en el archivo. Por medio de un recorrido virtual podrás transitar por diversos espacios en donde están archivados objetos relacionados con el ámbito castrense y los delitos cometidos por militares.</p>
			`,
		},
		en: {
			title: "The Army Files",
			descHTML: `
				<p>Virtual experience site developed for the Drug Policy Program (PPD).</p>
				<p>“The Army Files” is an effort to gather sentences that involve serious human rights violations and that are located in the context of what we know as the “war on drugs.”</p>
				<p>This page presents a different way of entering the archive. Through a virtual tour you will be able to travel through various spaces where objects related to the military field and crimes committed by the military are archived.</p>
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
	link="https://losarchivosdelejercito.com/"
	technologies={skills}
>
	<div slot="preview">
		<img src={img_lade} alt="LSHD//DRMS" />
		<div class="f-shrink">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video autoplay loop muted src={demo_pc} />
			<!-- svelte-ignore a11y-media-has-caption -->
			<video autoplay loop muted src={demo_vr} />
			<!-- svelte-ignore a11y-media-has-caption -->
			<video autoplay loop muted src={demo_cel} />
		</div>
	</div>
	<span slot="description"
		>{@html content[$appLang].descHTML || content["en"].descHTML}</span
	>
</PreviewTemplate>

<style>
	.f-shrink {
		margin-top: 1em;
		display: inline-flex;
		justify-content: space-between;
	}

	.f-shrink video {
		/* flex-shrink: 1; */
		width: 32%;
	}
</style>
