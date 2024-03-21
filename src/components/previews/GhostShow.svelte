<script lang="ts">
	import PreviewTemplate from '../PreviewTemplate.svelte';
	import { appLang } from '../../stores/appState.js';

	/* IMAGES */
	import img_ghost_show from '../../assets/projects/ghost_show.jpg';

	const skills = [
		"arduino",
		"metashape",
		"rhinoceros",
		"abletonlive",
		"touchdesigner"
	]

	const content = {
		es: {
			title: "Ghost Show (2023)",
			descHTML: `
				<div class="pad light" style="margin-top: 1em;">
					<p>Un evento local privado hecho posible por amigos y por mí para una celebración.</p>
					<p>Una espeluznante noche de disfraces de Halloween con películas, amigos y comida se convirtió en una pista de baile industrial con luces intermitentes y el sonido de DJ locales, desde neoperreo hasta techno industrial.</p>
				</div>
				<h2>Participación</h2>
				<p>DJ, diseño de escenario, instalación y control de iluminación.</p>
				<p>Como primer acercamiento en diseño de iluminación y buscando una alternativa a DMX, ideé un sistema que, con un presupuesto limitado y con elementos que ya tenía, podía controlar el espectáculo de luces en sincronía con la música usando Ableton Live para la programación de escenas y control manual.</p>
				<ul>
					<li>Firmware personalizado para la placa Wifi ESP8266 con integración MQTT y UDP.</li>
					<li>Dispositivos "MAX for Live" personalizados para convertir y enviar datos MIDI a los controladores Wifi.</li>
					<li>Levantamiento y modelado 3D para escenografía en Metashape y Rhinoceros.</li>
					<li>Modelo de previsualización en vivo en Touchdesigner para programar las escenas desde casa y probar.</li>
					<li>Programación de sets en Ableton Live e interfaz con controladores MIDI.</li>
				</ul>
			`,
		},
		en: {
			title: "Ghost Show (2023)",
			descHTML: `
				<div class="pad light" style="margin-top: 1em;">
					<p>A private local event made possible by friends and I for a celebration.</p>
					<p>A spooky halloween costume night with movies, friends and food became an industrial dance floor with flashing lights and the sound of local DJs, from neo-perreo to industrial techno.</p>
				</div>
				<h2>Participation</h2>
				<p>DJ, stage designer, light installation and control.</p>
				<p>As my first approach in light design and looking for a DMX alternative, I ideated a system that, on a budget and with the things I already had, was able to control the light show in sync with the music using Ableton Live for the scene programming and manual control.</p>
				<ul>
					<li>Custom firmware for the ESP8266 Wifi board with MQTT and UDP integration.</li>
					<li>Custom MAX for Live devices to convert and send the MIDI data to the Wifi controllers.</li>
					<li>3D survey and modeling for stage designing in Metashape and Rhinoceros.</li>
					<li>Live previsualization model in Touchdesigner for programming the scenes from home and testing.</li>
					<li>Ableton Live set programming and interfacing with MIDI controllers.</li>
				</ul>
			`,
		},
		de: {
			title: "",
			descHTML: ``,
		},
	};

</script>



<PreviewTemplate title={content[$appLang].title || content['en'].title} link="https://www.youtube.com/watch?v=i21vv_sLhZY" technologies={skills}>
	<div slot="preview">
		<img src={img_ghost_show} alt="IoT GUI">
	</div>
	<span slot="description">{@html content[$appLang].descHTML || content['en'].descHTML}</span>
</PreviewTemplate>



<style>
</style>