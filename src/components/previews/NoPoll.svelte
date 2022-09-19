<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_control_api from '../../assets/projects/control_api.jpg';

	const skills = [
		"nodejs",
	]

	const content = {
		es: {
			title: "Pub Sub Server + Control API",
			descHTML: `
				<p>Servidor pub-sub para notificaciones en tiempo real (ab)usando HTTP Streaming.</p>
				<p>Realizado antes de que conociera protocolos como MQTT y posteriormente adoptando ciertas características.</p>
				<p>Actualmente en uso para control de dispositivos IoT (test) y envío de eventos en tiempo real para aplicaciones de Estudio Sustenta.</p>
			`,
		},
		en: {
			title: "Pub Sub Server + Control API",
			descHTML: `
				<p>Pub-sub server for real-time notifications (ab)using HTTP Streaming.</p>
				<p>Made before I knew about MQTT and then adopting some characteristics.</p>
				<p>Currently used for IoT control (test) and real-time events for Estudio Sustenta applications.</p>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://github.com/roy-mdr/es-web-notify" technologies={skills}>
	<div slot="preview">
		<img src={img_control_api} alt="API Flow">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>