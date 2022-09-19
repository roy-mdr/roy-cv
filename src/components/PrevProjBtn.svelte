<script lang="ts">
	import "external-svg-loader";

	export let open: string;

	function previewProject() {
		console.log(open);
	}
</script>



<div class="prev-proj" on:click={previewProject}><svg data-src="https://s2.svgbox.net/materialui.svg?ic=remove_red_eye" width="16" height="16" color={"#"}></svg></div>



<style>
	.prev-proj {
		padding: 0.25em;
		display: inline-block;
		translate: 0 6px;
		background-color: var(--main-text);
		transition: opacity var(--speed-normal), background-color var(--speed-normal);
	}

	.prev-proj svg {
		display: block;
		color: var(--carpet);
	}
</style>