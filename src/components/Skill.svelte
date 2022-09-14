<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';
	import "external-svg-loader";

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
		VanillaTilt.init(skillEl, tiltOptions);
	});

	export let skill: string;

	let iconSize: number = 32;
	let iconColor: number = 222;

	let skillSet: object = {
		apache:      {icon: "https://s2.svgbox.net/files.svg?ic=apache",              name: "Apache",      level: 0},
		arduino:     {icon: "https://s2.svgbox.net/files.svg?ic=arduino",             name: "Arduino",     level: 0.8},
		autoit:      {icon: "https://s2.svgbox.net/files.svg?ic=autoit",              name: "Autoit",      level: 0.8},
		cpp:         {icon: "https://s2.svgbox.net/files.svg?ic=cpp2",                name: "C++",         level: 0.5},
		css:         {icon: "https://s2.svgbox.net/files.svg?ic=css",                 name: "CSS",         level: 0.9},
		docker:      {icon: "https://s2.svgbox.net/files.svg?ic=docker2",             name: "Docker",      level: 0.5},
		draw:        {icon: "https://s2.svgbox.net/hero-solid.svg?ic=pencil",         name: "Drawing",     level: 0.75},
		excel:       {icon: "https://s2.svgbox.net/files.svg?ic=excel2",              name: "Excel",       level: 0.8},
		git:         {icon: "https://s2.svgbox.net/files.svg?ic=git",                 name: "Git",         level: 0.9},
		github:      {icon: "https://s2.svgbox.net/social.svg?ic=github",             name: "Github",      level: 0.8},
		graphql:     {icon: "https://s2.svgbox.net/files.svg?ic=graphql",             name: "Graphql",     level: 0.2},
		html:        {icon: "https://s2.svgbox.net/files.svg?ic=html",                name: "HTML",        level: 1},
		illustrator: {icon: "https://s2.svgbox.net/files.svg?ic=ai",                  name: "Illustrator", level: 1},
		javascript:  {icon: "https://s2.svgbox.net/files.svg?ic=js-official",         name: "Javascript",  level: 0.9},
		json:        {icon: "https://s2.svgbox.net/files.svg?ic=json",                name: "JSON",        level: 1},
		laravel:     {icon: "https://s2.svgbox.net/files.svg?ic=blade",               name: "Laravel",     level: 0.2},
		mariadb:     {icon: "https://s2.svgbox.net/files.svg?ic=mariadb",             name: "Maraidb",     level: 0.8},
		markdown:    {icon: "https://s2.svgbox.net/files.svg?ic=markdown",            name: "Markdown",    level: 1},
		mongodb:     {icon: "https://s2.svgbox.net/files.svg?ic=mongo",               name: "Mongodb",     level: 0.2},
		mysql:       {icon: "https://s2.svgbox.net/files.svg?ic=mysql",               name: "Mysql",       level: 0.8},
		nginx:       {icon: "https://s2.svgbox.net/files.svg?ic=nginx",               name: "Nginx",       level: 0.2},
		nodejs:      {icon: "https://s2.svgbox.net/files.svg?ic=node",                name: "Node Js",     level: 0.7},
		photoshop:   {icon: "https://s2.svgbox.net/files.svg?ic=photoshop",           name: "Photoshop",   level: 1},
		php:         {icon: "https://s2.svgbox.net/files.svg?ic=php3",                name: "PHP",         level: 0.7},
		powerpoint:  {icon: "https://s2.svgbox.net/files.svg?ic=powerpoint2",         name: "Powerpoint",  level: 1},
		processing:  {icon: "https://s2.svgbox.net/files.svg?ic=processing-lang",     name: "Processing",  level: 0.5},
		python:      {icon: "https://s2.svgbox.net/files.svg?ic=python",              name: "Python",      level: 0.2},
		qt:          {icon: "https://s2.svgbox.net/files.svg?ic=qml",                 name: "Qt",          level: 0.2},
		svelte:      {icon: "https://s2.svgbox.net/files.svg?ic=svelte",              name: "Svelte Js",   level: 0.8},
		typescript:  {icon: "https://s2.svgbox.net/files.svg?ic=typescript-official", name: "Typescript",  level: 0.6},
		vscode:      {icon: "https://s2.svgbox.net/files.svg?ic=vscode2",             name: "VS Code",     level: 1},
		vue:         {icon: "https://s2.svgbox.net/files.svg?ic=vue",                 name: "Vue Js",      level: 0.6},
		word:        {icon: "https://s2.svgbox.net/files.svg?ic=word2",               name: "Word",        level: 1},
		wordpress:   {icon: "https://s2.svgbox.net/social.svg?ic=wordpress",          name: "Wordpress",   level: 0.8},
	}
</script>



<div bind:this={skillEl} class="skill">
	{#if skillSet[skill]}
	<!-- <img src={skillSet[skill].icon + "&color=" + skillSet[skill].color} width={iconSize} height={iconSize} alt={skillSet[skill].name}> -->
	<svg data-src={skillSet[skill].icon} width={iconSize} height={iconSize} color={"#" + skillSet[skill].color}></svg>
	<div class="level" style="max-height: {skillSet[skill].level * 100}%;"></div>
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
		padding: 1em;
		margin: 1px;
		border: 2px solid var(--main-text);
		background-color: var(--carpet);
		transform-style: preserve-3d;
		transform: perspective(1000px);
		/* box-sizing: border-box; */
	}

	.skill svg {
		filter: saturate(0);
		display: block;
		transform: translateZ(20px);
		/* width: 32px; */
		/* height: 32px; */
	}

	.skill:hover {
		z-index: 1;
	}

	.skill:hover svg {
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
	}

	.skill:hover .level {
		height: 100% !important;
	}

	.skill .name {
		display: none;
		color: var(--carpet);
		background-color: var(--main-text);
		position: absolute;
		top: 110%;
		left: 0;
		transition: height 0.5s;
		padding: 0 0.5em;
		z-index: -1;
	}

	.skill:hover .name {
		display: block;
	}
</style>