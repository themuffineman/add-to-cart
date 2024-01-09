import React from 'react'
import './component.css'
import { useState } from 'react'

const Filter = ({onChange}) => {

    const [slider, setSlider] = useState(300)

    function updateSlider(event){

        setSlider(
            event.target.value
        )

        onChange(event.target.value)


    }
  return (
    <div className='filter'>
        <h4>
            Filter By Price: ${slider}
        </h4>
        <input type="range" min="0" max="300" value={slider} onChange={(e)=>updateSlider(e)}/>
    </div>
  )
}

export default Filter