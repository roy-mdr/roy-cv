<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	export let projKey: string;

	const content = {
		es: {
			title: "",
			descHTML: `
				<h2>Vista previa próximamente</h2>
				<p>Estoy trabajando para presentarte este proyecto de la mejor forma posible!</p>
				<p>Gracias por la espera :)</p>
			`,
		},
		en: {
			title: "",
			descHTML: `
				<h2>Preview coming soon</h2>
				<p>I'm working to present you this project in the best possible way!</p>
				<p>Thanks for waiting :)</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={projKey}>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>