import { client } from './client';
import { formatParams, objectToQueryParams } from './helpers';

export const api = {
  user: {
    list: (data) => client.get('user/', data),
  },
  products: {
    list: (data) =>
      client.get(`/products${formatParams(data)}?${objectToQueryParams(data)}`),
    search: (data) =>
      client.get(`/products/search?${objectToQueryParams(data)}`),
    retrieve: (data) => client.get(`/products${formatParams(data)}`),
  },
  categories: {
    list: () => client.get('/categories'),
    retrieve: (id) => client.get(`/categories/${id}`),
  },
  attributes: {
    list: (data) => client.get(`/attributes${formatParams(data)}`),
  },
  cart: {
    getId: (data) => client.get(`/shoppingcart${formatParams(data)}`),
    create: (data) => client.post(`/shoppingcart/add`, data),
    // Get List of Products in Shopping Cart
    list: (id) => client.get(`/shoppingcart/${id}`),
  },
};

export default { api };
