<script>
	import "external-svg-loader";

	import { appTheme } from '../stores/theme.js';

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
	<div class="vertical">
		<button on:click={toggleTheme} style="text-align: center; align-items: center; justify-content: center;">— <img src="https://s2.svgbox.net/materialui.svg?ic=lightbulb&color=999" width="16" height="16" alt="Dark/Light Mode"> —</button>
		<!-- <button on:click={toggleTheme}><svg data-src={skillSet[skill].icon} width={iconSize} height={iconSize} color={"#" + skillSet[skill].color}></svg></button> -->
		<a href="/en/">EN <img src="https://s2.svgbox.net/materialui.svg?ic=translate&color=999" width="16" height="16" alt="Select language"></a>
		<a href="/es/">ES <img src="https://s2.svgbox.net/materialui.svg?ic=translate&color=999" width="16" height="16" alt="Select language"></a>
		<a href="/de/">DE <img src="https://s2.svgbox.net/materialui.svg?ic=translate&color=999" width="16" height="16" alt="Select language"></a>
	</div>
	<hr>
	<div class="horizontal" style="justify-content: center;">
		<a href="https://www.linkedin.com/" target="_blank"><img src="https://s2.svgbox.net/social.svg?ic=linkedin&color=999" width="16" height="16" alt="My Linkedin"></a>
		<a href="https://github.com/" target="_blank"><img src="https://s2.svgbox.net/social.svg?ic=github&color=999" width="16" height="16" alt="My Github"></a>
		<a href="https://instagram.com/" target="_blank"><img src="https://s2.svgbox.net/social.svg?ic=instagram&color=999" width="16" height="16" alt="My Github"></a>
		<!-- <a href="/">- instagram? xD</a> -->
	</div>
	<hr>
	<div class="vertical">
		<a href="/#presentation">Inicio</a>
		<a href="/#education">Educación</a>
		<a href="/#experience">Experienca</a>
		<a href="/#projects">Proyectos</a>
		<a href="/#skills">Habilidades</a>
		<a href="/#languages">Idiomas</a>
		<a href="/#references">Referencias</a>
		<a href="/#contact">Contacto</a>
	</div>
</div>



<style>
	.navigator {
		/* width: max-content; */
		max-width: 240px;
		position: sticky;
		top: 2em;
		height: 100%;
		/* background-color: red; */
		/* font-size: 12px; */
		justify-content: space-between;
		background-color: var(--carpet);
		margin: 2em 0 2em 2em;
		transition: background-color var(--speed-normal);
	}

	div {
		display: flex;
		flex-direction: column;
	}

	hr {
		border: none;
		height: 1px;
		background-color: var(--mid);
		width: 100%;
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

	.navigator a img,
	.navigator button img {
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
</style>