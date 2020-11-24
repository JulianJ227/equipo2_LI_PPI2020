import React from "react";
import Navegation from "../components/Navegation";
import { Col, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Productos = () => {
  return (
    <div>
      <Navegation />

      <Col xs={6} md={4}>
        <Image src="./Imagenes/img1.jpg" roundedCircle className="Carta" />
        <Link className="Carta" to="/Lista2">
          <h5>Frutas y Verduras</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img2.jpg" roundedCircle className="Carta" />
        <Link className="Carta" to="/Lista3">
          <h5>Pastas</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img3.png" roundedCircle className="Carta" />
        <Link className="Carta" to="/Lista4">
          <h5>Lácteos</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image
          Link
          to="/Lista"
          src="./Imagenes/img4.png"
          roundedCircle
          className="Carta"
        />
        <Link className="Carta" to="/Lista">
          <h5>Aseo</h5>
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img5.jpg" roundedCircle className="Carta" />
        <h5>Carnés</h5>
      </Col>
      <Col xs={6} md={4}>
        <Image src="./Imagenes/img6.png" roundedCircle className="Carta" />
        <h5>Bebidas</h5>
      </Col>
    </div>
  );
};

export default Productos;
