import { writable } from 'svelte/store';

export const createProducts = () => {
  const { subscribe, set, update } = writable( [] );

  return ( {
    subscribe,
    reset: ( products ) =>{
      set( products );
    },
    add: ( product ) => {
      update( products => products = [...products, product] );
    },
    delete: ( id ) => {
      update( products => products.filter( ( item ) => item.id !== id ) );
    },
    update: ( id ) => {
      update( products => products = products.map( ( item ) => item.id === id ? { ...item, state: !item.state } : item ) );
    }
  } );
}