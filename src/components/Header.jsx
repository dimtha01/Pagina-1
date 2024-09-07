import React from 'react'
import { Link } from 'react-router-dom'
import FiltroApi from './FiltroApi'

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src="../src/assets/img/transporte-high-resolution-logo-black-transparent.png" alt="" />
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to='/' className="nav-link scrollto active" href="#hero">Inicio</Link></li>
                            <li><Link to='/servicios' className="nav-link scrollto" href="#about">Servicions</Link></li>
                            <li><Link to='/caracteristicas' className="nav-link scrollto" href="#services">Caracteristicas</Link></li>
                            <li><Link to='/portafolio' className="nav-link scrollto" href="#portfolio">Portafolio</Link></li>
                            <li><Link to='/nuestroEquipo' className="nav-link scrollto" href="#team">Nuestro Equipo</Link></li>
                            <li><Link to='/precios' className="nav-link scrollto" href="#team">Precios</Link></li>
                            <li className="dropdown"><a href="#"><span>Categorias</span> <i className="bi bi-chevron-down" /></a>
                                <ul>
                                    <FiltroApi />
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                        <ul>

                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li><Link to='/contactos' className="nav-link scrollto" href="#team">Contactos</Link></li>
                            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                </div>
            </header>


        </>
    )
}

export default Header