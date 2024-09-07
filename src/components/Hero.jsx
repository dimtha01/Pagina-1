
const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                            <h1>Tu nueva experiencia digital con Bocor</h1>
                            <h2>Somos un equipo de diseñadores talentosos que crean sitios web con Bootstrap</h2>
                            <a href="#about" className="btn-get-started scrollto">Comenzar</a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="../src/assets/img/1.png" className="img-fluid" alt />
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Hero