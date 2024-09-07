const Card = ({ item }) => {
    return (
        <>
            
                <div className="col-md-4 col-lg-4 d-flex" data-aos="fade-right">
                    <div className="card">
                        <div className="card-img">
                            <img src={item.thumbnail || item.images[1]} alt="Transporte de Carga" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">{item.title}</a></h5>
                            <p className="card-text">{item.brand}</p>
                            <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Leer Más</a></div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default Card