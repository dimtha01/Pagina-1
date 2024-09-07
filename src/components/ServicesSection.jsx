const ServicesSection = () => {
    return (
        <>
            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Servicios</h2>
                        <p data-aos="fade-in">Nuestra empresa de transporte ofrece una amplia gama de servicios diseñados para satisfacer las necesidades de nuestros clientes. Nos comprometemos a proporcionar soluciones logísticas eficientes y confiables.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex" data-aos="fade-right">
                            <div className="card">
                                <div className="card-img">
                                    <img src="../src/assets/img/services-1.jpg" alt="Transporte de Carga" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#">Transporte de Carga</a></h5>
                                    <p className="card-text">Ofrecemos servicios de transporte de carga pesada y ligera, asegurando que sus productos lleguen a su destino de manera segura y puntual.</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Leer Más</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex" data-aos="fade-left">
                            <div className="card">
                                <div className="card-img">
                                    <img src="../src/assets/img/services-2.jpg" alt="Mudanzas" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#">Mudanzas</a></h5>
                                    <p className="card-text">Brindamos servicios de mudanza locales e internacionales, adaptándonos a las necesidades específicas de cada cliente para garantizar una transición sin problemas.</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Leer Más</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex" data-aos="fade-right">
                            <div className="card">
                                <div className="card-img">
                                    <img src="../src/assets/img/services-3.jpg" alt="Logística y Distribución" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#">Logística y Distribución</a></h5>
                                    <p className="card-text">Ofrecemos soluciones logísticas integrales que incluyen almacenamiento, gestión de inventarios y distribución eficiente de productos.</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Leer Más</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex" data-aos="fade-left">
                            <div className="card">
                                <div className="card-img">
                                    <img src="../src/assets/img/services-4.jpg" alt="Servicio de Paquetería" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="#">Servicio de Paquetería</a></h5>
                                    <p className="card-text">Nuestro servicio de paquetería garantiza la entrega rápida y segura de documentos y paquetes, con opciones de seguimiento en tiempo real.</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Leer Más</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServicesSection