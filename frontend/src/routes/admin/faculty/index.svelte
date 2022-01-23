<script>
	import { url } from '../../../scripts/config';
	import { goto } from '$app/navigation';
	import axios from 'axios';
	axios.defaults.withCredentials = true;

	import Layout from '../../../components/admin/layout.svelte';
	import Faculty from '../../../scripts/api/faculty';
	import { onMount } from 'svelte';

	let faculties = Faculty.GetAll();

	let step = 0;
	let error;
	let faculty, code, id;

	onMount(() => {
		faculties = Faculty.GetAll();
	});

	const Add = async (data) => {
		const _faculty = {
			name: faculty,
			code: code
		};
		console.log(_faculty);

		try {
			let responce = await axios.post(url + 'api/faculties/add', _faculty);
			alert('Student Added Successfull');
			setTimeout(() => {
				// reset form
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	const Update = async (data) => {
		const _faculty = {
			name: data.name,
			code: data.code
		};

		console.log(_faculty);

		try {
			let responce = await axios.post(url + 'api/faculty/update', _faculty);
			alert('Student Added Successfull');
			setTimeout(() => {
				// reset form
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	const Remove = async (data) => {
		const _faculty = {
			name: data.name,
			code: data.code
		};

		console.log(_faculty);

		try {
			let responce = await axios.post(url + 'api/faculty/add', _faculty);
			alert('Student Added Successfull');
			setTimeout(() => {
				// reset form
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	};

	const showNew = () => {
		step = 2;
		faculty = '';
		code = '';
		id = '';
	};

	const showUpdate = () => {
		step = 1;
	};
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Faculty</h4>

		<div class="row">
			<div class="col-lg-8">
				<div class="col-sm-12 text-right">
					<button on:click={() => (step = 2)} class="btn btn-primary btn-sm"
						><i class="bx bx-plus nav_icon" /> Add Faculty</button
					>
				</div>
				<!-- All Transactions
        ============================================= -->
				<div class="bg-white mb-4">
					<h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Facultys</h3>
					<!-- Title
          =============================== -->
					<div class="transaction-title py-2 px-4">
						<div class="row">
							<div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
							<div class="col col-sm-7">Faculty Details</div>
							<div class="col-auto col-sm-4 d-none d-sm-block text-center">Faculty</div>
						</div>
					</div>
					<div class="notifications-list">
						{#await faculties then _faculties}
							{#each _faculties as _faculty}
								<div class="transaction-item px-4 py-3" on:click={showUpdate}>
									<div class="row align-items-center flex-row">
										<div class="col-2 col-sm-1 text-center">
											<span class="d-block text-4 font-weight-300">24</span>
											<span class="d-block text-1 font-weight-300 text-uppercase">JAN</span>
										</div>
										<div class="col col-sm-7">
											<span class="d-block text-4">{_faculty.name}</span>
											<span class="text-muted">{_faculty.code}</span>
										</div>
										<div class="col-auto col-sm-4 d-none d-sm-block text-center text-3">
											<span class="text-nowrap"> {_faculty.code} </span>
										</div>
									</div>
								</div>
							{/each}
						{/await}
					</div>

					<!-- Transaction List End -->

					<!-- Transaction Item Details Modal End -->

					<!-- Pagination
          ============================================= -->
					<!-- <ul class="pagination justify-content-center mt-4 mb-0">
						<li class="page-item disabled">
							<a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left" /></a>
						</li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item active">
							<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
						</li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">
							......
						</li>
						<li class="page-item"><a class="page-link" href="#">15</a></li>
						<li class="page-item">
							<a class="page-link" href="#"><i class="fas fa-angle-right" /></a>
						</li>
					</ul> -->
					<!-- Paginations end -->
				</div>
				<!-- All Transactions End -->
			</div>
			<aside class="col-md-4 d-none d-lg-block">
				{#if step == 1}
					<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">
						Edit Faculty Details
					</h4>
					<form on:submit|preventDefault={Update}>
						<div class="form-group text-left">
							<label class="" for="faculty">Faculty Name</label>
							<input type="text" bind:value={faculty} class="form-control" id="faculty" required />
						</div>
						<div class="form-group text-left">
							<label class="" for="code">Faculty Code</label>
							<input type="text" bind:value={code} class="form-control" id="code" required />
						</div>

						<div class="form-group row">
							<button href="submit" class="btn btn-primary btn-block">Save</button>
							<button type="reset" class="btn btn-secondary btn-block">Cancel</button>
						</div>
					</form>
				{:else if step == 2}
					<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">
						Add New Faculty
					</h4>
					<form on:submit|preventDefault={Add}>
						<div class="form-group text-left">
							<label class="" for="faculty">Faculty Name</label>
							<input type="text" class="form-control" bind:value={faculty} id="faculty" required />
						</div>
						<div class="form-group text-left">
							<label class="" for="code">Faculty Code</label>
							<input type="text" class="form-control" bind:value={code} id="code" required />
						</div>

						<div class="form-group row">
							<button href="submit" class="btn btn-primary btn-block">Save</button>
							<button type="reset" class="btn btn-secondary btn-block">Cancel</button>
						</div>
					</form>
				{/if}
			</aside>
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>
