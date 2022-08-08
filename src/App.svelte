<script>
  import svelteLogo from './assets/svelte.svg';

  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  let products = [];
  let defaultProduct = { id: '', title:'', description:'', state: false };
  let product = {...defaultProduct};

  function addProduct() {
    if ( product.title === '' ) {
      console.log( 'The task must have full content!' );
      return;
    }

    product.id = uuidv4();
    products = [...products, product];

    // Toast
    const toastLive = document.getElementById( 'liveToast' );
    const toast = new bootstrap.Toast( toastLive, {
      delay: 3000
    } );
    toast.show();

    // Reset product
    product = {...defaultProduct};
  }

  // Delete
  function deleteProduct( id ) {
    const newProducts = products.filter( ( item ) => item.id !== id );
    products = [...newProducts];
  }

</script>

<main>
  <div class="container" >
    <h1 class="text-center" >CRUD</h1>

    <!-- Toast -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">CRUD</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          The task <b>{product.title}</b> was created!
        </div>
      </div>
    </div>

    <form class="w-75 m-auto" on:submit|preventDefault={ addProduct } >
      <div class="mb-3" >
        <label for="iTitle" class="form-label" >Title</label>
        <input
          id="iTitle"
          class="form-control"
          type="text"
          placeHolder="Product title"
          required="required"
          bind:value={product.title}
        />
      </div>

      <div class="mb-3" >
        <label for="iDescription" class="form-label" >Description</label>
        <textarea
          id="iDescription"
          class="form-control"
          placeHolder="Product description"
          required="required"
          bind:value={product.description}
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div>
      <h1></h1>
      {#each products as item}
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description}</p>
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-success">Done</button>
            <button type="button" on:click={ deleteProduct( item.id ) } class="btn btn-danger">Delete</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
