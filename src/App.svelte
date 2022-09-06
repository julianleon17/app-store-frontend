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
  let myLocalStorage = localStorage.getItem( 'products' );

  // LOCAL STORAGE ACTIONS
  if ( myLocalStorage ) { products = JSON.parse( myLocalStorage ) } // GET
  $: localStorage.setItem( 'products', JSON.stringify( products ) ); // SAVE - PUSH

  let toastLive;
  let toastInstancia;
  let toastActions = { name:'', action:'' };

  $: {
    if ( toastLive ) {
      toastInstancia = new bootstrap.Toast( toastLive, { delay: 3000 } );
    }
  }

  // Toast function
  function showToast( params={ action:'', name:'' } ) {
    toastActions.name = params.name;
    toastActions.action = params.action;

    // Toast
    toastInstancia.show();
  }

  // Add
  function addProduct() {
    if ( product.title === '' ) {
      console.log( 'The task must have full content!' );
      return;
    }

    product.id = uuidv4();
    products = [...products, product];

    // Reset product
    const currentProduct = product;
    product = {...defaultProduct};

    showToast( {
      name: currentProduct.title,
      action: 'created'
    } );
  }

  // Delete
  function deleteProduct( id ) {
    const currentProduct = products.find( ( item ) => item.id === id );
    const newProducts = products.filter( ( item ) => item.id !== id );
    products = [...newProducts];

    showToast( {
      name: currentProduct.title,
      action: 'deleted'
    } );
  }

  // Update
  function updateProduct( id ) {
    const currentProduct = products.find( ( item ) => item.id === id );
    products = products.map( ( item ) => item.id === id ? { ...item, state: !item.state } : item );

    showToast( {
      name: currentProduct.title,
      action: 'Updated'
    } );
  }

  const approveIconClass = ( state ) => ( state ? 'bi bi-arrow-clockwise' : 'bi bi-check2' );
  const approveColorClass = ( state ) => ( state ? 'btn btn-danger' : 'btn btn-success' );
</script>

<main>
  <div class="container" >
    <h1 class="text-center" >CRUD</h1>

    <!-- Toast -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div bind:this={ toastLive } id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">CRUD</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          The product <b>{ toastActions.name }</b> was { toastActions.action }!
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
      <!-- <h1></h1> -->
      {#each products as item}
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title { item.state ? 'text-decoration-line-through' : '' }">{item.title}</h5>

            <p class="card-text">{item.description}</p>

            <button type="button" class="btn btn-warning"><i class="bi bi-pencil"></i> Edit</button>

            <button type="button" class={ approveColorClass( item.state ) } on:click={ updateProduct( item.id ) } >
              <i class={ approveIconClass( item.state ) }></i>
              { item.state ? 'Undo' : 'Done' }
            </button>

            <button type="button" on:click={ deleteProduct( item.id ) } class="btn btn-danger"><i class="bi bi-trash"></i> Delete</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
