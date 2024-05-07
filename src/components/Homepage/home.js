import React, { useState, useEffect } from "react";
import { useLocation, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { generatePrompt } from "store/actions/General/authActions";
import { routers } from "routers";
import { fetchChats, UserProfile } from "store/actions/General/authActions";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSpeechSynthesis } from "react-speech-kit"; // Import useSpeechSynthesis
import Logo from "assets/logo.png";
import Don from "assets/don.jpeg";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";

const ChatPage = (props) => {
  const dispatch = useDispatch();
  const paramData = useParams();
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [donSpeakingIndex, setDonSpeakingIndex] = useState(null);
  const [aiSpeakingIndex, setAISpeakingIndex] = useState(null);
  const sectID = paramData["*"];

  const recognition = new window.webkitSpeechRecognition(); // Initialize SpeechRecognition
  recognition.lang = "en-US"; // Set language

  const { speak, cancel } = useSpeechSynthesis(); // useSpeechSynthesis hook

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchChats(sectID));
  }, [sectID]);

  useEffect(() => {
    setMessages(props.chat_data);
    setLoading(false);
  }, [props.chat_data]);

  useEffect(() => {
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setInputText(speechToText);
    };
  }, [recognition]);

  const handleInputSubmit = async () => {
    try {
      setLoading(true);
      let data = {
        prompt: inputText,
      };
      if (paramData["*"] != "new") {
        if (props.section_id != "new") {
          data = {
            prompt: inputText,
            SectionID: props.section_id,
          };
        } else {
          data = {
            prompt: inputText,
            SectionID: paramData["*"],
          };
        }
      }
      const response = dispatch(generatePrompt(data));
      console.log(response);
      setInputText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleInputSubmit();
    }
  };

  const toggleListening = () => {
    if (!isListening) {
      recognition.start(); // start listening
    } else {
      recognition.stop(); // stop listening
    }
    setIsListening(!isListening);
  };

  const handleDonSpeak = (text, index) => {
    if (donSpeakingIndex === index) {
      cancel();
      setDonSpeakingIndex(null);
    } else {
      speak({ text });
      setDonSpeakingIndex(index);
    }
  };

  const handleAISpeak = (text, index) => {
    if (aiSpeakingIndex === index) {
      cancel();
      setAISpeakingIndex(null);
    } else {
      speak({ text, lang: "en-GB" });
      setAISpeakingIndex(index);
    }
  };

  return (
    <div
      style={{
        margin: "0px 40px",
        backgroundColor: "#ffffff",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <div style={{ width: "80%", marginBottom: "60px", margin: "0 auto" }}>
        {[...messages]?.reverse()?.map((message, index) => {
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
                <FontAwesomeIcon
                  icon={faVolumeUp}
                  style={{
                    marginRight: "10px",
                    cursor: "pointer",
                    color: donSpeakingIndex === index ? "#ff4d6d" : "grey",
                  }}
                  onClick={() => handleDonSpeak(message.ChatQuestion, index)}
                />
                <strong>Don</strong>

                <img
                  src={Don}
                  alt="Don"
                  style={{
                    height: "30px",
                    marginLeft: "10px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                className="user"
                style={{
                  backgroundColor: "#ff4d6d",
                  color: "white",
                  padding: "10px",
                  minWidth: "100px",
                  height: "auto",
                  borderRadius: "18px",
                  maxWidth: "650px",
                  textAlign: "left",
                  wordWrap: "break-word",
                  marginLeft: "auto",
                  fontWeight: "bold",
                  width: "fit-content",
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
                <img
                  src={Logo}
                  alt="Don"
                  style={{ height: "30px", marginRight: "10px" }}
                />
                <strong>AI Lawyer</strong>
                <FontAwesomeIcon
                  icon={faVolumeUp}
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: aiSpeakingIndex === index ? "#ff4d6d" : "grey",
                  }}
                  onClick={() => handleAISpeak(message.ChatResponse, index)}
                />
              </div>
              <div
                className="ai"
                style={{
                  backgroundColor: "#fff0f0",
                  padding: "10px",
                  height: "auto",
                  borderRadius: "18px",
                  maxWidth: "650px",
                  minWidth: "100px",
                  textAlign: "left",
                  wordWrap: "break-word",
                  marginRight: "auto",
                  fontWeight: "bold",
                  width: "fit-content",
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
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "20px",
        }}
      >
        <Form style={{ margin: "0 auto", position: "relative" }}>
          <FormGroup>
            <InputGroup style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{ maxWidth: "960px", width: "100%", display: "flex" }}
              >
                <FontAwesomeIcon
                  icon={faMicrophone}
                  size="2x"
                  style={{
                    color: isListening ? "#ff4d6d" : "#000",
                    cursor: "pointer",
                    marginTop: "7px",
                    marginRight: "15px",
                  }}
                  onClick={toggleListening}
                />
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  style={{
                    border: "1px solid red",
                    flex: 1,
                    paddingLeft: "50px",
                  
                  }}
                />
                <InputGroupAddon addonType="append">
                  <Button color="danger" onClick={handleInputSubmit}>
                    Send
                  </Button>
                </InputGroupAddon>
              </div>
            </InputGroup>
          </FormGroup>
        </Form>
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
      <div style={{ paddingBottom: "100px" }} />{" "}
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  chat_data: auth.chat_data,
  section_id: auth.section_id,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllChats: (data) => dispatch(fetchChats(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
