import React, { useState, useEffect } from "react";
import { useLocation, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { generatePrompt } from "store/actions/General/authActions"; // Import API function
import { routers } from "routers";
import classnames from "classnames";
import { fetchChats } from "store/actions/General/authActions";
import { connect } from "react-redux";
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
  console.log(props.chat_data)
  const dispatch =useDispatch()
  const paramData = useParams();
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const sectID= paramData["*"]

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

useEffect(()=>{
  dispatch(fetchChats(sectID))
},[sectID])

useEffect(()=>{
setMessages(props.chat_data)
},[props.chat_data])

  const handleInputSubmit = async () => {
    try {
      const data = {
        prompt:inputText,
        SectionID:paramData["*"],
      }
      const response = await generatePrompt(data);
      dispatch(fetchChats(sectID))

      // console.log(response)
      // const newMessages = [
      //   ...messages,

        
      //   { text: inputText, sender: "user" },
      //   { text: inputText, sender: "user" },
      //   { text: inputText, sender: "user" },
      //   { text: JSON.stringify(response), sender: "AI Lawyer" }, // Convert object to string
      // ];
      // setMessages(newMessages);
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
            }}
          >
       
            <div
              style={{
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              <strong>Don</strong>
            </div>
            <div
              style={{
                backgroundColor:
                 "#f2f2f2" ,
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {message.ChatQuestion}
            </div>
            <div
              style={{
                textAlign: "right",
                marginBottom: "10px",
              }}
            >
              <strong>AI LAYwer</strong>
            </div>
            <div
              style={{
                backgroundColor:
                  "#e6f2ff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {message.ChatResponse}
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

const mapStateToProps =({auth})=>({
  chat_data: auth.chat_data
})
const mapDispatchToProps =(dispatch)=>({
  fetchAllChats:(data)=>dispatch(fetchChats(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);
