<script>
	import Layout from '../../components/app/layout.svelte';
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Courses</h4>
		<div class="row">
			<div class="col-lg-8">
        <div class="row">
          <div class="col mb-2">
            <form id="filterTransactions" method="post">
              <div class="form-row"> 
                <!-- Date Range
                ========================= -->
                <div class="col-sm-6 col-md-5 form-group">
                  <select class="custom-select" id="accountStatus" name="language_id">
                    <option value="1">1st Year</option>
                    <option value="2">2nd Yesr</option>
                    <option value="2">3rd Year</option>
                    <option value="2">4rd Year</option>

                    
                  </select>
                </div>
                <div class="col-sm-6 col-md-5 form-group">
                    <select class="custom-select" id="accountStatus" name="language_id">
                      <option value="1">Semister 1</option>
                      <option value="2">Semister 2</option>
                      <option value="3">Semister 3</option>
                    </select>
                </div>
               
              </div>
            </form>
          </div>
        </div>
        <div class="bg-white mb-4"><h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Availble Courses</h3>
          
          <div class="transaction-title py-2 px-4"><div class="row"><div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
              <div class="col col-sm-7">Course Details</div>
              <div class="col-auto col-sm-4 d-none d-sm-block text-center">Faculty</div></div></div>
           
          
          
          <div class="transaction-list"><div class="transaction-item px-4 py-3" ><div class="row align-items-center flex-row"><div class="col-2 col-sm-1 text-center"><span class="d-block text-4 font-weight-300">15</span> 
                  <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span></div>
                <div class="col col-sm-7"><span class="d-block text-4">CSC 366</span> 
                  <span class="text-muted">Introduction to Web Technology</span></div>
                <div class="col-auto col-sm-4 d-none d-sm-block text-center text-3">
                  <span class="text-nowrap"><button class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Add Course</button></span></div></div></div></div>
          </div>
				
			</div>
			<aside class="col-md-4 d-none d-lg-block">
				<h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">Registered Courses</h4>
				<div class="bg-white mb-4">
					<!-- Notifications List
            =============================== -->
					<div class="notifications-list">
						<div class="notifications-item  px-4 py-3">
							<div class="row align-items-center flex-row">
								<div class="col col-sm-10">
									<h4 class="text-3 mb-1">CSC 424</h4>
									<span class="text-muted"> Ethical Hacking</span>
								</div>
								<div class="col-1 text-right text-muted"><i class="bx bx-book nav_icon" /></div>
							</div>
						</div>
						
					</div>
					<!-- Notifications List End -->
				</div>
				<div class="btn-group m-0 w-100 row">
					

					<button class="btn btn-primary btn-sm shadow-none col-12"
						><span class="mr-1"><i class="bx bx-save nav_icon" /></span>Save Courses</button
					>
				</div>
			</aside>
		</div>
		<!-- Style 3 end -->
	</div>
</Layout>
