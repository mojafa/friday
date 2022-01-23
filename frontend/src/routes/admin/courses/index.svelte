<script>
	import Courses from '../../../scripts/api/courses';
	import Faculty from '../../../scripts/api/faculty';
	import axios from 'axios';
	axios.defaults.withCredentials = true;

	import Layout from '../../../components/admin/layout.svelte';

	let step = 0;
	let error;
	let course, faculty, code, year, sem, id;
	let courses = Courses.GetAll();
	let faculties = Faculty.GetAll();

	const Add = async (data) => {
		const _course = {
			name: course,
			code: code,
			faculty: faculty,
			year: year,
			semester: sem
		};
		Courses.Add(_course);
		courses = Courses.GetAll();
	};

	const Update = async (data) => {
		const _course = {
			id: id,
			name: course,
			code: code,
			faculty: faculty,
			year: year,
			semester: sem
		};
		Courses.Update(_course);
		courses = Courses.GetAll();
	};

	const clear = () => {
		faculty = '';
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
		course = data.name;
		faculty = data.faculty;
		code = data.code;
		id = data._id;
		year = data.year + '';
		sem = data.semester + '';
	};
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Course</h4>
		<div class="row">
			<div class="col-lg-8 col-auto">
				<div class="col-sm-12 text-right">
					<button on:click={showNew} class="btn btn-primary btn-sm"
						><i class="bx bx-plus nav_icon" /> Add Course</button
					>
				</div>

				<!-- All Transactions
        ============================================= -->
				<div class="bg-white mb-4">
					<h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Courses</h3>
					<!-- Title
          =============================== -->
					<div class="transaction-title py-2 px-4">
						<div class="row">
							<div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
							<div class="col col-sm-7">Course Details</div>
							<div class="col-auto col-sm-4 d-none d-sm-block text-center">Faculty</div>
						</div>
					</div>
					<!-- Title End -->

					<!-- Transaction List
          =============================== -->
					<div class="transaction-list">
						{#await courses}
							<h4>Loading</h4>
						{:then _courses}
							{#if _courses.length > 0}
								{#each _courses as _course}
									<div on:click={() => showUpdate(_course)} class="transaction-item px-4 py-3">
										<div class="row align-items-center flex-row">
											<div class="col-2 col-sm-1 text-center">
												<span class="d-block text-4 font-weight-300">24</span>
												<span class="d-block text-1 font-weight-300 text-uppercase">JAN</span>
											</div>
											<div class="col col-sm-7">
												<span class="d-block text-4">{_course.code}</span>
												<span class="text-muted">{_course.name}</span>
											</div>
											<div class="col-auto col-sm-4 d-none d-sm-block text-center text-3">
												<span class="text-nowrap"> SCAI </span>
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
						Edit Course Details
					</h4>
					<form on:submit|preventDefault={Update}>
						<div class="form-group text-left">
							<label class="" for="couse">Course Name</label>
							<input type="text" class="form-control" bind:value={course} id="couse" required />
						</div>
						<div class="form-group text-left">
							<label class="" for="emailAddress">Course Code</label>
							<input
								type="text"
								class="form-control"
								bind:value={code}
								id="emailAddress"
								required
							/>
						</div>
						<div class="form-group text-left">
							<label for="emailAddress">Faculty</label>
							<input
								type="text"
								list="course_list"
								class="form-control"
								bind:value={faculty}
								id="emailAddress"
								required
							/>
							<datalist id="course_list">
								{#await faculties then _faculties}
									{#each _faculties as _faculty}
										<option value={_faculty.code}>{_faculty.name}</option>
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
							<button type="reset" class="btn btn-secondary btn-block">Reset Password</button>
						</div>
					</form>
				{:else if step == 2}
					<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Add New Course</h4>
					<form on:submit|preventDefault={Add}>
						<div class="form-group text-left">
							<label class="" for="couse">Course Name</label>
							<input type="text" class="form-control" bind:value={course} id="couse" required />
						</div>
						<div class="form-group text-left">
							<label class="" for="code">Course Code</label>
							<input type="text" class="form-control" bind:value={code} id="code" required />
						</div>
						<div class="form-group text-left">
							<label for="emailAddress">Faculty</label>
							<input
								type="text"
								list="course_list"
								class="form-control"
								bind:value={faculty}
								required
							/>
							<datalist id="course_list">
								{#await faculties then _faculties}
									{#each _faculties as _faculty}
										<option value={_faculty.code}>{_faculty.name}</option>
									{/each}
								{/await}
							</datalist>
						</div>
						<div class="form-group text-left">
							<label for="year">Year</label>
							<select required bind:value={year} class="custom-select" id="yeat">
								<option value="1">1 Year</option>
								<option value="2">2 Years</option>
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
							<button type="reset" class="btn btn-secondary btn-block">Cancel</button>
						</div>
					</form>
				{/if}
			</aside>
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>
