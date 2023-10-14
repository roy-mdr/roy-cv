<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';
	import "external-svg-loader";

	/* <IMAGES> */
	import svg3dsmax from '../assets/icons/3dsmax.svg';
	import svg3dzephyr from '../assets/icons/3dzephyr.svg';
	import svgAfterfx from '../assets/icons/afterfx.svg';
	import svgApache from '../assets/icons/apache.svg';
	import svgArcgis from '../assets/icons/arcgis.svg';
	import svgArduino from '../assets/icons/arduino.svg';
	import svgAudition from '../assets/icons/audition.svg';
	import svgAutocad from '../assets/icons/autocad.svg';
	import svgAutoit from '../assets/icons/autoit.svg';
	import svgCinema4d from '../assets/icons/cinema4d.svg';
	import svgCpp from '../assets/icons/cpp.svg';
	import svgCss from '../assets/icons/css.svg';
	import svgDesign from '../assets/icons/design.svg';
	import svgDocker from '../assets/icons/docker.svg';
	import svgDrawing from '../assets/icons/drawing.svg';
	import svgExcel from '../assets/icons/excel.svg';
	import svgGit from '../assets/icons/git.svg';
	import svgGithub from '../assets/icons/github.svg';
	import svgGlasses from '../assets/icons/glasses.svg';
	import svgGraphql from '../assets/icons/graphql.svg';
	import svgGrasshopper from '../assets/icons/grasshopper.svg';
	import svgHoneybee from '../assets/icons/honeybee.svg';
	import svgHtml from '../assets/icons/html.svg';
	import svgIllustrator from '../assets/icons/illustrator.svg';
	import svgIndesign from '../assets/icons/indesign.svg';
	import svgInsomia from '../assets/icons/insomia.svg';
	import svgJava from '../assets/icons/java.svg';
	import svgJavascript from '../assets/icons/javascript.svg';
	import svgJson from '../assets/icons/json.svg';
	import svgLadybug from '../assets/icons/ladybug.svg';
	import svgLaravel from '../assets/icons/laravel.svg';
	import svgLightroom from '../assets/icons/lightroom.svg';
	import svgLive from '../assets/icons/live.svg';
	import svgLumion from '../assets/icons/lumion.svg';
	import svgMariadb from '../assets/icons/mariadb.svg';
	import svgMarkdown from '../assets/icons/markdown.svg';
	import svgMetashape from '../assets/icons/metashape.svg';
	import svgMongo from '../assets/icons/mongo.svg';
	import svgMuse from '../assets/icons/muse.svg';
	import svgMysql from '../assets/icons/mysql.svg';
	import svgNetwork from '../assets/icons/network.svg';
	import svgNginx from '../assets/icons/nginx.svg';
	import svgNodejs from '../assets/icons/nodejs.svg';
	import svgPhotoshop from '../assets/icons/photoshop.svg';
	import svgPhp from '../assets/icons/php.svg';
	import svgPostman from '../assets/icons/postman.svg';
	import svgPowerpoint from '../assets/icons/powerpoint.svg';
	import svgPremiere from '../assets/icons/premiere.svg';
	import svgProcessing from '../assets/icons/processing.svg';
	import svgPython from '../assets/icons/python.svg';
	import svgQt from '../assets/icons/qt.svg';
	import svgRevit from '../assets/icons/revit.svg';
	import svgRhinoceros from '../assets/icons/rhinoceros.svg';
	import svgShell from '../assets/icons/shell.svg';
	import svgSketchup from '../assets/icons/sketchup.svg';
	import svgStudioone from '../assets/icons/studioone.svg';
	import svgSublime from '../assets/icons/sublime.svg';
	import svgSvelte from '../assets/icons/svelte.svg';
	import svgTouchdesigner from '../assets/icons/touchdesigner.svg';
	import svgTwinmotion from '../assets/icons/twinmotion.svg';
	import svgTypescript from '../assets/icons/typescript.svg';
	import svgVray from '../assets/icons/vray.svg';
	import svgVscode from '../assets/icons/vscode.svg';
	import svgVue from '../assets/icons/vue.svg';
	import svgWord from '../assets/icons/word.svg';
	import svgWordpress from '../assets/icons/wordpress.svg';
	import svgXd from '../assets/icons/xd.svg';
	/* </IMAGES> */

	let skillEl;

	const tiltOptions = {
		reverse:                true,  // reverse the tilt direction
		max:                    15,     // max tilt rotation (degrees)
		startX:                 0,      // the starting tilt on the X axis, in degrees.
		startY:                 0,      // the starting tilt on the Y axis, in degrees.
		perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
		scale:                  1.5,      // 2 = 200%, 1.5 = 150%, etc..
		speed:                  300,    // Speed of the enter/exit transition
		transition:             true,   // Set a transition on enter/exit.
		axis:                   null,   // What axis should be disabled. Can be X or Y.
		reset:                  true,   // If the tilt effect has to be reset on exit.
		easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
		glare:                  true,  // if it should have a "glare" effect
		"max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
		"glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
										// you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
		"mouse-event-element":  null,   // css-selector or link to an HTML-element that will be listening to mouse events
		"full-page-listening":  false,  // If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
		gyroscope:              true,   // Boolean to enable/disable device orientation detection,
		gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
		gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
		gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
		gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
		gyroscopeSamples:       10      // How many gyroscope moves to decide the starting position.
	};

	onMount( async () => {
		// VanillaTilt.init(skillEl, tiltOptions);
	});

	export let skill: string;
	export let level = false;

	let iconSize: number = 32;

	let skillSet: object = {
		_3dsmax:       {icon: svg3dsmax,        name: "3ds Max",                level: 0.8},
		_3dzephyr:     {icon: svg3dzephyr,      name: "3d Zephyr",              level: 0.9},
		abletonlive:   {icon: svgLive,          name: "Ableton Live",           level: 1.9},
		afterfx:       {icon: svgAfterfx,       name: "After Effects",          level: 0.4},
		apache:        {icon: svgApache,        name: "Apache",                 level: 0.6},
		apis:          {icon: svgGraphql,       name: "API experience",         level: 0.8},
		arcgis:        {icon: svgArcgis,        name: "ArcGIS",                 level: 0.3},
		arduino:       {icon: svgArduino,       name: "Arduino",                level: 0.8},
		audition:      {icon: svgAudition,      name: "Audition",               level: 0.8},
		autocad:       {icon: svgAutocad,       name: "Autocad",                level: 1.0},
		autoit:        {icon: svgAutoit,        name: "Autoit",                 level: 0.8},
		cinema4d:      {icon: svgCinema4d,      name: "Cinema 4D",              level: 0.8},
		cpp:           {icon: svgCpp,           name: "C++",                    level: 0.5},
		css:           {icon: svgCss,           name: "CSS",                    level: 0.9},
		design:        {icon: svgGlasses,       name: "Design concepts",        level: 0.8},
		docker:        {icon: svgDocker,        name: "Docker",                 level: 0.5},
		draw:          {icon: svgDrawing,       name: "Hand Drawing",           level: 0.8},
		excel:         {icon: svgExcel,         name: "Excel",                  level: 0.8},
		git:           {icon: svgGit,           name: "Git",                    level: 0.9},
		github:        {icon: svgGithub,        name: "Github",                 level: 0.8},
		graphql:       {icon: svgGraphql,       name: "Graphql",                level: 0.2},
		grasshopper:   {icon: svgGrasshopper,   name: "Grasshopper",            level: 0.7},
		html:          {icon: svgHtml,          name: "HTML",                   level: 1.0},
		illustrator:   {icon: svgIllustrator,   name: "Illustrator",            level: 1.0},
		indesign:      {icon: svgIndesign,      name: "Indesign",               level: 0.7},
		insomia:       {icon: svgInsomia,       name: "Insomia",                level: 1.0},
		java:          {icon: svgJava,          name: "Java",                   level: 0.2},
		javascript:    {icon: svgJavascript,    name: "Javascript",             level: 0.9},
		json:          {icon: svgJson,          name: "JSON",                   level: 1.0},
		ladybug:       {icon: svgLadybug,       name: "Ladybug",                level: 0.3},
		laravel:       {icon: svgLaravel,       name: "Laravel",                level: 0.2},
		lightroom:     {icon: svgLightroom,     name: "Lightroom",              level: 0.8},
		lumion:        {icon: svgLumion,        name: "Lumion",                 level: 1.0},
		mariadb:       {icon: svgMariadb,       name: "Maraidb",                level: 0.8},
		markdown:      {icon: svgMarkdown,      name: "Markdown",               level: 1.0},
		metashape:     {icon: svgMetashape,     name: "Metashape",              level: 0.9},
		mongodb:       {icon: svgMongo,         name: "Mongodb",                level: 0.2},
		muse:          {icon: svgMuse,          name: "Adobe Muse",             level: 0.9},
		mysql:         {icon: svgMysql,         name: "Mysql",                  level: 0.7},
		networks:      {icon: svgNetwork,       name: "Networks Understanding", level: 0.8},
		nginx:         {icon: svgNginx,         name: "Nginx",                  level: 0.2},
		nodejs:        {icon: svgNodejs,        name: "Node Js",                level: 0.7},
		photoshop:     {icon: svgPhotoshop,     name: "Photoshop",              level: 1.0},
		php:           {icon: svgPhp,           name: "PHP",                    level: 0.7},
		postman:       {icon: svgPostman,       name: "Postman",                level: 1.0},
		powerpoint:    {icon: svgPowerpoint,    name: "Powerpoint",             level: 1.0},
		premiere:      {icon: svgPremiere,      name: "Premiere Pro",           level: 0.7},
		processing:    {icon: svgProcessing,    name: "Processing",             level: 0.5},
		python:        {icon: svgPython,        name: "Python",                 level: 0.2},
		qt:            {icon: svgQt,            name: "Qt",                     level: 0.2},
		revit:         {icon: svgRevit,         name: "Revit",                  level: 0.2},
		rhinoceros:    {icon: svgRhinoceros,    name: "Rhinoceros",             level: 0.8},
		shell:         {icon: svgShell,         name: "Unix & CMD",             level: 0.8},
		sketchup:      {icon: svgSketchup,      name: "Sketchup",               level: 0.8},
		studioone:     {icon: svgStudioone,     name: "Studio One",             level: 0.8},
		sublime:       {icon: svgSublime,       name: "Sublime Text",           level: 0.8},
		svelte:        {icon: svgSvelte,        name: "Svelte Js",              level: 0.8},
		touchdesigner: {icon: svgTouchdesigner, name: "TouchDesigner",          level: 0.4},
		twinmotion:    {icon: svgTwinmotion,    name: "Twinmotion",             level: 1.0},
		typescript:    {icon: svgTypescript,    name: "Typescript",             level: 0.5},
		vray:          {icon: svgVray,          name: "Vray",                   level: 1.0},
		vscode:        {icon: svgVscode,        name: "VS Code",                level: 1.0},
		vue:           {icon: svgVue,           name: "Vue Js",                 level: 0.6},
		word:          {icon: svgWord,          name: "Word",                   level: 1.0},
		wordpress:     {icon: svgWordpress,     name: "Wordpress",              level: 0.8},
		xd:            {icon: svgXd,            name: "Xd",                     level: 0.6},
	}
