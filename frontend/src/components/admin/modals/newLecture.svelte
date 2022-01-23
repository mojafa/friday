<script>
  import Users from '../../../scripts/api/user';
  import Lectures from '../../../scripts/api/lectures';
  export let unit
  export let schedule;

  console.log(schedule);

  let time, day , lec , start;
  let staff = Users.GetAdmin();

  const Add = ()=>{
    const _lecture = {
      start:start,
      time:time,
      day:day ,
      staff:lec,
      unit:unit,
      schedule:schedule
    }

    Lectures.Add(_lecture);
    window.location.reload();

  }

</script>
<div id="transaction-detail" class="modal fade" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered transaction-details" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row no-gutters">
            
            <div class="col-sm-12">
              <h5 class="text-5 font-weight-400 m-3">Add New Lecture 
                <button type="button" class="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
              </h5>
              <hr>
              <div class="px-3">
                <form on:submit|preventDefault ="{Add}" >
                  <div class="form-group text-left">
                    <label class="" for="start">Start Time</label>
                    <input type="time" bind:value="{start}" class="form-control" id="start" required>
                  </div>
                  <div class="form-group text-left">
                    <label class="" for="time">Durration</label>
                    <input type="number" bind:value="{time}" class="form-control" id="time" required>
                  </div>
                  <div class="form-group text-left">
                    <label class=""  for="day">Day</label>
                    <select bind:value="{day}"   required class="custom-select" >
                      <option value="1">Monday</option>
                      <option value="2">Teusday</option>
                      <option value="3">Wednesday</option>
                      <option value="4">Thursday</option>  
                      <option value="5">Friday</option>  
                      <option value="7">Sataday</option>  
                      <option value="0">Sunday</option>  
                  </select>
                  </div> 
                  <div class="form-group text-left">
                    <label class="" for="lec">Lecturer</label>
                    <input type="text" bind:value="{lec}"  list="lec_list" class="form-control" id="lec" required>
                    <datalist id="lec_list">
                      {#await staff then _staff }
                        {#each _staff as _staff }
                          <option value="{_staff._id}">{_staff.firstName} {_staff.lastName}</option>
                        {/each}            
                      {/await}
                    </datalist>
                  </div> 
                  <div class="form-group ">
                    <button href="submit" class="btn btn-primary btn-block">Set Lecture</button> 
                    <button type="reset" class="btn btn-secondary btn-block">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>