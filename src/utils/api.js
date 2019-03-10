import { client } from './client';

export const api = {
  user: {
    list: data => client.get('api/article/', data),
  },
};

export default { api };
