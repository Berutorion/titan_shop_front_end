import axios from 'axios';
import Alerts from '../helpers/Alerts'

export  async function call  (method, endpoint, data) {
   try {
    const token = localStorage.getItem('token');
    // option headers
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
    // base url
    const baseURL = import.meta.env.VITE_API_URL + "/api";

    const response = await axios({
        headers,
        baseURL,
        method,
        url:endpoint,
        data
    });
    return response.data;
   } catch (error) {
      if(!error.response){
        throw new Error('Network Error');
      }else{
        console.log("Error" , error)
        throw new Error(error.response.data?.message?error.response.data.message:error.response.statusText);
      }
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