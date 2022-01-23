<script>
	import Layout from '../../components/app/layout.svelte';
	import QrScanner from 'qr-scanner';
	import { url } from '../../scripts/config';
	import { faceAuth } from '../../scripts/state';
	import QRcodes from '../../scripts/api/qrcodes'
	import Lession from '../../scripts/api/lessions'
	import Staff from '../../scripts/api/qrcodes';
	import Units from '../../scripts/api/lessions';

	import { onMount } from 'svelte';

	let qrScanner;
	let qrdata;
	let classDetails;
	let lectureDetails, unitDetais, staffDetails;
	let userid = '44444';
	let step = 0;

	const loadCam = async () => {
		step = 0;
		const videoElement = document.getElementById('webcam');
		const snapSoundElement = document.getElementById('snapSound');
		QrScanner.WORKER_PATH = '/js/qr-scanner-worker.min.js';
		//@ts-ignore
		qrScanner = new QrScanner(videoElement, async (result) => {
			//@ts-ignore
			snapSoundElement.play();
			qrdata = result;
			classDetails = await QRcodes.Get(result);
			lectureDetails = await Lession.Get(classDetails.lesson);
			unitDetais =  await Units.Get(lectureDetails.unit);
			staffDetails =  await Staff.Find(lectureDetails.staff);
			step = 1;
		});
		qrScanner.start();
		
	};
	onMount(async () => await loadCam());



	const refresh = async () => {
		
	};

	

	

	

	
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">QR Verification</h4>
		<div class="row">
			{#if step == 0}
				<div class="col-lg-4">
					<div class="bg-white mb-4">
						<div class="row">
							<div class="col-lg-12 col-xl- my-auto text-center text-lg-left pb-4 pb-lg-0">
								<div class="p-4">
									<h3 class="text-5 mb-4 text-center">Capture QR Code</h3>
									<span class=" text-center">
										The photograph taken is for authentication perposes only.The photograph will
										only be used
									</span>
									<hr class="mb-4 mx-n4" />

									<!-- svelte-ignore a11y-media-has-caption -->
									<video class="col-12" id="webcam" autoplay playsinline />
									<audio id="snapSound" src="/audio/snap.mp3" preload="auto" />
									
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
									<h3 class="text-5 mb-4 text-center">Start Clockin</h3>
									<hr class="mb-4 mx-n4" />
									<div class="form-row align-items-center">
										<p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Couse Name:</p>
										<p class="col-sm-8 text-3">{unitDetais.name}</p>
									</div>
									<div class="form-row align-items-center">
										<p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Couse Code:</p>
										<p class="col-sm-8 text-3">{unitDetais.code}</p>
									</div>
									<div class="form-row align-items-center">
										<p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Lecture:</p>
										<p class="col-sm-8 text-3">{staffDetails.user.firstName} {staffDetails.user.lastName}</p>
									</div>
									<div class="form-row align-items-center">
										<p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Topic:</p>
										<p class="col-sm-8 text-3">{lectureDetails.lesson.title}</p>
									</div>

									<div class="btn-group m-0 w-100 row">
										<button class="btn btn-primary btn-sm shadow-none col-12">
											<span class="mr-1">
												<i class="bx bx-user-check nav_icon" />
											</span>Clock In
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else if step == 5}
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
						<button class="btn btn-primary btn-sm shadow-none col-12">
							<span class="mr-1">
								<i class="bx bx-right-arrow-alt nav_icon" />
							</span>Continue
						</button>
					</div>
				</div>
			{/if}
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>

