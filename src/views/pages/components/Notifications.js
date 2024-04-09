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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Notifications() {
  const [focusedEmail, setFocusedEmail] = React.useState(false);
  const [focusedPassword, setFocusedPassword] = React.useState(false);
  const [defaultModal, setdefaultModal] = React.useState(false);
  const [notificationModal, setnotificationModal] = React.useState(false);
  const [formModal, setformModal] = React.useState(false);
  const [alert, setalert] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const notify = (type) => {
    let options = {
      place: "tc",
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {" "}
            Bootstrap Notify
          </span>
          <span data-notify="message">
            Turning standard Bootstrap alerts into awesome notifications
          </span>
        </div>
      ),
      type: type,
      icon: "ni ni-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  const basicAlert = () => {
    setalert(
      <ReactBSAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        btnSize=""
        text="A few words about this sweet alert ..."
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const infoAlert = () => {
    setalert(
      <ReactBSAlert
        info
        style={{ display: "block", marginTop: "-100px" }}
        title="Info"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="info"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const successAlert = () => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Success"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="success"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const warningAlert = () => {
    setalert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Warning"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };
  const questionAlert = () => {
    setalert(
      <ReactBSAlert
        custom
        style={{ display: "block", marginTop: "-100px" }}
        title="Question"
        customIcon={
          <div
            className="swal2-icon swal2-question swal2-animate-question-icon"
            style={{ display: "flex" }}
          >
            <span className="swal2-icon-text">?</span>
          </div>
        }
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="default"
        confirmBtnText="Ok"
        btnSize=""
      >
        A few words about this sweet alert ...
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <div className="rna-wrapper">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <SimpleHeader name="Notifications" parentName="Components" />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper" lg="8">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Alerts</h3>
              </CardHeader>
              <CardBody>
                <UncontrolledAlert className="alert-default">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Default!</strong> This is a default alert—check it
                    out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="primary">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Primary!</strong> This is a primary alert—check it
                    out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="secondary">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Secondary!</strong> This is a secondary alert—check
                    it out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Info!</strong> This is a info alert—check it out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="success">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Success!</strong> This is a success alert—check it
                    out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="danger">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Danger!</strong> This is a danger alert—check it
                    out!
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="warning">
                  <span className="alert-icon">
                    <i className="ni ni-like-2" />
                  </span>
                  <span className="alert-text ml-1">
                    <strong>Warning!</strong> This is a warning alert—check it
                    out!
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Modals</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="4">
                    <Button
                      block
                      className="mb-3"
                      color="primary"
                      onClick={() => setdefaultModal(true)}
                    >
                      Default
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={defaultModal}
                      toggle={() => setdefaultModal(false)}
                    >
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                          Type your modal title
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => setdefaultModal(false)}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia. It is a
                          paradisematic country, in which roasted parts of
                          sentences fly into your mouth.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Button color="primary" type="button">
                          Save changes
                        </Button>
                        <Button
                          className="ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => setdefaultModal(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>
                  <Col md="4">
                    <Button
                      block
                      className="mb-3"
                      color="warning"
                      onClick={() => setnotificationModal(true)}
                    >
                      Notification
                    </Button>
                    <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-danger"
                      isOpen={notificationModal}
                      toggle={() => setnotificationModal(false)}
                    >
                      <div className="modal-header">
                        <h6
                          className="modal-title"
                          id="modal-title-notification"
                        >
                          Your attention is required
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => setnotificationModal(false)}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="py-3 text-center">
                          <i className="ni ni-bell-55 ni-3x" />
                          <h4 className="heading mt-4">
                            You should read this!
                          </h4>
                          <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <Button
                          className="btn-white"
                          color="default"
                          type="button"
                        >
                          Ok, Got it
                        </Button>
                        <Button
                          className="text-white ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => setnotificationModal(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>
                  <Col md="4">
                    <Button
                      block
                      color="default"
                      onClick={() => setformModal(true)}
                    >
                      Form
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      size="sm"
                      isOpen={formModal}
                      toggle={() => setformModal(false)}
                    >
                      <div className="modal-body p-0">
                        <Card className="bg-secondary border-0 mb-0">
                          <CardHeader className="bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-3">
                              <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/github.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </Button>
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/google.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                            </div>
                            <Form role="form">
                              <FormGroup
                                className={classnames("mb-3", {
                                  focused: focusedEmail,
                                })}
                              >
                                <InputGroup className="input-group-merge input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Email"
                                    type="email"
                                    onFocus={() => setFocusedEmail(true)}
                                    onBlur={() => setFocusedEmail(false)}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup
                                className={classnames({
                                  focused: focusedPassword,
                                })}
                              >
                                <InputGroup className="input-group-merge input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    onFocus={() => setFocusedPassword(true)}
                                    onBlur={() => setFocusedPassword(false)}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin"
                                >
                                  <span className="text-muted">
                                    Remember me
                                  </span>
                                </label>
                              </div>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="primary"
                                  type="button"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Notifications</h3>
              </CardHeader>
              <CardBody>
                <Button color="default" onClick={() => notify("default")}>
                  Default
                </Button>
                <Button color="info" onClick={() => notify("info")}>
                  Info
                </Button>
                <Button color="success" onClick={() => notify("success")}>
                  Success
                </Button>
                <Button color="warning" onClick={() => notify("warning")}>
                  Warning
                </Button>
                <Button color="danger" onClick={() => notify("danger")}>
                  Danger
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="mb-0">Sweet alerts</h3>
              </CardHeader>
              <CardBody>
                <Button color="primary" onClick={basicAlert}>
                  Basic alert
                </Button>
                <Button color="info" onClick={infoAlert}>
                  Info alert
                </Button>
                <Button color="success" onClick={successAlert}>
                  Success alert
                </Button>
                <Button color="warning" onClick={warningAlert}>
                  Warning alert
                </Button>
                <Button color="default" onClick={questionAlert}>
                  Question
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Notifications;
