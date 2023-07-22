import axios from 'axios';

export  async function call  (method, endpoint, data) {
   try {
    const token = localStorage.getItem('token');
    // option headers
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
    // base url
    const baseURL = import.meta.env.VITE_API_URL;



    const response = await axios({
        headers,
        baseURL,
        method,
        url:endpoint,
        data
    });
    console.log(response);
    return response.data;
   } catch (error) {
    console.log(error);
   }
    };

    const API = {
        call: async (_method, _endpoint, _postObj, _opts = {}) => {
          return call(_method, _endpoint, _postObj, {
            ..._opts,
          });
        },
      };
      
      export default { API };