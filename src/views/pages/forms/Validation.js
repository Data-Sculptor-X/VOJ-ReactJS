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
// reactstrap components
import {
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
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Validation() {
  const [focused, setFocused] = React.useState(false);
  const [firstName, setfirstName] = React.useState("Mark");
  const [firstNameState, setfirstNameState] = React.useState(null);
  const [lastName, setlastName] = React.useState("Otto");
  const [lastNameState, setlastNameState] = React.useState(null);
  const [username, setusername] = React.useState("");
  const [usernameState, setusernameState] = React.useState(null);
  const [city, setcity] = React.useState("");
  const [cityState, setcityState] = React.useState(null);
  const [state, setstate] = React.useState("");
  const [stateState, setstateState] = React.useState(null);
  const [zip, setzip] = React.useState("");
  const [zipState, setzipState] = React.useState(null);
  const [checkbox, setcheckbox] = React.useState(false);
  const [checkboxState, setcheckboxState] = React.useState(null);
  const validateCustomStylesForm = () => {
    if (firstName === "") {
      setfirstNameState("invalid");
    } else {
      setfirstNameState("valid");
    }
    if (lastName === "") {
      setlastNameState("invalid");
    } else {
      setlastNameState("valid");
    }
    if (username === "") {
      setusernameState("invalid");
    } else {
      setusernameState("valid");
    }
    if (city === "") {
      setcityState("invalid");
    } else {
      setcityState("valid");
    }
    if (state === "") {
      setstateState("invalid");
    } else {
      setstateState("valid");
    }
    if (zip === "") {
      setzipState("invalid");
    } else {
      setzipState("valid");
    }
    if (checkbox === false) {
      setcheckboxState("invalid");
    } else {
      setcheckboxState("valid");
    }
  };
  return (
    <>
      <SimpleHeader name="Form validation" parentName="Forms" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Custom styles</h3>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="8">
                      <p className="mb-0">
                        For custom form validation messages, you’ll need to add
                        the novalidate boolean attribute to your{" "}
                        <code>{`<form>`}</code>. This disables the browser
                        default feedback tooltips, but still provides access to
                        the form validation APIs in JavaScript. <br />
                        <br />
                        When attempting to submit, you’ll see the{" "}
                        <code>:invalid</code> and <code>:valid</code> styles
                        applied to your form controls.
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  <Form className="needs-validation" noValidate>
                    <div className="form-row">
                      <Col className="mb-3" md="4">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom01"
                        >
                          First name
                        </label>
                        <Input
                          defaultValue="Mark"
                          id="validationCustom01"
                          placeholder="First name"
                          type="text"
                          valid={firstNameState === "valid"}
                          invalid={firstNameState === "invalid"}
                          onChange={(e) => {
                            setfirstName(e.target.value);
                            if (e.target.value === "") {
                              setfirstNameState("invalid");
                            } else {
                              setfirstNameState("valid");
                            }
                          }}
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </Col>
                      <Col className="mb-3" md="4">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom02"
                        >
                          Last name
                        </label>
                        <Input
                          defaultValue="Otto"
                          id="validationCustom02"
                          placeholder="Last name"
                          type="text"
                          valid={lastNameState === "valid"}
                          invalid={lastNameState === "invalid"}
                          onChange={(e) => {
                            setlastName(e.target.value);
                            if (e.target.value === "") {
                              setlastNameState("invalid");
                            } else {
                              setlastNameState("valid");
                            }
                          }}
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </Col>
                      <Col className="mb-3" md="4">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustomUsername"
                        >
                          Username
                        </label>
                        <Input
                          aria-describedby="inputGroupPrepend"
                          id="validationCustomUsername"
                          placeholder="Username"
                          type="text"
                          valid={usernameState === "valid"}
                          invalid={usernameState === "invalid"}
                          onChange={(e) => {
                            setusername(e.target.value);
                            if (e.target.value === "") {
                              setusernameState("invalid");
                            } else {
                              setusernameState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </Col>
                    </div>
                    <div className="form-row">
                      <Col className="mb-3" md="6">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom03"
                        >
                          City
                        </label>
                        <Input
                          id="validationCustom03"
                          placeholder="City"
                          type="text"
                          valid={cityState === "valid"}
                          invalid={cityState === "invalid"}
                          onChange={(e) => {
                            setcity(e.target.value);
                            if (e.target.value === "") {
                              setcityState("invalid");
                            } else {
                              setcityState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </Col>
                      <Col className="mb-3" md="3">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom04"
                        >
                          State
                        </label>
                        <Input
                          id="validationCustom04"
                          placeholder="State"
                          type="text"
                          valid={stateState === "valid"}
                          invalid={stateState === "invalid"}
                          onChange={(e) => {
                            setstate(e.target.value);
                            if (e.target.value === "") {
                              setstateState("invalid");
                            } else {
                              setstateState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </Col>
                      <Col className="mb-3" md="3">
                        <label
                          className="form-control-label"
                          htmlFor="validationCustom05"
                        >
                          Zip
                        </label>
                        <Input
                          id="validationCustom05"
                          placeholder="Zip"
                          type="text"
                          valid={zipState === "valid"}
                          invalid={zipState === "invalid"}
                          onChange={(e) => {
                            setzip(e.target.value);
                            if (e.target.value === "") {
                              setzipState("invalid");
                            } else {
                              setzipState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </Col>
                    </div>
                    <FormGroup>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          defaultValue=""
                          id="invalidCheck"
                          type="checkbox"
                          valid={(checkboxState === "valid").toString()}
                          invalid={(checkboxState === "invalid").toString()}
                          onChange={(e) => {
                            setcheckbox(e.target.value);
                            if (e.target.value === "") {
                              setcheckboxState("invalid");
                            } else {
                              setcheckboxState("valid");
                            }
                          }}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="invalidCheck"
                        >
                          Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </FormGroup>
                    <Button
                      color="primary"
                      type="button"
                      onClick={validateCustomStylesForm}
                    >
                      Submit form
                    </Button>
                  </Form>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="mb-0">Browser defaults</h3>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col lg="8">
                      <p className="mb-0">
                        Not interested in custom validation feedback messages or
                        writing JavaScript to change form behaviors? All good,
                        you can use the browser defaults. Try submitting the
                        form below. Depending on your browser and OS, you’ll see
                        a slightly different style of feedback. <br />
                        <br />
                        While these feedback styles cannot be styled with CSS,
                        you can still customize the feedback text through
                        JavaScript.
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  <Form>
                    <div className="form-row">
                      <Col className="mb-3" md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="validationDefault01"
                          >
                            First name
                          </label>
                          <Input
                            defaultValue="Mark"
                            id="validationDefault01"
                            placeholder="First name"
                            required
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="validationDefault02"
                          >
                            Last name
                          </label>
                          <Input
                            defaultValue="Otto"
                            id="validationDefault02"
                            placeholder="Last name"
                            required
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="4">
                        <FormGroup
                          className={classnames({
                            focused: focused,
                          })}
                        >
                          <label
                            className="form-control-label"
                            htmlFor="validationDefaultUsername"
                          >
                            Username
                          </label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText id="inputGroupPrepend2">
                                @
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-describedby="inputGroupPrepend2"
                              id="validationDefaultUsername"
                              placeholder="Username"
                              required
                              type="text"
                              onFocus={() => setFocused(true)}
                              onBlur={() => setFocused(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </div>
                    <div className="form-row">
                      <Col className="mb-3" md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="validationDefault03"
                          >
                            City
                          </label>
                          <Input
                            id="validationDefault03"
                            placeholder="City"
                            required
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="validationDefault04"
                          >
                            State
                          </label>
                          <Input
                            id="validationDefault04"
                            placeholder="State"
                            required
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="validationDefault05"
                          >
                            Zip
                          </label>
                          <Input
                            id="validationDefault05"
                            placeholder="Zip"
                            required
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </div>
                    <FormGroup>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          defaultValue=""
                          id="invalidCheck2"
                          required
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="invalidCheck2"
                        >
                          Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </Form>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="mb-0">Server side</h3>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col lg="8">
                      <p className="mb-0">
                        We recommend using client side validation, but in case
                        you require server side, you can indicate invalid and
                        valid form fields with <code>.is-invalid</code> and{" "}
                        <code>.is-valid</code>. Note that{" "}
                        <code>.invalid-feedback</code> is also supported with
                        these classes.
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  <Form>
                    <div className="form-row">
                      <Col className="mb-3" md="4">
                        <FormGroup className="has-success">
                          <label
                            className="form-control-label"
                            htmlFor="validationServer01"
                          >
                            First name
                          </label>
                          <Input
                            className="is-valid"
                            defaultValue="Mark"
                            id="validationServer01"
                            placeholder="First name"
                            required
                            type="text"
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="4">
                        <FormGroup className="has-success">
                          <label
                            className="form-control-label"
                            htmlFor="validationServer02"
                          >
                            Last name
                          </label>
                          <Input
                            className="is-valid"
                            defaultValue="Otto"
                            id="validationServer02"
                            placeholder="Last name"
                            required
                            type="text"
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="4">
                        <FormGroup className="has-danger">
                          <label
                            className="form-control-label"
                            htmlFor="validationServerUsername"
                          >
                            Username
                          </label>
                          <Input
                            aria-describedby="inputGroupPrepend3"
                            className="is-invalid"
                            id="validationServerUsername"
                            placeholder="Username"
                            required
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </div>
                    <div className="form-row">
                      <Col className="mb-3" md="6">
                        <FormGroup className="has-danger">
                          <label
                            className="form-control-label"
                            htmlFor="validationServer03"
                          >
                            City
                          </label>
                          <Input
                            className="is-invalid"
                            id="validationServer03"
                            placeholder="City"
                            required
                            type="text"
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="3">
                        <FormGroup className="has-danger">
                          <label
                            className="form-control-label"
                            htmlFor="validationServer04"
                          >
                            State
                          </label>
                          <Input
                            className="is-invalid"
                            id="validationServer04"
                            placeholder="State"
                            required
                            type="text"
                          />
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </FormGroup>
                      </Col>
                      <Col className="mb-3" md="3">
                        <FormGroup className="has-danger">
                          <label
                            className="form-control-label"
                            htmlFor="validationServer05"
                          >
                            Zip
                          </label>
                          <Input
                            className="is-invalid"
                            id="validationServer05"
                            placeholder="Zip"
                            required
                            type="text"
                          />
                          <div className="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                        </FormGroup>
                      </Col>
                    </div>
                    <FormGroup className="has-danger">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input is-invalid"
                          defaultValue=""
                          id="invalidCheck3"
                          required
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="invalidCheck3"
                        >
                          Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Validation;
