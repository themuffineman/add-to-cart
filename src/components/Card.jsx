import React from 'react'
import './component.css'

const Card = ({product, onClickCart}) => {

    return (
    <div className='card_wrapper'>
        <div className=''>
            <img src={product.prod_img} alt={product.prod_name} className='' />
        </div>
        <h3 className=''> Name: {product.prod_name}</h3>
        <p>Price: {product.prod_price}</p>
        <button id={product.prod_id} onClick={()=> onClickCart(product)}>Add to Cart</button>
    </div>
  )
}

export default Card