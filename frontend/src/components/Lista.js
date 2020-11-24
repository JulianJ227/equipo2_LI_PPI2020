import React from "react";
import Navegation from "../components/Navegation";
import "../style/Lista.css";
import { Card, Button, CardDeck } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Lista = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />

      <div className="Lista">
        <h1>Productos de Aseo</h1>
        <CardDeck>
          <Card className="Produc1">
            <Card.Img className="unico" src="./Imagenes/axión.jpg" />
            <Card.Body>
              <Card.Text> Jabón Axión Precio:$2.300</Card.Text>
              <Button variant="primary" className="Botones">
                Comprar
              </Button>
            </Card.Body>
          </Card>

          <Card className="Produc2">
            <Card.Img className="axion" src="./Imagenes/fab.png" />
            <Card.Body>
              <Card.Text> Detergente Ak-1 Precio:$12.300</Card.Text>
              <Button variant="primary" className="Botones">
                Comprar
              </Button>
            </Card.Body>
          </Card>

          <Card className="Produc3">
            <Card.Img className="cepillo1" src="./Imagenes/rey.jpg" />
            <Card.Body>
              <Card.Text> Jabón REY Precio:$1.400</Card.Text>
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
  );
};

export default withRouter(Lista);
