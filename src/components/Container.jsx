import React from 'react'
import Card from './Card'
import products from './products'
import './component.css'
import Filter from './Filter'


const Container = () => {
  

  return (
    <div className='main_container'>  
        <div className='grid_wrapper'>
        {products.map((prod)=>(
          <Card product={prod} />
        ))}
      </div>
    </div>
   
  )
  }

export default Container

