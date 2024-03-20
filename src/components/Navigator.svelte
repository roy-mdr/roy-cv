<script>
	import "external-svg-loader";

	import svgRoy from "../assets/icons/roy.svg";

	import { appTheme, appLang, appProfile } from '../stores/appState.js';

	const content = {
		es: {
			presentation: "Inicio",
			languages: "Idiomas",
			education: "Educación",
			experience: "Experienca",
			projects: "Proyectos",
			skills: "Habilidades",
			references: "Referencias",
			contact: "Contacto",
		},
		en: {
			presentation: "Start",
			languages: "Languages",
			education: "Education",
			experience: "Experience",
			projects: "Projects",
			skills: "Skills",
			references: "Reference",
			contact: "Contact",
		},
		de: {
			presentation: "",
			languages: "",
			education: "",
			experience: "",
			projects: "",
			skills: "",
			references: "",
			contact: "",
		},
	}

	function toggleTheme() {
		switch ($appTheme) {

			case 'light':
				$appTheme = 'dark'; // appTheme.set('dark');
				break;

			case 'dark':
				$appTheme = 'blue'; // appTheme.set('blue');
				break;

			case 'blue':
				const chance = Math.random();
				if (chance < 0.10) {
					// 10% chance of being here
					$appTheme = 'backrooms'; // appTheme.set('vapor');
				} else {
					$appTheme = 'vapor'; // appTheme.set('vapor');
				}
				break;

			case 'vapor':
				$appTheme = 'light'; // appTheme.set('light');
				break;

			case 'backrooms':
				$appTheme = 'light'; // appTheme.set('light');
				break;
		}

	}

</script>



<div class="navigator vertical">
	<div class="vertical end-border">
		<div style="align-items: center;">
			<svg
				data-src={svgRoy}
				class="roy-logo"
				width="2em"
				height="2em"
				color={"#"}
			></svg>
		</div>
		<button on:click={() => { $appLang = 'en'}} class:current={$appLang == 'en'}>EN <svg data-src="https://s2.svgbox.net/materialui.svg?ic=translate" width="16" height="16" color={"#"}></svg></button>
		<button on:click={() => { $appLang = 'es'}} class:current={$appLang == 'es'}>ES <svg data-src="https://s2.svgbox.net/materialui.svg?ic=translate" width="16" height="16" color={"#"}></svg></button>
		<!-- <button on:click={() => { $appLang = 'de'}} class:current={$appLang == 'de'}>DE <svg data-src="https://s2.svgbox.net/materialui.svg?ic=translate" width="16" height="16" color={"#"}></svg></button> -->
	</div>
	<div class="horizontal end-border" style="justify-content: center;">
		<a href="https://www.linkedin.com/in/rodrigo-mart%C3%ADnez-del-r%C3%ADo-363a7424b/" target="_blank"><svg data-src="https://s2.svgbox.net/social.svg?ic=linkedin" width="16" height="16" color={"#"}></svg></a>
		<a href="https://github.com/roy-mdr" target="_blank"><svg data-src="https://s2.svgbox.net/social.svg?ic=github" width="16" height="16" color={"#"}></svg></a>
		<a href="mailto://roy.mdr.mx@gmail.com" target="_blank"><svg data-src="https://s2.svgbox.net/octicons.svg?ic=mail-bold" width="16" height="16" color={"#"}></svg></a>
		<!-- <a href="/">- instagram? xD</a> -->
	</div>
	<div class="end-border">
		<button on:click={toggleTheme} style="text-align: center; align-items: center; justify-content: center;">— <svg data-src="https://s2.svgbox.net/materialui.svg?ic=lightbulb" width="16" height="16" color={"#"}></svg> —</button>
	</div>
	<div class="vertical">
		<a href="#presentation">{content[$appLang].presentation || content['en'].presentation}</a>
		<a href="#education">{content[$appLang].education || content['en'].education}</a>
		<a href="#languages">{content[$appLang].languages || content['en'].languages}</a>
		<a href="#experience">{content[$appLang].experience || content['en'].experience}</a>
		<a href="#projects">{content[$appLang].projects || content['en'].projects}</a>
		<a href="#skills">{content[$appLang].skills || content['en'].skills}</a>
		<a href="#references">{content[$appLang].references || content['en'].references}</a>
		<a href="#contact">{content[$appLang].contact || content['en'].contact}</a>
	</div>
</div>



<style>
	.navigator {
		/* width: max-content; */
		max-width: 240px;
		position: sticky;
		top: 2em;
		/* height: 100%; */
		/* font-size: 12px; */
		justify-content: space-between;
		border-right: 3px solid var(--background);
		background-color: var(--carpet);
		margin: 2em 0 2em 2em;
		transition:
			background-color var(--speed-normal),
			border-color var(--speed-normal);
		z-index: 1;
	}

	svg.roy-logo {
		fill: var(--mid);
		margin: 1em 0.5em;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	.navigator a,
	.navigator button {
		background-color: var(--carpet);
		text-align: right;
		/* color: var(--main-text); */
		color: var(--mid);
		transition: all var(--speed-normal);
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.navigator .vertical a,
	.navigator .vertical button {
		padding: 0.25em 1em 0.25em 1em;
	}

	.navigator .horizontal a,
	.navigator .horizontal button {
		padding: 0.25em;
	}

	.navigator a:hover,
	.navigator button:hover {
		color: var(--carpet);
		background-color: var(--main-text);
	}

	.navigator a svg,
	.navigator button svg {
		margin: 4px;
	}

	.horizontal {
		display: flex;
		flex-direction: row;
	}

	.vertical {
		display: flex;
		flex-direction: column;
	}

	.current {
		color: var(--accent) !important;
	}

	.end-border {
		border-bottom: 3px solid var(--background);
		transition: border-color var(--speed-normal);
	}
</style>