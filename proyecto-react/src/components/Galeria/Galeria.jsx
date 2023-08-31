import React from 'react'
import Card from '../Card/Card'

const Galeria = ({productos}) => {

  return (
    <div className='galeria'>
      {productos.map (producto => <Card producto={producto}/>)}
    </div>
  )
}

export default Galeria