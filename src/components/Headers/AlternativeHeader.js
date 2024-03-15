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
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function AlternativeHeader() {
  return (
    <>
      <div className="header pb-6">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 d-inline-block mb-0">Alternative</h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Dashboards
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    Alternative
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="text-right" lg="6" xs="5">
                <Button
                  className="btn-neutral"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  New
                </Button>
                <Button
                  className="btn-neutral"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Filters
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AlternativeHeader;
