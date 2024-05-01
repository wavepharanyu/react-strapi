import axios from "axios";
import http from '../constants/configAxios'

const baseURL = 'http://localhost:1337/api/'

const authLogin = (data) => {
  return axios.post('auth/local', data,{
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
  })
}

const getUser = () => {
  return http.get('users/me')
}

export { authLogin, getUser }
