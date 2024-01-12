import { useState, useContext, createContext } from 'react'
import Container from './components/Container'
import './App.css'
import AddToCart from './components/AddToCart'
import products from './components/products'

export const UserContext = createContext();

function App() {


  const [cartItems, setCartItems] = useState([])

  function updateCart(productId) {

    setCartItems( current => [...current, products.find((prod) => prod.prod_id === productId) ] )
    console.log(cartItems)
  }


  function removeCart(productId) {

    setCartItems( current => current.filter(item => item.prod_id !== productId) )
    console.log(cartItems)
    console.log(productId)


  }

  return (
    <>
      <UserContext.Provider value={updateCart} >
       <Container />
      </UserContext.Provider>

      <AddToCart cartItem={cartItems} removeCartItem={removeCart}/>
      
    </>
  )
}

export default App
