import React, { Fragment } from "react";
import img2 from "../../assets/images/planetas/libro.png";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  
  CardTitle,

  Row,
  Col,
} from "reactstrap";
const Glosario = () => {
  return (
    <Fragment>
      <h1>
        <strong>Glosario </strong>
      </h1>
      <Row>
        <Card inverse>
          <CardImg width="18px" src={img2} />
          <CardImgOverlay></CardImgOverlay>
        </Card>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Asteroide</CardTitle>
            <CardText>
              Rocas que flotan en el espacio. Algunas son del tamaño de una
              camioneta. Otras se extienden por cientos de millas.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Atmósfera</CardTitle>
            <CardText>
              Los gases unidos mediante la fuerza de gravedad alrededor de la
              Tierra y de otros planetas. "Atmósfera" también se puede utilizar
              para referirse a los gases alrededor de las estrellas
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Átomo</CardTitle>
            <CardText>
              El elemento básico que compone la materia. Está compuesto de
              protones, neutrones, y electrones. Existen diferentes tipos de
              átomos.{" "}
            </CardText>
            <CardText>
              Por ejemplo, el átomo más simple compuesto de un protón y un
              electrón es un átomo de hidrógeno. Un átomo con seis protones,
              seis neutrones, y seis electrones es un átomo de carbono.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Aurora austral</CardTitle>
            <CardText>
              Resplandores brillantes y bandas luminosas que aparecen en el
              cielo durante la noche, cerca del Polo Sur. También se las
              denomina las luces del sur.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Aurora boreal</CardTitle>
            <CardText>
              Resplandores brillantes y bandas luminosas que aparecen en el
              cielo durante la noche, cerca del Polo Norte. También se las
              denomina las luces del norte
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Agujero negro</CardTitle>
            <CardText>
              Un lugar en el espacio del que la materia y la luz no se pueden
              escapar si caen dentro.
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Cometa</CardTitle>
            <CardText>
              Una roca helada que libera gas y polvo, que puede formar colas
              cuando vuela cerca de un sol.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Constelación</CardTitle>
            <CardText>
              Un grupo de estrellas en el cielo. A menudo reciben el nombre de
              un animal, objeto o persona. Las estrellas forman determinados
              patrones, según dónde estés ubicado. Nosotros tenemos una vista de
              las estrellas aquí en la Tierra, pero desde otro sistema solar u
              otra galaxia, las constelaciones se verían de otra manera.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Corona</CardTitle>
            <CardText>La atmósfera exterior de una estrella.</CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Cráter</CardTitle>
            <CardText>
              Una abolladura grande en el suelo, con forma de cuenco. Pueden ser
              provocadas por una explosión o por el impacto de un meteorito.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Planeta enano</CardTitle>
            <CardText>
              Objetos que están alrededor y orbitan el sol, tal como lo hacen
              los planetas. Pero a diferencia de los planetas, estos no pueden
              despejar su camino alrededor del sol. Eso significa que hay otros
              objetos que orbitan casi a la misma distancia del sol. Un planeta
              enano es mucho más pequeño que un planeta (más pequeño incluso que
              la luna de la Tierra), pero no es una luna. Plutón es el planeta
              enano más conocido.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>El Niño</CardTitle>
            <CardText>
              Un fenómeno climático que a veces se produce en el océano
              Pacífico. Es tan grande que afecta al clima en todas partes del
              mundo. Comienza con la presencia insólita de agua caliente en el
              océano Pacífico cerca del ecuador
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Espectro electromagnético </CardTitle>
            <CardText>
              El nombre que reciben los diferentes tipos de luz y energía en el
              universo. Esto incluye ondas radiales, microondas, radiación
              infrarroja, luz visible, luz ultravioleta, rayos X, y rayos gamma.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Ecuador</CardTitle>
            <CardText>
              El círculo alrededor de un planeta o luna, que está a la misma
              distancia de su polo norte y de su polo sur.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Exoplaneta</CardTitle>
            <CardText>
              Un planeta que flota libremente entre las estrellas o que orbita
              una estrella por fuera de nuestro sistema solar.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Galaxia</CardTitle>
            <CardText>
              Un conjunto de miles a miles de millones de estrellas unidas por
              la fuerza de gravedad. La galaxia en la que vivimos nosotros se
              llama Vía Láctea.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Rayos gamma</CardTitle>
            <CardText>
              Parte del espectro electromagnético, también se la denomina
              radiación gamma. Estas ondas tienen mucha energía. Provienen de
              grandes acontecimientos, como erupciones solares o estrellas en
              explosión.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Gas</CardTitle>
            <CardText>
              Un conjunto disperso de átomos que giran unos alrededor de los
              otros.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>GPS (por sus siglas en inglés) </CardTitle>
            <CardText>
              Esto significa Sistema de Posicionamiento Global. Es un sistema
              que utiliza satélites, estaciones terrestres, y receptores para
              informarte exactamente en qué lugar de la Tierra te encuentras.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Gravedad</CardTitle>
            <CardText>Una fuerza que atrae a la materia.</CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Gas de efecto invernadero</CardTitle>
            <CardText>
              Gases en la atmósfera que retienen el calor que proviene del sol.
              Algunos gases de efecto invernadero son el dióxido de carbono, el
              metano, el vapor de agua, y el óxido nitroso.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Infrarrojo</CardTitle>
            <CardText>
              Parte del espectro electromagnético que no podemos ver con
              nuestros ojos pero que podemos sentir como calor. Está compuesto
              de ondas liberadas por objetos calientes, como las estrellas. Las
              llamamos infrarrojas porque estas ondas son apenas un poco más
              largas que las longitudes de onda de la luz roja que podemos ver.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Cinturón de Kuiper</CardTitle>
            <CardText>
              Un anillo en forma de dona, con objetos helados que sobrepasan la
              órbita de Neptuno. Plutón es el más conocido de estos mundos
              helados.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>La Niña</CardTitle>
            <CardText>
              Lo opuesto de El Niño. La Niña se produce cuando la temperatura de
              la superficie del mar es excepcionalmente baja en todo el Pacífico
              ecuatorial central este. Durante un año en el que se presenta La
              Niña, las temperaturas del invierno son más cálidas de lo normal
              en el sudeste y más frías de lo normal en el noroeste de los
              Estados Unidos.
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Año luz </CardTitle>
            <CardText>
              No es un año, ni una cantidad de tiempo. Es la distancia a la que
              viaja la luz en un año. Es el equivalente a 5,878,499,810,000
              millas (o 9,460,538,400,000,000 metros). Cuando las cosas están
              muy alejadas, resulta más sencillo referirse a su distancia en
              años luz que en millones, miles de millones o billones de millas.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Campo magnético</CardTitle>
            <CardText>
              El espacio alrededor de un imán en donde la fuerza magnética se
              encuentra activa. La tierra posee un campo magnético y su
              extensión hacia el espacio ayuda a protegernos del clima espacial.
            </CardText>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Masa</CardTitle>
            <CardText>
              La cantidad de materia de la que algo está compuesto
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Materia</CardTitle>
            <CardText>
              Lo que compone todas las cosas. Los átomos son pequeños trozos de
              materia. Los planetas grandes tienen mucha materia. ¡Incluso tú
              estás hecho de materia!
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Meteoro</CardTitle>
            <CardText>
              El rayo de luz que se produce cuando un meteoroide ingresa en la
              atmósfera de un planeta y comienza a arder debido al calor de la
              fricción.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Meteorito</CardTitle>
            <CardText>
              Un meteoroide que aterriza en la superficie de un planeta.
            </CardText>
            <br></br>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Meteoroide </CardTitle>
            <CardText>
              Un pequeño trozo de roca en el espacio, más pequeño que una
              camioneta. Si fuera más grande, sería un asteroide.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Microondas</CardTitle>
            <CardText>
              Forman parte del espectro electromagnético. Las estrellas, las
              nubes de gas entre las estrellas y las supernovas crean estas
              ondas de energía. También existe algo llamado “radiación cósmica
              de fondo de microondas”. Se encuentra en todo el universo y los
              científicos la estudian para aprender cómo se originó el universo.
            </CardText>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Molécula</CardTitle>
            <CardText>
              La unidad más pequeña de una sustancia que conserva las
              propiedades de la sustancia principal. Una molécula puede ser un
              átomo individual o un grupo de átomos. El agua es una sustancia y
              una molécula de agua está compuesta de dos átomos de hidrógeno y
              uno de oxígeno. Se escribe H2O. Esa molécula de agua conserva las
              mismas propiedades que las de un vaso de agua. Pero si las divides
              en hidrógeno y oxígeno, deja de ser agua.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Luna</CardTitle>
            <CardText>
              Un objeto natural que viaja alrededor de un objeto natural más
              grande. Los planetas pueden tener lunas. Los planetas enanos
              pueden tener lunas. ¡Incluso algunos asteroides tienen lunas! Los
              astrónomos los suelen llamar satélites o satélites naturales.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Meteoro</CardTitle>
            <CardText>
              El rayo de luz que se produce cuando un meteoroide ingresa en la
              atmósfera de un planeta y comienza a arder debido al calor de la
              fricción.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Nebulosa</CardTitle>
            <CardText>
              Una nube de polvo o gas que se encuentra entre las estrellas.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Estrella de neutrones </CardTitle>
            <CardText>
              Una estrella muy densa, compuesta principalmente de neutrones.
              Posee una fuerza gravitacional muy poderosa cerca de ella, ya que
              toda la masa de una estrella es atraída hacia un objeto, a través
              de unas pocas millas.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Nube de Oort</CardTitle>
            <CardText>
              Una cubierta esférica alrededor de nuestro sistema solar. Puede
              contener más de un billón de cuerpos helados. Los cometas con
              periodos largos (que tardan más de 200 años en dar la vuelta al
              sol) provienen de la Nube de Oort.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Capa de ozono</CardTitle>
            <CardText>
              Una parte de la atmósfera terrestre que absorbe mucha de la
              radiación ultravioleta del sol. Está compuesta de un gas
              denominado ozono, el cual es una molécula de tres átomos de
              oxígeno.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Partícula</CardTitle>
            <CardText>Una pequeña cantidad o trozo pequeño de algo.</CardText>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Planeta</CardTitle>
            <CardText>
              Un cuerpo de gran tamaño en el espacio exterior que circula
              alrededor del sol o de otra estrella.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Púlsar</CardTitle>
            <CardText>
              Un objeto que, por lo que se cree, es una estrella de neutrones
              que rota de manera rápida. Libera impulsos cortos de ondas
              radiales y otra radiación electromagnética.
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Cuásar </CardTitle>
            <CardText>
              Área compacta en el centro de una galaxia masiva, que se encuentra
              alrededor de un agujero negro supermasivo. Son unos de los
              objectos más brillantes del universo y se los puede observar a
              través de todo el espectro electromagnético.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Radiación</CardTitle>
            <CardText>
              La energía o partículas que se liberan de fuentes como materiales
              radioactivos, explosiones, y reacciones químicas. Esto incluye las
              ondas de energía en el espectro electromagnético.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Ondas radiales</CardTitle>
            <CardText>
              Forman parte del espectro electromagnético. Las ondas radiales se
              encuentran alrededor de nosotros aquí en la Tierra y también en el
              espacio exterior. Estas ondas emiten baja energía. Las utilizamos
              cada vez que escuchamos la radio. También se utilizan para hablar
              con los satélites. También son frecuentes en el espacio exterior,
              ya que son emitidas por estrellas jóvenes, púlsares, supernovas,
              el sol e incluso por galaxias que colisionan.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Radioactivo</CardTitle>
            <CardText>
              La manera en que describimos a algunos átomos que son inestables.
              Se transforman en diferentes tipos de átomos y descargan mucha
              energía.
            </CardText>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Satelite</CardTitle>
            <CardText>
              Un objeto que gira alrededor de otro objeto. La luna en realidad
              es un satélite. También utilizamos la palabra satélite para
              referirnos a las naves espaciales construidas por humanos que
              orbitan la Tierra, otros planetas, lunas, asteroides u otros
              objetos que se encuentran en el espacio.
            </CardText>
            <br></br>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Erupción solar</CardTitle>
            <CardText>
              Una explosión de energía y partículas que provienen del sol.
              Libera gases, ondas de radiación y tormentas magnéticas.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Panel Solar </CardTitle>
            <CardText>
              Un trozo de material que puede recoger la luz solar y convertirla
              en electricidad.
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Sistema solar</CardTitle>
            <CardText>
              Un conjunto que incluye una estrella y toda la materia que la
              rodea, como planetas, lunas, asteroides, cometas, y otros objetos.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Viento solar</CardTitle>
            <CardText>
              El flujo constante de partículas y energía que emite el sol.
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Clima espacial</CardTitle>
            <CardText>
              Las condiciones en el espacio que pueden afectar a la Tierra, los
              satélites, y los viajes espaciales. El clima espacial es, en gran
              medida, el resultado del viento solar y las tormentas solares.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Nave espacial</CardTitle>
            <CardText>
              Un vehículo utilizado para viajar por el espacio.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Velocidad de la Luzr</CardTitle>
            <CardText>
              La luz es lo más rápido que existe en el universo. Viaja a 186,282
              millas (299,792,458 metros) por segundo.
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Estrella </CardTitle>
            <CardText>
              Una bola de gas luminoso, compuesta principalmente de hidrógeno y
              helio, unida por su propia fuerza de gravedad. Convertir el
              hidrógeno en helio crea la energía que hace que las estrellas
              brillen.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Sol</CardTitle>
            <CardText>
              La estrella que se encuentra en el centro de nuestro sistema solar
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Supermasivo</CardTitle>
            <CardText>
              La manera en que describimos a los objetos que poseen un millón de
              veces (o más) la masa de nuestro sol.
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Supernova</CardTitle>
            <CardText>
              La explosión de una estrella que hace que sea tan brillante como
              toda una galaxia.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Tectónicas (fuerzas)</CardTitle>
            <CardText>
              Grandes movimientos de la corteza terrestre. Los movimientos
              tectónicos crean cadenas montañosas, fosas de aguas profundas,
              volcanes, y terremotos que pueden provocar olas de tsunami
              destructivas y pueden atravesar el océano.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Ultravioleta</CardTitle>
            <CardText>
              Forman parte del espectro electromagnético. Se lo denomina
              ultravioleta porque las ondas son más cortas que la luz violeta.
              Nosotros no podemos ver la luz ultravioleta con los ojos, pero
              algunas aves e insectos sí pueden hacerlo. Nuestro sol emite
              radiación ultravioleta y puede provocarte una quemadura si te
              expones a ella sin protector solar durante mucho tiempo.
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
            }}
          >
            <CardTitle>Universo </CardTitle>
            <CardText>
              Todo el espacio y tiempo, y todo lo que hay en él. ¡Es todo lo que
              se te pueda ocurrir!
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="primary">
            <CardTitle>Vacío</CardTitle>
            <CardText>
              Un espacio que no contiene ningún tipo de materia.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="success">
            <CardTitle>Volcán</CardTitle>
            <CardText>
              Una montaña o colina que tiene una abertura de la que erupcionan
              la lava, los fragmentos rocosos o los gases desde adentro de un
              planeta o una luna.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="info">
            <CardTitle>Luz visible</CardTitle>
            <CardText>
              La parte del espectro electromagnético que podemos ver con
              nuestros ojos. Son todos los colores del arco iris.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br><br></br>
              <br></br>
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="warning">
            <CardTitle>Onda</CardTitle>
            <CardText>
              Una manera en la que la energía se traslada de un lado hacia otro.
              En ocasiones, las ondas trasladan materiales de la misma manera en
              la que las ondas en un estanque mueven el agua. Otras veces, las
              ondas no mueven nada de lugar cuando transfieren energía. Por
              ejemplo, los rayos X y otras ondas del espectro electromagnético
              no generan ondulaciones cuando trasladan energía de un lugar a
              otro. Clasificamos las ondas según lo que midan sus longitudes de
              onda. Una longitud de onda es la distancia desde una cresta hasta
              otra (o desde un valle hasta otro) de una onda.
            </CardText>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card body inverse color="danger">
            <CardTitle>Rayos X</CardTitle>
            <CardText>
              Radiación que contiene muchísima energía, compuesta de gases muy
              calientes, estrellas, estrellas de neutrones, y gases alrededor de
              los agujeros negros. Los rayos X tienen tanta energía que pueden
              atravesar materiales sólidos. Ellos forman parte del espectro
              electromagnético.  
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br><br></br>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Glosario;
