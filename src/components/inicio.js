import React from 'react'
import Foto from '../Assets/foto.jpeg'
const inicio = () => {
  return (
    <div className='caja-f'>
        <section className='cajaf'>
        <div>
             <h2 className='frase'>El frontend: donde la creatividad se encuentra con la funcionalidad.</h2>
         </div>
         <div className='caja-ft'>
            <img src={Foto} className='foto'></img>
         </div>
        </section>
        
    </div>
  )
}

export default inicio

