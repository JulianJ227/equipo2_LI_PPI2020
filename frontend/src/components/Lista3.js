import React from "react";
import Navegation from "../components/Navegation";
import "../style/Lista3.css";
import { Card, Button, CardDeck } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Lista3 = (prosp) => {
  const { history } = prosp;
  return (
    <div className="">
      <Navegation />

      <div className="Lista3">
        <h1>Granos y Pastas</h1>

        <CardDeck>
          <Card className="Produc1">
            <Card.Img className="argollitas" src="./Imagenes/espagueti.jpg" />
            <Card.Body>
              <Card.Text> Espaguetis Precio:$1.500</Card.Text>
              <Button
                variant="primary"
                className="Botones"
                onClick={() => history.push("/Detalles2")}
              >
                Comprar
              </Button>
            </Card.Body>
          </Card>

          <Card className="Produc2">
            <Card.Img className="arroz" src="./Imagenes/arroz.jpg" />
            <Card.Body>
              <Card.Text> Arroz 1Libra x Precio:$2.000</Card.Text>
              <Button variant="primary" className="Botones">
                Comprar
              </Button>
            </Card.Body>
          </Card>

          <Card className="Produc3">
            <Card.Img className="arveja" src="./Imagenes/frijoles.jpg" />
            <Card.Body>
              <Card.Text> Frijoles Precio:$4.500</Card.Text>
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

export default withRouter(Lista3);
