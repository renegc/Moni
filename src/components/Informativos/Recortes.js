import React, { Fragment } from "react";
import img2 from "../../assets/images/planetas/tijeras.png";
import img3 from "../../assets/images/planetas/p1.jpg";
import img4 from "../../assets/images/planetas/p2.jpg";
import img5 from "../../assets/images/planetas/p3.jpg";
import img6 from "../../assets/images/planetas/p4.jpg";
import img7 from "../../assets/images/planetas/p5.jpg";
import img8 from "../../assets/images/planetas/p6.jpg";
import img9 from "../../assets/images/planetas/p7.jpg";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  
  Row,
  Col,
} from "reactstrap";
const Recortes = () => {
  return (
    <Fragment>
      <h1>
        <strong>Crea tu propia aurora </strong>
      </h1>
      <Row>
        <Card inverse>
          <CardImg width="18px" src={img2} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Auroras
        </CardTitle>
        <CardBody className="">
          {" "}
          Las auroras suelen ser de color{" "}
          <strong style={{ color: "red" }}>rojo </strong> ,{" "}
          <strong style={{ color: "green" }}>verde </strong> , y{" "}
          <strong style={{ color: "blue" }}>azul </strong> azul. El color rojo
          lo producen los átomos de oxígeno de la atmósfera. Los verdes y azules
          son consecuencia del nitrógeno. A veces, estos colores se mezclan y
          nos tonos <strong style={{ color: "yellow" }}>amarillos </strong> y{" "}
          <strong style={{ color: "pink" }}>rosa </strong>.
        </CardBody>
      </Card>

      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Que Necesitas?
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img3} />
            <CardBody>
              <CardText>
                {" "}
                <ol>
                  <li>
                    <a href="https://spaceplace.nasa.gov/review/pastel-aurora/Pastel-Aurora_Spanish.pdf">
                      {" "}
                    </a>{" "}
                    Plantilla para dibujar auroras (PDF)
                  </li>
                  <li>Papel cartón de color negro</li>
                  <li>Crayones pastel</li>
                  <li>Tijeras</li>
                  <li>Papel de cocina</li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Que hacer
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img4} />
            <CardBody>
              <CardText>
                <ol>
                  <li>
                    1. Corta la plantilla para dibujar auroras. Puedes usar esta
                    plantilla o cortar una forma ondulante.
                  </li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Paso 2
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img5} />
            <CardBody>
              <CardText>
                <ol>
                  <li>
                    2. Traza una línea ondulada siguiendo la plantilla con uno
                    de los crayones. Vuelve a pasar por encima varias veces para
                    que la línea sea gruesa. No pasa nada si el papel cartón
                    negro queda marcado con ese color.
                  </li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Paso 3
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img6} />
            <CardBody>
              <CardText>
                <ol>
                  <li>
                    3. Sujeta la plantilla con una mano y, con la otra, agarra
                    el papel de cocina para difuminar el crayón hacia arriba,
                    borroneando el papel cartón.
                  </li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Paso 4
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img7} />
            <CardBody>
              <CardText>
                <ol>
                  <li>
                    4. Puedes volver a marcar la línea y borronearla otra vez
                    con el papel de cocina para obtener tanto color como
                    quieras.
                  </li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Paso 5
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img8} />
            <CardBody>
              <CardText>
                <ol>
                  <li>5. Levanta la plantilla y verás una banda de color.</li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Paso 6
        </CardTitle>
        <CardBody className="">
          <Card>
            <CardImg top width="100%" src={img9} />
            <CardBody>
              <CardText>
                <ol>
                  <li>
                    6. Coloca la plantilla en otro punto y repite los pasos 2 y
                    3 tantas veces como quieras. También puedes darle la vuelta
                    o colocarla en distintos ángulos para añadir efectos a tu
                    dibujo.
                  </li>
                </ol>
              </CardText>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
      <Row>
        <Col sm="12">
          <Card body>
            <CardText>
              7. Muéstrale tu obra maestra a todo el mundo. ¡Y no te olvides de
              contarles lo que significa cada color y por qué ocurren las
              auroras!
            </CardText>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Recortes;
