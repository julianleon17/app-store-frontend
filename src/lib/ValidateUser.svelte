<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { user } from '../stores/stores';

  onMount( () => {
    if ( !$user ) {
      navigate( '/login', {
        replace: true
      } );
    }
  } );
</script>