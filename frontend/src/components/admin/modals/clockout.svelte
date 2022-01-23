<script>
  export let data;
  
  import QRCode from '../../qrcode.svelte'
</script>
<div id="clockout" class="modal fade" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered clockouts" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row no-gutters">
            <div class="col-sm-12">
              <h5 class="text-5 font-weight-400 m-3">Clockout QR Code
                <button type="button" class="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
              </h5>
              <hr>
              <div class="px-3">
                <QRCode codeValue="{data}" squareSize=300/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>