<script>
	import "external-svg-loader";

	import svgRoy from "../assets/icons/roy.svg";

    import { tracker } from "../lib/track";
	import { appTheme, appLang, appProfile } from "../stores/appState.js";

	function toggleTheme() {
		switch ($appTheme) {
			case "light":
				$appTheme = "dark"; // appTheme.set('dark');
				break;

			case "dark":
				$appTheme = "blue"; // appTheme.set('blue');
				break;

			case "blue":
				const chance = Math.random();
				if (chance < 0.1) {
					// 10% chance of being here
					$appTheme = "backrooms"; // appTheme.set('vapor');
				} else {
					$appTheme = "vapor"; // appTheme.set('vapor');
				}
				break;

			case "vapor":
				$appTheme = "light"; // appTheme.set('light');
				break;

			case "backrooms":
				$appTheme = "light"; // appTheme.set('light');
				break;
		}

		tracker.interaction.theme($appTheme);
	}
</script>

<div class="navigator horizontal">
	<div>
		<svg
			data-src={svgRoy}
			class="roy-logo"
			width="2em"
			height="2em"
			color={"#"}
		></svg>
	</div>
	<div class="horizontal">
		<div class="horizontal end-border">
			<button
				on:click={() => {
					$appLang = "en";
				}}
				class:current={$appLang == "en"}
			>
				EN <svg
					data-src="https://s2.svgbox.net/materialui.svg?ic=translate"
					width="16"
					height="16"
					color={"#"}
				></svg>
			</button>
			<button
				on:click={() => {
					$appLang = "es";
				}}
				class:current={$appLang == "es"}
			>
				ES <svg
					data-src="https://s2.svgbox.net/materialui.svg?ic=translate"
					width="16"
					height="16"
					color={"#"}
				></svg>
			</button>
			<!-- <button on:click={() => { $appLang = 'de'}} class:current={$appLang == 'de'}>DE <svg data-src="https://s2.svgbox.net/materialui.svg?ic=translate" width="16" height="16" color={"#"}></svg></button> -->
		</div>

		<div class="horizontal end-border" style="justify-content: center;">
			<a
				href="https://www.linkedin.com/in/rodrigo-mtz/"
				target="_blank"
			>
				<svg
					data-src="https://s2.svgbox.net/social.svg?ic=linkedin"
					width="16"
					height="16"
					color={"#"}
				></svg>
			</a>
			<a href="https://github.com/roy-mdr" target="_blank">
				<svg
					data-src="https://s2.svgbox.net/social.svg?ic=github"
					width="16"
					height="16"
					color={"#"}
				></svg>
			</a>
			<a href="mailto://roy.mdr.mx@gmail.com" target="_blank">
				<svg
					data-src="https://s2.svgbox.net/octicons.svg?ic=mail-bold"
					width="16"
					height="16"
					color={"#"}
				></svg>
			</a>
			<!-- <a href="/">- instagram? xD</a> -->
		</div>
		<button
			on:click={toggleTheme}
			style="text-align: center; align-items: center; justify-content: center;"
		>
			<svg
				data-src="https://s2.svgbox.net/materialui.svg?ic=lightbulb"
				width="16"
				height="16"
				color={"#"}
			></svg>
		</button>
	</div>
</div>

<style>
	.navigator {
		border-bottom: 3px solid var(--background);
		justify-content: space-between;
		background-color: var(--carpet);
		transition:
			background-color var(--speed-normal),
			border-color var(--speed-normal);
		margin: 1em 1em 0 1em;
		width: 100%;
	}

	svg.roy-logo {
		fill: var(--mid);
		margin: 0.5em 0 0.5em 1em;
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
		border-right: 3px solid var(--background);
		transition: border-color var(--speed-normal);
	}
</style>
