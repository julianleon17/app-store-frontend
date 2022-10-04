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
</script>

<div class="card my-2">
  <div class="card-body">
    <h5 class="card-title { item.state ? 'text-decoration-line-through' : '' }">{item.name}</h5>
    <p class="card-text">{item.description}</p>
    <p class="card-text">{item.price} $</p>

    <button type="button" on:click={ handlerAction( 'update', item.id ) } class="btn btn-warning"><i class="bi bi-pencil"></i> Edit</button>
    <button type="button" on:click={ handlerAction( 'delete', item.id ) } class="btn btn-danger"><i class="bi bi-trash"></i> Delete</button>
  </div>
</div>