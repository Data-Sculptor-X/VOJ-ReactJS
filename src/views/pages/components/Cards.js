/*!

=========================================================
* Argon Dashboard PRO React - v1.2.5
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import CardsHeader from "components/Headers/CardsHeader.js";

function Cards() {
  return (
    <>
      <CardsHeader name="Cards" parentName="Components" />
      <Container className="mt--6" fluid>
        <Row className="card-wrapper">
          <Col lg="4">
            <Card>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              />

              <ListGroup flush>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>

              <CardBody>
                <CardTitle className="mb-3" tag="h3">
                  Card title
                </CardTitle>
                <CardText className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis non dolore est fuga nobis ipsum illum eligendi nemo
                  iure repellat, soluta, optio minus ut reiciendis voluptates
                  enim impedit veritatis officiis.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <CardTitle className="mb-3" tag="h3">
                  Card title
                </CardTitle>
                <CardText className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis non dolore est fuga nobis ipsum illum eligendi nemo
                  iure repellat, soluta, optio minus ut reiciendis voluptates
                  enim impedit veritatis officiis.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>

            <Card className="card-profile">
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              />
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/team-4.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h5 className="h3">
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h5>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Card title</h5>
              </CardHeader>

              <CardBody>
                <CardText className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis non dolore est fuga nobis ipsum illum eligendi nemo
                  iure repellat, soluta, optio minus ut reiciendis voluptates
                  enim impedit veritatis officiis.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Row className="align-items-center">
                  <Col className="col-auto">
                    <a
                      className="avatar avatar-xl rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-2.jpg")}
                      />
                    </a>
                  </Col>
                  <div className="col ml--2">
                    <h4 className="mb-0">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        John Snow
                      </a>
                    </h4>
                    <p className="text-sm text-muted mb-0">Working remoteley</p>
                    <span className="text-success mr-1">●</span>
                    <small>Active</small>
                  </div>
                  <Col className="col-auto">
                    <Button color="primary" size="sm" type="button">
                      Add
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1.jpg")}
                    style={{ width: "140px" }}
                  />
                </a>
                <div className="pt-4 text-center">
                  <h5 className="h3 title">
                    <span className="d-block mb-1">Ryan Tompson</span>
                    <small className="h4 font-weight-light text-muted">
                      Web Developer
                    </small>
                  </h5>
                  <div className="mt-3">
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x900.jpg")}
                top
              />

              <CardBody>
                <CardTitle className="h2 mb-0">
                  Get started with Argon
                </CardTitle>
                <small className="text-muted">
                  by John Snow on Oct 29th at 10:23 AM
                </small>
                <CardText className="mt-4">
                  Argon is a great free UI package based on Bootstrap 4 that
                  includes the most important components and features.
                </CardText>
                <Button
                  className="px-0"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  View article
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-gradient-default">
              <CardBody>
                <CardTitle className="text-white" tag="h3">
                  Testimonial
                </CardTitle>
                <blockquote className="blockquote text-white mb-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer text-danger">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-pricing bg-gradient-success border-0 text-center mb-4">
              <CardHeader className="bg-transparent">
                <h4 className="text-uppercase ls-1 text-white py-3 mb-0">
                  Bravo pack
                </h4>
              </CardHeader>
              <CardBody className="px-lg-7">
                <div className="display-2 text-white">$49</div>
                <span className="text-white">per application</span>
                <ul className="list-unstyled my-4">
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                          <i className="fas fa-terminal" />
                        </div>
                      </div>
                      <div>
                        <span className="pl-2 text-sm text-white">
                          Complete documentation
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                          <i className="fas fa-pen-fancy" />
                        </div>
                      </div>
                      <div>
                        <span className="pl-2 text-sm text-white">
                          Working materials in Sketch
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                          <i className="fas fa-hdd" />
                        </div>
                      </div>
                      <div>
                        <span className="pl-2 text-sm text-white">
                          2GB cloud storage
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
                <Button className="mb-3" color="primary" type="button">
                  Start free trial
                </Button>
              </CardBody>
              <CardFooter className="bg-transparent">
                <a
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Request a demo
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h5 className="h3 mb-0">Card title</h5>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      className="btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Action
                    </Button>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <CardText className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis non dolore est fuga nobis ipsum illum eligendi nemo
                  iure repellat, soluta, optio minus ut reiciendis voluptates
                  enim impedit veritatis officiis.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-dark text-white border-0">
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
              />
              <CardImgOverlay className="d-flex align-items-center">
                <div>
                  <CardTitle className="h2 text-white mb-2">
                    Card title
                  </CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText className="text-sm font-weight-bold">
                    Last updated 3 mins ago
                  </CardText>
                </div>
              </CardImgOverlay>
            </Card>

            <Card className="card-pricing border-0 text-center mb-4">
              <CardHeader className="bg-transparent">
                <h4 className="text-uppercase ls-1 text-primary py-3 mb-0">
                  Bravo pack
                </h4>
              </CardHeader>
              <CardBody className="px-lg-7">
                <div className="display-2">$49</div>
                <span className="text-muted">per application</span>
                <ul className="list-unstyled my-4">
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                          <i className="fas fa-terminal" />
                        </div>
                      </div>
                      <div>
                        <span className="pl-2 text-sm">
                          Complete documentation
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                          <i className="fas fa-pen-fancy" />
                        </div>
                      </div>
                      <div>
                        <span className="pl-2 text-sm">
                          Working materials in Sketch
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                          <i className="fas fa-hdd" />
                        </div>
                      </div>
                      <div>
                        <span className="pl-2 text-sm">2GB cloud storage</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <Button className="mb-3" color="primary" type="button">
                  Start free trial
                </Button>
              </CardBody>
              <CardFooter>
                <a
                  className="text-muted"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Request a demo
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
