import { client } from './client';

export const api = {
  user: {
    list: data => client.get('api/article/', data),
  },
  products: {
    list: () => client.get('/products'),
  },
};

export default { api };
