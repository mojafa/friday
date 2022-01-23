<script>
	import Layout from '../../../../components/admin/layout.svelte';
  import User from '../../../../scripts/api/user';
  import { onMount } from 'svelte';

  let  users  = User.GetStudents();

  onMount(()=>{
		users = User.GetStudents();
	})

  const showUpdate = () => {
   

  }
</script>

<Layout>
	<div class="bg-white ">
		<div class="container d-flex justify-content-center">
			<ul class="nav secondary-nav alternate ">
				<li class="nav-item"><a class="nav-link active" href="/admin/users/students">Student</a></li>
        <li class="nav-item"><a class="nav-link " href="/admin/users/students/face">Student Photo</a></li>
				<li class="nav-item"><a class="nav-link" href="/admin/users/staff">Staff</a></li>
				<li class="nav-item"><a class="nav-link" href="/admin/users/administrator">Administator</a></li>
        <li class="nav-item"><a class="nav-link" href="/admin/users/add">Add User</a></li>
				<li class="nav-item"><a class="nav-link" href="/admin/users/invite">Invite User</a></li>
			</ul>
		</div>
	</div>

	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Student</h4>
    <div class="row">
      <div class="col-lg-8">
      
        
        <!-- All Transactions
        ============================================= -->
        <div class="bg-white mb-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Students</h3>
          <!-- Title
          =============================== -->
          <div class="transaction-title py-2 px-4">
            <div class="row">
              <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
              <div class="col col-sm-7">User Details</div>
              <div class="col-3 col-sm-2 text-right">Student Number</div>
              <div class="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
              
            </div>
          </div>
          <!-- Title End --> 
          <div class="notifications-list">
						{#await users then _users}
						{#each _users as _user }
						<div class="transaction-item px-4 py-3" on:click="{showUpdate}">
							<div class="row align-items-center flex-row">
								<div class="col-2 col-sm-1 text-center">
									<span class="d-block text-4 font-weight-300">15</span>
									<span class="d-block text-1 font-weight-300 text-uppercase">FEB</span>
								</div>
								<div class="col col-sm-7"> 
                  <span class="d-block text-4">{_user.firstName} {_user.lastName}</span> 
                  <span class="text-muted">{_user.email}</span> 
                </div>
                <div class="col-3 col-sm-2 text-right text-4"> 
                  <span class="text-nowrap">
                    {_user.role}
                  </span>
                </div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> 
                  <span class="text-success" data-toggle="tooltip" data-original-title="Completed">
                    <i class="fas fa-check-circle"></i>
                  </span> 
                </div>
						
							</div>
						</div>
						  
						{/each}
						  
						{/await}
					</div>
          
          
          
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
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Edit Student Details</h4>
        <form id="loginForm" method="post">
          <div class="form-group text-left">
            <label class="" for="emailAddress">First Name</label>
            <input type="text" class="form-control" id="emailAddress" required placeholder="First name">
          </div>
          <div class="form-group text-left">
            <label class="" for="emailAddress">Last Name</label>
            <input type="text" class="form-control" id="emailAddress" required placeholder="Last name">
          </div>
          <div class="form-group text-left">
            <label for="emailAddress">Email</label>
            <input type="email" class="form-control" id="emailAddress" required placeholder="abc@example.edu">
          </div>
          <div class="form-group  text-left">
            <label for="emailAddress">Student Number</label>
            <input type="number" class="form-control" id="emailAddress" required placeholder="1111">
          </div>
          <div class="form-group text-left">
            <label for="emailAddress">Group</label>
            <input type="text" class="form-control" id="emailAddress" required placeholder="group name">
          </div>
          
          <div class="row">
            <button href="#" class="btn btn-primary btn-block">Save</button>
          <button href="#" class="btn btn-secondary btn-block">Reset Password</button> 
          </div>
         
        </form>
      </aside>
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>
