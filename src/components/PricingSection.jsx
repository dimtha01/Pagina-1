const PricingSection = () => {
    return (
        <>
            <div>
                <section id="team" className="team section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2 data-aos="fade-in">Nuestro Equipo</h2>
                            <p data-aos="fade-in">En nuestra empresa de transporte, contamos con un equipo de profesionales dedicados que trabajan para garantizar un servicio de alta calidad. Cada miembro aporta su experiencia y compromiso para satisfacer las necesidades de nuestros clientes.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up">
                                    <div className="pic"><img src="../src/assets/img/team/team-1.jpg" alt="Walter White" /></div>
                                    <h4>Walter White</h4>
                                    <span>Director Ejecutivo</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter" /></a>
                                        <a href="#"><i className="bi bi-facebook" /></a>
                                        <a href="#"><i className="bi bi-instagram" /></a>
                                        <a href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="pic"><img src="../src/assets/img/team/team-2.jpg" alt="Sarah Jhinson" /></div>
                                    <h4>Sarah Jhinson</h4>
                                    <span>Gerente de Operaciones</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter" /></a>
                                        <a href="#"><i className="bi bi-facebook" /></a>
                                        <a href="#"><i className="bi bi-instagram" /></a>
                                        <a href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="pic"><img src="../src/assets/img/team/team-3.jpg" alt="William Anderson" /></div>
                                    <h4>William Anderson</h4>
                                    <span>Director de Tecnología</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter" /></a>
                                        <a href="#"><i className="bi bi-facebook" /></a>
                                        <a href="#"><i className="bi bi-instagram" /></a>
                                        <a href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="pic"><img src="../src/assets/img/team/team-4.jpg" alt="Amanda Jepson" /></div>
                                    <h4>Amanda Jepson</h4>
                                    <span>Contadora</span>
                                    <div className="social">
                                        <a href="#"><i className="bi bi-twitter" /></a>
                                        <a href="#"><i className="bi bi-facebook" /></a>
                                        <a href="#"><i className="bi bi-instagram" /></a>
                                        <a href="#"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>{/* End Team Section */}
            
            </div>

        </>
    )
}

export default PricingSection