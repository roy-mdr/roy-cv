<script lang="ts">
	import { expoOut } from "svelte/easing";
	import "external-svg-loader";

	import { prevProj } from "../stores/previewing.js";
	import { appLang } from "../stores/appState.js";
	import Skill from "./Skill.svelte";

	export let title: string;
	export let link = "";
	export let technologies = [];

	const content = {
		es: {
			btnTxt: "VER PROYECTO",
			btnShort: "¡IR!",
			shareTxt: "¡Mira este proyecto!",
		},
		en: {
			btnTxt: "GO TO PROJECT",
			btnShort: "GO!",
			shareTxt: "Checkout this project!",
		},
		de: {
			btnTxt: "",
			btnShort: "",
			shareTxt: "",
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

	function shareProj() {
		navigator.share({
			title: title,
			text: `${content[$appLang].shareTxt}\n`,
			url: window.location.href,
		});
	}

	function closeProj() {
		$prevProj = "";
		history.pushState(
			"",
			document.title,
			window.location.pathname + window.location.search,
		);
	}
</script>

<div in:drop={{ duration: 500 }} class="container-wrapper">
	<div class="top-bar">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="close-btn" on:click={() => closeProj()}>
			<svg
				data-src="https://s2.svgbox.net/hero-outline.svg?ic=chevron-left"
				width="24"
				height="24"
				color="var(--carpet)"
			/>
			<span>Back</span>
		</div>
		<div class="action-btns">
			<button class="share-btn" on:click={shareProj}>
				<svg
					data-src="https://s2.svgbox.net/materialui.svg?ic=share"
					width="24"
					height="24"
					color="var(--mid)"
				/>
			</button>
			{#if link !== ""}
				<a
					href={link}
					target="_blank"
					class="go-btn"
					style="margin-right: 0.5em;"
				>
					{content[$appLang].btnShort || content["en"].btnShort}
				</a>
			{/if}
		</div>
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
						class="go-btn"
						style="margin-top: 2em;"
						in:drop={{ duration: 1500 }}
					>
						{content[$appLang].btnTxt || content["en"].btnTxt}
					</a>
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

	.container-wrapper .top-bar {
		background-color: var(--main-text);
		border-bottom: 2px solid var(--carpet);
		display: flex;
		color: var(--carpet);
		align-items: center;
		justify-content: space-between;
	}

	.container-wrapper .top-bar .close-btn {
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.container-wrapper .top-bar .close-btn svg {
		padding: 1em;
	}

	.container-wrapper .top-bar .close-btn span {
		opacity: 0;
	}

	.container-wrapper .top-bar .close-btn:hover span {
		opacity: 1;
	}

	.container-wrapper .top-bar .action-btns {
		display: flex;
		align-items: center;
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

	.share-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		text-decoration: none;
		padding: 0.5em 1em;
		background-color: transparent;
		color: var(--mid);
		width: max-content;
		transition: background-color var(--speed-normal);
	}

	.go-btn {
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
		width: max-content;
		transition:
			background-color var(--speed-normal),
			color var(--speed-normal);
	}

	.skillset {
		display: flex;
		flex-wrap: wrap;
	}
</style>
