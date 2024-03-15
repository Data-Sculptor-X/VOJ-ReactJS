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
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import CardsHeader from "components/Headers/CardsHeader.js";

import { widgetEvents } from "variables/general.js";

let mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

function Widgets() {
  const [nameOnCard, setnameOnCard] = React.useState(false);
  const [cardNumber, setcardNumber] = React.useState(false);
  const [date, setdate] = React.useState(false);
  const [ccv, setccv] = React.useState(false);
  const widgetCalendarRef = React.useRef(null);
  React.useEffect(() => {
    let calendar = new Calendar(widgetCalendarRef.current, {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      selectable: true,
      editable: true,
      events: widgetEvents,
      headerToolbar: "",
    });
    calendar.render();
  }, []);

  return (
    <>
      <CardsHeader name="Widgets" parentName="Widgets" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="4">
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
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Team members</h5>
              </CardHeader>
              <CardHeader className="py-0">
                <Form>
                  <FormGroup className="mb-0">
                    <InputGroup className="input-group-lg input-group-flush">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <span className="fas fa-search" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Search" type="search" />
                    </InputGroup>
                  </FormGroup>
                </Form>
              </CardHeader>
              <CardBody>
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            John Michael
                          </a>
                        </h4>
                        <span className="text-success mr-1">●</span>
                        <small>Online</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
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
                            Alex Smith
                          </a>
                        </h4>
                        <span className="text-warning mr-1">●</span>
                        <small>In a meeting</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Samantha Ivy
                          </a>
                        </h4>
                        <span className="text-danger mr-1">●</span>
                        <small>Offline</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            John Michael
                          </a>
                        </h4>
                        <span className="text-success mr-1">●</span>
                        <small>Online</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-5.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            John Snow
                          </a>
                        </h4>
                        <span className="text-success mr-1">●</span>
                        <small>Online</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Latest messages</h5>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem
                    className="list-group-item-action flex-column align-items-start py-4 px-4"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    tag="a"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <div>
                        <div className="d-flex w-100 align-items-center">
                          <img
                            alt="..."
                            className="avatar avatar-xs mr-2"
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                          <h5 className="mb-1">Tim</h5>
                        </div>
                      </div>
                      <small>2 hrs ago</small>
                    </div>
                    <h4 className="mt-3 mb-1">New order for Argon Dashboard</h4>
                    <p className="text-sm mb-0">
                      Doasdnec id elit non mi porta gravida at eget metus.
                      Maecenas sed diam eget risus varius blandit.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem
                    className="list-group-item-action flex-column align-items-start py-4 px-4"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    tag="a"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <div>
                        <div className="d-flex w-100 align-items-center">
                          <img
                            alt="..."
                            className="avatar avatar-xs mr-2"
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                          <h5 className="mb-1">Mike</h5>
                        </div>
                      </div>
                      <small>1 day ago</small>
                    </div>
                    <h4 className="mt-3 mb-1">
                      <span className="text-info mr-1">●</span>
                      Your theme has been updated
                    </h4>
                    <p className="text-sm mb-0">
                      Doasdnec id elit non mi porta gravida at eget metus.
                      Maecenas sed diam eget risus varius blandit.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            <Card className="bg-gradient-primary">
              <CardBody>
                <Row className="justify-content-between align-items-center">
                  <div className="col">
                    <img
                      alt="..."
                      src={require("assets/img/icons/cards/mastercard.png")}
                    />
                  </div>
                  <Col className="col-auto">
                    <div className="d-flex align-items-center">
                      <small className="text-white font-weight-bold mr-3">
                        Make default
                      </small>
                      <div>
                        <label className="custom-toggle custom-toggle-white">
                          <input defaultChecked type="checkbox" />
                          <span
                            className="custom-toggle-slider rounded-circle"
                            data-label-off="No"
                            data-label-on="Yes"
                          />
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Form className="form-primary" role="form">
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-alternative mb-3", {
                          focused: nameOnCard,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name on card"
                          type="text"
                          onFocus={(e) => setnameOnCard(true)}
                          onBlur={(e) => setnameOnCard(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-alternative mb-3", {
                          focused: cardNumber,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-credit-card" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Card number"
                          type="text"
                          onFocus={(e) => setcardNumber(true)}
                          onBlur={(e) => setcardNumber(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <Row>
                      <Col xs="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames(
                              "input-group-alternative mb-3",
                              {
                                focused: date,
                              }
                            )}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="MM/YY"
                              type="text"
                              onFocus={(e) => setdate(true)}
                              onBlur={(e) => setdate(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-alternative", {
                              focused: ccv,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="CCV"
                              type="text"
                              onFocus={(e) => setccv(true)}
                              onBlur={(e) => setccv(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button block color="info" type="button">
                      Save new card
                    </Button>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="widget-calendar">
              <CardHeader>
                <div className="h5 text-muted mb-1 widget-calendar-year">
                  {moment().format("YYYY")}
                </div>
                <div className="h3 mb-0 widget-calendar-day">
                  {moment().format("dddd, MMM D")}
                </div>
              </CardHeader>
              <CardBody>
                <div ref={widgetCalendarRef} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Latest notifications</h5>
              </CardHeader>
              <CardBody>
                <div
                  className="timeline timeline-one-side"
                  data-timeline-axis-style="dashed"
                  data-timeline-content="axis"
                >
                  <div className="timeline-block">
                    <span className="timeline-step badge-success">
                      <i className="ni ni-bell-55" />
                    </span>
                    <div className="timeline-content">
                      <div className="d-flex justify-content-between pt-1">
                        <div>
                          <span className="text-muted text-sm font-weight-bold">
                            New message
                          </span>
                        </div>
                        <div className="text-right">
                          <small className="text-muted">
                            <i className="fas fa-clock mr-1" />2 hrs ago
                          </small>
                        </div>
                      </div>
                      <h6 className="text-sm mt-1 mb-0">
                        Let's meet at Starbucks at 11:30. Wdyt?
                      </h6>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-danger">
                      <i className="ni ni-html5" />
                    </span>
                    <div className="timeline-content">
                      <div className="d-flex justify-content-between pt-1">
                        <div>
                          <span className="text-muted text-sm font-weight-bold">
                            Product issue
                          </span>
                        </div>
                        <div className="text-right">
                          <small className="text-muted">
                            <i className="fas fa-clock mr-1" />3 hrs ago
                          </small>
                        </div>
                      </div>
                      <h6 className="text-sm mt-1 mb-0">
                        A new issue has been reported for Argon.
                      </h6>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-info">
                      <i className="ni ni-like-2" />
                    </span>
                    <div className="timeline-content">
                      <div className="d-flex justify-content-between pt-1">
                        <div>
                          <span className="text-muted text-sm font-weight-bold">
                            New likes
                          </span>
                        </div>
                        <div className="text-right">
                          <small className="text-muted">
                            <i className="fas fa-clock mr-1" />5 hrs ago
                          </small>
                        </div>
                      </div>
                      <h6 className="text-sm mt-1 mb-0">
                        Your posts have been liked a lot.
                      </h6>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Progress track</h5>
              </CardHeader>
              <CardBody>
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Argon Design System</h5>
                        <Progress
                          color="warning"
                          className="progress-xs mb-0"
                          max="100"
                          value="60"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/angular.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Angular Now UI Kit PRO</h5>
                        <Progress
                          color="success"
                          className="progress-xs mb-0"
                          max="100"
                          value="100"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/sketch.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Black Dashboard</h5>
                        <Progress
                          color="danger"
                          className="progress-xs mb-0"
                          max="100"
                          value="72"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/react.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>React Material Dashboard</h5>
                        <Progress
                          color="info"
                          className="progress-xs mb-0"
                          max="100"
                          value="90"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/vue.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Vue Paper UI Kit PRO</h5>
                        <Progress
                          color="success"
                          className="progress-xs mb-0"
                          max="100"
                          value="100"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Row className="justify-content-between align-items-center">
                  <div className="col">
                    <img
                      alt="..."
                      src={require("assets/img/icons/cards/paypal.png")}
                    />
                  </div>
                  <Col className="col-auto">
                    <Badge className="badge-lg" color="success">
                      Active
                    </Badge>
                  </Col>
                </Row>
                <div className="my-4">
                  <span className="h6 surtitle text-muted">PayPal E-mail</span>
                  <div className="h1">john.snow@gmail.com</div>
                </div>
                <Row>
                  <div className="col">
                    <span className="h6 surtitle text-muted">Name</span>
                    <span className="d-block h3">John Snow</span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="widget-calendar">
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h5 className="h3 mb-0">Real time</h5>
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
                <VectorMap
                  containerClassName="vector-map vector-map-sm"
                  containerStyle={{
                    width: "100%",
                    height: "280px",
                  }}
                  map={"world_mill"}
                  zoomOnScroll={false}
                  scaleColors={["#f00", "#0071A4"]}
                  normalizeFunction="polynomial"
                  hoverOpacity={0.7}
                  hoverColor={false}
                  backgroundColor="transparent"
                  regionStyle={{
                    initial: {
                      fill: "#e9ecef",
                      "fill-opacity": 0.8,
                      stroke: "none",
                      "stroke-width": 0,
                      "stroke-opacity": 1,
                    },
                    hover: {
                      fill: "#dee2e6",
                      "fill-opacity": 0.8,
                      cursor: "pointer",
                    },
                    selected: {
                      fill: "yellow",
                    },
                    selectedHover: {},
                  }}
                  markerStyle={{
                    initial: {
                      fill: "#fb6340",
                      "stroke-width": 0,
                    },
                    hover: {
                      fill: "#11cdef",
                      "stroke-width": 0,
                    },
                  }}
                  markers={[
                    {
                      latLng: [41.9, 12.45],
                      name: "Vatican City",
                    },
                    {
                      latLng: [43.73, 7.41],
                      name: "Monaco",
                    },
                    {
                      latLng: [35.88, 14.5],
                      name: "Malta",
                    },
                    {
                      latLng: [1.3, 103.8],
                      name: "Singapore",
                    },
                    {
                      latLng: [1.46, 173.03],
                      name: "Kiribati",
                    },
                    {
                      latLng: [-21.13, -175.2],
                      name: "Tonga",
                    },
                    {
                      latLng: [15.3, -61.38],
                      name: "Dominica",
                    },
                    {
                      latLng: [-20.2, 57.5],
                      name: "Mauritius",
                    },
                    {
                      latLng: [26.02, 50.55],
                      name: "Bahrain",
                    },
                  ]}
                  series={{
                    regions: [
                      {
                        values: mapData,
                        scale: ["#ced4da", "#adb5bd"],
                        normalizeFunction: "polynomial",
                      },
                    ],
                  }}
                />
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <img
                          alt="..."
                          src={require("assets/img/icons/flags/US.png")}
                        />
                      </Col>
                      <div className="col">
                        <small>Country:</small>
                        <h5 className="mb-0">United States</h5>
                      </div>
                      <div className="col">
                        <small>Visits:</small>
                        <h5 className="mb-0">2500</h5>
                      </div>
                      <div className="col">
                        <small>Bounce:</small>
                        <h5 className="mb-0">30%</h5>
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <img
                          alt="..."
                          src={require("assets/img/icons/flags/DE.png")}
                        />
                      </Col>
                      <div className="col">
                        <small>Country:</small>
                        <h5 className="mb-0">Germany</h5>
                      </div>
                      <div className="col">
                        <small>Visits:</small>
                        <h5 className="mb-0">2500</h5>
                      </div>
                      <div className="col">
                        <small>Bounce:</small>
                        <h5 className="mb-0">30%</h5>
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <img
                          alt="..."
                          src={require("assets/img/icons/flags/GB.png")}
                        />
                      </Col>
                      <div className="col">
                        <small>Country:</small>
                        <h5 className="mb-0">Great Britain</h5>
                      </div>
                      <div className="col">
                        <small>Visits:</small>
                        <h5 className="mb-0">2500</h5>
                      </div>
                      <div className="col">
                        <small>Bounce:</small>
                        <h5 className="mb-0">30%</h5>
                      </div>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            <Card className="bg-gradient-primary">
              <CardBody>
                <Row className="justify-content-between align-items-center">
                  <div className="col">
                    <img
                      alt="..."
                      src={require("assets/img/icons/cards/visa.png")}
                    />
                  </div>
                  <Col className="col-auto">
                    <Badge className="badge-lg" color="success">
                      Active
                    </Badge>
                  </Col>
                </Row>
                <div className="my-4">
                  <span className="h6 surtitle text-light">Card number</span>
                  <div className="card-serial-number h1 text-white">
                    <div>4358</div>
                    <div>7421</div>
                    <div>9256</div>
                    <div>6682</div>
                  </div>
                </div>
                <Row>
                  <div className="col">
                    <span className="h6 surtitle text-light">Name</span>
                    <span className="d-block h3 text-white">John Snow</span>
                  </div>
                  <div className="col">
                    <span className="h6 surtitle text-light">Expiry date</span>
                    <span className="d-block h3 text-white">11/23</span>
                  </div>
                </Row>
              </CardBody>
            </Card>
            <Card className="bg-gradient-default">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0 text-white">
                      Total traffic
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      350,897
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i className="ni ni-active-40" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-white mr-2">
                    <i className="fa fa-arrow-up" />
                    3.48%
                  </span>
                  <span className="text-nowrap text-light">
                    Since last month
                  </span>
                </p>
              </CardBody>
            </Card>
            <Card className="bg-gradient-primary">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0 text-white">
                      New users
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      2,356
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i className="ni ni-atom" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-white mr-2">
                    <i className="fa fa-arrow-up" />
                    3.48%
                  </span>
                  <span className="text-nowrap text-light">
                    Since last month
                  </span>
                </p>
              </CardBody>
            </Card>
            <Card className="bg-gradient-danger">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0 text-white">
                      Performance
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      49,65%
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i className="ni ni-spaceship" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-white mr-2">
                    <i className="fa fa-arrow-up" />
                    3.48%
                  </span>
                  <span className="text-nowrap text-light">
                    Since last month
                  </span>
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">To do list</h5>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup data-toggle="checklist" flush>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-success checklist-item-checked">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">Call with Dave</h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-success">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="chk-todo-task-1"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-1"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-warning">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">Lunch meeting</h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-warning">
                          <input
                            className="custom-control-input"
                            id="chk-todo-task-2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-2"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-info">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">
                          Argon Dashboard Launch
                        </h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-info">
                          <input
                            className="custom-control-input"
                            id="chk-todo-task-3"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-3"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-danger">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">
                          Winter Hackaton
                        </h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-danger">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="chk-todo-task-4"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-4"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-success checklist-item-checked">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">
                          Dinner with Family
                        </h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-success">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="chk-todo-task-5"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-5"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Widgets;
