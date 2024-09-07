const PriceSection = () => {
    return (
        <>
            <section id="pricing" className="pricing section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Precios</h2>
                        <p data-aos="fade-in">Ofrecemos una variedad de planes para satisfacer las necesidades de nuestros clientes en el sector del transporte. Desde opciones gratuitas hasta planes premium, cada uno está diseñado para brindar el mejor servicio y valor.</p>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-4 box" data-aos="zoom-in">
                            <h3>Gratis</h3>
                            <h4>$0<span>por mes</span></h4>
                            <ul>
                                <li><i className="bx bx-check" /> Acceso a servicios básicos de transporte</li>
                                <li><i className="bx bx-check" /> Soporte limitado</li>
                                <li><i className="bx bx-check" /> Seguimiento de envíos en tiempo real</li>
                                <li className="na"><i className="bx bx-x" /> <span>Sin opciones de personalización</span></li>
                                <li className="na"><i className="bx bx-x" /> <span>Sin acceso a informes avanzados</span></li>
                            </ul>
                            <a href="#" className="get-started-btn">Comenzar</a>
                        </div>
                        <div className="col-lg-4 box featured" data-aos="zoom-in">
                            <span className="featured-badge">Destacado</span>
                            <h3>Negocios</h3>
                            <h4>$29<span>por mes</span></h4>
                            <ul>
                                <li><i className="bx bx-check" /> Acceso completo a servicios de transporte</li>
                                <li><i className="bx bx-check" /> Soporte prioritario</li>
                                <li><i className="bx bx-check" /> Seguimiento de envíos en tiempo real</li>
                                <li><i className="bx bx-check" /> Opciones de personalización</li>
                                <li><i className="bx bx-check" /> Informes avanzados y análisis</li>
                            </ul>
                            <a href="#" className="get-started-btn">Comenzar</a>
                        </div>
                        <div className="col-lg-4 box" data-aos="zoom-in">
                            <h3>Desarrollador</h3>
                            <h4>$49<span>por mes</span></h4>
                            <ul>
                                <li><i className="bx bx-check" /> Acceso completo a todos los servicios</li>
                                <li><i className="bx bx-check" /> Soporte técnico 24/7</li>
                                <li><i className="bx bx-check" /> Seguimiento de envíos en tiempo real</li>
                                <li><i className="bx bx-check" /> Opciones de personalización avanzadas</li>
                                <li><i className="bx bx-check" /> Informes detallados y análisis</li>
                            </ul>
                            <a href="#" className="get-started-btn">Comenzar</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceSection