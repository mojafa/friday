<script>
	import { url } from '../../../scripts/config';
	import axios from 'axios';
  import Semesters from '../../../scripts/api/semesters'
  import Schedules from '../../../scripts/api/schedules'
	axios.defaults.withCredentials = true;

	import Layout from '../../../components/admin/layout.svelte';
  
	let step = 0;
	let error;
  let schedule,semester, id;

  let semesters = Semesters.GetAll();
  let schedules = Schedules.GetAll()

	const Add = async () => {
		const _sem = {
			name: schedule,
			semester: semester,
		};
    Schedules.Add(_sem)
		
	};

  const Update = async () => {
		const _sem = {
			name: schedule,
			semester: semester,
		};
    Schedules.Update(_sem)
	};



  const showNew = () => {
    step = 2;
    semester  = '';
		schedule = '';
  }

  const showUpdate = (data) => {
    step = 1;

  }
</script>



<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Schedule</h4>
    <div class="row">
      <div class="col-lg-8">
      
        
        <!-- All Transactions
        ============================================= -->
        <div class="bg-white mb-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Schedules</h3>
          <!-- Title
          =============================== -->
          <div class="transaction-title py-2 px-4">
            <div class="row">
              <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
              <div class="col col-sm-5">Schedule Details</div>
              <div class="col-3 col-sm-4 text-center">Semester</div>
              <div class="col-auto col-sm-2 d-none d-sm-block text-center"></div>
              
            </div>
          </div>
          <!-- Title End --> 
          
          <!-- Transaction List
          =============================== -->
          <div class="transaction-list">
            {#await schedules}
              <h4>Loading</h4>
            {:then _schedules}
              {#if _schedules.length > 0}
                {#each _schedules as _schedule}

                <div on:click="{()=>showUpdate(_schedule)}" class="transaction-item px-4 py-3" >
                  <div class="row align-items-center flex-row">
                    <div class="col-2 col-sm-1 text-center"> 
                      <span class="d-block text-4 font-weight-300">15</span> 
                      <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span> 
                    </div>
                    <div class="col col-sm-5"> 
                      <span class="d-block text-4">{_schedule.name}</span> 
                      <span class="text-muted">{_schedule.semester}</span> 
                    </div>
                    <div class="col-3 col-sm-4 text-center text-4"> 
                        <span class="text-nowrap">
                            Semester 1
                        </span>
                      </div>
                    <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                      <a href="/admin/schedule/{_schedule._id}"><button class="btn btn-primary btn-sm"><i class="fa fa-eye"></i> View</button></a>
                        
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
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Add Semester Sedule</h4>
        <form  on:submit|preventDefault ="{Add}" >
            <div class="form-group text-left">
                <label class="" for="emailAddress">Schedule Name </label>
                <input type="text"  bind:value="{schedule}" class="form-control" required >
            </div>
            <div class="form-group text-left">
                <label class="" for="emailAddress">Semester </label>
                <input type="text" list="semester_list" bind:value="{semester}" class="form-control" required >
                <datalist id="semester_list">
                  {#await semesters then _semesters }
                    {#each _semesters as _semester }
                      <option value="{_semester._id}">{_semester.year} Semester {_semester.level}</option>
                    {/each}
                    
                  {/await}
                </datalist>
            </div>
          <div class="form-group row">
            <button class="btn btn-primary btn-block">Save</button>
            <button type="reset"  class="btn btn-secondary btn-block">Cancel</button> 
          </div>
         
        </form>
      </aside>
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>