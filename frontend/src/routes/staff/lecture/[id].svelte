<script context="module">
  export async function load(ctx) {
      let id = ctx.page.params.id
      return { props: { id }}
  }
</script>
<script>
	import Layout from '../../../components/staff/layout.svelte';
  import QRcodes from '../../../scripts/api/qrcodes';
  import { v4 as uuidv4 } from 'uuid';
  import { onMount } from 'svelte';
  import QRCode from '../../../components/qrcode.svelte'


  export let id;

  let staff ='11111'
  let title = '';
  let qr_uuid = '';

  let clockin, clockout;

  onMount(()=> {
    getClocks();
  })


  const getClocks = async () =>{
    const qrcodes = await QRcodes.Find(id);
    if (qrcodes.length < 1) return;
    qrcodes.forEach(qr => {
      if(qr.type == 0){
        clockin = qr;
      }else{
        clockout = qr;
      }
    });
  }

  const showClockin = ()=>{
    title = 'Clockin' ;
    qr_uuid = clockin.uuid;
  }

  const showClockout = ()=>{
    title = 'Clockout' ;
    qr_uuid = clockout.uuid;
  }

  const generateClockin = () =>{
    getClocks();
    if(clockin)return;
    QRcodes.Add({
      lesson:id,
      generatedAt:Date.now(),
      generatedBy:staff,
      uuid:uuidv4(),
      type:0,
    })
    getClocks();

  }


  const generateClockout = () =>{
    getClocks();
    if(clockout)return;
    QRcodes.Add({
      lesson:id,
      generatedAt:Date.now(),
      generatedBy:staff,
      uuid:uuidv4(),
      type:1,
    })
    getClocks();

  }
</script>

<Layout>
	<div class="bg-white p-4 ">
		<h4 class="text-left mb-5">Lecture Attendance Sheet</h4>
    <div class="row">
      <div class="col-lg-12"><div class="bg-white mb-4 row">
        <div class="col-md-4">
          <h3 class="text-5 font-weight-400 d-flex align-items-center mb-4">CSC 417</h3>
          <p>
            <b> Start Time: </b>12:00 <br>
            <b> Type: </b> Physical Class <br>
          </p>
          <button on:click="{generateClockin}"  class="btn btn-primary btn-sm"><span class="mr-1"><i class="bx bx-time nav_icon"></i></span>Generate Clock In </button>
          <button on:click="{generateClockout}" class="btn btn-secondary btn-sm"><span class="mr-1"><i class="bx bx-time nav_icon"></i></span>Generate Clock Out</button>
        </div>

        <div class="col-lg-4  text-center text-lg-left pb-4 pb-lg-0">
          <div class="p-4">
            <h3 class="text-5 mb-4 text-center">Clock In QR</h3>
            <hr class="mb-4 mx-n4">
            {#if clockin}
              <div class="text-center">
                <button on:click="{showClockin}" class="btn btn-primary btm-md" data-toggle="modal" data-target="#clockin">Show Clockin QRcode</button>
              </div>
              
            {/if}
          </div>
        </div>

        <div class="col-lg-4 ">
          <div class=" p-4">
            <h3 class="text-5 mb-4 text-center">Clock OutQR</h3>
            <hr class="mb-4 mx-n4">
            {#if clockout}
            <div class="text-center">
              <button on:click="{showClockout}" class="btn btn-primary btm-md" data-toggle="modal" data-target="#clockin">Show Clockout QRcode</button>
            </div>
            {/if}
            
          </div>
        </div>
        
        <div id="clockin" class="modal fade" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg clockins" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="row no-gutters">
                  <div class="col-sm-12">
                    <h5 class="text-5 font-weight-400 m-3">{title} QR Code
                      <button type="button" class="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    </h5>
                    <hr>
                    <div class="px-3">
                      {#if title = 'Clockin' }
                        {#if clockin}
                          <QRCode codeValue="{clockin.uuid}" squareSize=300/>
                        {/if}
                        
                      {:else}
                        {#if clockin}
                          <QRCode codeValue="{clockout.uuid}" squareSize=300/>
                        {/if}
                      {/if}
                      
                      
                    </div>
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
        </div>
        <!-- All Transactions
        ============================================= -->
        </div>
        <div class="col-lg-12">
      
        
          <!-- All Transactions
          ============================================= -->
          <div class="bg-white mb-4">
            <h3 class="text-5 font-weight-400 d-flex align-items-center px-4 mb-4">All Students</h3>
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
          
          
         

        </div>
        <!-- All Transactions End --> 
      </div>
      
</Layout>
