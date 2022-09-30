import { createProducts } from './products';
import { createOptions } from './toast';
import { createUser } from './user';
// import { createProductsApi } from './productsApi.js';

// Export
export const products = createProducts();
export const toastActions = createOptions();
export const user = createUser();
// export const api = createProductsApi();