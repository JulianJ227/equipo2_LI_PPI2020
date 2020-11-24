import React from "react";
import Navegation from "../components/Navegation";
import "../style/Lista4.css";
import { Card, Button, CardDeck } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Lista4 = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />
      <div className="Lista4">
      <h1>Lacteos</h1>

      <CardDeck>
        <Card className="Produc1">
          <Card.Img className="colanta" src="./Imagenes/colanta.jpg" />
          <Card.Body>
            <Card.Text> Leche Entera:$2.500</Card.Text>
            <Button variant="primary" className="Botones">
              Comprar
            </Button>
          </Card.Body>
        </Card>

        <Card className="Produc5">
          <Card.Img className="huevos" src="./Imagenes/huevos.jpg" />
          <Card.Body>
            <Card.Text> Canasta Huevos Precio:$8.000</Card.Text>
            <Button variant="primary" className="Botones">
              Comprar
            </Button>
          </Card.Body>
        </Card>

        <Card className="Produc12">
          <Card.Img className="yogurbolsa" src="./Imagenes/yogur.jpg" />
          <Card.Body>
            <Card.Text> Yogur en Bolsa Precio:$1.000</Card.Text>
            <Button variant="primary" className="Botones">
              Comprar
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <Button
          variant="primary"
          className="Boton"
          onClick={() => history.push("/")}
        >
          Volver
        </Button>
    </div>
    </div>
   )
  };

export default withRouter(Lista4);