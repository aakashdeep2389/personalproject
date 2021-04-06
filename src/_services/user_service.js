import API from '../config/api'
import axios from 'axios';


axios.defaults.headers.common['accessToken'] = localStorage.getItem('accessToken');
axios.defaults.headers.common['Authorization'] = `${"Basic d2hvb3A6d2hvb3BAMTIz"}`;

export const loginAdmin = (params) => {
    return axios.post(API.USER_LOGIN, params)
}

