<script>
    import { url } from '../../scripts/config';
    import { goto } from '$app/navigation';
    import axios from 'axios';
    axios.defaults.withCredentials = true;
    
	import Layout from '../../components/admin/layout.svelte';
    import User from '../../scripts/api/user'
    let role = 0 ;
    let error ;

 

	const AddAdmin = async (data) => {
		const _user = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			role: 'admin',
			isActive: false,
			password: data.password
		};

		try {
			let responce = await axios.post(url + 'api/users/add', _user);

			alert('Admin Added Successfull');
			setTimeout(() => {
				goto('/admin/users/administrator');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

    const user = {
        firstName: '',
        lastName: '',
        email: '',
        role: '3',
        password: '12345678',
        stdNumber: '',
		faculty: '',
		year: 1,
		semester: '',
		schedule: '',
		groupName: '',
        staffNumber: '',
    };

    const addUser = async () =>{
        await AddAdmin(user)
    }
</script>

<div id="main-wrapper" class="h-100">
    <div class="container-fluid px-0 h-100">
      <div class="row no-gutters h-100"> 
        <!-- Welcome Text
        ============================================= -->
        <div class="col-md-6">
          <div class="hero-wrap d-flex align-items-center h-100">
            <div class="hero-mask opacity-8 bg-primary"></div>
            <div class="hero-bg hero-bg-scroll" style="background-image:url('images/bg/image-3.jpg');"></div>
            <div class="hero-content mx-auto w-100 h-100 d-flex flex-column">
              <div class="row no-gutters">
                <div class="col-10 col-lg-9 mx-auto">
                  <div class="logo mt-5 mb-5 mb-md-0"> <a class="d-flex" href="/" >
                    <h3 class="text-9 text-white mb-4">
                      <i class="bx bx-layer nav_logo-icon"></i> 
                      Friday
                    </h3>
                  </a> </div>
                </div>
              </div>
              <div class="row no-gutters my-auto">
                <div class="col-10 col-lg-9 mx-auto">
                  <h1 class="text-11 text-white mb-4">Welcome to  Friday !</h1>
                  <p class="text-4 text-white line-height-4 mb-5">We are glad to see you again! Instant Clocking, Clockout & Attendance trusted by millions worldwide.</p>
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
                <h3 class="font-weight-400 mb-4">Set Up Administator</h3>
                <form on:submit|preventDefault={addUser} >
                    <div class="row">
                            <div class="form-group text-left col-sm-12">
                                <label class="" for="firstName">First Name</label>
                                <input type="text" class="form-control" id="firstName" bind:value="{user.firstName}" required>
                            </div>
                            <div class="form-group text-left col-sm-12">
                                <label class="" for="lastName">Last Name</label>
                                <input type="text" class="form-control" id="lastName" bind:value="{user.lastName}" required>
                            </div>
                            <div class="form-group text-left col-sm-12">
                                <label class="" for="email">Email </label>
                                <input type="text" class="form-control" id="email" bind:value="{user.email}" required>
                            </div>
                            <div  class="form-group text-left col-sm-12">
                                <label class="" for="role">Role</label>
                                <select bind:value={role}  name="role" required class="custom-select" >
                                    <option selected value={3}>Admin</option>  
                                </select>
                            </div>
                    </div>
                    <hr class="mb-4 mx-n4">
                    {#if role == 3}
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <button type="submit" class="btn btn-primary btn-small"><i class="bx bx-user  nav_icon"></i> Add Administator</button>
                        </div>     
                    </div>   
                    {/if}
                    
                </form>
                
              </div>
            </div>
          </div>
        </div>
        <!-- Login Form End --> 
      </div>
    </div>
  </div>


