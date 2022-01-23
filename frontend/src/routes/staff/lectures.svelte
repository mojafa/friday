<script>
	import Layout from '../../components/staff/layout.svelte';
  import {user} from '../../scripts/state';
  
  import Lectures from '../../scripts/api/lectures';
  import Units from '../../scripts/api/units';
  import {url} from '../../scripts/config';
  import axios from 'axios';
  import { onMount } from 'svelte';
  import Lesson from '../../scripts/api/lesson';
  
  var data =[];
  var lessons;
  var lesson_id = '';
  var selected;

  let staff = '61e2e5354a6cc24a11bafc90';
  //staff = $user.id;

  onMount( async()=>{
    var lectures = await Lectures.Find(staff);
    var units  = await Units.GetAll();
    lessons = await Lesson.GetAll();

    lectures.forEach(_lecture => {
      units.forEach(_unit => {
        if(_lecture.unit == _unit._id){
          console.log('match');
          data = [...data, {..._lecture, _unit}]
        }
 
      });
      
    });
    console.log(data);
  })

</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Lecture</h4>
    <div class="row">
      <div class="col-lg-8">
      
        
        <!-- All Transactions
        ============================================= -->
        <div class="bg-white mb-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Lectures</h3>
          <!-- Title
          =============================== -->
          <div class="transaction-title py-2 px-4">
            <div class="row">
              <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
              <div class="col col-sm-5">Lecture Details</div>
              <div class="col-3 col-sm-4 text-center">Percentage Attendance</div>
              <div class="col-auto col-sm-2 d-none d-sm-block text-center"></div>
              
            </div>
          </div>
          <!-- Title End --> 
          
          <!-- Transaction List
          =============================== -->
          <div class="transaction-list">


            <div class="transaction-item px-4 py-3" >
              <div class="row align-items-center flex-row">
                <div class="col-2 col-sm-1 text-center"> 
                  <span class="d-block text-4 font-weight-300">15</span> 
                  <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span> 
                </div>
                <div class="col col-sm-5"> 
                  <span class="d-block text-4">CSC 416</span> 
                  <span class="text-muted">14th March 2021 19:00</span> 
                </div>
                <div class="col-3 col-sm-4 text-center text-4"> 
                  <span class="text-nowrap">
                    4%
                  </span>
                </div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> 
                    <a href="/staff/class/123"><button class="btn btn-primary btn-sm"><i class="fa fa-eye"></i> view</button></a>
                </div> 
              </div>
            </div>
        
           
            <div class="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
              <div class="row align-items-center flex-row">
                <div class="col-2 col-sm-1 text-center"> 
                  <span class="d-block text-4 font-weight-300">15</span> 
                  <span class="d-block text-1 font-weight-300 text-uppercase">FEB</span> 
                </div>
                <div class="col col-sm-5"> 
                  <span class="d-block text-4">CSC 416</span> 
                  <span class="text-muted">14th March 2021 19:00</span> 
                </div>
                <div class="col-3 col-sm-4 text-center text-4"> 
                  <span class="text-nowrap">
                    4%
                  </span>
                </div>
                <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3"> 
                    <a href="/staff/class/123"><button class="btn btn-primary btn-sm"><i class="fa fa-eye"></i> view</button></a>
                </div>
                
              </div>
            </div>
          </div>
          <!-- Transaction List End --> 
          
          
          
          <!-- Transaction Item Details Modal End --> 
          
          <!-- Pagination
          ============================================= -->
          <ul class="pagination justify-content-center mt-4 mb-0">
            <li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a> </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active"> <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">......</li>
            <li class="page-item"><a class="page-link" href="#">15</a></li>
            <li class="page-item"> <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a> </li>
          </ul>
          <!-- Paginations end --> 
          
        </div>
        <!-- All Transactions End --> 
      </div>
      <aside class="col-md-4 d-none d-lg-block">
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4"> Lecture Details</h4>
        <form id="loginForm" method="post">
          <div class="form-group text-left">
            <label class="" for="emailAddress">Corse Code </label>
            <input type="text" class="form-control" disabled placeholder="Corse Code">
          </div>
          <div class="form-group text-left">
            <label class="" for="emailAddress">Date </label>
            <input type="date" class="form-control" disabled placeholder="15th March 1998">
          </div>
          <div class="form-group text-left">
            <label for="emailAddress">Start Time (Hrs)</label>
            <input type="time" class="form-control" disabled placeholder="19:12">
          </div>
          <div class="form-group  text-left">
            <label for="emailAddress">Period Tought (Hours)</label>
            <input type="number" class="form-control" disabled placeholder="4">
          </div>
          <div class="form-group text-left">
            <label for="emailAddress">Attendance</label>
            <input type="text" class="form-control" disabled placeholder="40%">
          </div>
          
         
        </form>
      </aside>
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>
