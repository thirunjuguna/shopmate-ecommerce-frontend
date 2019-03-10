import axios from 'axios';
import { authUserHeader } from './auth';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/',
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

export default { client };
