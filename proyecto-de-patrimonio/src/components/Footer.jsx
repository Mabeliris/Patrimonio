
import Logo_municipalidad from "../assets/Logo_municipalidad.png";

import Icon_facebook from "../assets/Icon_facebook.png";
import Icon_Instagram from "../assets/Icon_Instagram.png";

export function Footer() {
  return (
    <footer>
      <ul>
        <li>Telefono</li>
        <li>Dirección</li>
        <li>Correo</li>
      </ul>

      <a href="https://home.municipalidadgorbea.cl/" target="_blank">
        <img
          src={Logo_municipalidad}
          className="logo_municipal"
          alt="Logo_municipalidad_de_Gorbea"
        />
      </a>

      <h3>Nuestras Redes Sociales</h3>
      <img src={Icon_facebook} className="Logo" alt="Logo Facebook" />
      <img src={Icon_Instagram} className="Logo" alt="Logo instagram" />
    </footer>
  );
}
