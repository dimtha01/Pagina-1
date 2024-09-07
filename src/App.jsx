import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./page/Inicio"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Servicios from "./page/Servicios"
import Caracteristicas from "./page/Caracteristicas"
import Portafolio from "./page/Portafolio"
import NuestroEquipo from "./page/NuestroEquipo"
import Price from "./page/Price"
import Contactos from "./page/Contactos"
import Categorias from "./page/Categorias"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/caracteristicas" element={<Caracteristicas/>} />
          <Route path="/portafolio" element={<Portafolio/>} />
          <Route path="/nuestroEquipo" element={<NuestroEquipo/>} />
          <Route path="/precios" element={<Price/>} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="/categorias/:id" element={<Categorias/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App