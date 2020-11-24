import React from "react";
import Navegation from "../components/Navegation";
import { Col, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Tiendas = () => {
  return (
    <div className="">
      <Navegation />
      <div clasName="Tienda">
        <h2 align="center">Tiendas</h2>
        <Col xs={6} md={4}>
          <Image
            src="./Imagenes/tienda.jpg"
            roundedCircle
            className="Carta"
            clasName="img1"
          />
          <Link to="/Productos">
            <h6 align="center">Tienda J y J</h6>
          </Link>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="./Imagenes/tienda2.jpg"
            roundedCircle
            className="Carta"
            clasName="img2"
          />
          <Link to="/Productos">
            <h6 align="center">El Semaforo</h6>
          </Link>
        </Col>
      </div>
    </div>
  );
};

export default Tiendas;
