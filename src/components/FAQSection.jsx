import React from 'react'

const FAQSection = () => {
    return (
        <>
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Preguntas Frecuentes</h2>
                        <p data-aos="fade-in">En nuestra empresa de transporte, nos dedicamos a ofrecer soluciones logísticas eficientes y seguras. Aquí respondemos algunas de las preguntas más comunes que recibimos de nuestros clientes.</p>
                    </div>
                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
                        <div className="col-lg-5">
                            <i className="bx bx-help-circle" />
                            <h4>¿Qué tipos de transporte ofrecen?</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Ofrecemos transporte terrestre, marítimo y aéreo. Nos adaptamos a las necesidades de nuestros clientes, garantizando la mejor opción para cada tipo de carga.
                            </p>
                        </div>
                    </div>{/* End F.A.Q Item*/}
                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                        <div className="col-lg-5">
                            <i className="bx bx-help-circle" />
                            <h4>¿Cómo puedo rastrear mi envío?</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Proporcionamos un sistema de seguimiento en tiempo real para que pueda monitorear el estado de su envío. Simplemente ingrese su número de seguimiento en nuestra página web.
                            </p>
                        </div>
                    </div>{/* End F.A.Q Item*/}
                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-5">
                            <i className="bx bx-help-circle" />
                            <h4>¿Cuáles son sus horarios de operación?</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Nuestro servicio de transporte opera las 24 horas del día, los 7 días de la semana. Estamos siempre disponibles para atender sus necesidades de transporte.
                            </p>
                        </div>
                    </div>{/* End F.A.Q Item*/}
                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                        <div className="col-lg-5">
                            <i className="bx bx-help-circle" />
                            <h4>¿Qué medidas de seguridad implementan?</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Implementamos estrictas medidas de seguridad para garantizar la integridad de su carga. Esto incluye monitoreo constante y protocolos de seguridad en nuestros vehículos.
                            </p>
                        </div>
                    </div>{/* End F.A.Q Item*/}
                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                        <div className="col-lg-5">
                            <i className="bx bx-help-circle" />
                            <h4>¿Cómo puedo contactar con el servicio al cliente?</h4>
                        </div>
                        <div className="col-lg-7">
                            <p>
                                Puede contactarnos a través de nuestro número de teléfono, correo electrónico o mediante el formulario de contacto en nuestra página web. Nuestro equipo de atención al cliente está listo para ayudarle.
                            </p>
                        </div>
                    </div>{/* End F.A.Q Item*/}
                </div>
            </section>
        </>
    )
}

export default FAQSection