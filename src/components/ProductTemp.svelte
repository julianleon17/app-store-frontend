<script>
  // import { products, toastActions } from '../stores/stores.js';
  import { createEventDispatcher } from 'svelte';
  export let item;
  let state = false;
  const dispatch = createEventDispatcher();

  function handlerAction( action, id ) {
    dispatch( 'handlerAction', { action, id } );
    state = !state;
  }

/*
  // Delete
  function deleteProduct( id ) {
    // const currentProduct = $products.find( ( item ) => item.id === id );
    // products.delete( id );

    // toastActions.show( {
    //   name: currentProduct.title,
    //   action: 'deleted'
    // } );
  }
  // Update
  function updateProduct( id ) {
    // dispatch( 'clickAction', { id } );
    // const currentProduct = $products.find( ( item ) => item.id === id );
    // products.update( id );

    // toastActions.show( {
    //   name: currentProduct.title,
    //   action: 'Updated'
    // } );
  }

  const approveIconClass = ( state ) => ( state ? 'bi bi-arrow-clockwise' : 'bi bi-check2' );
  const approveColorClass = ( state ) => ( state ? 'btn btn-danger' : 'btn btn-success' );
*/
</script>

<div class="card my-2">
  <div class="card-body">
    <h5 class="card-title { item.state ? 'text-decoration-line-through' : '' }">{item.name}</h5>

    <p class="card-text">{item.description}</p>
    <p class="card-text">{item.price} $</p>

    <button type="button" on:click={ handlerAction( 'update', item.id ) } class="btn btn-warning"><i class="bi bi-pencil"></i> Edit</button>

    <!--
    <button type="button" class={ approveColorClass( state ) } on:click={ handlerAction( 'update', item.id ) } >
      <i class={ approveIconClass( state ) }></i>
      { state ? 'Undo' : 'Done' }
    </button>
    -->

    <button type="button" on:click={ handlerAction( 'delete', item.id ) } class="btn btn-danger"><i class="bi bi-trash"></i> Delete</button>
  </div>
</div>