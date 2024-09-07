
const AboutSeccion = () => {
    return (
        <>
            <section id="about" className="about section-bg">
                <div className="container">
                    <div className="row gy-4">
                        <div className="image col-xl-5" />
                        <div className="col-xl-7">
                            <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                                <h3 data-aos="fade-in" data-aos-delay={100}>Voluptatem dignissimos provident quasi</h3>
                                <p data-aos="fade-in">
                                    Nuestros servicios de transporte garantizan una entrega rápida y segura a cualquier parte del país. Nos esforzamos por ofrecer la mejor experiencia a nuestros clientes, asegurando que sus envíos lleguen a tiempo y en perfectas condiciones.
                                </p>
                                <div className="row gy-4 mt-3">
                                    <div className="col-md-6 icon-box" data-aos="fade-up">
                                        <i className="bx bx-receipt" />
                                        <h4><a href="#">Transporte de mercancías</a></h4>
                                        <p>Contamos con una flota de vehículos modernos y eficientes para satisfacer todas sus necesidades de transporte. Desde cargas ligeras hasta envíos pesados, tenemos la solución adecuada para usted.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-cube-alt" />
                                        <h4><a href="#">Transporte de pasajeros</a></h4>
                                        <p>Nuestros conductores profesionales están capacitados para garantizar un viaje seguro y confortable. Ofrecemos servicios de transporte para grupos y viajes individuales.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <i className="bx bx-images" />
                                        <h4><a href="#">Logística personalizada</a></h4>
                                        <p>Ofrecemos servicios de transporte adaptados a sus necesidades específicas, ya sea para viajes de negocios o de placer. Nuestro equipo está listo para ayudarle a planificar su transporte de manera efectiva.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <i className="bx bx-shield" />
                                        <h4><a href="#">Compromiso con la seguridad</a></h4>
                                        <p>Nuestros servicios de transporte están diseñados para brindar la máxima comodidad y conveniencia a nuestros clientes. Nos aseguramos de que cada viaje se realice con los más altos estándares de seguridad.</p>
                                    </div>
                                </div>
                            </div>{/* End .content*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSeccion