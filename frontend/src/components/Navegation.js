import React from "react";
import "../style/Navegation.css";

import { Link, withRouter } from "react-router-dom";

const Navegation = () => {
  return (
    <div className="Navegar">
      <ul className="nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
            tabindex="-1"
            aria-disabled="true"
          >
           InstantBuy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Login">
            Iniciar
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Tiendas">
            Tiendas
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Destino">
            Dirección
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navegation;
