import React from 'react'
import './ColorContainer.css'

const ColorContainer = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section>
        <div className='container'>
            <div className='color' style={{
              backgroundColor: colorValue,
              color: isDarkText ? "#000" : "#fff"
              }}>

              <p>{colorValue ? colorValue: 'No Color'}</p>
              <p>{hexValue ? hexValue: ''}</p>
            </div>
                   
        </div>

    </section>
  )
}

ColorContainer.defaultProps ={
  colorValue: 'Empty Color Value'
}

export default ColorContainer