</script>



<div bind:this={skillEl} class="skill">
	{#if skillSet[skill]}
	<!-- <img src={skillSet[skill].icon + "&color=" + skillSet[skill].color} width={iconSize} height={iconSize} alt={skillSet[skill].name}> -->
	<svg data-src={skillSet[skill].icon} width={iconSize} height={iconSize} color={"#"}></svg>
	{#if level}
	<div class="level" style="max-height: {skillSet[skill].level * 100}%;"></div>
	{/if}
	<div class="name">{skillSet[skill].name}</div>
	{:else}
	{skill}
	{/if}
</div>



<style>
	.skill {
		/* width: calc(10% - 4px); */
		cursor: context-menu;
		display: block;
		padding: 0.5em;
		margin: 1px;
		/* border: 2px solid var(--main-text); */
		/* background-color: var(--carpet); */
		/* box-sizing: border-box; */

		transform-style: preserve-3d;
		transform: perspective(1000px);
	}

	.skill svg {
		color: var(--mid);
		/* filter: saturate(0); */
		display: block;
		z-index: 1;
		/* width: 32px; */
		/* height: 32px; */
		transition: color var(--speed-normal);

		/* transform: translateZ(20px); */
	}

	.skill:hover {
		z-index: 1;
	}

	.skill:hover svg {
		color: var(--accent);
		filter: saturate(1);
	}

	.skill .level {
		background-color: var(--main-text);
		position: absolute;
		width: 100%;
		height: 0 !important;
		bottom: 0;
		left: 0;
		transition: height 0.5s;
		z-index: -1;
		/* transition: height var(--speed-normal); */
	}

	.skill:hover .level {
		height: 100% !important;
	}

	.skill .name {
		display: none;
		color: var(--carpet);
		background-color: var(--main-text);
		position: absolute;
		top: calc(100% + 2px);
		left: 0;
		padding: 0 0.5em;
		pointer-events: none;
		/* z-index: -1; */
	}

	.skill:hover .name {
		display: block;
	}
</style>