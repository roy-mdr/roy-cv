<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_sensor from '../../assets/projects/sensor.jpg';

	const skills = [
		"arduino",
		"cpp",
	]

	const content = {
		es: {
			title: "App Getting Things Done",
			descHTML: `
				<p>Desarrollo de dispositivos IoT basados en chip ESP8266 para recolección de datos climáticos y de hábitat en la edificación.</p>
				<p>Puedes ver una muestra de datos en tiempo real de temperatura y humedad (por semana) en <a href="https://estudiosustenta.myds.me/test/WeMosServer/" target="_blank">este link</a>. O una semana archivada <a href="https://estudiosustenta.myds.me/test/cleanSensorData/read?file=out_round_average.json" target="_blank">aquí</a>.</p>
			`,
		},
		en: {
			title: "App Getting Things Done",
			descHTML: `
				<p>Development of IoT devices based on ESP8266 chip for collection of climatic and habitat data in buildings.</p>
				<p>You can see a working sample of real-time temperature and humidity (by week) in <a href="https://estudiosustenta.myds.me/test/WeMosServer/" target="_blank">this link</a>. Or an archived week <a href="https://estudiosustenta.myds.me/test/cleanSensorData/read?file=out_round_average.json" target="_blank">here</a>.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/search?q=user%3Aroy-mdr+es-iot" technologies={skills}>
	<div slot="preview">
		<img src={img_sensor} alt="IoT sensor">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>