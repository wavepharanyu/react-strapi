import {useEffect, useState} from 'react'
import { getAll } from '../../services/base.service';
import Products from '../../models/Products';


const Dashboard = () => {

    const [product, setProduct] = useState<Products[]>([]);

    const fetchProduct = async() => {

        try {
            let res: Products[]
            res = await getAll('products')
            setProduct(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    console.log(product)
    return (
        <div>
            <p>hello</p>
            <table>

                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>

                <tbody>
                    {
                        product.map((prd) => 
                            (
                                <tr key={prd.id}>
                                    <td>{prd.id}</td>
                                    <td>{prd.attributes.title}</td>
                                    <td>{prd.attributes.price}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>

            </table>
            
        </div>
    )
}

export default Dashboard