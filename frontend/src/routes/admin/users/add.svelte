<script>
    import { url } from '../../../scripts/config';
    import { goto } from '$app/navigation';
    import axios from 'axios';
    axios.defaults.withCredentials = true;
    
	import Layout from '../../../components/admin/layout.svelte';
    import User from '../../../scripts/api/user';
    import Faculty from '../../../scripts/api/faculty';
   
    
    let faculties = Faculty.GetAll();
    let role = 0 ;
    let error ;

    const AddStudent = async (data) =>{
		const _user = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			role: 'student',
			isActive: false,
			password: data.password
		};

		try {
			let responce = await axios.post(url + 'api/users/add', _user);
			let student = {
				stdNumber: data.stdNumber,
				user: responce.data._id,
				faculty: data.faculty,
				year: data.year,
				semester: data.semester,
				schedule: data.schedule,
				groupName: data.groupName
			};
			let response2 = await axios.post(url + 'api/students/add', student);

			alert('Student Added Successfull');
			setTimeout(() => {
				goto('/admin/users/students');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

	const AddStaff = async (data) => {

		const _user = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			role: 'staff',
			isActive: false,
			password: data.password
		};

        console.log('staff');
        console.log(_user);

		try {
			let responce = await axios.post(url + 'api/users/add', _user);
			let staff = {
				staffNumber: data.staffNumber,
				user: responce.data._id,
				faculty: data.faculty
			};
			let response2 = await axios.post(url + 'api/staff/add', staff);

			alert('Staff Added Successfull');
			setTimeout(() => {
				goto('/admin/users/staff');
			}, 500);
		} catch (err) {
			if (err.responce) {
			}
			console.error(err);
		}
	}

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
        role: '',
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
        user.role = User.getRole(role);
        if(role ==1){
            await AddStudent(user);
        }else if(role ==2){
            await AddStaff(user);
        }else if(role ==3){
            await AddAdmin(user);
        
        }
    }
</script>
<svelte:head>
	<style>
        body{
            background-color: #f5f5f5;
        }
    </style>
</svelte:head>
<Layout>
    <div class="container d-flex justify-content-center">
        <ul class="nav secondary-nav alternate ">
            <li class="nav-item"><a class="nav-link " href="/admin/users/students">Student</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin/users/staff">Staff</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin/users/administrator">Administator</a></li>
            <li class="nav-item"><a class="nav-link active" href="/admin/users/add">Add User</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin/users/invite">Invite User</a></li>
        </ul>
    </div>
	<div class="bg-white shadow-sm rounded p-4 mb-4">
        <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Add New User</h3>
        <hr class="mb-4 mx-n4">
        <form on:submit|preventDefault={addUser} >
            <div class="row">
                    <div class="form-group text-left col-sm-4">
                        <label class="" for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" bind:value="{user.firstName}" required>
                    </div>
                    <div class="form-group text-left col-sm-4">
                        <label class="" for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" bind:value="{user.lastName}" required>
                    </div>
                    <div class="form-group text-left col-sm-4">
                        <label class="" for="email">Email </label>
                        <input type="text" class="form-control" id="email" bind:value="{user.email}" required>
                    </div>
                    <div  class="form-group text-left col-sm-4">
                        <label class="" for="role">Role</label>
                        <select bind:value={role} name="role" required class="custom-select" >
                            <option value={1}>Student</option>
                            <option value={2}>Staff</option>
                            <option value={3}>Admin</option>  
                        </select>
                    </div>
            </div>
            <hr class="mb-4 mx-n4">
            {#if role == 1}
            <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Student Details </h3>
            <div class="row">
                
    
                    <div  class="form-group text-left col-sm-4">
                        <label class="" for="stdNumber">Student Number</label>
                        <input type="number" class="form-control" id="stdNumber" bind:value="{user.stdNumber}" required>
                    </div>
                    <div  class="form-group text-left col-sm-4">
                        <label class="" for="faculty">Faculty</label>
                        <input type="text" list="course_list"  class="form-control" name="faculty" bind:value="{user.faculty}" required>
                        <datalist id="course_list">
                        {#await faculties then _faculties }
                            {#each _faculties as _faculty }
                            <option value="{_faculty.code}">{_faculty.name}</option>
                            {/each}
                            
                        {/await}
                        </datalist>
                    </div>
                    <div  class="form-group text-left col-sm-4">
                        <label class="" for="group">Goup Name</label>
                        <input type="text" class="form-control" id="group" bind:value="{user.groupName}" required>
                    </div>
                    <div  class="form-group text-left col-sm-4">
                        <label class="" for="year">Year</label>
                        <select class="custom-select" bind:value="{user.year}" name="year">
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="2">3rd Year</option>
                            <option value="2">4rd Year</option>  
                        </select>
                    </div>
                    <div class="col-sm-12 text-right">
                        <button type="submit" class="btn btn-primary "><i class="bx bx-save nav_icon"></i> Save</button>
                    </div>
            </div>
            {:else if role == 2}
            <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Staff Details </h3>
            <div class="row">
                
    
                    <div  class="form-group text-left col-sm-5">
                        <label class="" for="staffNumber">Staff Number</label>
                        <input type="number" class="form-control" bind:value="{user.staffNumber}" name="staffNumber" required>
                    </div>
                    <div  class="form-group text-left col-sm-5">
                        <label class="" for="faculty">Faculty</label>
                        <input type="text" list="course_list"  class="form-control" name="faculty" bind:value="{user.faculty}" required>
                        <datalist id="course_list">
                        {#await faculties then _faculties }
                            {#each _faculties as _faculty }
                            <option value="{_faculty.code}">{_faculty.name}</option>
                            {/each}
                            
                        {/await}
                        </datalist>
                    </div>
                    <div class="col-sm-12 text-right">
                        <button type="submit" class="btn btn-primary "><i class="bx bx-save nav_icon"></i> Save</button>
                    </div>
                    
            </div>
            {:else if role == 3}
            <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Admin Details </h3>
            <div class="row">
                <h6>-- ADMIN DOES NOT REQURE EXTRA DETAILS ---</h6>
                <div class="col-sm-12 text-right">
                    <button type="submit" class="btn btn-primary "><i class="bx bx-save nav_icon"></i> Save</button>
                </div>
                   
                    
            </div>   
            {/if}
            
        </form>
        
    </div>
</Layout>

