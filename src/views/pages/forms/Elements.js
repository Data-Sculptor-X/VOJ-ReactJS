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
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Elements() {
  return (
    <>
      <SimpleHeader name="Form elements" parentName="Forms" />
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h3 className="mb-0">Form group in grid</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example3cols1Input"
                  >
                    One of three cols
                  </label>
                  <Input
                    id="example3cols1Input"
                    placeholder="One of three cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example3cols2Input"
                  >
                    One of three cols
                  </label>
                  <Input
                    id="example3cols2Input"
                    placeholder="One of three cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example3cols3Input"
                  >
                    One of three cols
                  </label>
                  <Input
                    id="example3cols3Input"
                    placeholder="One of three cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example4cols1Input"
                  >
                    One of four cols
                  </label>
                  <Input
                    id="example4cols1Input"
                    placeholder="One of four cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="3" sm="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example4cols2Input"
                  >
                    One of four cols
                  </label>
                  <Input
                    id="example4cols2Input"
                    placeholder="One of four cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="3" sm="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example4cols3Input"
                  >
                    One of four cols
                  </label>
                  <Input
                    id="example4cols3Input"
                    placeholder="One of four cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="3" sm="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example5cols3Input"
                  >
                    One of four cols
                  </label>
                  <Input
                    id="example5cols3Input"
                    placeholder="One of four cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example2cols1Input"
                  >
                    One of two cols
                  </label>
                  <Input
                    id="example2cols1Input"
                    placeholder="One of two cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="example2cols2Input"
                  >
                    One of two cols
                  </label>
                  <Input
                    id="example2cols2Input"
                    placeholder="One of two cols"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row>
          <Col lg="6">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Form controls</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Email address
                      </label>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Example select
                      </label>
                      <Input id="exampleFormControlSelect1" type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect2"
                      >
                        Example multiple select
                      </label>
                      <Input
                        id="exampleFormControlSelect2"
                        multiple="multiple"
                        type="select"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Example textarea
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="3"
                        type="textarea"
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">HTML5 inputs</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-text-input"
                        md="2"
                      >
                        Text
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="John Snow"
                          id="example-text-input"
                          type="text"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-search-input"
                        md="2"
                      >
                        Search
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="Tell me your secret ..."
                          id="example-search-input"
                          type="search"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-email-input"
                        md="2"
                      >
                        Email
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="argon@example.com"
                          id="example-email-input"
                          type="email"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-url-input"
                        md="2"
                      >
                        URL
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="https://www.creative-tim.com"
                          id="example-url-input"
                          type="url"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-tel-input"
                        md="2"
                      >
                        Phone
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="40-(770)-888-444"
                          id="example-tel-input"
                          type="tel"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-password-input"
                        md="2"
                      >
                        Password
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="password"
                          id="example-password-input"
                          type="password"
                          autoComplete="off"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-number-input"
                        md="2"
                      >
                        Number
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="23"
                          id="example-number-input"
                          type="number"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-datetime-local-input"
                        md="2"
                      >
                        Datetime
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue={
                            new Date().getFullYear() + "-11-23T10:30:00"
                          }
                          id="example-datetime-local-input"
                          type="datetime-local"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-date-input"
                        md="2"
                      >
                        Date
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue={new Date().getFullYear() + "-11-23"}
                          id="example-date-input"
                          type="date"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-month-input"
                        md="2"
                      >
                        Month
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue={new Date().getFullYear() + "-11"}
                          id="example-month-input"
                          type="month"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-week-input"
                        md="2"
                      >
                        Week
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue={new Date().getFullYear() + "-W23"}
                          id="example-week-input"
                          type="week"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-time-input"
                        md="2"
                      >
                        Time
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="10:30:00"
                          id="example-time-input"
                          type="time"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                        className="form-control-label"
                        htmlFor="example-color-input"
                        md="2"
                      >
                        Color
                      </Label>
                      <Col md="10">
                        <Input
                          defaultValue="#5e72e4"
                          id="example-color-input"
                          type="color"
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Sizes</h3>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <label className="form-control-label">Large input</label>
                    <Input
                      className="form-control-lg"
                      placeholder=".form-control-lg"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Default input</label>
                    <Input placeholder="Default input" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Small input</label>
                    <Input
                      className="form-control-sm"
                      placeholder=".form-control-sm"
                      type="text"
                    />
                  </FormGroup>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Text inputs</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea2"
                      >
                        Basic textarea
                      </label>
                      <Input
                        id="exampleFormControlTextarea2"
                        rows="3"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea3"
                      >
                        Unresizable textarea
                      </label>
                      <Input
                        id="exampleFormControlTextarea3"
                        resize="none"
                        rows="3"
                        type="textarea"
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Select</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect3"
                      >
                        Basic select
                      </label>
                      <Input id="exampleFormControlSelect3" type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect5"
                      >
                        Basic select
                      </label>
                      <Input
                        disabled
                        id="exampleFormControlSelect5"
                        type="select"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect6"
                      >
                        Multiple select
                      </label>
                      <Input
                        id="exampleFormControlSelect6"
                        multiple="multiple"
                        type="select"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect4"
                      >
                        Disabled multiple select
                      </label>
                      <Input
                        disabled
                        id="exampleFormControlSelect4"
                        multiple="multiple"
                        type="select"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">File browser</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="custom-file">
                      <input
                        className="custom-file-input"
                        id="customFileLang"
                        lang="en"
                        type="file"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="customFileLang"
                      >
                        Select file
                      </label>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Checkboxes and radios</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Unchecked
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="customCheck2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck2"
                          >
                            Checked
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            disabled
                            id="customCheck3"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck3"
                          >
                            Disabled Unchecked
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            disabled
                            id="customCheck4"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck4"
                          >
                            Disabled Checked
                          </label>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="customRadio5"
                            name="custom-radio-1"
                            type="radio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio5"
                          >
                            Unchecked
                          </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="customRadio6"
                            name="custom-radio-1"
                            type="radio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio6"
                          >
                            Checked
                          </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            disabled
                            id="customRadio7"
                            name="custom-radio-3"
                            type="radio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio7"
                          >
                            Disabled unchecked
                          </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            disabled
                            id="customRadio8"
                            name="custom-radio-4"
                            type="radio"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio8"
                          >
                            Disabled checkbox
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Elements;
