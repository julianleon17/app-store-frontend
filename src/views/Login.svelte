<script>
  import { user } from '@/stores/stores';
  import { navigate } from 'svelte-routing';
  import { logIn } from '@/lib/firebase';
  import UserForm from '@/components/UserForm.svelte';

  async function validateCredentials( event ) {
    const credentials = event.detail;
    const email = credentials.email;
    const password = credentials.password;

    try {
      const res = await logIn( email, password );

      user.setUser( res );
      navigate( '/account', { replace: true } );
    } catch( error ) {
      console.error( error.message );
      const errorMessage = ( ( error.message.includes( 'user-not-found' ) ) ? 'User not found' : 'Wrong password' );

      credentials.showErrorMessage( true, errorMessage );
    }
  }
</script>

<div>
  <UserForm
    on:eventHandler={ validateCredentials }
    formTitle="LOGIN"
  />
</div>