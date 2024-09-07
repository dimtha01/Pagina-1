
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from "../components/Card";
const API = 'https://dummyjson.com/products/category/';

const Categorias = () => {
    const params = useParams()
    const [datos, setDatos] = useState([])

    const getDatos = async () => {
        let URI = API + params.id
        try {

            const response = await fetch(URI);
            const data = await response.json();
            //console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
        }
    };


    useEffect(() => {
        getDatos();
    }, [params.id]);
    return (
        <>
            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="row">
                        {datos && datos.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categorias