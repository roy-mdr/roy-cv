<script lang="ts">
	import imgAkvTpl1 from "../assets/projects/archived_temples_1.jpg";
	import imgAkvTpl2 from "../assets/projects/archived_temples_2.jpg";
	import imgAkvTpl3 from "../assets/projects/archived_temples_3.jpg";
	import imgSpcBrut1 from "../assets/projects/space_brutalism_1.jpg";
	import imgSpcBrut2 from "../assets/projects/space_brutalism_2.jpg";
	import imgSpcBrut3 from "../assets/projects/space_brutalism_3.jpg";

	import vidTdShapes from "../assets/projects/td_shapes_loop.mp4";
	import vidTdSilk from "../assets/projects/td_silk_loop_bw.mp4";
	import vidTdWave from "../assets/projects/td_wave_loop_bw.mp4";

	let assets = [
		imgAkvTpl1,
		imgAkvTpl2,
		// imgAkvTpl3,
		// imgSpcBrut1,
		// imgSpcBrut2,
		// imgSpcBrut3,
		vidTdShapes,
		// vidTdSilk,
		// vidTdWave,
	];

	let randomAsset, assetType;

	let selectAsset = () => {
		randomAsset = assets[Math.floor(Math.random() * assets.length)];

		let assetExt = randomAsset.split(".").pop();

		if (
			assetExt == "jpg" ||
			assetExt == "png" ||
			assetExt == "gif" ||
			assetExt == "webp"
		) {
			assetType = "img";
		}

		if (assetExt == "mp4" || assetExt == "webm") {
			assetType = "vid";
		}
	};

	selectAsset();
</script>

<div>
	{#if assetType == "img"}
		<img src={randomAsset} alt="Welcome!" />
	{/if}

	{#if assetType == "vid"}
		<video src={randomAsset} autoplay loop muted playsinline></video>
	{/if}
</div>

<style>
	div,
	img,
	video {
		width: 100%;
		display: block;
		object-fit: cover;
		aspect-ratio: 21 / 9;
		background-color: var(--carpet);
	}
</style>
