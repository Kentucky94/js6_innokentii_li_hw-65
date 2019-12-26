import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://js6-innokentii-li-hw-65.firebaseio.com/',
});

export default axiosAPI;