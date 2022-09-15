<script lang="ts">
	import { expoOut } from 'svelte/easing';
	import "external-svg-loader";

	import { prevProj } from '../stores/previewing.js';

	export let title: string;
	export let link = '';
	export let buttonText = 'VER PROYECTO';

	function drop(node, { duration }) {
		const fromHeight = 10;
		return {
			duration,
			css: t => {
				const eased = expoOut(t);
				return `
					opacity: ${eased};
					translate: 0 ${-fromHeight + (eased*fromHeight)}px;
				`
			}
		};
	}
</script>



<div in:drop={{duration: 500}} class="container">
	<svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=x" width="24" height="24" color="var(--carpet)" class="close" on:click={() => $prevProj = ''}></svg>
	<h1 class="title">{title}</h1>
	<div class="center">
		<div class="content">
			<slot name="preview">
			</slot>
			<slot name="description">
			</slot>
			{#if link !== ''}
			<a href={link} target="_blank" class="btn">{buttonText}</a>
			{/if}
		</div>
	</div>
</div>



<style>
	.container {
		background-color: var(--main-text);
		color: var(--carpet);
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		/* flex-flow: column; */
	}

	.container .close {
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.container .title {
		max-width: 75%;
		margin-left: 1em;
		margin-bottom: 0;
		/* flex: 0 1 auto; */
		/* The above is shorthand for:
		flex-grow: 0,
		flex-shrink: 1,
		flex-basis: auto
		*/
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		/* flex: 0 1 auto; */
	}

	.content {
		max-width: 600px;
		margin: 2em;
	}

	.content :global(img) {
		width: 100%;
		display: block;
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
		background-color: var(--accent);
		color: var(--main-text);
		/* width: min-content; */
		font-weight: bold;
		margin: 2em 0 0 0;
		width: max-content;
		transition: background-color var(--speed-normal), color var(--speed-normal);
	}
</style>