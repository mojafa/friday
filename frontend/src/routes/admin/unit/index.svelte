<script>
	import Courses from '../../../scripts/api/courses';
	import Units from '../../../scripts/api/units';
	import axios from 'axios';
	axios.defaults.withCredentials = true;

	import Layout from '../../../components/admin/layout.svelte';

	let step = 0;
	let error;
	let unit, course, faculty, code, year, sem, id;
	let courses = Courses.GetAll();
	let units = Units.GetAll();

	const Add = async (data) => {
		const _course = {
			name: unit,
			course: course,
			code: code,
			year: year,
			semester: sem
		};
		Units.Add(_course);
		units = Units.GetAll();
	};

	const Update = async (data) => {
		const _course = {
			id: id,
			name: unit,
			code: code,
			course: course,
			year: year,
			semester: sem
		};
		Units.Update(_course);
		units = Units.GetAll();
	};

	const clear = () => {
		course = '';
		unit = '';
		code = '';
		id = '';
		year = '';
		sem = '';
	};

	const showNew = () => {
		step = 2;
		clear();
	};

	const showUpdate = (data) => {
		clear();
		step = 1;
		unit = data.name;
		course = data.course;
		code = data.code;
		id = data._id;
		year = data.year + '';
		sem = data.semester + '';
	};
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Units</h4>
		<div class="row">
			<div class="col-lg-8 col-auto">
				<div class="col-sm-12 text-right">
					<button on:click={showNew} class="btn btn-primary btn-sm"
						><i class="bx bx-plus nav_icon" /> Add Units</button
					>
				</div>

				<!-- All Transactions
        ============================================= -->
				<div class="bg-white mb-4">
					<h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Units</h3>
					<!-- Title
          =============================== -->
					<div class="transaction-title py-2 px-4">
						<div class="row">
							<div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
							<div class="col col-sm-7">Unit Details</div>
							<div class="col-auto col-sm-4 d-none d-sm-block text-center">Faculty</div>
						</div>
					</div>
					<!-- Title End -->

					<!-- Transaction List
          =============================== -->
					<div class="transaction-list">
						{#await units}
							<h4>Loading</h4>
						{:then _units}
							{#if _units.length > 0}
								{#each _units as _unit}
									<div on:click={() => showUpdate(_unit)} class="transaction-item px-4 py-3">
										<div class="row align-items-center flex-row">
											<div class="col-2 col-sm-1 text-center">
												<span class="d-block text-4 font-weight-300">15</span>
												<span class="d-block text-1 font-weight-300 text-uppercase">FEB</span>
											</div>
											<div class="col col-sm-7">
												<span class="d-block text-4">{_unit.code}</span>
												<span class="text-muted">{_unit.name}</span>
											</div>
											<div class="col-auto col-sm-4 d-none d-sm-block text-center text-3">
												<span class="text-nowrap">
													{_unit.course}
												</span>
											</div>
										</div>
									</div>
								{/each}
							{/if}
						{/await}
					</div>
					<!-- Transaction List End -->

					<!-- Transaction Item Details Modal End -->

					<!-- Pagination
          ============================================= -->
					<!-- <ul class="pagination justify-content-center mt-4 mb-0">
            <li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a> </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active"> <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">......</li>
            <li class="page-item"><a class="page-link" href="#">15</a></li>
            <li class="page-item"> <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a> </li>
          </ul> -->
					<!-- Paginations end -->
				</div>
				<!-- All Transactions End -->
			</div>
			<aside class="col-md-4 d-none d-lg-block">
				{#if step == 1}
					<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">
						Edit Unit Details
					</h4>
					<form on:submit|preventDefault={Update}>
						<div class="form-group text-left">
							<label class="" for="unit">Unit Name</label>
							<input type="text" class="form-control" bind:value={unit} id="unit" required />
						</div>
						<div class="form-group text-left">
							<label class="" for="code">Unit Code</label>
							<input
								type="text"
								class="form-control"
								bind:value={code}
								id="emailAddress"
								required
							/>
						</div>
						<div class="form-group text-left">
							<label for="course">Course</label>
							<input
								type="text"
								list="course_list"
								class="form-control"
								bind:value={course}
								id="course"
								required
							/>
							<datalist id="course_list">
								{#await courses then _courses}
									{#each _courses as _course}
										<option value={_course.code}>{_course.name}</option>
									{/each}
								{/await}
							</datalist>
						</div>

						<div class="form-group text-left">
							<label for="year">Year</label>
							<select required bind:value={year} class="custom-select" id="yeat">
								<option value="1">1 Years</option>
								<option value="2">2 Yesrs</option>
								<option value="2">3 Years</option>
								<option value="2">4 Years</option>
							</select>
						</div>
						<div class="form-group text-left">
							<label for="sem">Semester</label>
							<select required bind:value={sem} class="custom-select" id="sem">
								<option value="1">1 Semister</option>
								<option value="2">2 Semisters</option>
								<option value="3">3 Semisters </option>
							</select>
						</div>
						<div class="form-group row">
							<button type="submit" class="btn btn-primary btn-block">Save</button>
							s
						</div>
					</form>
				{:else if step == 2}
					<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Add New Unit</h4>
					<form on:submit|preventDefault={Add}>
						<div class="form-group text-left">
							<label class="" for="couse">Unit Name</label>
							<input type="text" class="form-control" bind:value={unit} id="couse" required />
						</div>
						<div class="form-group text-left">
							<label class="" for="emailAddress">Unit Code</label>
							<input
								type="text"
								class="form-control"
								bind:value={code}
								id="emailAddress"
								required
							/>
						</div>
						<div class="form-group text-left">
							<label for="emailAddress">Course</label>
							<input
								type="text"
								list="course_list"
								class="form-control"
								bind:value={course}
								id="emailAddress"
								required
							/>
							<datalist id="course_list">
								{#await courses then _courses}
									{#each _courses as _course}
										<option value={_course.code}>{_course.name}</option>
									{/each}
								{/await}
							</datalist>
						</div>

						<div class="form-group text-left">
							<label for="year">Year</label>
							<select required bind:value={year} class="custom-select" id="yeat">
								<option value="1">1 Years</option>
								<option value="2">2 Yesrs</option>
								<option value="2">3 Years</option>
								<option value="2">4 Years</option>
							</select>
						</div>
						<div class="form-group text-left">
							<label for="sem">Semester</label>
							<select required bind:value={sem} class="custom-select" id="sem">
								<option value="1">1 Semister</option>
								<option value="2">2 Semisters</option>
								<option value="3">3 Semisters </option>
							</select>
						</div>
						<div class="form-group row">
							<button type="submit" class="btn btn-primary btn-block">Save</button>
						</div>
					</form>
				{/if}
			</aside>
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>
