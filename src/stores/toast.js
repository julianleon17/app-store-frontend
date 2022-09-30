import { writable } from 'svelte/store';

export const createOptions = () => {
  const { subscribe, set, update } = writable( {
    name:'',
    action:'',
    state: false 
  } );

  return( {
    subscribe,
    show: ( options ) => {
      options.state = true;
      update( n => n = options );
    }
  } );
}