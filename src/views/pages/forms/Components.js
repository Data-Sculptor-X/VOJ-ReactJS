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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create DropdownMenu for selecting items
import Select2 from "react-select2-wrapper";
// plugin that creates slider
import Slider from "nouislider";
// react plugin that creates text editor
import ReactQuill from "react-quill";
// javascript plugin that creates nice dropzones for files
import Dropzone from "dropzone";
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
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
// react plugin that creates an input with badges
import TagsInput from "components/TagsInput/TagsInput.js";

Dropzone.autoDiscover = false;

function Components() {
  const [yourName, setyourName] = React.useState(false);
  const [emailAddress, setemailAddress] = React.useState(false);
  const [location, setlocation] = React.useState(false);
  const [password, setpassword] = React.useState(false);
  const [paymentMethos, setpaymentMethos] = React.useState(false);
  const [phoneNumber, setphoneNumber] = React.useState(false);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [tagsinput, setTagsinput] = React.useState([
    "Bucharest",
    "Cluj",
    "Iasi",
    "Timisoara",
    "Piatra Neamt",
  ]);
  const [slider1Value, setSlider1Value] = React.useState("100.00");
  const [slider2Values, setSlider2Values] = React.useState([
    "200.00",
    "400.00",
  ]);
  const [reactQuillText, setReactQuillText] = React.useState("");
  const slider1Ref = React.useRef(null);
  const slider2Ref = React.useRef(null);
  React.useEffect(() => {
    Slider.create(slider1Ref.current, {
      start: [100],
      connect: [true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 },
    }).on("update", function (values, handle) {
      setSlider1Value(values[0]);
    });
    Slider.create(slider2Ref.current, {
      start: [200.0, 400.0],
      connect: [false, true, false],
      step: 0.01,
      range: { min: 100.0, max: 500.0 },
    }).on("update", function (values, handle) {
      setSlider2Values([values[0], values[1]]);
    });
    // this variable is to delete the previous image from the dropzone state
    // it is just to make the HTML DOM a bit better, and keep it light
    let currentSingleFile = undefined;
    // single dropzone file - accepts only images
    new Dropzone(document.getElementById("dropzone-single"), {
      url: "/",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer:
        document.getElementsByClassName("dz-preview-single")[0],
      previewTemplate:
        document.getElementsByClassName("dz-preview-single")[0].innerHTML,
      maxFiles: 1,
      acceptedFiles: "image/*",
      init: function () {
        this.on("addedfile", function (file) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
    // this variable is to delete the previous image from the dropzone state
    // it is just to make the HTML DOM a bit better, and keep it light
    let currentMultipleFile = undefined;
    // multiple dropzone file - accepts any type of file
    new Dropzone(document.getElementById("dropzone-multiple"), {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-multiple"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-multiple")[0]
        .innerHTML,
      maxFiles: null,
      acceptedFiles: null,
      init: function () {
        this.on("addedfile", function (file) {
          if (currentMultipleFile) {
          }
          currentMultipleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-multiple")[0].innerHTML = "";
  }, []);
  const handleReactDatetimeChange = (who, date) => {
    if (
      startDate &&
      who === "endDate" &&
      new Date(startDate._d + "") > new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else if (
      endDate &&
      who === "startDate" &&
      new Date(endDate._d + "") < new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else {
      if (who === "startDate") {
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };
  // this function adds on the day tag of the date picker
  // middle-date className which means that this day will have no border radius
  // start-date className which means that this day will only have left border radius
  // end-date className which means that this day will only have right border radius
  // this way, the selected dates will look nice and will only be rounded at the ends
  const getClassNameReactDatetimeDays = (date) => {
    if (startDate && endDate) {
    }
    if (startDate && endDate && startDate._d + "" !== endDate._d + "") {
      if (
        new Date(endDate._d + "") > new Date(date._d + "") &&
        new Date(startDate._d + "") < new Date(date._d + "")
      ) {
        return " middle-date";
      }
      if (endDate._d + "" === date._d + "") {
        return " end-date";
      }
      if (startDate._d + "" === date._d + "") {
        return " start-date";
      }
    }
    return "";
  };

  return (
    <>
      <SimpleHeader name="Form components" parentName="Forms" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="6">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Input groups</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-merge", {
                              focused: yourName,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fas fa-user" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Your name"
                              type="text"
                              onFocus={(e) => setyourName(true)}
                              onBlur={(e) => setyourName(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-merge", {
                              focused: emailAddress,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fas fa-envelope" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email address"
                              type="email"
                              onFocus={(e) => setemailAddress(true)}
                              onBlur={(e) => setemailAddress(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-merge", {
                              focused: location,
                            })}
                          >
                            <Input
                              placeholder="Location"
                              type="text"
                              onFocus={(e) => setlocation(true)}
                              onBlur={(e) => setlocation(false)}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="fas fa-map-marker" />
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-merge", {
                              focused: password,
                            })}
                          >
                            <Input
                              placeholder="Password"
                              type="password"
                              onFocus={(e) => setpassword(true)}
                              onBlur={(e) => setpassword(false)}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="fas fa-eye" />
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-merge", {
                              focused: paymentMethos,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fas fa-credit-card" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Payment method"
                              type="text"
                              onFocus={(e) => setpaymentMethos(true)}
                              onBlur={(e) => setpaymentMethos(false)}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <small className="font-weight-bold">USD</small>
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-merge", {
                              focused: phoneNumber,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fas fa-globe-americas" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone number"
                              type="text"
                              onFocus={(e) => setphoneNumber(true)}
                              onBlur={(e) => setphoneNumber(false)}
                            />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="fas fa-phone" />
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Dropdowns</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Select2
                      className="form-control"
                      defaultValue="1"
                      options={{
                        placeholder: "Select",
                      }}
                      data={[
                        { id: "1", text: "Alerts" },
                        { id: "2", text: "Badges" },
                        { id: "3", text: "Buttons" },
                        { id: "4", text: "Cards" },
                        { id: "5", text: "Forms" },
                        { id: "6", text: "Modals" },
                      ]}
                    />
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Datepicker</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleDatepicker"
                          >
                            Datepicker
                          </label>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Date Picker Here",
                            }}
                            timeFormat={false}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="input-daterange datepicker align-items-center">
                      <Col xs={12} sm={6}>
                        <label className=" form-control-label">
                          Start date
                        </label>
                        <FormGroup>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Date Picker Here",
                            }}
                            value={startDate}
                            timeFormat={false}
                            onChange={(e) =>
                              handleReactDatetimeChange("startDate", e)
                            }
                            renderDay={(props, currentDate, selectedDate) => {
                              let classes = props.className;
                              classes +=
                                getClassNameReactDatetimeDays(currentDate);
                              return (
                                <td {...props} className={classes}>
                                  {currentDate.date()}
                                </td>
                              );
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={12} sm={6}>
                        <FormGroup>
                          <label className=" form-control-label">
                            End date
                          </label>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Date Picker Here",
                            }}
                            value={endDate}
                            timeFormat={false}
                            onChange={(e) =>
                              handleReactDatetimeChange("endDate", e)
                            }
                            renderDay={(props, currentDate, selectedDate) => {
                              let classes = props.className;
                              classes +=
                                getClassNameReactDatetimeDays(currentDate);
                              return (
                                <td {...props} className={classes}>
                                  {currentDate.date()}
                                </td>
                              );
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Text editor</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div
                      data-quill-placeholder="Quill WYSIWYG"
                      data-toggle="quill"
                    />
                    <ReactQuill
                      value={reactQuillText}
                      onChange={(value) => setReactQuillText(value)}
                      theme="snow"
                      modules={{
                        toolbar: [
                          ["bold", "italic"],
                          ["link", "blockquote", "code", "image"],
                          [
                            {
                              list: "ordered",
                            },
                            {
                              list: "bullet",
                            },
                          ],
                        ],
                      }}
                    />
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg="6">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Tags</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <TagsInput
                      onlyUnique
                      className="bootstrap-tagsinput"
                      onChange={(value) => setTagsinput(value)}
                      value={tagsinput}
                      tagProps={{ className: "tag badge mr-1" }}
                      inputProps={{
                        className: "",
                        placeholder: "",
                      }}
                    />
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Toggle buttons</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <label className="custom-toggle mr-1">
                      <input type="checkbox" />
                      <span className="custom-toggle-slider rounded-circle" />
                    </label>
                    <label className="custom-toggle mr-1">
                      <input defaultChecked type="checkbox" />
                      <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                      />
                    </label>
                    <label className="custom-toggle custom-toggle-default mr-1">
                      <input defaultChecked type="checkbox" />
                      <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                      />
                    </label>
                    <label className="custom-toggle custom-toggle-danger mr-1">
                      <input defaultChecked type="checkbox" />
                      <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                      />
                    </label>
                    <label className="custom-toggle custom-toggle-warning mr-1">
                      <input defaultChecked type="checkbox" />
                      <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                      />
                    </label>
                    <label className="custom-toggle custom-toggle-success mr-1">
                      <input defaultChecked type="checkbox" />
                      <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                      />
                    </label>
                    <label className="custom-toggle custom-toggle-info mr-1">
                      <input defaultChecked type="checkbox" />
                      <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                      />
                    </label>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Sliders</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="input-slider-container">
                      <div className="input-slider" ref={slider1Ref} />
                      <Row className="mt-3">
                        <Col xs="6">
                          <span className="range-slider-value">
                            {slider1Value}
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div className="mt-5">
                      <div ref={slider2Ref} />
                      <Row>
                        <Col xs="6">
                          <span className="range-slider-value value-low">
                            {slider2Values[0]}
                          </span>
                        </Col>
                        <Col className="text-right" xs="6">
                          <span className="range-slider-value value-high">
                            {slider2Values[1]}
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Dropzone</h3>
                </CardHeader>
                <CardBody>
                  <div
                    className="dropzone dropzone-single mb-3"
                    id="dropzone-single"
                  >
                    <div className="fallback">
                      <div className="custom-file">
                        <input
                          className="custom-file-input"
                          id="projectCoverUploads"
                          type="file"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="projectCoverUploads"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                    <div className="dz-preview dz-preview-single">
                      <div className="dz-preview-cover">
                        <img
                          alt="..."
                          className="dz-preview-img"
                          data-dz-thumbnail=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="dropzone dropzone-multiple"
                    id="dropzone-multiple"
                  >
                    <div className="fallback">
                      <div className="custom-file">
                        <input
                          className="custom-file-input"
                          id="customFileUploadMultiple"
                          multiple="multiple"
                          type="file"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFileUploadMultiple"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                    <ListGroup
                      className=" dz-preview dz-preview-multiple list-group-lg"
                      flush
                    >
                      <ListGroupItem className=" px-0">
                        <Row className=" align-items-center">
                          <Col className=" col-auto">
                            <div className=" avatar">
                              <img
                                alt="..."
                                className=" avatar-img rounded"
                                data-dz-thumbnail
                                src="..."
                              />
                            </div>
                          </Col>
                          <div className=" col ml--3">
                            <h4 className=" mb-1" data-dz-name>
                              ...
                            </h4>
                            <p className=" small text-muted mb-0" data-dz-size>
                              ...
                            </p>
                          </div>
                          <Col className=" col-auto">
                            <Button size="sm" color="danger" data-dz-remove>
                              <i className="fas fa-trash" />
                            </Button>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Components;
