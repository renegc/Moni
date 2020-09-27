import React, { Fragment } from "react";
import img3 from "../../assets/images/planetas/planetasrover.png";
import img8 from "../../assets/images/planetas/rovergrandre.png";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,

  Row,
  Col,
} from "reactstrap";
const Rover = () => {
  return (
    <Fragment>
      <h1>
        <strong>Los rovers del marte: perseverance </strong>
      </h1>
      <Row>
        <Card inverse>
          <CardImg width="18px" src={img8} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>

      <Row>
        <Col sm="12">
          <Card body>
            <CardText>
              Rovers en Marte han recogido pruebas de agua y algunos de los
              componentes químicos de la vida. Los científicos piensan que
              podría ser posible que la vida existiera en Marte hace mucho
              tiempo. Si había seres vivos, probablemente eran organismos
              pequeños, algo así como bacterias aquí en la tierra. Pero, ¿empezó
              la vida en Marte?
            </CardText>
            <CardText>
              La misión Mars 2020 espera poder responder a esa pregunta. La
              misión enviará un rover muy similar a Curiosity para explorar las
              rocas, la suciedad y el aire en Marte. Igual que Curiosity, el
              Perseverance rover es del tamaño de un todoterreno pequeño. El
              nuevo rover tiene un objetivo diferente y diferentes instrumentos.
              Buscará directamente signos de vida pasada en Marte.
            </CardText>
            <CardText>
              El nuevo rover también experimentará con un recurso natural que
              sería útil en la planificación de una misión humana a Marte.
            </CardText>
            <CardText>
              La atmósfera de Marte esta compuesta sobre todo de un gas llamado
              dióxido de carbono. Pero muchos seres vivos (incluyendo humanos)
              necesitan oxígeno para respirar. Si un ser humano fuera a Marte,
              tendría que traer mucho oxígeno. Sin embargo, no hay mucho espacio
              en la nave espacial para traer oxígeno líquido.
            </CardText>
            <CardText>
              El rover probará un método para obtener oxígeno del aire en la
              atmósfera marciana. Esto ayudará a la NASA a planear los mejores
              diseños para enviar astronautas humanos a explorar Marte un día.
            </CardText>
            <CardText>
              El rover no se lanzará hasta 2020, por lo que los científicos
              todavía están decidiendo dónde debe aterrizar el explorador para
              explorar el Planeta Rojo. ¡Manténganse atentos!
            </CardText>
          </Card>
        </Col>
      </Row>
      <Card inverse>
        <CardImg width="18px" src={img3} />
        <CardImgOverlay></CardImgOverlay>
      </Card>
    </Fragment>
  );
};

export default Rover;
