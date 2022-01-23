<script>
	import { onMount } from 'svelte';

	export let codeValue;
	export let squareSize;

	let qrcode;

	onMount(() => {
		let script = document.createElement('script');
		script.src = '/js/qrcode.min.js';
		document.head.append(script);

		script.onload = function () {
            
			// @ts-ignore
			qrcode = new QRCode('qrcode', {
				text: codeValue,
				width: squareSize,
				height: squareSize,
				colorDark: '#000000',
				colorLight: '#ffffff',
			    // @ts-ignore
				correctLevel: QRCode.CorrectLevel.H
			});
		};
	});
</script>

<div class="col-12 text-center" id="qrcode" />

<style>
	#qrcode {
		height: 200x;
		margin-top: 15px;
	}
</style>
