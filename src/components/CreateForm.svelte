<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const defaultProduct = { name: null, description: null, price: null };
  let product = {...defaultProduct};
  export let formTitle = 'Form';

  function eventHandler() {
    dispatch( 'eventHandler', { ...product } );

    // Reset product
    product = {...defaultProduct};
  }
</script>

<div>
  <h1 class="text-center" >{ formTitle }</h1>

  <form class="w-75 m-auto" on:submit|preventDefault={ eventHandler } >
    <div class="mb-3" >
      <label for="iName" class="form-label" >Name</label>
      <input
        id="iName"
        class="form-control"
        type="text"
        placeHolder="Product Name"
        required="required"
        bind:value={product.name}
      />
    </div>

    <div class="mb-3" >
      <label for="iPrice" class="form-label" >Price</label>
      <input
        id="iPrice"
        class="form-control"
        type="number"
        min=0
        placeHolder="$ Product Price"
        required="required"
        bind:value={product.price}
      >
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
</div>