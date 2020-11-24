import React from "react";
import Inicio from "../components/Inicio";
import Destino from "../components/Destino";
import Login from "../components/Login";
import Tiendas from "../components/Tiendas";
import Registro from "../components/Registro";
import Lista from "../components/Lista";
import Lista2 from "../components/Lista2";
import Lista3 from "../components/Lista3";
import Lista4 from "../components/Lista4";
import Detalles from "../components/Detalles";
import Detalles2 from "../components/Detalles2";
import Carrito from "../components/Carrito";
import Carrito2 from "../components/Carrito2";
import Productos from "../components/Productos";
import Promocion from "../components/Promocion";

import { BrowserRouter, Route } from "react-router-dom";

export default function Ppicontainer() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Inicio} />
      <Route path="/Destino" component={Destino} />
      <Route path="/Login" component={Login} />
      <Route path="/Tiendas" component={Tiendas} />
      <Route path="/Registro" component={Registro} />
      <Route path="/Lista" component={Lista} />
      <Route path="/Lista2" component={Lista2} />
      <Route path="/Lista3" component={Lista3} />
      <Route path="/Lista4" component={Lista4} />
      <Route path="/Detalles" component={Detalles} />
      <Route path="/Detalles2" component={Detalles2} />
      <Route path="/Carrito" component={Carrito} />
      <Route path="/Carrito2" component={Carrito2} />
      <Route path="/Productos" component={Productos} />
      <Route path="/Promocion" component={Promocion} />
    </BrowserRouter>
  );
}
