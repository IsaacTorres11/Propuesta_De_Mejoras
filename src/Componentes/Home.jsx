import React from "react";
import "../Estilos/Observation1.css";

const Home = () => {
  return (
    <div className="container-principal w-100 ">

      {/* Iniciamos con el carrusel de imagenes*/}
      <div id="carouselExampleRide" className="carousel slide carrusel" data-bs-ride="true">
        <div className="carousel-inner"> 
          <div className="carousel-item active">
            <a href="#">
              <img src="/src/img/carrusel/02_f020869c-6093-4fdb-9493-48677c4b5b8f_970x.webp" className="d-block w-100" alt="..."/>
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img src="/src/img/carrusel/banner-electrodex_e4f2c739-f086-48c0-a348-e099bd583ad2_970x.webp" className="d-block w-100" alt="..."/>
            </a>
            
          </div>
          <div className="carousel-item">
            <a href="#">
              <img src="/src/img/carrusel/banner-descuento-padre_1060x.webp" className="d-block w-100" alt="..."/>
            </a>
            
          </div>
          <div className="carousel-item">
            <a href="#">
              <img src="/src/img/carrusel/banner-petcell_970x.webp" className="d-block w-100" alt="..."/>
            </a>
            
          </div>

        </div>

      <button className="carousel-control-prev btn" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next btn" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  
    </div> 
    {/* Se finaliza el carrusel de imagenes */}
      
      <div className="container-images d-flex flex-wrap flex-start p-3">

        <div className="image">
          <img src="/src/img/Tramadol-Pets-XL-100mg-Caja-10-Tabletas_180x.avif"alt=""/>
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/cbd-razas-pequenas_180x.avif" alt="" />
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Forte-Spray-120ml_180x.avif" alt="" />
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/FortiFlora-Pro-Plan-Para-Perro-Caja-30-Sobres_180x.avif"alt=""/>
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Gastroprazol-5mg-Caja-20-Tabletas_180x.avif"alt=""/>
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/GEL-ANTIPLACA-20-ML_180x.avif" alt="" />
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/gentanazol_180x.avif" alt="" />
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Inmuno-Vet-Suplemento-Gel-Oral-50ml_180x.avif" alt=""/>
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Inmuno-Vet-Suplemento-Gel-Oral-50ml_180x.avif" alt="" />
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Negasunt-Cicatrizante-Polvo-100g_180x.avif" alt=""/>
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Negasunt-Cicatrizante-Polvo-100g_180x.avif" alt=""/>
          <div className="description text-center">
            <h6 >Description</h6>
          </div>
        </div>

        <div className="image">
          <img src="/src/img/Negasunt-Cicatrizante-Polvo-100g_180x.avif" alt=""/>
          <div className="description">
            <h6 className="text-center">Description</h6>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
