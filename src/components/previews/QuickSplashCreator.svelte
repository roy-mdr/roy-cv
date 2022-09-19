<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_qsc from '../../assets/projects/qsc.jpg';

	const skills = [
		"autoit"
	]

	const content = {
		es: {
			title: "Quick Splash Creator (2012-2018)",
			descHTML: `
				<p>Aplicación para crear pantallas de splash a cualquier aplicación <i>.exe</i> o <i>.bat</i> en Windows.</p>
			`,
		},
		en: {
			title: "Quick Splash Creator (2012-2018)",
			descHTML: `
				<p>App for creating splash screens for any <i>.exe</i> or <i>.bat</i> file in Windows.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/roy-mdr/splash-creator" technologies={skills}>
	<div slot="preview">
		<img src={img_qsc} alt="Quick Splash Creator">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>