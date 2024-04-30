import http from '../constants/configAxios'

//Method Read All Product
const getAllProduct = () => {
    return http.get('/products?populate=*')
}

//Method Read By ID
const getProductById = (id) => {
    return http.get(`/products/${id}?populate=*`);
}

//Method Add New Product
const addNewProduct = (data) => {
    return http.post(`/products`, data);
}

//Method Update Product
const updateProduct = (id, data) => {
    return http.put(`/products/${id}`, data);
}
  
//Method Delete Product
const deleteProduct = (id) => {
    return http.delete(`/products/${id}`);
}

export default {
    getAllProduct,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
}