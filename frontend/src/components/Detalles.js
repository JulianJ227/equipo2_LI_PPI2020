import React from "react";
import Navegation from "../components/Navegation";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

const Detalles = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />
      <div className="detalles">
        <h1>Detalles de producto</h1>
        <p align="left">Papas 1k $1000</p>
        <p align="left">Papas 2k $1800</p>
        <p align="left">Tienda el mono</p>
        <img
          className="papas"
          src="./Imagenes/papas.jpg"
          alt="papas"
          align="left"
        />

        <Button
          className="Boton"
          variant="warning"
          align="center"
          onClick={() => history.push("/Carrito")}
        >
          agregar al carrito
        </Button>
        <Button
          variant="primary"
          className="Boton"
          onClick={() => history.push("/Lista2")}
        >
          Atrás
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Detalles);
