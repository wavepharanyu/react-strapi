import http from '../constants/configAxios'
import httpFormdata from '../constants/configAxiosFormData'

//Method Read All Product
const getAllProduct = () => {
    return http.get('/products?populate=*')
}

//Method Read All Category
const getAllCategory = () => {
    return http.get('/categories')
}


//Method Read By ID
const getProductById = (id) => {
    return http.get(`/products/${id}?populate=*`);
}

//Method Add New Product
const addNewProduct = (data) => {
    return httpFormdata.post(`/products`, data);
}

//Method Update Product
const updateProduct = (id, data) => {
    return http.put(`/products/${id}`, data);
}
  
//Method Delete Product
const deleteProduct = (id) => {
    return http.delete(`/products/${id}`);
}

const uploadFile = () => {
    return http.post(`/upload`);
}

export default {
    getAllProduct,
    getAllCategory,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct,
    uploadFile
}