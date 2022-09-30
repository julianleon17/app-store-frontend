<script>
  import { user } from '../stores/stores';
  import ValidateUser from '../lib/ValidateUser.svelte';
</script>

<ValidateUser />

{#if $user }
  <div>
    <h1>Account</h1>

    <h2>Hello!</h2>
    <p><b>Email:</b> { $user.email }</p>
  </div>
{:else}
  <h1>Debes iniciar sesión!</h1>
{/if}

