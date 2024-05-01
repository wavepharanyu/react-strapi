import axios, {AxiosError} from "axios";
import Products from "../models/Products";

const baseURL: string = 'http://localhost:1337/api/'

const getAll = async(url: string) => {
    try {
        let res = await axios.get(baseURL+url+'?populate=*')

        return res.data.data
    } catch (error) {
        const err = error as AxiosError
        console.log(err.response?.data)
    }
}

export { getAll }
