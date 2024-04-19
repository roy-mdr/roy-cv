<script lang="ts">
	import { onMount } from 'svelte';

	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import vid_gym_school from '../../assets/projects/Gym&School_small.mp4';
	import img_yolihuani from '../../assets/projects/yolihuani.png';
	import img_space_brutalism_1 from '../../assets/projects/space_brutalism_1.jpg';
	import img_space_brutalism_2 from '../../assets/projects/space_brutalism_2.jpg';
	import img_space_brutalism_3 from '../../assets/projects/space_brutalism_3.jpg';
	import img_archived_temples_1 from '../../assets/projects/archived_temples_1.jpg';
	import img_archived_temples_2 from '../../assets/projects/archived_temples_2.jpg';
	import img_archived_temples_3 from '../../assets/projects/archived_temples_3.jpg';

	let gymSchoolVid;

	onMount(() => {
		// Start video on an interesting part... not the title
		gymSchoolVid.addEventListener('loadedmetadata', (ev) => {
			ev.target.currentTime = 5.5;
		}, false);
	});

	const skills = [
		"_3dsmax",
		"vray",
		"sketchup",
		"rhinoceros",
		"photoshop",
	]

	const content = {
		es: {
			title: "Modelado y renderizado",
			descHTML: ``,
		},
		en: {
			title: "Modeling & rendering",
			descHTML: ``,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="" technologies={skills}>
	<div slot="preview">
		<h2>Unileão Gym and School</h2>
		<video src={vid_gym_school} autoplay loop muted playsinline bind:this={gymSchoolVid}></video>

		<hr>

		<h2>Yolihuani</h2>
		<img src={img_yolihuani} alt="Render Yolihuani">

		<hr>

		<h2>Space Brutalism</h2>
		<img src={img_space_brutalism_1} alt="Archived Temples 1">
		<img src={img_space_brutalism_2} alt="Archived Temples 2">
		<img src={img_space_brutalism_3} alt="Archived Temples 3">

		<hr>

		<h2>Archived Temples</h2>
		<img src={img_archived_temples_1} alt="Space Brutalism 1">
		<img src={img_archived_temples_2} alt="Space Brutalism 2">
		<img src={img_archived_temples_3} alt="Space Brutalism 3">
	</div>

	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
	video {
		width: 100%;
	}

	img {
		margin-bottom: 1em;
	}
</style>