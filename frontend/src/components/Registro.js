import React from "react";
import Navegation from "../components/Navegation";
import "../style/Registro.css";
import { Link, withRouter } from "react-router-dom";

const Registro = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />
      <div className="registrar" id="Iniciar">
        <p className="regis" align="center">
          InstantBuy
        </p>
        <form className="form1">
          <input
            className="usu"
            type="text-center"
            align="center"
            placeholder="cree un nombre de usuario"
          ></input>
          <input
            className="usu"
            type="text-center"
            align="center"
            placeholder="Escriba su correo"
          ></input>
          <input
            class="con"
            type="password"
            align="center"
            placeholder="Cree una contraseña"
          ></input>
          <input
            class="con"
            type="password"
            align="center"
            placeholder="Repita contraseña"
          ></input>
          <button
            className="regisB"
            type="button"
            onClick={() => history.push("/")}
          >
            Crear
          </button>
          <p className="help" align="center">
            <a className="help" href="/">
              Ayuda
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Registro);
