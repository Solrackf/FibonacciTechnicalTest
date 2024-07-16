import axios from 'axios';

export const apiGenerateFibonacci = () => {
  return axios.get('/api/fibonacci');
};
