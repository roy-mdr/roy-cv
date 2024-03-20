<script lang="ts">
	import { expoOut } from "svelte/easing";
	import "external-svg-loader";

	import { prevProj } from "../stores/previewing.js";
	import { appLang } from "../stores/appState.js";
	import Skill from "./Skill.svelte";

	export let title: string;
	export let link = "";
	export let technologies = [];
	export let buttonText = "";

	const content = {
		es: {
			btnTxt: "VER PROYECTO",
		},
		en: {
			btnTxt: "GO TO PROJECT",
		},
		de: {
			btnTxt: "",
		},
	};

	function drop(node, { duration }) {
		const fromHeight = 10;
		return {
			duration,
			css: (t) => {
				const eased = expoOut(t);
				return `
					opacity: ${eased};
					translate: 0 ${-fromHeight + eased * fromHeight}px;
				`;
			},
		};
	}

	function closeProj() {
		$prevProj = "";
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
</script>

<div in:drop={{ duration: 500 }} class="container-wrapper">
	<div class="close-bar">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg
			data-src="https://s2.svgbox.net/hero-outline.svg?ic=chevron-left"
			width="24"
			height="24"
			color="var(--carpet)"
			class="close"
			on:click={() => closeProj()}
		/>
		<span>Back</span>
	</div>
	<div class="container">

		<h1 class="title">{title}</h1>
		<div class="center" in:drop={{ duration: 1000 }}>
			<div class="content">
				<slot name="preview" class="preview" />
				<slot name="description" class="description" />
				<div class="skillset">
					{#each technologies as skill}
					<Skill {skill} />
					{/each}
				</div>
				{#if link !== ""}
				<a
				href={link}
				target="_blank"
				class="btn"
				in:drop={{ duration: 1500 }}
				>{buttonText ||
						content[$appLang].btnTxt ||
						content["en"].btnTxt}</a
				>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.container-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.container-wrapper .close-bar {
		background-color: var(--main-text);
		border-bottom: 2px solid var(--carpet);
		display: flex;
		color: var(--carpet);
		align-items: center;
	}

	.container-wrapper .close {
		padding: 1em;
		cursor: pointer;
	}

	.container-wrapper span {
		display: none;
	}

	.container-wrapper .close:hover + span {
		display: block;
	}

	.container {
		background-color: var(--main-text);
		color: var(--carpet);
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
		/* flex-flow: column; */
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
		/* height: 100%; */
		flex-grow: 1;
		/* flex: 0 1 auto; */
	}

	.content {
		min-height: 0;
		max-width: 600px;
		padding: 2em;
	}

	.content :global(img) {
		width: 100%;
		display: block;
	}

	.content :global(a) {
		text-decoration: underline;
	}

	.btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		text-decoration: none;
		padding: 0.5em 1em;
		/* word-wrap: break-word; */
		/* word-break: break-all; */
		background-color: var(--accent);
		color: var(--main-text);
		/* width: min-content; */
		font-weight: bold;
		margin-top: 2em;
		width: max-content;
		transition: background-color var(--speed-normal),
			color var(--speed-normal);
	}

	.skillset {
		display: flex;
		flex-wrap: wrap;
	}
</style>
