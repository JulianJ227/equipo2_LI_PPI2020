import React from "react";
import Navegation from "../components/Navegation";
import "../style/Lista2.css";
import { Card, Button, CardDeck } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Lista2 = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />

      <div className="Lista2">
        <h1>Productos Verduras y Frutas</h1>
        <CardDeck>
          <Card className="Produc1">
            <Card.Img className="aguacate" src="./Imagenes/aguacate.jpg" />
            <Card.Body>
              <Card.Text> Aguacate Precio:$2.500</Card.Text>
              <Button variant="primary" className="Botones">
                Comprar
              </Button>
            </Card.Body>
          </Card>

          <Card className="Produc2">
            <Card.Img className="banano" src="./Imagenes/banano.jpg" />
            <Card.Body>
              <Card.Text> Bananos 5x Precio:$2.000</Card.Text>
              <Button variant="primary" className="Botones">
                Comprar
              </Button>
            </Card.Body>
          </Card>

          <Card className="Produc3">
            <Card.Img className="brocoli" src="./Imagenes/papas.jpg" />
            <Card.Body>
              <Card.Text> Papas 1k Precio $1.000</Card.Text>
              <Button
          variant="primary"
          className="Botones"
          onClick={() => history.push("/Detalles")}
        >
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
  );
};

export default withRouter(Lista2);
