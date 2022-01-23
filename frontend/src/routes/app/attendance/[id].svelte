<script>
	import Layout from '../../../components/app/layout.svelte'
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">CSC 417 </h4>
    <div class="row">
      <div class="col-lg-8">
      
        
        <!-- All Transactions
        ============================================= -->
        <div class="bg-white mb-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Attendance Sheet</h3>
          <!-- Title
          =============================== -->
          <div class="transaction-title py-2 px-4">
            <div class="row">
              <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
              <div class="col col-sm-3">Student Details</div>
              <div class="col-auto col-sm-2 text-center">Lecture Attendance</div>
              <div class="col-3 col-sm-2 text-center">Clocked In</div>
              <div class="col-auto col-sm-2 text-center">Clocked Out</div>
              <div class="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
              
            </div>
          </div>
          <!-- Title End --> 
          
          <!-- Transaction List
          =============================== -->
          <div class="transaction-list">
        
           
            <div class="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
              <div class="row align-items-center flex-row">
                <div class="col-2 col-sm-1 text-center"> 
                  <span class="d-block text-4 font-weight-300">15</span> 
                  <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span> 
                </div>
                <div class="col col-sm-3"> 
                  <span class="d-block text-4">Joshua Adigha</span> 
                  <span class="text-muted">11111</span> 
                </div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> 
                    <b>95 %</b>
                </div>
                <div class="col-3 col-sm-2 text-center text-4"> 
                  <span class="text-nowrap">
                    19:00
                  </span>
                </div>
                <div class="col-auto col-sm-2 text-center text-4"> 
                    <span class="text-nowrap">
                      21:00
                    </span>
                  </div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> 
                    <span class="text-success" data-toggle="tooltip" data-original-title="Completed">
                        <i class="fas fa-check-circle"></i>
                    </span>
                </div>
                
              </div>
            </div>
          </div>
          <!-- Transaction List End --> 
          
          
        </div>
        <!-- All Transactions End --> 
      </div>
      <aside class="col-lg-4">
        <div class="bg-white p-4 mb-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">Course Details</h3>
          <hr class="mx-n4 mb-4">
          <div class="form-row align-items-center">
            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Couse Name:</p>
            <p class="col-sm-8 text-3">Ethical Hacking</p>
          </div>
          <div class="form-row align-items-center">
            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Couse Code:</p>
            <p class="col-sm-8 text-3">CSC 417</p>
          </div>
          <div class="form-row align-items-center">
            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Lecturer :</p>
            <p class="col-sm-8 text-3">Joshua Adigha</p>
          </div>
          <div class="form-row align-items-baseline">
            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Attendance:</p>
            <p class="col-sm-8 text-3"> 4%</p>
          </div>
        </div>
      </aside>
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>
