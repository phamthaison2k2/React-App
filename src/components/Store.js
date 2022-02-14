import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import './Store.scss'


function Store() {

    const [products, setProduct] = useState([])

    const api = 'https://fakestoreapi.com/products'

    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then(response => setProduct(response))

    }, []);

    return (
        <>
            <h1>Store</h1>
            <div className="Store">
                
                {products.map(product => (
                    <div className="Container" key={product.id}>
                        <img className="imgProduct" src={product.image}/>
                        <h4>{product.title}</h4>
                        <p>{'$' + product.price}</p>
                        <div className="rateCount">
                            <span>{product.rating.rate} <FaStar/></span>
                            <span>Sold {product.rating.count}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Store;