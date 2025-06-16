import axios from 'axios';

const api = axios.create({
  baseURL: 'https://clinicapi-h4bfgdfac8bcfpbt.brazilsouth-01.azurewebsites.net',
});

export default api;
