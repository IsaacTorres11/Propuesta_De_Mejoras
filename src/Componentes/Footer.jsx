import React from 'react'
import '../Estilos/footer.css'
const Footer = () => {
  return (
    <footer className='d-flex flex-wrap'>
        <div className='section dark-grey'>
            <h6 className='description'>Compromiso de Servicio</h6>
            <ul>
                <li><a className='linkFo' href="#">Políticas de Venta</a></li>
                <li><a className='linkFo' href="#">Términos y Condiciones</a></li>
                <li><a className='linkFo' href="#">Aviso de Privacidad</a></li>
                <li><a className='linkFo' href="#">Privacidad laboral</a></li>
                <li><a className='linkFo' href="#">#QUÉDATEENCASA</a></li>
            </ul>
        </div>

        <div className='section light-grey'>
            <h6 className='description'>Atención al Cliente</h6>
            <ul>
                <li><a className='linkFo' href="#">Preguntas Frecuentes</a></li>
                <li><a className='linkFo' href="#">Sucursales</a></li>
            </ul>
        </div>

        <div className='section dark-grey'>
            <h6 className='description'>Contactanos</h6>
            <div className='social-networks'>
                <a className='network facebook' href="#"><i class='bx bxl-facebook'></i></a>
                <a className='network instagram' href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a className='network youtube' href="#"><i class='bx bxl-youtube'></i></a>
            </div>
            <div className='job-bag'>
                <a className='job' href="#">Bolsa de Trabajo</a>
            </div>
        </div>

        <div className='section light-grey'>
            <h6 className='description'>Boletín</h6>
            <div className='containerBo'>
                <p className='text'>Si eres MVZ regístrate para obtener precios especiales para tu Veterinaria y escríbenos que productos necesitas.</p>
            </div>
        </div>

        <div className='copy-right w-100'>
            <h6 className='text-white text-center'>Derechos de autor © 2023, FarmAnimals</h6>
        </div>
       
        {/* <svg className='wave' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFFFFF" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,133.3C480,171,600,245,720,261.3C840,277,960,235,1080,197.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>     */}
    </footer>
  )
}

export default Footer
