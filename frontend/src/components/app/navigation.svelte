<header id="header">
	<div class="header-row p-4 ">
		<div class="header-column justify-content-start">
			<!-- Logo
        ============================= -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="logo">
				<a class="d-flex">
					<h4 class="nav_logo-name text-primary">
						<i class="bx bx-layer nav_logo-icon" /> Friday
					</h4></a
				>
			</div>
			<!-- Logo end -->
			<!-- Collapse Button
        ============================== -->
			<button
				class="navbar-toggler collapsed"
				type="button"
				data-toggle="collapse"
				data-target="#header-nav"
				aria-expanded="false"
			>
				<span /> <span /> <span />
			</button>
			<!-- Collapse Button end -->

			<!-- Primary Navigation
        ============================== -->
			<nav class="primary-menu navbar navbar-expand-lg">
				<div id="header-nav" class="navbar-collapse collapse" style="">
					<ul class="navbar-nav mr-auto">
						<li><a href="/app/">Dashboard</a></li>
						<li><a href="/app/units/">Units</a></li>
						<li><a href="/app/schedule/">Schedule</a></li>
                        <li><a href="/auth/clockin/">Clock In</a></li>
                        <li><a href="/auth/clockout/">Clock Out</a></li>
                        
					</ul>
				</div>
			</nav>
			<!-- Primary Navigation end -->
		</div>
		<div class="header-column justify-content-end">
			<!-- Login & Signup Link
        ============================== -->
			<nav class="login-signup navbar navbar-expand">
				<ul class="navbar-nav">
					<li class="align-items-center h-auto ml-sm-3">
						<a class="btn btn-primary" href="/auth/">Sign Out</a>
					</li>
				</ul>
			</nav>
			<!-- Login & Signup Link end -->
		</div>
	</div>
</header>
