const PortfolioSection = () => {
    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Portafolio</h2>
                        <p data-aos="fade-in">En nuestra empresa de transporte, nos especializamos en ofrecer soluciones logísticas integrales. Con una flota moderna y un equipo altamente capacitado, garantizamos la entrega segura y eficiente de sus mercancías. Nuestros servicios incluyen transporte terrestre, marítimo y aéreo, adaptándonos a las necesidades específicas de cada cliente. Nos enorgullece brindar un servicio al cliente excepcional, asegurando que cada envío sea manejado con el mayor cuidado y atención. Ya sea que necesite enviar cargas ligeras o pesadas, estamos aquí para ayudarle a alcanzar sus objetivos logísticos.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="../src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="../src/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PortfolioSection