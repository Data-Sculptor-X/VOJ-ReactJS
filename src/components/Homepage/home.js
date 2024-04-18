import React, { useState, useEffect } from "react";
import { useLocation, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { generatePrompt } from "store/actions/General/authActions"; // Import API function
import { routers } from "routers";
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
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
const ChatPage = ({ access_token }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputSubmit = async () => {
    try {
      const response = await generatePrompt(inputText, access_token);
      console.log(response)
      const newMessages = [
        ...messages,
        { text: inputText, sender: "user" },
        { text: JSON.stringify(response), sender: "AI Lawyer" }, // Convert object to string
      ];
      setMessages(newMessages);
      setInputText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };  


  return (
    <div style={{ margin:"0px, 40px" ,backgroundColor: "ghostwhite", minHeight: "100vh"}}>
      <div style={{}}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              textAlign: message.sender === "user" ? "left" : "right",
            }}
          >
            <div
              style={{
                textAlign: message.sender === "user" ? "left" : "right",
                marginBottom: "10px",
              }}
            >
              <strong>{message.sender}:</strong>
            </div>
            <div
              style={{
                backgroundColor:
                  message.sender === "user" ? "#f2f2f2" : "#e6f2ff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        
        <FormGroup>
          <InputGroup
            className={classnames("input-group-merge", {
              // focused: location,
            })}
          >
            <Input
              // placeholder="Location"
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInputSubmit();
                }
              }}
              style={{ maxWidth: "750px" }}
              // onFocus={(e) => setlocation(true)}
              // onBlur={(e) => setlocation(false)}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i onClick={handleInputSubmit} className="ni ni-send" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </div>
    </div>
  );
};

function Homepage() {
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
        <ChatPage access_token={sessionStorage.access_token} />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

export default Homepage;
