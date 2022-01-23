<script>
	import Face from '../../scripts/api/face';
	import Layout from '../../components/app/layout.svelte';
	import { url } from '../../scripts/config';
	import { faceAuth } from '../../scripts/state'
	import Webcam from 'webcam-easy';
	import { onMount } from 'svelte';
	import SessionHelper from '../../scripts/helper/session.helper';
	
	let userid 

	onMount(async()=>{
		const user = await SessionHelper.get('user');
		userid = user.id;

	})

	

	let webcam;
	let slefie;
	

	const loadCam = async (_step = 0) => {
		step = _step;
		const webcamElement = document.getElementById('webcam');
		const canvasElement = document.getElementById('canvas');
		const snapSoundElement = document.getElementById('snapSound');
		webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
		webcam
			.start()
			.then((result) => {
				console.log('webcam started');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	onMount(async () => await loadCam());

	const refresh = () => {
		window.location.reload();
	};

	const upoadPhoto = () =>{
		if (!webcam) return;
		slefie = webcam.snap();
		webcam.stop();
		step = 1;
		Face.Validate(slefie).then(takePhoto)	
	}

	const takePhoto = () => {
		
		const script = document.createElement('script');
		script.src = '/js/face-api.min.js';
		document.head.append(script);
		script.onload = function () {
			Promise.all([
				//@ts-ignore
				faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
				//@ts-ignore
				faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
				//@ts-ignore
				faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
			]).then(async () => {
				console.log('models loaded');
				//@ts-ignore
				const ref_image = await faceapi.fetchImage(`${url}api/files/images/refrence/${userid}`);
				//@ts-ignore
				var detection1 = await faceapi
					.detectSingleFace(ref_image)
					.withFaceLandmarks()
					.withFaceDescriptor();
				//@ts-ignore
				const test_image = await faceapi.fetchImage(`${url}api/files/images/test/${userid}`);

				//@ts-ignore
				const detection2 = await faceapi
					.detectSingleFace(test_image)
					.withFaceLandmarks()
					.withFaceDescriptor();

				if (!detection1 || !detection2) {
					step == 1.5;
					return;
				}

				let distance = 0;
				//@ts-ignore
				distance = faceapi.euclideanDistance(detection1.descriptor, detection2.descriptor);
				console.log(distance);

				if (distance < 0.3) {
					step = 2;
					faceAuth.set(true);
				} else {
					step = 2.5;
				}
			});
		};
	};

	const autheniticate = async () => {
		if (!webcam) return;

		step = 2.5;
		//
	};

	const startQR = async () =>{
		const result = await loadCam(3);

	}

	let step = 0;
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Lecture Clockin</h4>
		<div class="row">
			{#if step == 0}
				<div class="col-lg-4">
					<div class="bg-white mb-4">
						<div class="row">
							<div class="col-lg-12 col-xl- my-auto text-center text-lg-left pb-4 pb-lg-0">
								<div class="p-4">
									<h3 class="text-5 mb-4 text-center">Take Selfie</h3>
									<span class=" text-center">
										The photograph taken is for authentication perposes only.The photograph will
										only be used
									</span>
									<hr class="mb-4 mx-n4" />

									<!-- svelte-ignore a11y-media-has-caption -->
									<video class="col-12" id="webcam" autoplay playsinline />
									<canvas id="canvas" class="d-none" />
									<audio id="snapSound" src="/audio/snap.mp3" preload="auto" />
									<div class="btn-group m-0 w-100 row">
										<button on:click={upoadPhoto} class="btn btn-primary btn-sm shadow-none col-12">
											<span class="mr-1">
												<i class="bx bx-time nav_icon" />
											</span> Clock In
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else if step == 1}
				<div class="col-lg-4">
					<div class="bg-white mb-4">
						<div class="row">
							<div class="col-lg-12 col-xl- my-auto text-center text-lg-left pb-4 pb-lg-0">
								<div class="p-4">
									<h3 class="text-5 mb-4 text-center">Authenting with Selfie</h3>
									<hr class="mb-4 mx-n4" />
									<img src={slefie} class="col-12" id="selfie" alt="testImage" />

									<hr class="mb-4 mx-n4" />
									<h3 class="text-5 mb-4 text-center">Prossing Photograph</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else if step == 2}
				<div class="col-lg-4">
					<div class="bg-white text-center ">
						<div class="my-4">
							<h3 class="text-5 mb-4 text-center">Recognition Result</h3>
							<hr class="mb-4 mx-n4" />
							<p class="text-success text-20 line-height-07"><i class="fas fa-check-circle" /></p>
							<p class="text-success text-8 font-weight-500 line-height-07">Success!</p>
							<p class="lead">Verification Complete</p>
						</div>
						<p class="text-3 mb-4">
							You've been successfully Authenticated , click continue for next step.
						</p>
					</div>
					<div class="btn-group m-0 w-100 row">
						<a href="/auth/qrcode/" class="btn btn-primary btn-sm shadow-none col-12">
							<span class="mr-1">
								<i class="bx bx-right-arrow-alt nav_icon" />
							</span>Continue
						</a>
					</div>
				</div>
			{:else if step == 2.5}
				<div class="col-lg-4">
					<div class="bg-white text-center ">
						<div class="my-4">
							<h3 class="text-5 mb-4 text-center">Recognition Result</h3>
							<hr class="mb-4 mx-n4" />
							<p class="text-danger text-20 line-height-07"><i class="fas fa-times-circle" /></p>
							<p class="text-danger text-8 font-weight-500 line-height-07">Faild !</p>
							<p class="lead">Verification Complete</p>
						</div>
						<p class="text-3 mb-4">
							You've not been successfully Authenticated. Invalid user detected . Please click the
							button below to try again
						</p>
					</div>
					<div class="btn-group m-0 w-100 row">
						<button on:click={refresh} class="btn btn-primary btn-sm shadow-none col-12">
							<span class="mr-1">
								<i class="bx bx-right-arrow-alt nav_icon" />
							</span>Retry
						</button>
					</div>
				</div>
			{:else if step == 1.5}
				<div class="col-lg-4">
					<div class="bg-white text-center ">
						<div class="my-4">
							<h3 class="text-5 mb-4 text-center">Recognition Result</h3>
							<hr class="mb-4 mx-n4" />
							<p class="text-danger text-20 line-height-07"><i class="fas fa-times-circle" /></p>
							<p class="text-danger text-8 font-weight-500 line-height-07">Faild !</p>
							<p class="lead">Verification Incomplete</p>
						</div>
						<p class="text-3 mb-4">
							You've not been successfully Authenticated .We could not detect your face. Please
							click the button below to try again
						</p>
					</div>
					<div class="btn-group m-0 w-100 row">
						<button on:click={refresh} class="btn btn-primary btn-sm shadow-none col-12">
							<span class="mr-1">
								<i class="bx bx-right-arrow-alt nav_icon" />
							</span>Retry
						</button>
					</div>
				</div>
			
			
			
			{/if}
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>

<svelte:head>
	<script src="/js/face-api.min.js" on:load={autheniticate}></script>
</svelte:head>
