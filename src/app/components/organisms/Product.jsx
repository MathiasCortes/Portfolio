import React from 'react'
import image from 'next/image'

const search = (id) => {
  
}

const Product = (name, category, price) => {
  return (
    <div>
      /*Image*/
        <h3>{name}</h3>
        <p>{price}</p>
        <button placeholder='Add to cart' className='' />
    </div>
  )
}

export default Product
