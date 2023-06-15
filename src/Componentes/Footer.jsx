import React from 'react'
import '../Estilos/footer.css'
const Footer = () => {
  return (
    <footer className='w-100'>

        <div className='list'>
            <ul>
                <li><a href="#">Políticas de Venta</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="#">Aviso de Privacidad</a></li>
                <li><a href="#">Privacidad laboral</a></li>
                <li><a href="#">#QUÉDATEENCASA</a></li>
            </ul>
        </div>

        <div className='list'>
            <ul>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Sucursales</a></li>
            </ul>
        </div>

        <div className='list'>
            <h4>Contactanos</h4>
            <div className='social-netwroks'>

            </div>
            <div className='job-bag'>
                <a href="#">Bolsa de Trabajo</a>
            </div>
        </div>

        <div className='list'></div>
        <div className='copy-right'>
            <h3 className='text-center text-white'>Derechos de autor © 2023, FarmAnimals</h3>
        </div>
        
Download
        <svg className='wave' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,133.3C480,171,600,245,720,261.3C840,277,960,235,1080,197.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>    
    </footer>
  )
}

export default Footer
