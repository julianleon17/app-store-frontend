<script>
	import { createEventDispatcher } from 'svelte';
  export let formTitle = '';

	const dispatch = createEventDispatcher();
  let email='';
  let password='';
  let typeError='';

  function showErrorMessage( keepMesage, message="Error Message" ) {
    let errorMessage = document.querySelector( '#error-message' );
    typeError = message;

    if ( keepMesage ) {
      if ( !Object.values( errorMessage.classList ).includes( 'show' ) ) {
        errorMessage.classList.add( 'show' );
      }
    } else {
      if ( Object.values( errorMessage.classList ).includes( 'show' ) ) {
        errorMessage.classList.remove( 'show' );
      }
    }
  }

	function eventHandler() {
		dispatch( 'eventHandler', {
			email,
      password,
      showErrorMessage
		});
  }
</script>

<div>
  <h1 class="text-center" >{ formTitle }</h1>

  <div id="error-message" class="alert alert-danger alert-dismissible m-auto w-50 text-center fade" role="alert">
    <strong>{ typeError }!</strong> You should check the fields.
    <button
      type="button"
      class="btn-close"
      aria-label="Close"
      on:click={ () => showErrorMessage( false ) }
    ></button>
  </div>

  <form class="my-5 w-50 m-auto" on:submit|preventDefault={ eventHandler } >
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input
        bind:value={ email }
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        required
      >
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        bind:value={ password }
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        required
      >
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button id="liveAlertBtn" type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>