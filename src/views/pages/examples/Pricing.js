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
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";

function Pricing() {
  return (
    <>
      <AuthHeader title="Choose the best plan for your business" lead="" />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <Card className="card-pricing border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-info py-3 mb-0">
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
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">Complete documentation</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-pen-fancy" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">2GB cloud storage</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="info" type="button">
                    Start free trial
                  </Button>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
              <Card className="card-pricing bg-gradient-success zoom-in shadow-lg rounded border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-white py-3 mb-0">
                    Alpha pack
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-7">
                  <div className="display-1 text-white">$199</div>
                  <span className="text-white">per application</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-white">
                            Complete documentation
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-pen-fancy" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-white">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-white">
                            2GB cloud storage
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="secondary" type="button">
                    Start free trial
                  </Button>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact sales
                  </a>
                </CardFooter>
              </Card>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-lg-center px-3 mt-5">
          <div>
            <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-building text-primary" />
            </div>
          </div>
          <Col lg="6">
            <p className="text-white">
              <strong>The Arctic Ocean</strong> freezes every winter and much of
              the sea-ice then thaws every summer, and that process will
              continue whatever.
            </p>
          </Col>
        </div>
        <Row className="row-grid justify-content-center">
          <Col lg="10">
            <Table className="table-dark mt-5" responsive>
              <thead>
                <tr>
                  <th className="px-0 bg-transparent" scope="col">
                    <span className="text-light font-weight-700">Features</span>
                  </th>
                  <th className="text-center bg-transparent" scope="col">
                    Bravo Pack
                  </th>
                  <th className="text-center bg-transparent" scope="col">
                    Alpha Pack
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-0">IMAP/POP Support</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Email Forwarding</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Active Sync</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Multiple domain hosting</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <span className="text-sm text-light">
                      Limited to 1 domain only
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Additional storage upgrade</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">30MB Attachment Limit</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="px-0">Password protected / Expiry links</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="px-0">Unlimited Custom Apps</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">-</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
