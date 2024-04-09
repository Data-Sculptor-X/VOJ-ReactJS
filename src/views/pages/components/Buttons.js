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
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Buttons() {
  return (
    <>
      <SimpleHeader name="Buttons" parentName="Components" />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper ct-example" lg="8">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Styles</h3>
              </CardHeader>
              <CardBody>
                <Button color="primary" type="button">
                  Button
                </Button>
                <Button className="btn-icon" color="primary" type="button">
                  <span className="btn-inner--icon mr-1">
                    <i className="ni ni-bag-17" />
                  </span>
                  <span className="btn-inner--text">With icon</span>
                </Button>
                <Button className="btn-icon" color="primary" type="button">
                  <span className="btn-inner--icon">
                    <i className="ni ni-atom" />
                  </span>
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Colors</h3>
              </CardHeader>
              <CardBody>
                <Button color="default" type="button">
                  Default
                </Button>
                <Button color="primary" type="button">
                  Primary
                </Button>
                <Button color="secondary" type="button">
                  Secondary
                </Button>
                <Button color="info" type="button">
                  Info
                </Button>
                <Button color="success" type="button">
                  Success
                </Button>
                <Button color="danger" type="button">
                  Danger
                </Button>
                <Button color="warning" type="button">
                  Warning
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Outline</h3>
              </CardHeader>
              <CardBody>
                <Button color="default" outline type="button">
                  Default
                </Button>
                <Button color="primary" outline type="button">
                  Primary
                </Button>
                <Button color="secondary" outline type="button">
                  Secondary
                </Button>
                <Button color="info" outline type="button">
                  Info
                </Button>
                <Button color="success" outline type="button">
                  Success
                </Button>
                <Button color="danger" outline type="button">
                  Danger
                </Button>
                <Button color="warning" outline type="button">
                  Warning
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Sizes</h3>
              </CardHeader>
              <CardBody>
                <Button color="primary" size="lg" type="button">
                  Large button
                </Button>
                <Button color="secondary" size="lg" type="button">
                  Large button
                </Button>
                <hr />
                <Button color="primary" size="sm" type="button">
                  Small button
                </Button>
                <Button color="secondary" size="sm" type="button">
                  Small button
                </Button>
                <hr />
                <Button block color="primary" size="lg" type="button">
                  Block level button
                </Button>
                <Button block color="secondary" size="lg" type="button">
                  Block level button
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Group</h3>
              </CardHeader>
              <CardBody>
                <ButtonGroup aria-label="Basic example" role="group">
                  <Button color="secondary" type="button">
                    Left
                  </Button>
                  <Button className="active" color="secondary" type="button">
                    Middle
                  </Button>
                  <Button color="secondary" type="button">
                    Right
                  </Button>
                </ButtonGroup>
                <hr />
                <ButtonGroup>
                  <Button className="active" color="info" type="button">
                    1
                  </Button>
                  <Button color="info" type="button">
                    2
                  </Button>
                  <Button color="info" type="button">
                    3
                  </Button>
                  <Button color="info" type="button">
                    4
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button color="default" type="button">
                    5
                  </Button>
                  <Button color="default" type="button">
                    6
                  </Button>
                  <Button color="default" type="button">
                    7
                  </Button>
                </ButtonGroup>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Social</h3>
              </CardHeader>
              <CardBody>
                <Button
                  className="btn-icon my-2"
                  color="facebook"
                  type="button"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-facebook" />
                  </span>
                  <span className="btn-inner--text">Facebook</span>
                </Button>
                <Button className="btn-icon" color="twitter" type="button">
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-twitter" />
                  </span>
                  <span className="btn-inner--text">Twitter</span>
                </Button>
                <Button
                  className="btn-google-plus btn-icon"
                  color="google"
                  type="button"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-google-plus-g" />
                  </span>
                  <span className="btn-inner--text">Google +</span>
                </Button>
                <Button
                  className="btn-instagram btn-icon"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-instagram" />
                  </span>
                  <span className="btn-inner--text">Instagram</span>
                </Button>
                <Button className="btn-icon" color="pinterest" type="button">
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-pinterest" />
                  </span>
                  <span className="btn-inner--text">Pinterest</span>
                </Button>
                <Button className="btn-icon" color="youtube" type="button">
                  <span className="btn-inner--icon">
                    <i className="fab fa-youtube" />
                  </span>
                  <span className="btn-inner--text">Youtube</span>
                </Button>
                <Button
                  className="btn-vimeo btn-icon"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-vimeo-v" />
                  </span>
                  <span className="btn-inner--text">Vimeo</span>
                </Button>
                <Button
                  className="btn-slack btn-icon"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-slack" />
                  </span>
                  <span className="btn-inner--text">Slack</span>
                </Button>
                <Button className="btn-icon" color="dribbble" type="button">
                  <span className="btn-inner--icon mr-1">
                    <i className="fab fa-dribbble" />
                  </span>
                  <span className="btn-inner--text">Dribbble</span>
                </Button>
                <hr />
                <Button
                  className="btn-icon-only"
                  color="facebook"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-facebook" />
                  </span>
                </Button>
                <Button className="btn-icon-only" color="twitter" type="button">
                  <span className="btn-inner--icon">
                    <i className="fab fa-twitter" />
                  </span>
                </Button>
                <Button
                  className="btn-google-plus btn-icon-only"
                  color="google"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-google-plus-g" />
                  </span>
                </Button>
                <Button
                  className="btn-instagram btn-icon-only"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-instagram" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only"
                  color="pinterest"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-pinterest" />
                  </span>
                </Button>
                <Button className="btn-icon-only" color="youtube" type="button">
                  <span className="btn-inner--icon">
                    <i className="fab fa-youtube" />
                  </span>
                </Button>
                <Button
                  className="btn-vimeo btn-icon-only"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-vimeo-v" />
                  </span>
                </Button>
                <Button
                  className="btn-slack btn-icon-only"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-slack" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only"
                  color="dribbble"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-dribbble" />
                  </span>
                </Button>
                <hr />
                <Button
                  className="btn-icon-only rounded-circle"
                  color="facebook"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-facebook" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-twitter" />
                  </span>
                </Button>
                <Button
                  className="btn-google-plus btn-icon-only rounded-circle"
                  color="google"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-google-plus-g" />
                  </span>
                </Button>
                <Button
                  className="btn-instagram btn-icon-only rounded-circle"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-instagram" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="pinterest"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-pinterest" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="youtube"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-youtube" />
                  </span>
                </Button>
                <Button
                  className="btn-vimeo btn-icon-only rounded-circle"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-vimeo-v" />
                  </span>
                </Button>
                <Button
                  className="btn-slack btn-icon-only rounded-circle"
                  color="default"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-slack" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="dribbble"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="fab fa-dribbble" />
                  </span>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Buttons;
