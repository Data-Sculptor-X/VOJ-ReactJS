import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AdminFooter() {
  return (
    <>
      <Container fluid>
        <footer className="footer pt-0">
          <Row className="align-items-center justify-content-lg-between">
            {/* <Col lg="6">
              <div className="copyright text-center text-lg-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.creative-tim.com?ref=adpr-admin-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </div>
            </Col>
            <Col lg="6">
              <Nav className="nav-footer justify-content-center justify-content-lg-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adpr-admin-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adpr-admin-footer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adpr-admin-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/license?ref=adpr-admin-footer"
                    target="_blank"
                  >
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col> */}

            <Col xl="12">
              <div className="copyright text-center text-xl-left text-muted" style={{fontSize:'9px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                
              <a style={{color:'red', marginBottom:'12px',marginTop:'9px', fontSize:'12px'}}
                  className="font-weight-bold ml-1"
                  // href="https://www.creative-tim.com?ref=adpr-auth-footer"
                  // target="_blank"
                >
                  Voice of Justice
                </a>
                CopyRight © {new Date().getFullYear()}{" "}
                
              </div>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default AdminFooter;
