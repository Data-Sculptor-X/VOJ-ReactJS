import React, { useState, useEffect } from "react";
import { useLocation, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { generatePrompt } from "store/actions/General/authActions"; // Import API function
import { routers } from "routers";
import classnames from "classnames";
import { fetchChats } from "store/actions/General/authActions";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import { ThreeDots } from "react-loader-spinner";

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
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ChatPage = (props) => {
  console.log(props.chat_data);
  const dispatch = useDispatch();
  const paramData = useParams();
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const sectID = paramData["*"];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchChats(sectID));
  }, [sectID]);

  useEffect(() => {
    setMessages(props.chat_data);
    setLoading(false); // Turn off loading indicator when messages are received
  }, [props.chat_data]);

  const handleInputSubmit = async () => {
    try {
      setLoading(true); // Turn on loading indicator while waiting for API response
      const data = {
        prompt: inputText,
        SectionID: paramData["*"],
      };
      const response = await generatePrompt(data);
      dispatch(fetchChats(sectID));
      setInputText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      style={{
        margin: "0px, 40px",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%" }}>
        {[...messages].reverse().map((message, index) => {
          return (
            <div
              key={index}
              style={{ marginBottom: "20px", marginTop: "50px" }}
            >
              <div
                style={{
                  textAlign: "right",
                  marginBottom: "10px",
                  color: "red",
                }}
              >
                <strong>Don</strong>
              </div>
              <div
                className="user"
                style={{
                  backgroundColor: "#ff4d6d",
                  color: "white",
                  padding: "10px",
                  minWidth:'100px',
                  height:'auto',
                  borderRadius: "18px",
                  maxWidth: "650px", // Adjusted max width to 650px
                  textAlign: "left",
                  wordWrap: "break-word",
                  marginLeft: "auto",
                  fontWeight: "bold",
                  width: "fit-content", // Added width to autofit
                }}
              >
                <ReactMarkdown>{message.ChatQuestion}</ReactMarkdown>
              </div>
              <div
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                  color: "red",
                }}
              >
                <strong>AI Lawyer</strong>
              </div>
              <div
                className="ai"
                style={{
                  backgroundColor: "#fff0f0",
                  padding: "10px",
                  height:'auto',
                  borderRadius: "18px",
                  maxWidth: "650px", // Adjusted max width to 650px
                  minWidth:'100px',
                  textAlign: "left",
                  wordWrap: "break-word",
                  marginRight: "auto",
                  fontWeight: "bold",
                  width: "fit-content", // Added width to autofit
                }}
              >
                <ReactMarkdown>{message.ChatResponse}</ReactMarkdown>
              </div>
            </div>
          );
        })}
        {loading && (
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <ThreeDots color="red" height={50} width={50} />
          </div>
        )}
      </div>
      <div style={{ position: "relative", width: "80%" }}>
        <FormGroup>
          <InputGroup className={classnames("input-group-merge")}>
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInputSubmit();
                }
              }}
              style={{ maxWidth: "900", border: "1px solid red" }}
            />
            <InputGroupAddon
              style={{ border: "3px solid red", marginLeft: "0.5px" }}
              addonType="append"
            >
              <InputGroupText>
                <i
                  onClick={handleInputSubmit}
                  style={{ color: "red" }}
                  className="ni ni-send"
                />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </div>
    </div>
  );
};

function Homepage(props) {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);

  const routes = routers["template"];
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  // toggles collapse between mini sidenav and normal
  const toggleSidenav = (e) => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };
  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

  return (
    <>
      <div className="main-content" ref={mainContentRef}>
        <ChatPage access_token={sessionStorage.access_token} {...props} />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  chat_data: auth.chat_data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllChats: (data) => dispatch(fetchChats(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
