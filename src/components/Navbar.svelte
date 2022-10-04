<script>
  import { Router, Link, Route } from 'svelte-routing';
  import { user } from '@/stores/stores';
  import { logOut } from '@/lib/firebase';

  async function closeSession() {
    await logOut();
    user.setUser( null );
  }

  // console.log( $user );
</script>

<header class="site-header sticky-top py-1 bg-dark">
  <nav class="container d-flex flex-column flex-md-row justify-content-between">
    <Router>
      <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/">Home</Link>

      {#if $user !== null }
        <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/create">Create</Link>
        <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/list">List</Link>
        <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/account">Account</Link>
        <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/login" on:click={ closeSession }>Logout</Link>
      {:else}
        <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/login">Login</Link>
        <Link class="py-2 d-none d-md-inline-block text-decoration-none text-light" to="/signin">SignIn</Link>
      {/if}
    </Router>
  </nav>
</header>