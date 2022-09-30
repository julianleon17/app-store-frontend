<script>
  import { toastActions } from '../stores/stores.js';
  let toastLive;
  let toastInstancia;

  $: {
    if ( toastLive ) {
      toastInstancia = new bootstrap.Toast( toastLive, { delay: 3000 } );
    }
  }

  $: {
    if ( $toastActions.state ) {
      toastInstancia.show();
    }
  }
</script>

<!-- Toast -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div bind:this={ toastLive } id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">CRUD</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      The product <b>{ $toastActions.name }</b> was { $toastActions.action }!
    </div>
  </div>
</div>
