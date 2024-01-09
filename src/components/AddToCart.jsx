import React from 'react';

const AddToCart = ({ cartItem, removeCartItem }) => {
  return (
    <div className='addtocart'>
      <h2>CART <button>Close</button></h2>
      <div className='cart_grid'>
        {Array.isArray(cartItem) && cartItem.map((prod) => (
          <div className='cart_card' key={prod.prod_id}>
            <img src={prod.prod_img} alt={prod.prod_name} />
            <span>
              <h4>{prod.prod_name}</h4>
              <p>{prod.prod_price}</p>
              <button onClick={()=> removeCartItem(prod.prod_id)}>Remove</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
