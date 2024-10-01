import React from 'react'

const errorMensage = ({nE,error}) => {
  return (
    <div id={visible ? 'invisible' : 'visible'}>
      <p>{nE}:{error}</p>
    </div>
  )
}

export default errorMensage
