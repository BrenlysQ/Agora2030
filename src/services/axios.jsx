import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '',
});

axiosClient.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const aux = config;
  aux.headers.Authorization = `Bearer ${token}`;
  aux.headers.Accept = 'application/json';
  aux.headers['Content-Type'] = 'application/json';

  return aux;
});

axiosClient.interceptors.response.use((response) => response, (error) => {
  // JWT Token expired
  if (error?.response?.status === 401) {
    return {
      data: {
        ok: false,
        code: 401,
      },
    };
  }

  throw error;
});

export default axiosClient;
