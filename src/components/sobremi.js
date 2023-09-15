import React from 'react'
import Imagen from '../Assets/imagen.jpg'

const sobremi = () => {
  return (
    <div>
        <div className='caja-s'> 
            <div className='sobre-mi'>
                <div class='titulo'>
                    <h1>
                        SOBRE Mi
                    </h1>
                </div>

                <div className='contenido'>
                    <p>¡Hola! Soy Jimena, estudiante de programación de 18 años que vive en Medellín. Como mujer en el mundo de la tecnología, estoy comprometida con aprender y crecer en este emocionante campo.</p>
                    <p>Llevo ya un tiempo inmersa en el mundo de la programación, y mi enfoque principal se centra en el desarrollo frontend. Disfrute de la creación de experiencias visuales y amigables para los usuarios a través del código.</p>
                    <p>
                    Cuando no estoy programando, me encuentro explorando nuevos mundos a través de la lectura. La literatura es uno de mis pasatiempos favoritos y una fuente constante de inspiración.
                    </p>
                    <p>
                    stoy emocionada por las oportunidades que el futuro tiene reservadas en mi carrera en el desarrollo web y ansío seguir aprendiendo y creciendo en esta industria en constante evolución.
                    </p>
                    <p>
                    ¡Gracias por visitar mi portafolio! Si deseas conectarte o colaborar en proyectos emocionantes, ¡estaré encantada de conocerte!
                </p>
                </div>
            </div>
            <div className='imagen'>
                <img src={Imagen}></img>
            </div>
           
        </div>
        
    </div>
  )
}

export default sobremi