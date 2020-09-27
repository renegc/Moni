import React, { useState, Fragment } from "react";
import { Button, Form } from "react-bootstrap";

import {
  Card,
  CardImg,
  
  CardBody,
  CardTitle,
  
} from "reactstrap";

import img1 from "../assets/images/planetas/jupiter.jpg";
import img2 from "../assets/images/planetas/marte.jpg";
import img3 from "../assets/images/planetas/mercury.jpg";
import img4 from "../assets/images/planetas/nepturno.jpg";
import img5 from "../assets/images/planetas/pluto.png";
import img6 from "../assets/images/planetas/saturno.jpg";
import img7 from "../assets/images/planetas/tierra.png";
import img8 from "../assets/images/planetas/urano.jpg";
import im9 from "../assets/images/planetas/venus.jpg";

import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom';


const TooltipComponent = (props) => {
  const history = useHistory();
  const [Planetas, setPlanetas] = useState({
    jupiter: '',
    marte: '',
    mercury: '',
    neptuno: '',
    pluton: '',
    saturno: '',
    tierra: '',
    urano: '',
    venus: ''
  })
  const handleRadioChange = (e) => {
    /* funcion que permite obtener data de los radiobutton */
    if (e.target.value === "si") {
      setPlanetas({
        ...Planetas,
        [e.target.name]: true,
      });
    } else {
      setPlanetas({
        ...Planetas,
        [e.target.name]: false,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var contador = 0;
    var malas = 0;
    for (const property in Planetas) {
      if (Planetas[property]) 
      {
       contador= contador+ 1; 
      }
      else{
        malas = malas +1
      }
      console.log(`${property}: ${Planetas[property]}`);
      console.log(contador, malas)
    }
    Swal.fire({
      title: 'Resultado Final',
      text: `Tuviste ${contador} Aciertos y ${malas} malas  `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Volver a jugar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Empecemos de nuevo!',          
        )
        window.location.reload();
      }
      else{
        history.push('/');
      }
    })

   
  };
  return (
    <Fragment>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Adivina el planeta
        </CardTitle>
        <CardBody className="">
          <Form className="text-center">
            <label>1. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img1} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Saturno"
                  name="jupiter"
                  id="formHorizontalRadios1"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Urano"
                  name="jupiter"
                  id="formHorizontalRadios2"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Jupiter"
                  name="jupiter"
                  id="formHorizontalRadios3"
                  onChange={handleRadioChange}
                  value="si"
                />
              </CardBody>
            </Card>
            <br></br>
            <label>2. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img2} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Venus"
                  name="marte"
                  id="formHorizontalRadios4"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Mercurio"
                  name="marte"
                  id="formHorizontalRadios5"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Marte"
                  name="marte"
                  id="formHorizontalRadios6"
                  onChange={handleRadioChange}
                  value="si"
                />
              </CardBody>
            </Card>

            <label>3. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img3} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Venus"
                  name="mercury"
                  id="formHorizontalRadios7"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Mercurio"
                  name="mercury"
                  id="formHorizontalRadios8"
                  onChange={handleRadioChange}
                  value="si"
                />
                <Form.Check
                  type="radio"
                  label="Luna"
                  name="mercury"
                  id="formHorizontalRadios9"
                  onChange={handleRadioChange}
                  value="no"
                />
              </CardBody>
            </Card>

            <label>4. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img4} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Urano"
                  name="neptuno"
                  id="formHorizontalRadios11"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Tierra"
                  name="neptuno"
                  id="formHorizontalRadios12"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Neptuno"
                  name="neptuno"
                  id="formHorizontalRadios13"
                  onChange={handleRadioChange}
                  value="si"
                />
              </CardBody>
            </Card>

            <label>5. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img5} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Pluton"
                  name="pluton"
                  id="formHorizontalRadios14"
                  onChange={handleRadioChange}
                  value="si"
                />
                <Form.Check
                  type="radio"
                  label="Venus"
                  name="pluton"
                  id="formHorizontalRadios15"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Mercurio"
                  name="pluton"
                  id="formHorizontalRadios16"
                  onChange={handleRadioChange}
                  value="no"
                />
              </CardBody>
            </Card>

            <label>6. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img6} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Jupiter"
                  name="saturno"
                  id="formHorizontalRadios17"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Marte"
                  name="saturno"
                  id="formHorizontalRadios18"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Saturno"
                  name="saturno"
                  id="formHorizontalRadios19"
                  onChange={handleRadioChange}
                  value="si"
                />
              </CardBody>
            </Card>

            <label>7. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img7} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Tierra"
                  name="tierra"
                  id="formHorizontalRadios21"
                  onChange={handleRadioChange}
                  value="si"
                />
                <Form.Check
                  type="radio"
                  label="Marte"
                  name="tierra"
                  id="formHorizontalRadios22"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Venus"
                  name="tierra"
                  id="formHorizontalRadios23"
                  onChange={handleRadioChange}
                  value="no"
                />
              </CardBody>
            </Card>
            <label>8. Adivina </label>
            <Card>
              <CardImg top width="100%" src={img8} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Neptuno"
                  name="urano"
                  id="formHorizontalRadios24"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Jupiter"
                  name="urano"
                  id="formHorizontalRadios25"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Urano"
                  name="urano"
                  id="formHorizontalRadios27"
                  onChange={handleRadioChange}
                  value="si"
                />
              </CardBody>
            </Card>

            <label>9. Adivina </label>
            <Card>
              <CardImg top width="100%" src={im9} />
              <CardBody>
                <Form.Check
                  type="radio"
                  label="Venus"
                  name="venus"
                  id="formHorizontalRadios28"
                  onChange={handleRadioChange}
                  value="si"
                />
                <Form.Check
                  type="radio"
                  label="Mercurio"
                  name="venus"
                  id="formHorizontalRadios29"
                  onChange={handleRadioChange}
                  value="no"
                />
                <Form.Check
                  type="radio"
                  label="Marte"
                  name="venus"
                  id="formHorizontalRadios30"
                  onChange={handleRadioChange}
                  value="no"
                />
              </CardBody>
            </Card>

            <Button
              className="inline-btn"
              variant="secondary"
              type="button"
              onClick={handleSubmit}
            >
              Mostrar resultados
            </Button>
          </Form>
        </CardBody>
      </Card>

    </Fragment>
  );
};

export default TooltipComponent;
