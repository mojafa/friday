<script>
	import { authenticated, user, student, staff } from '../../scripts/state';
	import { url } from '../../scripts/config';
	import { goto } from '$app/navigation';
	import axios from 'axios';
	import { session } from "$app/stores";
	import SessionHelper from '../../scripts/helper/session.helper';



	let email = '',
		password = '',
		error = '';
	const submit = async () => {
		console.log('sending');
		try {
			const credential = await axios.post(url + 'api/auth/signin', {
				email: email,
				password: password
			});
			console.log(credential.data);
			const data = credential.data;

			SessionHelper.set('auth', true);
			SessionHelper.set('user',  data.user);

			//$session.user = data.user;
			//$session.authenticated = true;
			
			if (data.user.role == 'admin') {
				goto('/admin/');
			} else if (data.user.role == 'staff') {
				const staffInfo = await axios.get(url + 'api/staff/user/' + data.user.id);
				SessionHelper.set('staff',  staffInfo.data);
				goto('/staff/');
			} else {
				const studentInfo = await axios.get(url + 'api/students/user/' + data.user.id);
				SessionHelper.set('student',  studentInfo.data);
				goto('/app/');
			}
		} catch (e) {
			if (e.response) {
				error = e.response.data.massege;
			}
			console.log(e);
		}
	};
</script>

<div id="main-wrapper" class="h-100">
	<div class="container-fluid px-0 h-100">
		<div class="row no-gutters h-100">
			<!-- Welcome Text
        ============================================= -->
			<div class="col-md-6">
				<div class="hero-wrap d-flex align-items-center h-100">
					<div class="hero-mask opacity-8 bg-primary" />
					<div class="hero-bg hero-bg-scroll" />
					<div class="hero-content mx-auto w-100 h-100 d-flex flex-column">
						<div class="row no-gutters">
							<div class="col-10 col-lg-7 mx-auto">
								<div class="logo mt-5 mb-5 mb-md-0">
									<a class="d-flex" href="/">
										<h3 class="text-9 text-white mb-4">
											<i class="bx bx-layer nav_logo-icon" />
											Friday
										</h3>
									</a>
								</div>
							</div>
						</div>
						<div class="row no-gutters my-auto">
							<div class="col-10 col-lg-9 mx-auto">
								<h1 class="text-11 text-white mb-4">Welcome back!</h1>
								<p class="text-4 text-white line-height-4 mb-5">
									Save the paper hassles and attendance issues
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Welcome Text End -->

			<!-- Login Form
        ============================================= -->
			<div class="col-md-6 d-flex align-items-center">
				<div class="container my-4">
					<div class="row">
						<div class="col-11 col-lg-9 col-xl-8 mx-auto">
							<h3 class="font-weight-400 mb-4">Log In</h3>
							<form on:submit|preventDefault={submit}>
								{#if error != ''}
									<p style="color: red;">{error}</p>
								{/if}
								<div class="form-group">
									<label for="emailAddress">Email Address</label>
									<input
										type="email"
										bind:value={email}
										class="form-control"
										id="emailAddress"
										required
										placeholder="Enter Your Email"
									/>
								</div>
								<div class="form-group">
									<label for="loginPassword">Password</label>
									<input
										type="password"
										bind:value={password}
										class="form-control"
										id="loginPassword"
										required
										placeholder="Enter Password"
									/>
								</div>
								<div class="row">
									<div class="col-sm">
										<div class="form-check custom-control custom-checkbox">
											<input
												id="remember-me"
												name="remember"
												class="custom-control-input"
												type="checkbox"
											/>
											<label class="custom-control-label" for="remember-me">Remember Me</label>
										</div>
									</div>
									<div class="col-sm text-right">
										<a class="btn-link" href="/auth/forgotPwd">Forgot Password ?</a>
									</div>
								</div>
								<button class="btn btn-primary btn-block my-4" type="submit">Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- Login Form End -->
		</div>
	</div>
</div>
