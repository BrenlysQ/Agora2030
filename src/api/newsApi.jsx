import axios from "axios";
const api = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2"
});
const newsApi = {
    newsApi: async () => {
      const { data } = await api.get("/articlesearch.json", {
        params: {
          "api-key": '3uwHEvQY03lAK0d4qkwOm7blO9tNIG2m',
          sort: "newest",
         
        }
      });
      return data.response.docs;
    },
  };
  
  export default newsApi;


