import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import { useNavigate } from "react-router-dom";

import User from "assets/user.svg";

import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import { UserProfile } from "store/actions/General/authActions";

function AdminNavbar({ theme, sidenavOpen, toggleSidenav }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [profile_picture, setPFP] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(UserProfile());
        setName(data.name);
        setPFP(data.profile_picture);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const openSearch = () => {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  };
  // function that on mobile devices makes the search close
  const closeSearch = () => {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  };

  return (
    <>
      <Navbar
        className={classnames(
          "navbar-top navbar-expand border-bottom"
          // { "navbar-dark bg-info": theme === "dark" },
          // { "navbar-light bg-secondary": theme === "light" }
        )}
        style={{ backgroundColor: "#ff4d6d" }}
      >
        <Container fluid>
          <Collapse navbar isOpen={true}>
            <Form
              className={classnames(
                "navbar-search form-inline mr-sm-3",
                { "navbar-search-light": theme === "dark" },
                { "navbar-search-dark": theme === "light" }
              )}
            >
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative input-group-merge">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={closeSearch}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </Form>

            <Nav className="align-items-center ml-md-auto" navbar>
              <NavItem className="d-xl-none">
                <div
                  className={classnames(
                    "pr-3 sidenav-toggler",
                    { active: sidenavOpen },
                    { "sidenav-toggler-dark": theme === "dark" }
                  )}
                  onClick={toggleSidenav}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
                </div>
              </NavItem>
              <NavItem className="d-sm-none">
                <NavLink onClick={openSearch}>
                  <i className="ni ni-zoom-split-in" />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-bell-55" style={{ color: "white" }} />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-xl py-0 overflow-hidden"
                  right
                >
                  <div className="px-3 py-3">
                    <h6 className="text-sm text-muted m-0">
                      You have <strong className="text-info">13</strong>{" "}
                      notifications.
                    </h6>
                  </div>

                  <ListGroup flush>
                    <ListGroupItem
                      className="list-group-item-action"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tag="a"
                    >
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <img
                            alt="..."
                            className="avatar rounded-circle"
                            src={
                              profile_picture ||
                              profile_picture ||
                              "https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?rs=1&pid=ImgDetMain"
                            }
                          />
                        </Col>
                        <div className="col ml--2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              {loading ? (
                                <h4 className="mb-0 text-sm">Loading...</h4>
                              ) : (
                                <h4 className="mb-0 text-sm">
                                  {name || "No Name"}
                                </h4>
                              )}
                            </div>
                            <div className="text-right text-muted">
                              <small>2 hrs ago</small>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </p>
                        </div>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      className="list-group-item-action"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tag="a"
                    >
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <img
                            alt="..."
                            className="avatar rounded-circle"
                            src={
                              profile_picture === null ? User : profile_picture
                            }
                          />
                        </Col>
                        <div className="col ml--2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="mb-0 text-sm"></h4>
                            </div>
                            <div className="text-right text-muted">
                              <small>3 hrs ago</small>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            A new issue has been reported for Argon.
                          </p>
                        </div>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      className="list-group-item-action"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tag="a"
                    >
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <img
                            alt="..."
                            className="avatar rounded-circle"
                            src={
                              profile_picture === null ? User : profile_picture
                            }
                          />
                        </Col>
                        <div className="col ml--2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="mb-0 text-sm">
                                <div>
                                  {loading ? (
                                    <h4 className="mb-0 text-sm">Loading...</h4>
                                  ) : (
                                    <h4 className="mb-0 text-sm">
                                      {name || "No Name"}
                                    </h4>
                                  )}
                                </div>
                              </h4>
                            </div>
                            <div className="text-right text-muted">
                              <small>5 hrs ago</small>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            Your posts have been liked a lot.
                          </p>
                        </div>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      className="list-group-item-action"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tag="a"
                    >
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <img
                            alt="..."
                            className="avatar rounded-circle"
                            src={
                              profile_picture === null ? User : profile_picture
                            }
                          />
                        </Col>
                        <div className="col ml--2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              {loading ? (
                                <h4 className="mb-0 text-sm">Loading...</h4>
                              ) : (
                                <h4 className="mb-0 text-sm">
                                  {name || "No Name"}
                                </h4>
                              )}
                            </div>
                            <div className="text-right text-muted">
                              <small>2 hrs ago</small>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </p>
                        </div>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      className="list-group-item-action"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tag="a"
                    >
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <img
                            alt="..."
                            className="avatar rounded-circle"
                            src={
                              profile_picture === null ? User : profile_picture
                            }
                          />
                        </Col>
                        <div className="col ml--2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              {loading ? (
                                <h4 className="mb-0 text-sm">Loading...</h4>
                              ) : (
                                <h4 className="mb-0 text-sm">
                                  {name || "No Name"}
                                </h4>
                              )}
                            </div>
                            <div className="text-right text-muted">
                              <small>3 hrs ago</small>
                            </div>
                          </div>
                          <p className="text-sm mb-0">
                            A new issue has been reported for Argon.
                          </p>
                        </div>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>

                  <DropdownItem
                    className="text-center text-info font-weight-bold py-3"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    View all
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-ungroup" style={{ color: "white" }} />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-lg dropdown-menu-dark bg-default"
                  right
                >
                  <Row className="shortcuts px-4">
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                        <i className="ni ni-calendar-grid-58" />
                      </span>
                      <small>Calendar</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                        <i className="ni ni-email-83" />
                      </span>
                      <small>Email</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                        <i className="ni ni-credit-card" />
                      </span>
                      <small>Payments</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                        <i className="ni ni-books" />
                      </span>
                      <small>Reports</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                        <i className="ni ni-pin-3" />
                      </span>
                      <small>Maps</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                        <i className="ni ni-basket" />
                      </span>
                      <small>Shop</small>
                    </Col>
                  </Row>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="align-items-center ml-auto ml-md-0" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link pr-0" color="" tag="a">
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        src={profile_picture === null ? User : profile_picture}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span
                        className="mb-0 text-sm font-weight-bold"
                        style={{ color: "white" }}
                      >
                        <div>
                          {loading ? (
                            <h4 className="mb-0 text-sm">Loading...</h4>
                          ) : (
                            <h4 className="mb-0 text-sm">
                              {name || "No Name"}
                            </h4>
                          )}
                        </div>
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/login");
                    }}
                  >
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: true,
  theme: "dark",
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default AdminNavbar;
