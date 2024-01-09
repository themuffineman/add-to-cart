import { useState } from 'react'
import Container from './components/Container'
import './App.css'
import AddToCart from './components/AddToCart'

function App() {

  const [cartItems, setCartItems] = useState([])

  function updateCart(newItem){
    console.log(newItem)

    setCartItems((current)=>(
      [...current, newItem]
    ))
  }

  function removeCart(productId){

    setCartItems((current)=>{
      const updatedCart = current.filter(item => item.prod_id !== productId);
      setCartItems(updatedCart);
    }
    )
  }

  return (
    <>
      <Container newCart={(e)=>updateCart(e)}/>
      <AddToCart cartItem={cartItems} removeCartItem={removeCart}/>
    </>
  )
}

export default App
