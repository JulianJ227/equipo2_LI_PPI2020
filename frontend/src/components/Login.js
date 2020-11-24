import React from "react";
import Navegation from "../components/Navegation";
import "../style/Sing.css";
import { Link, withRouter } from "react-router-dom";

const Login = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />
      <div className="singin" id="Iniciar">
        <p className="sign" align="center">
          InstantBuy
        </p>
        <form className="form1">
          <input
            className="usuario"
            type="text-center"
            align="center"
            placeholder="Usuario"
          ></input>
          <input
            class="contra"
            type="password"
            align="center"
            placeholder="Contraseña"
          ></input>
          <button
            className="iniciar"
            type="button"
            onClick={() => history.push("/")}
          >
            iniciar
          </button>
          <p className="ayuda" align="center">
            <Link to="/Registro">Registrarme</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
