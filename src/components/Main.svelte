<script>
	import pPic from '../assets/pp_color.jpg';
	import vwStatue from '../assets/helios.jpg';
	import brEntity from '../assets/entity.jpg';
	import imgVoid from '../assets/void_bw.jpg';
	import imgVapor from '../assets/vapor.jpg';
	import imgBackroom from '../assets/backroom.jpg';
	import PrevProjBtn from './PrevProjBtn.svelte';
	import Skill from './Skill.svelte';

	import { appTheme } from '../stores/theme.js';
	import { prevProj } from '../stores/previewing.js';
</script>



<main>
	<section id="presentation" style="padding-top: 0;">
		{#if $appTheme == 'vapor'}
		<img src={imgVapor} alt="Cover Pic" style="width: 100%; display: block;">
		{:else if $appTheme == 'backrooms'}
		<img src={imgBackroom} alt="Cover Pic" style="width: 100%; display: block;">
		{:else}
		<img src={imgVoid} alt="Cover Pic" style="width: 100%; display: block;">
		{/if}
		<div class="my-name">
			<!-- <img src={pPic} alt="Foto de perfil" width="100px" height="100px"> -->
			{#if $appTheme == 'vapor'}
			<h1>リサフランク420 / 現代のコンピュー</h1>
			{:else if $appTheme == 'backrooms'}
			<h1>Ȟ̷̬̻̤̼͔̖̼̮̯̮͖̟̳͒̀̎͆͂̍̂͊͝Ẻ̸̛͍̑̏̊̿͌̍̈́͌̀̾̚͝͝L̷̛̘̰̫̱̲̝͖̦̜͚͓̾͛̑̔́̊̆́͆͂̚L̶̟̲͖̣̣͛̇̀͋͆͑̎Õ̷̺̬̬̖̻̫̀͌̌͗̀̉́̃͐͗́̋̑̕͜?̸͙̥̽̏̈́̽͋́͋̄̈̆̕͠͝ ̶̖̭̟̮̠̝̯̝͙̘̳̽͂̂̌̑̐̐̏̇͗̀̎͒̚͠C̶̢͙̜̮̠̤̰̟̯̞̹͉̹̾͒̓̇̄̇͛̆̐͘̚͘͝A̷̢̞̪̩͙̗̯̹̅͆̈́̊̀̓́̂̿̃͒̑̑͘̕N̴̢͇͕̗̫͚͕̺̙̗̮̳̉̈̏̑͌ͅ ̴̛̛̲͚̬̃͛̀̄͊̔̈̕̕͘͝A̸̺̙̱̦̲̜̣̱͋̔̒͝͝Ǹ̷̛̺̹̲͉̀̈́͗̐̆̈̅̓̄̚͝͠Ÿ̸̛̞̭̱̗͙̫̭̘̙̺̗͎͍́͂̓͊̚͝͠B̷̢̲̼̗̣̼̩̤̠̭̓̉̄̀͐̌̕O̶̫̺̺͈̺̻͋̒̍̋̑͛̾̇͗̐̃̇͝͝D̷͎̜̮͐̈́̔̚͝Y̶̨̛̰̺͓̱̱̳͇̙̱̊͋̔͂̓̿͛͘̚ ̸̤͇̞̩̦̻̿͛͑̽̇͌̾̃̀͜͠H̷͈̫̪̥͑͂̐̈́̊̈́̍͛̇͂̎͗̔͝͝E̷̳̱͚͒̿̑̏͌̏͗̇̑̋̈́̈͂͠A̸̰͈̘̓̐͋̕̚ͅR̶̫̂̎͊̅͛̋̊̿̆́̃͘̕͠͠ͅ ̸̢̛̳̙̙̟̝̘̪̘̤̺̠̼̼͂̂͠U̸̡̧̘̭̭̝͎̣͕͓̗̩̿̈̋͂̃̄͆͋̋̈̎̚͜͝͠Ș̶̨̨̳̰̝̗̝̭̲̾̍͆̉?̸̙̲̈́͗͆̈́̈́̍̐́̈́</h1>
			{:else}
			<h1>Rodrigo <wbr>Martínez <wbr>Del Río</h1>
			{/if}
		</div>

		<div class="pad light">
			{#if $appTheme == 'vapor'}
			<img src={vwStatue} alt="Foto de perfil" width="150px" height="150px" class="p-pic">
			{:else if $appTheme == 'backrooms'}
			<img src={brEntity} alt="Foto de perfil" width="150px" height="150px" class="p-pic">
			{:else}
			<img src={pPic} alt="Foto de perfil" width="150px" height="150px" class="p-pic">
			{/if}
			<h2>Presentación</h2>
			<i>
				<p>Arquitecto, web dev y amante de la música.</p>
				<p>Me apasiona encontrar puntos de fusión entre mis intereses y desarrollar proyectos creativos que desafíen el estado de lo tradicional, buscando la incorporación y creación de tecnologías sin extraviar la sensibilidad.</p>
			</i>
			<div style="display: flex; justify-content: center;">
				<a href="/" class="btn cta"><b>Descargar CV:</b> Perifl Arquitecto</a>
				<a href="/" class="btn cta"><b>Descargar CV:</b> Perifl Desarrollador</a>
				<a href="/" class="btn cta"><b>Descargar CV:</b> Perifl Productor de Audio</a>
			</div>
		</div>

		<h3>A futuro...</h3>
		<ul>
			<li>Desarrollo de la etapa de seguimiento (post-entrega) de obra arquitectónica y reintegración al ciclo de diseño.</li>
			<li>Desarrollo de herramientas para el método de diseño arquitectónico y urbano.</li>
			<li>Innovación en tecnologías de Internet of Things, análisis de datos e inteligencia artificial.</li>
			<li>Desarrollo de proyectos espaciales, audiovisuales y sensoriales.</li>
		</ul>

		<div>
			<button>Ver todo</button>
			<button>Filtrar: Perifl Arquitecto</button>
			<button>Filtrar: Perifl Desarrollador</button>
			<button>Filtrar: Perifl Productor de Audio</button>
		</div>

	</section>

	<section id="education">
		<h2>Educación</h2>
		<ul>
			<li><PrevProjBtn open="infonavit2021" />Grado de Arquitectura en la Universidad Autónoma de Aguascalientes (2016-2021) promedio 9.6/10</li>
			<li><PrevProjBtn open="infonavit2021" />Estudios en la Escuela Técnica Superior de Arquitectura de la Universidad de Granada en Granada, España. (2019) con un par de materias sobresaliente?</li>
		</ul>

		<h3>LOGROS</h3>
		<ul>
			<li><PrevProjBtn open="infonavit2021" />Equipo ganador 1er lugar nacional Concurso Infonavit 2020</li>
			<li><PrevProjBtn open="infonavit2021" />Desempeño sobresaliente en examen nacional de egreso arquitectura EGEL 2021</li>
			<li><PrevProjBtn open="infonavit2021" />Mención honorífica por desempeño académico en la Universidad Autónoma de Aguascalientes</li>
		</ul>

		<h3>CURSOS EXTRACURRICULARES</h3>
		<ul>
			<li><PrevProjBtn open="infonavit2021" />Post-producción de audio y video certificación Adobe en Masters no se qué (2012)</li>
			<li><PrevProjBtn open="infonavit2021" />Curso de producción, mezcla y master musical en Pop Music Ags (2015)</li>
			<li><PrevProjBtn open="infonavit2021" />Cerámica Landelof? ;0</li>
		</ul>
	</section>

	<section id="experience">
		<h2>Experiencia</h2>

		<h3>Estudio Sustenta Arq. (desde 2016)</h3>
		<ul>
			<li>Residente de obra</li>
			<li>Levantamientos topográficos (dron + fotogrametría + estación total)</li>
			<li>Proyectista y dibujante</li>
			<li>Modelado 3D, render y realidad virtual</li>
			<li>Desarrollador de sistemas software / web</li>
			<li>Administrador de red</li>
			<ul>
				<li>Administración de equipo (PC + servidor propio + NAS)</li>
				<li>Administración de routers (DHCP, DNS, Puertos, etc.)</li>
				<li>Administración de proxys y reverse-proxys</li>
				<li>Administración de paquetes y Docker</li>
			</ul>
		</ul>

		<h3>Pozas Arq. (SPGG 2018)</h3>
		<ul>
			<li>Diseño ejecutivo de mobiliario residencial</li>
		</ul>

		<h3>Universidad Autónoma de Aguascalientes</h3>
		<ul>
			<li>Capacitación de visualización arquitectónica en realidad virtual</li>
			<li>Profesor asistente en Diseño Arquitectónico II (2021)</li>
			<li>Profesor asistente en Metodología del Diseño II (2022)</li>
			<li>Participante en proyecto de renovación del método de diseño arquitectónico de la UAA</li>
		</ul>
	</section>

	<section id="projects">
		<h2>Proyectos</h2>

		<h3>Arquitectura</h3>
		<div class="proj-container">
			<div class="project noselect" on:click={() => $prevProj = '08-final'}>Edificio multi.</div>
			<div class="project noselect" on:click={() => $prevProj = '08-hornedo'}>Remod. Hornedo</div>
			<div class="project noselect" on:click={() => $prevProj = 'primo-verdad'}>Remod. PV.</div>
			<div class="project noselect" on:click={() => $prevProj = '10-final'}>Trabajo final</div>
			<div class="project noselect" on:click={() => $prevProj = 'infonavit-proj'}>Infonavit</div>
			<div class="project noselect" on:click={() => $prevProj = 'es-amehos2'}>AMEHOS 2</div>
		</div>

		<h3>Software / Hardware</h3>
		<div class="proj-container">
			<div class="project noselect" on:click={() => $prevProj = '2521'}>Website 2521</div>
			<div class="project noselect" on:click={() => $prevProj = 'vigilost'}>VigiLost</div>
			<div class="project noselect" on:click={() => $prevProj = 'splash-creator'}>Splash Creator</div>
			<div class="project noselect" on:click={() => $prevProj = 'lshdrms'}>LSHD//DRMS</div>
			<div class="project noselect" on:click={() => $prevProj = 'es-web'}>Webapp + Website Estudio Sustenta</div>
			<div class="project noselect" on:click={() => $prevProj = 'vr-ctrl'}>VR Controller</div>
			<div class="project noselect" on:click={() => $prevProj = 'iot'}>IoT firmware</div>
			<div class="project noselect" on:click={() => $prevProj = 'no-poll'}>Pub-sub broker + Control API</div>
			<div class="project noselect" on:click={() => $prevProj = 'es-pcwin'}>Remote Access Tool + Protocol Handler</div>
			<div class="project noselect" on:click={() => $prevProj = 'es-proj-viz'}>Project Mapper</div>
			<div class="project noselect" on:click={() => $prevProj = 'app-gtd'}>App Getting Things Done</div>
		</div>

		<h3>Audiovisuales</h3>
		<div class="proj-container">
			<div class="project noselect" on:click={() => $prevProj = 'bluish'}>Bluish</div>
			<div class="project noselect" on:click={() => $prevProj = 'dovele'}>Dovele</div>
			<div class="project noselect" on:click={() => $prevProj = 'palmasur'}>Collab: Palmasur</div>
		</div>
	</section>

	<section id="skills">
		<h2>Habilidades</h2>

		<h3>Arquitectura</h3>
		<div class="skillset">
			<Skill skill="draw" />
			<Skill skill="word" />
			<Skill skill="excel" />
			<Skill skill="powerpoint" />
			<Skill skill="illustrator" />
			<Skill skill="photoshop" />
			<Skill skill="lightroom" />
			<Skill skill="premiere" />
			<Skill skill="indesign" />
			<Skill skill="autocad" />
			<Skill skill="revit" />
			<Skill skill="_3dsmax" />
			<Skill skill="vray" />
			<Skill skill="sketchup" />
			<Skill skill="cinema4d" />
			<Skill skill="lumion" />
			<Skill skill="twinmotion" />
			<Skill skill="arcgis" />
			<Skill skill="metashape" />
			<Skill skill="_3dzephyr" />
			<Skill skill="rhinoceros" />
			<Skill skill="grasshopper" />
			<Skill skill="ladybug" />
		</div>

		<h3>Software / Hardware</h3>
		<h4>Tecnologías</h4>
		<div class="skillset">
			<Skill skill="shell" />
			<Skill skill="git" />
			<Skill skill="github" />
			<Skill skill="docker" />
			<Skill skill="vscode" />
			<Skill skill="sublime" />
			<Skill skill="insomia" />
			<Skill skill="postman" />
			<Skill skill="markdown" />
			<Skill skill="networks" />
			<Skill skill="apis" />
			<Skill skill="design" />
		</div>

		<h4>Lenguajes</h4>
		<div class="skillset">
			<Skill skill="javascript" />
			<Skill skill="php" />
			<Skill skill="cpp" />
			<Skill skill="python" />
			<Skill skill="arduino" />
			<Skill skill="autoit" />
			<Skill skill="processing" />
			<Skill skill="java" />
		</div>

		<h4>Front End</h4>
		<div class="skillset">
			<Skill skill="xd" />
			<Skill skill="javascript" />
			<Skill skill="html" />
			<Skill skill="css" />
			<Skill skill="vue" />
			<Skill skill="svelte" />
		</div>
		<h4>Back End</h4>
		<div class="skillset">
			<Skill skill="php" />
			<Skill skill="nodejs" />
			<Skill skill="typescript" />
		</div>
		<h4>Database</h4>
		<div class="skillset">
			<Skill skill="mariadb" />
			<Skill skill="mongodb" />
			<Skill skill="mysql" />
		</div>

		<h3>Audiovisuales</h3>
		<div class="skillset">
			<Skill skill="premiere" />
			<Skill skill="audition" />
			<Skill skill="afterfx" />
			<Skill skill="abletonlive" />
			<Skill skill="studioone" />
		</div>
	</section>

	<section id="languages">
		<h2>Idiomas</h2>
		<ul>
			<li>Español (nativo)</li>
			<li>Inglés</li>
			<li>Alemán</li>
		</ul>
	</section>

	<section id="references">
		<h2>Referencias</h2>
		<ul>
			<li>:(</li>
		</ul>
	</section>

	<section id="contact">
		<h2>Contacto</h2>
		<form>
			<input type="email">
			<textarea></textarea>
		</form>
	</section>

	<footer>
		<span>roy-mdr @ 2022 | <a href="https://github.com/">View source code</a></span>
	</footer>

</main>



<style>
	main {
		background-color: var(--carpet);
		max-width: 720px;
		padding: 2em;
		margin: 2em 0 2em 0;
		transition: background-color var(--speed-normal);
	}

	footer {
		text-align: center;
		font-size: 12px;
	}

	h1 {
		letter-spacing: 0.25em;
		/* margin-top: 0; */
		margin-bottom: 1em;
	}
	
	/*
	.my-name {
		background-color: var(--main-text);
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
		color: var(--carpet);
		translate: 5em -5em;
		padding-left: 20px;
		padding-right: 20px;
		z-index: 1;
		position: absolute;
	}

	.my-name img {
		margin: 20px;
		position: absolute;
		left: 0;
		bottom: 0;
		display: block;
		border-radius: 100px;
	}

	.my-name h1 {
		margin: 20px 20px 20px 120px;
		font-weight: 100;
		letter-spacing: 0.2em;
		font-style: italic;
	}
	*/

	.p-pic {
		position: absolute;
		right: 2em;
		top: -50px;
	}

	li :global(.prev-proj) {
		opacity: 0;
	}

	li:hover :global(.prev-proj) {
		opacity: 100;
	}

	.pad {
		padding: 1em 2em;
		position: relative;
	}

	.light {
		background-color: var(--background);
		color: var(--main-text);
		transition: background-color var(--speed-normal);
	}

	.dark {
		background-color: var(--main-text);
		color: var(--carpet);
		transition: background-color var(--speed-normal);
	}

	.btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 0.5em 1em;
		/* word-wrap: break-word; */
		/* word-break: break-all; */
		background-color: var(--main-text);
		color: var(--carpet);
		/* width: min-content; */
		margin: 0.5em;
		transition: background-color var(--speed-normal), color var(--speed-normal);
	}

	.proj-container {
		display: flex;
		flex-wrap: wrap;
	}

	.project {
		cursor: context-menu;
		color: var(--carpet);
		background-color: var(--main-text);
		margin: 1px;
		padding: 0.5em 1em;
		display: block;
		/* width: max-content; */
		width: 20%;
		transition: background-color var(--speed-normal), color var(--speed-normal);
	}

	.project:hover {
		color: var(--accent);
	}

	.cta {
		color: var(--accent);
		background-color: var(--background);
		border: 2px solid var(--accent);
	}

	.skillset {
		display: flex;
		flex-wrap: wrap;
	}
</style>