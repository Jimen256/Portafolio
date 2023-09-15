import React from 'react'
import imgRest from '../Assets/imgProyecto.png'

const Proyectos = () => {
  return (
    <div>
      <section className='sectionProyect'> 
        <div className='boxCard'>
              
          <div className='boxTittle' style={{padding:'20px'}}>
            <h2 style={{textAlign:'center'}}>Proyectos</h2>
          </div>
          <div className='boxLowerInfo'>
            <div className='boxImg'>
             <img src={imgRest} style={{width:'300px', height:'190px'}}></img>
            </div>
            <div className='boxInfo' style={{display:'flex', justifyContent:'center', flexDirection:'column', paddingBottom:'65px'}}>
                <h3>Restaurante Lynna</h3>
                <p>Página web realizada para un retaurante como proyecto final.</p>
                <a href='https://four-legged-section.000webhostapp.com/index_princ.html' target='_blank' >visitar página</a>
            </div>
         </div>
           
        </div>
      </section>
    </div>
  )
}

export default Proyectos