<script>
  import {user} from '../../scripts/state';
  
	import Layout from '../../components/staff/layout.svelte';
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

  const isTaday = (day) =>{
    const d = new Date();
    if(day == d.getDay()+''){
      return true
    }
    return false;
  }
  let staff = '11111';
  staff = $user.id;

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

  let id, code, title ,time, location , schedule = '61e2b96e6f9089a1331ae36b';
  let today = new Date();
  let _time = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
  let step = 0;
  
	axios.defaults.withCredentials = true;

  const Add = async (_state) =>{
    console.log(id);
    const _lession ={
      lecture:id,
      day: _time,
      title: title,
      location:location,
      schedule:schedule,
      state :_state
    }
    Lesson.Add(_lession);
    
  }

  const isRuning = () =>{
    if(!selected)
      return false;
    
    //get time
    //compare time rage +4hrs
    return true;
  }

  

  const setLession = () =>{
    axios.post(url+`api/lession/${id}/${_time}`, {code: code, start: time,title: title, location:location })
		.then((res) => {
			alert("Lesson Updated Successfully");
		})
		.catch(function (error) {
			console.log(error);
		});
  }

  const showDetails = async (data)=>{
    id = data._id

    const result  = await Lesson.Find(id, _time );
    if(result.length > 0){
      if(result[0].state == 0){
        step =2;
      }else if(result[0].state == 1){
        lesson_id = result[0]._id
        step =3;
      }

    }else{
      step =1;
      
      code = data._unit.code;
      time = data.start;
      title = '';
      location = '';

    }
    
  }
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Today's Activities</h4>
    <div class="row">
      <div class="col-lg-8 col-auto">
        <div class="bg-white py-4 mb-4">
            <!-- Notifications List
            =============================== -->
            <div class="notifications-list">
              {#each data as _lecture }
              {#if isTaday(_lecture.day)}
              <div class="notifications-item  px-4 py-3" on:click="{()=>showDetails(_lecture)}" >
                <div class="row align-items-center flex-row">
                  <div class="col-2 col-sm-1 text-center text-8 icon-bell"><i class="fas fa-chalkboard-teacher"></i></div>
                  <div class="col col-sm-8">
                    <h4 class="text-3 mb-1">{_lecture._unit.code}</h4>
                    <span class="text-muted">Starts at {_lecture.start}</span>
                  </div>
                  
                </div>
              </div>
              {/if}
              {/each} 
            </div>
            <!-- Notifications List End --> 
            
            
            
          </div>
      </div>
      
        <aside class="col-md-4 d-none d-lg-block">
          {#if step == 1}
        <h4 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4"> Lecture Details </h4>
        <form on:submit|preventDefault ="{Add}">
          <div class="form-group text-left">
            <label class="" for="code">Course Code </label>
            <input type="text" bind:value="{code}" readonly class="form-control" required>
          </div>
          <div class="form-group text-left">
            <label class="" for="time">Start Time </label>
            <input type="text" bind:value="{time}" readonly class="form-control" required>
          </div>
          <div class="form-group text-left">
            <label class="" for="title">Title </label>
            <input type="text" bind:value="{title}" required class="form-control" >
          </div>
          <div class="form-group text-left">
            <label class="" for="emailAddress">Location </label>
            <select bind:value={location} name="role" required class="custom-select" >
              <option value="0">Physical</option>
              <option value="1">Online</option>
          </select>
          </div>
        </form>
        <div class="btn-group m-0 w-100 row">
            <button on:click="{()=>Add(1)}"  class="btn btn-primary btn-sm shadow-none col-6">
              <span class="mr-1"><i class="bx bx-check nav_icon"></i></span>Confirm Lecture
            </button>
            <button on:click="{()=>Add(0)}" class="btn btn-secondary btn-sm shadow-none col-6">
              <span class="mr-1"><i class="bx bx-time nav_icon"></i></span>Cancel Lecture
            </button>
        </div>
        {:else if step ==2}
        <div class="bg-white text-center ">
          <div class="my-4">
            
            <p class="text-danger text-20 line-height-07"><i class="fas fa-times-circle" /></p>
            <p class="text-danger text-8 font-weight-500 line-height-07">Lession Canceled!</p>
          </div>
          <p class="text-3 mb-4">
            The Lesson was  temporarily by Lecturer untill futher notice.
          </p>
        </div>
        
        {:else if step ==3}
        
        <div class="bg-white text-center ">
        <div class="my-4">
          <p class="text-success text-20 line-height-07"><i class="fas fa-check-circle" /></p>
          <p class="text-success text-8 font-weight-500 line-height-07">Lesson Confrimed!</p>
        </div>
        <p class="text-3 mb-4">
          The Attendance by the Lecutre has been conformed.
        </p>
        <div class="btn-group m-0 w-100 row">
          {#if isRuning}
            <a class="col-12" href="/staff/lecture/{id}"><button class="btn btn-primary btn-sm shadow-none col-12">
              <span class="mr-1">
                <i class="bx bx-right-arrow-alt nav_icon" />
              </span>Start Class
            </button></a>
          {/if}  
        </div>
        </div>
        {/if} 
      </aside>
      

      
      
    </div>
		<!-- Style 3 end -->
	</div>
</Layout>
