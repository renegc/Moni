import React from "react";
import img2 from "../../assets/images/planetas/martesito.png";
import img3 from "../../assets/images/planetas/completoMarte.jpg";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,

  Row,
  Col,
} from "reactstrap";
const Marte = () => {
  return (
    <div>
      <h1>
        <strong>Todo sobre Marte </strong>
      </h1>
      <Row>
        <Col sm="12">
          <Card body>
            <CardText>
              Marte es un planeta desértico y frío. Es la mitad del tamaño de la
              Tierra, y también recibe el nombre de "planeta rojo". Es rojo por
              el hierro oxidado que tiene en el suelo.
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Card inverse>
          <CardImg width="18px" src={img2} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Estructura y superficie </strong>
            </CardTitle>

            <CardText>
              <ol>
                <li>Es un planeta terrestre: es pequeño y rocoso.</li>
                <li>Tiene una atmósfera poco densa.</li>
                <li>
                  Cuenta con una atmósfera activa, pero la superficie del
                  planeta no lo es. Los volcanes están inactivos.
                </li>
              </ol>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>El tiempo en Marte</strong>
            </CardTitle>
            <CardText>
              <ol>
                <li>
                  Un día dura 24,6 horas, un poco más que un día en la Tierra.
                </li>
                <li>
                  Un año equivale a 687 días en la Tierra, casi el doble que el
                  año terrestre.
                </li>
              </ol>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Vecinos de Marte </strong>
            </CardTitle>
            <CardText>
              <ol>
                <li>Tiene dos lunas: Fobos y Deimos.</li>
                <li>
                  Es el cuarto planeta contando desde el Sol. Eso significa que
                  la Tierra y Júpiter son sus vecinos.
                </li>
              </ol>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <strong>Qué aspecto tiene Marte?</strong>
            </CardTitle>
            <CardText></CardText>
          </Card>
        </Col>
      </Row>
      <Card inverse>
        <CardImg width="18px" src={img3} />
        <CardImgOverlay></CardImgOverlay>
      </Card>
    </div>
  );
};

export default Marte;
