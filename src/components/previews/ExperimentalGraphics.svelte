<script lang="ts">
	import PreviewTemplate from "../PreviewTemplate.svelte";
	import { appLang } from "../../stores/appState.js";

	/* IMAGES */
	import vid_td_wave from "../../assets/projects/td_wave_loop_bw.mp4";
	import vid_td_silk from "../../assets/projects/td_silk_loop.mp4";
	import vid_td_shapes from "../../assets/projects/td_shapes_loop.mp4";

	const skills = ["touchdesigner"];

	const content = {
		es: {
			title: "Gráficos experimentales",
			descHTML: ``,
		},
		en: {
			title: "Experimental graphics",
			descHTML: ``,
		},
		de: {
			title: "",
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
		<video src={vid_td_shapes} autoplay loop muted playsinline></video>

		<video src={vid_td_wave} autoplay loop muted playsinline></video>

		<iframe
			src="https://www.youtube-nocookie.com/embed/Axlk3-T4BEE"
			title="Roy Mdr // Earth"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			style="aspect-ratio: 16 / 9;"
		></iframe>

		<video src={vid_td_silk} autoplay loop muted playsinline></video>
	</div>

	<span slot="description">
		{@html content[$appLang].descHTML || content["en"].descHTML}
	</span>
</PreviewTemplate>

<style>
	img,
	video,
	iframe {
		width: 100%;
		margin-bottom: 1em;
	}
</style>
