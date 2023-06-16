import React from 'react'
import "../Estilos/header.css"
const Header = () => {
  return (
    <header className='header w-100'>
      <div className='container-logo '>
        <img className='logo' src="/src/img/logo.png" alt="" />
            {/* <h1 className='text-white text-center'>LOGO</h1>  */}
      </div>

      <div className='container-nav d-flex align-items-center'>
        <nav className='navigation w-75 p-2 d-flex justify-content-around'>
          <a className='linkNav' href="#">Medicamentos</a>
          <a className='linkNav'href="#">Antibioticos</a>
          <a className='linkNav' href="#">Alimento Medicado</a>
          <a className='linkNav' href="#">Controlados</a>
          <a className='linkNav' href="#">Franquicias</a>
        </nav>    
      </div>

      <div className='container-search '>
        <div className='search'>
          <input type="text" placeholder="Buscar..."/>
          <div className='btn-s'>
            <i class='bx bx-search-alt-2'></i>
          </div>
        </div>    
      </div> 

    </header>
  )
}

export default Header
