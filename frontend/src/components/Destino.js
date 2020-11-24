import React from "react";
import "../style/Direccion.css";
import Navegation from "../components/Navegation";

const Destino = () => {
  return (
    <div className="">
      <Navegation />
      <div className="inicio" id="inicio">
        <h1 className="titulo" align="center">
          Direccion-Tiendas cencanas
        </h1>
        <form className="uno">
          <input
            className="direccion"
            type="text-center"
            align="center"
            placeholder="Direccion"
          ></input>
          <input
            class="barrio"
            type="text-center"
            align="center"
            placeholder="Barrio"
          ></input>
          <input
            class="telef"
            type="number"
            align="center"
            placeholder="Número de telef."
          ></input>
          <button className="btn" type="button">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Destino;
