import React from 'react'
import { useContext } from 'react'
import './component.css'
import { UserContext } from '../App'

const Card = ({product}) => {

    const user = useContext(UserContext)

    return (
    <div className='card_wrapper' key={product.prod_id}>
        <div >
            <img src={product.prod_img} alt={product.prod_name} />
        </div>
        <h3> Name: {product.prod_name}</h3>
        <p>Price: {product.prod_price}</p>
        <button onClick={()=> user(product.prod_id)}>Add to Cart</button>
    </div>
  )
}

export default Card