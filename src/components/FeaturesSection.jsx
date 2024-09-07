const FeaturesSection = () => {
    return (
        <>
            <section id="features" className="features section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Características</h2>
                        <p data-aos="fade-in">Nuestra empresa de transporte se destaca por ofrecer servicios de alta calidad y soluciones logísticas eficientes. A continuación, presentamos algunas de nuestras características más destacadas.</p>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right">
                            <img src="../src/assets/img/features-1.svg" className="img-fluid" alt="Transporte Seguro" />
                        </div>
                        <div className="col-md-7 pt-4" data-aos="fade-left">
                            <h3>Transporte Seguro y Confiable</h3>
                            <p className="fst-italic">
                                Nos comprometemos a garantizar que sus mercancías lleguen a su destino de manera segura y puntual.
                            </p>
                            <ul>
                                <li><i className="bi bi-check" /> Seguimiento en tiempo real de los envíos.</li>
                                <li><i className="bi bi-check" /> Protocolos de seguridad rigurosos para la carga.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <img src="../src/assets/img/features-2.svg" className="img-fluid" alt="Logística Eficiente" />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>Logística Eficiente</h3>
                            <p className="fst-italic">
                                Implementamos soluciones logísticas que optimizan el tiempo y los recursos.
                            </p>
                            <p>
                                Nuestra experiencia en la gestión de la cadena de suministro nos permite ofrecer un servicio ágil y eficiente, minimizando costos y tiempos de entrega.
                            </p>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right">
                            <img src="../src/assets/img/features-3.svg" className="img-fluid" alt="Atención al Cliente" />
                        </div>
                        <div className="col-md-7 pt-5" data-aos="fade-left">
                            <h3>Atención al Cliente Personalizada</h3>
                            <p>Brindamos un servicio al cliente excepcional, adaptándonos a las necesidades específicas de cada cliente.</p>
                            <ul>
                                <li><i className="bi bi-check" /> Soporte dedicado y asesoramiento personalizado.</li>
                                <li><i className="bi bi-check" /> Respuesta rápida a consultas y problemas.</li>
                                <li><i className="bi bi-check" /> Flexibilidad en las soluciones de transporte.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <img src="../src/assets/img/features-4.svg" className="img-fluid" alt="Precios Competitivos" />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>Precios Competitivos</h3>
                            <p className="fst-italic">
                                Ofrecemos tarifas competitivas sin comprometer la calidad del servicio.
                            </p>
                            <p>
                                Nuestro objetivo es proporcionar un excelente valor a nuestros clientes, asegurando que obtengan la mejor relación calidad-precio en sus servicios de transporte.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default FeaturesSection