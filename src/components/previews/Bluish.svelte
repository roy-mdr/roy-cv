<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_gtd_app from '../../assets/projects/bluish_banner.jpg';

	const skills = []

	const content = {
		es: {
			title: "Bluish",
			descHTML: `
				<p>Ex-integrante de Bluish, un proyecto dreampop/pop alternativo el cual ha sido premiado en distintos concursos y participado en foros como la FNSM y festival Mayo Gallo en la UAA.</p>
			`,
		},
		en: {
			title: "Bluish",
			descHTML: `
			<p>Former member of Bluish, an dreampop/alternative pop project that has been awarded in some competitions and participated in forums such as FNSM and the Mayo Gallo festival at UAA.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://www.youtube.com/watch?v=lGQhsFqVt5o" technologies={skills}>
	<div slot="preview">
		<img src={img_gtd_app} alt="LANDA">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>