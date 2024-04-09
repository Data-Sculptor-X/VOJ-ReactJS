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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function AuthHeader({ title, lead }) {
  return (
    <>
      <div className="header bg-gradient-info py-7 py-lg-8 pt-lg-9">
        <Container>
          <div className="header-body text-center mb-7">
            <Row className="justify-content-center">
              <Col className="px-5" lg="6" md="8" xl="5">
                {title ? <h1 className="text-white">{title}</h1> : null}
                {lead ? <p className="text-lead text-white">{lead}</p> : null}
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

AuthHeader.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
};

export default AuthHeader;
