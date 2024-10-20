
import { Link } from "react-router-dom";
import logo_patrimonio from "../assets/logo_patrimonio.png";

export function Navbar() {
  return (
    <>
      <nav>
        
        <Link to="/">
          <img src={logo_patrimonio} className="logo" alt="logo patrimonio" />
         
        </Link>

        <Link to="/">
        <button>Inicio</button>
        </Link>

        <Link to="/Records">
          <button>Muro Histórico</button>
        </Link>

        <Link>
          <button>Agenda</button>
        </Link>

        <Link>
          <button>Contacto</button>
        </Link>

        <section>
          <label htmlFor="site-search">¿Qué buscas?</label>
          <input type="search" id="site-search" name="q" placeholder="Buscar" />
        </section>
      </nav>        
      
    </>
  );
}
