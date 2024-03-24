import { URL_API } from '../config/constant';
import axiosClient from '../services/axios';

const newsApi = {
    newsApi: () => {
      const url = `${URL_API.HOST}`;
      const res = axiosClient.get(url);
      return res;
    },
  };
  
  export default newsApi;