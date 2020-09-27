import React, { Fragment } from "react";
import img2 from "../../assets/images/planetas/videos.png";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";
const Videos = () => {
  return (
    <Fragment>
      <h1>
        <strong>Videos</strong>
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
          Video 1
        </CardTitle>
        <CardBody className="">
          <iframe
          title="video1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pS7p6FfU4bE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            id="hola"
          ></iframe>
        </CardBody>
      </Card>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Video 2
        </CardTitle>
        <CardBody className="">
          <iframe
             title="video2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sfDbHmTrQgA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </CardBody>
      </Card>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Video 3
        </CardTitle>
        <CardBody className="">
          <iframe
             title="video3"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GXrBw2-DwQE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
       {/*     // eslint-disable-next-line */}
        </CardBody>
      </Card>
    </Fragment>
    // eslint-disable-next-line
  );
};

export default Videos;
