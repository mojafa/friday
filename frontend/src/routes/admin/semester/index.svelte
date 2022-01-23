<script>
  import Semesters from '../../../scripts/api/semesters'
	import axios from 'axios';
	axios.defaults.withCredentials = true;

	import Layout from '../../../components/admin/layout.svelte';
  
	let step = 0;
	let error;
  let start,weeks, year , sem ="1", id;
  let semesters = Semesters.GetAll();


  const Add = async () => {
		const _sem = {
			start: start,
			weeks: weeks,
      year:year,
      level:sem
		};
    Semesters.Add(_sem);
    semesters = Semesters.GetAll();
	};

  const Update = async () => {

		const _sem = {
      id:id,
			start: start,
			weeks: weeks,
      year:year,
      level:sem
		};
    Semesters.Update(_sem);
    semesters = Semesters.GetAll();
	};

  const showNew = () => {
    step = 2;
    start  = '',
		weeks = '',
    year = ''
    sem = '';
    id = '';

  }

  const showUpdate = (data) => {
    step = 1;
    start  = data.start;
		weeks = data.weeks;
    year = data.year;
    sem = data.level
    id = data._id;

  }
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Semester</h4>
    <div class="row">
      <div class="col-lg-8">
        <div class="col-sm-12 text-right">
          <button on:click="{showNew}" class="btn btn-primary btn-sm"><i class="bx bx-plus nav_icon"></i> Add Semester</button>
        </div>
      
        
        <!-- All Transactions
        ============================================= -->
        <div class="bg-white mb-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Semesters</h3>
          <!-- Title
          =============================== -->
          <div class="transaction-title py-2 px-4">
            <div class="row">
              <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
              <div class="col col-sm-5">Semester Details</div>
              <div class="col-3 col-sm-4 text-right">Weeks</div>
              <div class="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
              
            </div>
          </div>
          <!-- Title End --> 
          
          <!-- Transaction List
          =============================== -->
          <div class="transaction-list">
            {#await semesters}
              <h4>Loading</h4>
            {:then _semesters}
              {#if _semesters.length > 0}
                {#each _semesters as _semester}

                <div on:click="{()=>showUpdate(_semester)}" class="transaction-item px-4 py-3" >
                  <div class="row align-items-center flex-row">
                    <div class="col-2 col-sm-1 text-center"> 
                      <span class="d-block text-4 font-weight-300">15</span> 
                      <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span> 
                    </div>
                    <div class="col col-sm-5"> 
                      <span class="d-block text-4">Acardemic Year {_semester.year}</span> 
                      <span class="text-muted">Semister {_semester.level}</span> 
                    </div>
                    <div class="col-3 col-sm-4 text-right text-4"> 
                        <span class="text-nowrap">
                          {_semester.weeks}
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
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Edit Semester Details</h4>
        <form on:submit|preventDefault ="{Update}">
          <div class="form-group text-left">
            <label class="" for="start">Semester Start Date</label>
            <input type="date" bind:value="{start}" class="form-control" required >
          </div>
          <div class="form-group text-left">
            <label class="" for="weeks">Semister Weeks</label>
            <input type="number" bind:value="{weeks}" class="form-control" required >
          </div>
          <div class="form-group text-left">
            <label class="" for="year">Acardemic Year</label>
            <input type="text" class="form-control" bind:value="{year}" required  placeholder="2017/2018">
          </div>
          <div class="form-group text-left">
            <label class="" for="sem">Semister </label>
            <select id="cardType" bind:value="{sem}" class="custom-select" required>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
              </select >
          </div>
          <div class="form-group row">
            <button type="submit"  class="btn btn-primary btn-block">Save</button>
            <button type="reset"  class="btn btn-secondary btn-block">Cancel</button> 
          </div>
         
        </form>
        {:else if step == 2}
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Add New Semester </h4>
        <form on:submit|preventDefault ="{Add}">
          <div class="form-group text-left">
            <label class="" for="start">Semester Start Date</label>
            <input type="date" bind:value="{start}" class="form-control" required >
          </div>
          <div class="form-group text-left">
            <label class="" for="weeks">Semister Weeks</label>
            <input type="number" bind:value="{weeks}" class="form-control" required >
          </div>
          <div class="form-group text-left">
            <label class="" for="year">Acardemic Year</label>
            <input type="text" class="form-control" bind:value="{year}" required  placeholder="2017/2018">
          </div>
          <div class="form-group text-left">
            <label class="" for="sem">Semister </label>
            <select id="cardType" bind:value="{sem}" class="custom-select" required>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
              </select >
          </div>
          <div class="form-group row">
            <button type="submit"  class="btn btn-primary btn-block">Save</button>
            <button type="reset" on:click="{()=>step = 0}" class="btn btn-secondary btn-block">Cancel</button> 
          </div>
         
        </form>
        {/if}
        
          

          
      </aside>
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>
