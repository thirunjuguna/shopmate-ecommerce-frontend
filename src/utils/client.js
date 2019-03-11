import axios from 'axios';
import { authUserHeader } from './auth';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://backendapi.turing.com/',
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

export default { client };
