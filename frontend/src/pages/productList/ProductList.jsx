import { useState, useEffect } from 'react'
import api from '../../services/productAPI'
import { baseURL, baseURLAPI } from '../../constants/configAxios'
import { NumericFormat }  from 'react-number-format'

import dayjs from 'dayjs'
import thai from 'dayjs/locale/th'
import relativeTime from 'dayjs/plugin/relativeTime'
import { NavLink } from "react-router-dom"
dayjs.extend(relativeTime)

dayjs.locale(thai)

const ProductList = () => {
  document.title = "รายการสินค้า"
  
  const [products, setProducts] = useState([])

  console.log(products)
  // console.log(baseURLAPI);

  useEffect(() => {
    readAllProduct()
  },[])

  const readAllProduct = async() =>{
    try {
      const res = await api.getAllProduct()
   
      setProducts(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(products)

  return (
    <>
      <div className="flex my-6">
          <h1 className="text-2xl text-black pb-6">Product List</h1>
          <p className="flex-1 text-right">
            <NavLink to="/addproduct" className="border-green-500 border-2 rounded-sm px-2 py-1 mb-2 text-green-500 text-xl">+ เพิ่มรายการ</NavLink>
          </p>
      </div>
      
      <div className="w-full">
        
        <div className="bg-white overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-gray-500 uppercase font-medium text-xs text-left tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th className="px-5 py-3">
                  Qty
                </th>
                <th className="px-5 py-3">
                  Category
                </th>
                <th className="px-5 py-3">
                  Created
                </th>
                <th className="px-5 py-3">
                  Updated
                </th>
                <th className="px-5 py-3 text-right">
                  Manage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

              {
                products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100 border-gray-200 text-md">

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {
                            product.attributes.image.data ?
                            <img
                                className="h-10 w-10 rounded-full"
                                src={ `${baseURL}${product.attributes.image.data.attributes.formats.thumbnail.url}` }
                                alt=""
                            />
                            :
                            <img
                                className="h-10 w-10 rounded-full"
                                src="/assets/images/noimg.jpg"
                                alt=""
                            />
                          }
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.attributes.title && product.attributes.title.substring(0, 24)} ..
                          </div>
                          <div className="text-sm text-gray-500">
                            {product.attributes.description && product.attributes.description[0].children[0].text.substring(0, 24)} ..
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <NumericFormat value={product.attributes.price} fixedDecimalScale={true} decimalScale={2} thousandSeparator={true} displayType={'text'} /> บาท
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b">
                      <p className="text-gray-900 whitespace-no-wrap">
                      {product.attributes.qty}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b ">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {product.attributes.category && product.attributes.category.data.attributes.title}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {dayjs(product.attributes.createdAt).format('D MMM YYYY H:m:s')}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {
                            dayjs(product.attributes.updatedAt).fromNow()
                          }
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b text-sm text-right">
                      <p className="text-gray-900 whitespace-no-wrap flex">
                        <a href="#edit" className="border-yellow-500 border-2 rounded-sm px-3 py-1 hover:text-white hover:bg-yellow-500">แก้ไข</a> &nbsp;
                        <a href="#delete" className="border-red-500 border-2 rounded-sm px-3 py-1 hover:text-white hover:bg-red-500">ลบ</a>
                      </p>
                    </td>

                </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductList
