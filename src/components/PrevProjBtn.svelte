<script lang="ts">
	export let open: string;

	function previewProject() {
		console.log(open);
	}
</script>



<div class="prev-proj" on:click={previewProject}><img src="https://s2.svgbox.net/materialui.svg?ic=remove_red_eye&color=f1f3f4" width="16" height="16" alt="Preview project"></div>



<style>
	.prev-proj {
		padding: 0.25em;
		display: inline-block;
		translate: 0 6px;
		background-color: var(--main-text);
		transition: opacity var(--speed-normal), background-color var(--speed-normal);
	}

	.prev-proj img {
		display: block;
	}
</style>