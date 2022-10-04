import { createProducts } from './products';
import { createOptions } from './toast';
import { createUser } from './user';

// Export
export const products = createProducts();
export const toastActions = createOptions();
export const user = createUser();