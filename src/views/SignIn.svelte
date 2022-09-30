<script>
  import { user } from '../stores/stores';
  import { navigate } from 'svelte-routing';
  import { signInUser } from '../lib/firebase';
  import UserForm from '../components/UserForm.svelte';

  async function registerUser( event ) {
    const credentials = event.detail;
    const email = credentials.email;
    const password = credentials.password;

    try {
      const res = await signInUser( email, password );

      user.setUser( res );
      navigate( '/account', { replace: true } );
    } catch( error ) {
      console.error( error.message );
      const errorMessage = error.message
      .replace( 'Firebase: ', '' )
      .replace( ' (auth/weak-password).', '' );

      credentials.showErrorMessage( true, errorMessage );
    }
  }
</script>

<div>
  <UserForm
    on:eventHandler={ registerUser }
    formTitle="SING-IN"
  />
</div>