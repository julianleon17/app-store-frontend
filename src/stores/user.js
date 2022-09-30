import { writable } from 'svelte/store';
import { getCurrentUser } from '../lib/firebase';

export const createUser = () => {
  const { subscribe, set } = writable( false );

  return {
    subscribe,
    setUser: ( user ) => {
      set( user );
    },
    current: async () => {
      const user = await getCurrentUser();
      set( user );
    }
  }
}