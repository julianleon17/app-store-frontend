<script>
  import ProductTemp from '../components/ProductTemp.svelte';
  import Toast from '../components/Toast.svelte';
  import ValidateUser from '../lib/ValidateUser.svelte';
  import { products } from '../stores/stores.js';
  import { onMount } from 'svelte';
  import api from '../lib/api';

  onMount( async () => {
    products.reset( await api.getProducts() );
  } );

  function handlerAction( event ) {
    const action = event.detail.action;
    const id = event.detail.id;

    switch( action ) {
      case 'update':
      break;

      case 'delete':
        api.deleteProduct( id )
        .then( ( result ) => {
          if ( result.status === 200 ) {
            api.getProducts().then( ( result ) => products.reset( result ) );
          }
        } );
      break;

      default: console.log( 'Invalid action!' );
    }
  }
</script>

<ValidateUser />

<div>
  <h1 class="text-center" >CRUD - LIST</h1>

  <Toast />
  <div>
    {#each $products as item}
      <ProductTemp on:handlerAction={ handlerAction } { item } />
    {/each}
  </div>
</div>
