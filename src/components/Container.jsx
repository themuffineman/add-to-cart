import React from 'react'
import Card from './Card'
import products from './products'
import './component.css'
import { useState } from 'react'
import Filter from './Filter'


const Container = ({newCart}) => {
  

  function addtocart(item){
    newCart(item)
    console.log(item)
  }

  return (
    <div className='main_container'>  
        {/* <Filter onChange={getInputValue}/> */}
        <div className='grid_wrapper'>
        {products.map((prod)=>(
          <Card product={prod} onClickCart={()=> addtocart(prod)}/>
        ))}
      </div>
    </div>
   
  )
  }

export default Container

