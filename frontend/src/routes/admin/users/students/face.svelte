<script>
    import Layout from '../../../../components/admin/layout.svelte';
    import User from '../../../../scripts/api/user';
    import { onMount } from 'svelte';
    import Face from '../../../../scripts/api/face';
	import { url } from '../../../../scripts/config';
	import Webcam from 'webcam-easy';
	import SessionHelper from '../../../../scripts/helper/session.helper';

  let  users  = User.GetStudents();
  let step = 0;
  let  id;


  onMount(()=>{
		users = User.GetStudents();
	})


    let userid 

	onMount(async()=>{
		const user = await SessionHelper.get('user');
		userid = user.id;
        await loadCam();
	})

	

	let webcam;
	let slefie;
    let _user_;
	

	const loadCam = async (_step = 0) => {
		step = 0;
		const webcamElement = document.getElementById('webcam');
		const canvasElement = document.getElementById('canvas');
		const snapSoundElement = document.getElementById('snapSound');
		webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
		webcam
			.start()
			.then((result) => {
				console.log('webcam started');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	

	const refresh = () => {
		window.location.reload();
	};

	const upoadPhoto = () =>{
		if (!webcam || !id) return;
		slefie = webcam.snap();
		//webcam.stop();
		step = 1;
		Face.Add(slefie, id).then(()=>{
            alert('Photo Added Successfully')
            refresh();
        })	
	}

  const showUpdate = (user) => {
    _user_ = user;
    id = user._id;
  }
</script>

<Layout>
	<div class="bg-white ">
		<div class="container d-flex justify-content-center">
			<ul class="nav secondary-nav alternate ">
				<li class="nav-item"><a class="nav-link " href="/admin/users/students">Student</a></li>
                <li class="nav-item"><a class="nav-link active" href="/admin/users/students/face">Student Photo</a></li>
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
      <div class="col-lg-7">
      
        
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
						<div class="transaction-item px-4 py-3" on:click="{()=>showUpdate(_user)}">
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
          
        </div>
        <!-- All Transactions End --> 
      </div>
      <aside class="col-md-5 d-none d-lg-block">
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Take Photo Student </h4>
        <div class="col-12">
            <div class="bg-white mb-4">
                <div class="row">
                    <div class="col-lg-12 col-xl- my-auto text-center text-lg-left pb-4 pb-lg-0">
                        <div class="p-4">
                            <span class=" text-center">
                                The photograph taken is for authentication perposes only.The photograph will
                                only be used
                            </span>
                            <hr class="mb-4 mx-n4" />

                            <!-- svelte-ignore a11y-media-has-caption -->
                            <video class="col-12" id="webcam" autoplay playsinline />
                            <canvas id="canvas" class="d-none" />
                            <audio id="snapSound" src="/audio/snap.mp3" preload="auto" />
                            {#if id}
                                <span class="d-block text-4">{_user_.firstName} {_user_.lastName}</span> 
                                <span class="text-muted">{_user_.email}</span>
                                <hr class="mb-4 mx-n4" />
                                <div class="btn-group m-0 w-100 row">
                                    <button on:click={upoadPhoto} class="btn btn-primary btn-sm shadow-none col-12">
                                        <span class="mr-1">
                                            <i class="bx bx-camera nav_icon" />
                                        </span> Span and Upload
                                    </button>
                                </div>
                            {/if}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </aside>
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>
