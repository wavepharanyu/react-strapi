import axios from "axios";

const baseURL = 'http://localhost:1337/api/'

const authLogin = (data) => {
  return axios.post('auth/local', data,{
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
  })
}

export { authLogin }
