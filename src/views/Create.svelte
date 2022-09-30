<script>
  import { products, toastActions } from '../stores/stores.js';
  import ValidateUser from '../lib/ValidateUser.svelte';
  import CreateForm from '../components/CreateForm.svelte';
  import Toast from '../components/Toast.svelte';
  import api from '../lib/api';

  // Add
  function addProduct( event ) {
    const product = event.detail;

    api.createProduct( product )
    .then( ( result ) => {
      if ( result.status === 200 ) {}
    } );
  }
</script>

<ValidateUser />

<Toast />
<CreateForm
  on:eventHandler={ addProduct }
  formTitle="CRUD - CREATE"
/>