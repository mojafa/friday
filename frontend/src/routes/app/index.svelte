<script>
	import Layout from '../../components/app/layout.svelte';
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Darshboard</h4>
		<div class="row">
			<div class="col-lg-8">
				<div class="bg-white py-4 mb-4">
          <div class="bg-white mb-4"><h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Registered Units</h3>
          
            <div class="transaction-title py-2 px-4"><div class="row"><div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
                <div class="col col-sm-5">Unit Details</div>
                <div class="col-3 col-sm-4 text-center">Percentage Attendance</div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center"></div></div></div>
             
            
            
            <div class="transaction-list"><div class="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail"><div class="row align-items-center flex-row"><div class="col-2 col-sm-1 text-center"><span class="d-block text-4 font-weight-300">15</span> 
                    <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span></div>
                  <div class="col col-sm-5"><span class="d-block text-4">CSC 416</span> 
                    <span class="text-muted">Ethical Hacking</span></div>
                  <div class="col-3 col-sm-4 text-center text-4"><span class="text-nowrap">4%
                    </span></div>
                  <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"><a href="/app/attendance/123"><button class="btn btn-primary btn-sm"><i class="fa fa-eye"></i> view</button></a></div></div></div>
            </div>
             
            
            
            
     
            </div>
					
				</div>
			</div>
			<aside class="col-md-4 d-none d-lg-block">
				<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Today's Activities </h4>
        <div class="notifications-list">
          <div class="notifications-item  px-4 py-3">
            <div class="row align-items-center flex-row">
              
              <div class="col col-sm-10">
                <h4 class="text-3 mb-1">CSC 424 Introduction to Ethics</h4>
                <span class="text-muted"> 13:00 - 17:00 (Physical)</span>
              </div>
              <div class="col-1 text-right text-muted"><i class="bx bx-chalkboard nav_icon" /></div>
            </div>
          </div>
          
        </div>
			</aside>
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>
