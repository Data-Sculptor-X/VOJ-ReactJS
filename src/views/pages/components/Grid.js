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
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Grid() {
  return (
    <>
      <SimpleHeader name="Grid" parentName="Components" />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper" lg="8">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Grid system</h3>
              </CardHeader>
              <CardBody>
                <Row className="row-example">
                  <Col sm>
                    <span>One of three columns</span>
                  </Col>
                  <Col sm>
                    <span>One of three columns</span>
                  </Col>
                  <Col sm>
                    <span>One of three columns</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Equal-width</h3>
              </CardHeader>
              <CardBody>
                <Row className="row-example">
                  <Col>
                    <span>1 of 2</span>
                  </Col>
                  <Col>
                    <span>2 of 2</span>
                  </Col>
                </Row>
                <Row className="row-example">
                  <Col>
                    <span>1 of 3</span>
                  </Col>
                  <Col>
                    <span>2 of 3</span>
                  </Col>
                  <Col>
                    <span>3 of 3</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Setting one column width</h3>
              </CardHeader>
              <CardBody>
                <Row className="row-example">
                  <Col>
                    <span>1 of 3</span>
                  </Col>
                  <Col xs="6">
                    <span>2 of 3 (wider)</span>
                  </Col>
                  <Col>
                    <span>3 of 3</span>
                  </Col>
                </Row>
                <Row className="row-example">
                  <Col>
                    <span>1 of 3</span>
                  </Col>
                  <Col xs="5">
                    <span>2 of 3 (wider)</span>
                  </Col>
                  <Col>
                    <span>3 of 3</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Variable width content</h3>
              </CardHeader>
              <CardBody>
                <Row className="row-example justify-content-md-center">
                  <Col lg="2">
                    <span>1 of 3</span>
                  </Col>
                  <Col md={{ size: "autp" }}>
                    <span>Variable width content</span>
                  </Col>
                  <Col lg="2">
                    <span>3 of 3</span>
                  </Col>
                </Row>
                <Row className="row-example">
                  <Col>
                    <span>1 of 3</span>
                  </Col>
                  <Col md={{ size: "auto" }}>
                    <span>Variable width content</span>
                  </Col>
                  <Col lg="2">
                    <span>3 of 3</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Equal-width multi-row</h3>
              </CardHeader>
              <CardBody>
                <Row className="row-example">
                  <Col>
                    <span>col</span>
                  </Col>
                  <Col>
                    <span>col</span>
                  </Col>
                  <div className="w-100" />
                  <Col>
                    <span>col</span>
                  </Col>
                  <Col>
                    <span>col</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Mix and match</h3>
              </CardHeader>
              <CardBody>
                <Row className="row-example">
                  <Col md="8" xs="12">
                    <span>.col-12 .col-md-8</span>
                  </Col>
                  <Col md="4" xs="6">
                    <span>.col-6 .col-md-4</span>
                  </Col>
                </Row>

                <Row className="row-example">
                  <Col md="4" xs="6">
                    <span>.col-6 .col-md-4</span>
                  </Col>
                  <Col md="4" xs="6">
                    <span>.col-6 .col-md-4</span>
                  </Col>
                  <Col md="4" xs="6">
                    <span>.col-6 .col-md-4</span>
                  </Col>
                </Row>

                <Row className="row-example">
                  <Col xs="6">
                    <span>.col-6</span>
                  </Col>
                  <Col xs="6">
                    <span>.col-6</span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Grid;
