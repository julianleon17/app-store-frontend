<script>
  // Router
  import Router from './routes/Router.svelte';

  // Components
  import Navbar from './components/Navbar.svelte';

  // Logic
  import { user } from './stores/stores';
  import { onMount } from 'svelte';

  onMount( async () => {
    await user.current();
  } );
</script>

{#if $user === false }
  <h1>Loading...</h1>
{:else}
  <Navbar />
  <div class="container" >
    <Router />
  </div>
{/if}