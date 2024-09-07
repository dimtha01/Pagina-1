import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/products/category-list';

const FiltroApi = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            {datos && datos.slice(0, 10).map((cat, index) => (
                <li key={index}><Link to={`/categorias/${cat}`} className="dropdown-item" href="#">{cat}</Link></li>
            ))}

        </>
    )
}

export default FiltroApi