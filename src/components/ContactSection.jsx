const ContactSection = () => {
    return (
        <>
            <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contacto</h2>
                        <p>Estamos aquí para ayudarle. Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con nosotros.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box" data-aos="fade-up">
                                        <i className="bx bx-map" />
                                        <h3>Nuestra Dirección</h3>
                                        <p>A108 Adam Street, Nueva York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4" data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-envelope" />
                                        <h3>Escríbanos</h3>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4" data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-phone-call" />
                                        <h3>Llame al</h3>
                                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form w-100" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Su Nombre" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Su Correo Electrónico" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Mensaje" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Cargando</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Su mensaje ha sido enviado. ¡Gracias!</div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactSection