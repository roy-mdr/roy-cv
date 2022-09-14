<script>
	import Default from "./previews/Default.svelte";

</script>



<div class="previewer">
	<div class="content">
		<Default />
	</div>
</div>



<style>
	.previewer {
		/* max-width: 50%; */
		width: 100%;
		position: sticky;
		top: 0px;
		height: 100vh;
		/* background-color: red; */
		transition: background-color var(--speed-normal);
	}

	.previewer .content {
		height: calc(100% - 4em);
		margin: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>