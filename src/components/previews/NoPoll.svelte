<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';

	/* IMAGES */
	import img_project_map from '../../assets/projects/control_api.jpg';

</script>



<PreviewTemplate title="Pub Sub Server + Control API" link="https://github.com/roy-mdr/es-web-notify">
	<div slot="preview">
		<img src={img_project_map} alt="Project Map">
	</div>
	<span slot="description">
		<p>Servidor pub-sub para notificaciones en tiempo real (ab)usando HTTP Streaming.</p>
		<p>Realizado antes de que conociera protocolos como MQTT y posteriormente adoptando ciertas características.</p>
		<p>Actualmente en uso para control de dispositivos IoT (test) y envío de eventos en tiempo real para Estudio Sustenta.</p>
	</span>
</PreviewTemplate>



<style>
</style>