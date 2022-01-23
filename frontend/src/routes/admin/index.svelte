<script>
	import Layout from '../../components/admin/layout.svelte';
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Dashboard</h4>

		<div class="row mb-5">
			<div class="col-md-3">
				<div class="featured-box style-3">
					<div class="featured-box-icon text-primary text-white border border-primary rounded">
						<i class="fas fa-chalkboard" />
					</div>
					<h3>Staff</h3>
					<!-- <p> Staff</p> -->
				</div>
			</div>
			<div class="col-md-3">
				<div class="featured-box style-3">
					<div
						class="featured-box-icon text-primary text-white rounded border border-primary rounded"
					>
						<i class="fas fa-user-graduate" />
					</div>
					<h3>Students</h3>
					<!-- <p>1400 Students</p> -->
				</div>
			</div>
			<div class="col-md-3">
				<div class="featured-box style-3">
					<div class="featured-box-icon text-primary border border-primary rounded">
						<i class="fas fa-book-open" />
					</div>
					<h3>Courses</h3>
					<!-- <p>23 Courses</p> -->
				</div>
			</div>
			<div class="col-md-3">
				<div class="featured-box style-3">
					<div class="featured-box-icon text-primary border border-primary rounded">
						<i class="fas fa-book-reader" />
					</div>
					<h3>Units</h3>
					<!-- <p>70 Admins</p> -->
				</div>
			</div>
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>
