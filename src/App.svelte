<script lang="ts">
	import Navigator from './components/Navigator.svelte';
	import Main from './components/Main.svelte';
	import Previewer from './components/Previewer.svelte';

	import { appTheme } from './stores/theme.js';
</script>



<div class="app-content" class:light-theme={$appTheme == 'light'} class:dark-theme={$appTheme == 'dark'} class:blue-theme={$appTheme == 'blue'} class:vapor-theme={$appTheme == 'vapor'} class:backrooms-theme={$appTheme == 'backrooms'}>
	<Navigator />
	<Main />
	<Previewer />
</div>



<style>
	.app-content {
		display: flex;
		width: 100%;
		max-width: 1920px;
		color: var(--main-text);
		background-color: var(--background);
		transition: background-color var(--speed-normal);
	}
</style>