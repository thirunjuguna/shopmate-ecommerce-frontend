import { client } from './client';

export const api = {
  user: {
    list: data => client.get('user/', data),
  },
  products: {
    list: () => client.get('/products'),
  },
  categories: {
    list: () => client.get('/categories'),
  },
};

export default { api };
