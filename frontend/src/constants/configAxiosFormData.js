import axios from "axios";

export const baseURL = 'http://localhost:1337'

export const baseURLAPI = 'http://localhost:1337/api'

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: baseURLAPI,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    }
})