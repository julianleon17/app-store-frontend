<script>
  import { Router, Link, Route } from 'svelte-routing';

  // Routes
  // import Crud from './Crud.svelte';
  // import Home from './Home.svelte';

  // Views
  import Home from '@/views/Home.svelte';
  import Create from '@/views/Create.svelte';
  import Login from '@/views/Login.svelte';
  import SignIn from '@/views/SignIn.svelte';
  import List from '@/views/List.svelte';
  import Account from '@/views/Account.svelte';
</script>

<!-- Routing -->
<Router>
  <!-- <Route path="/crud" component={ Crud } /> -->
  <Route path="/"> <Home /> </Route>
  <Route path="/login"> <Login /> </Route>
  <Route path="/signin"> <SignIn /> </Route>
  <Route path="/account"> <Account /> </Route>
  <Route path="/create"> <Create /> </Route>
  <Route path="/list"> <List /> </Route>
</Router>
