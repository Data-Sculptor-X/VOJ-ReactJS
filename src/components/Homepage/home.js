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

// react library for routing
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// core components

import Sidebar from "components/Sidebar/Sidebar.js";
// import routes from "routes.js";
import { routers } from "routers.js";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ChatPage = () => {
  const [inputText, setInputText] = useState("");

  const chatStyle = {
    fontFamily: "Alice, serif",
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.5",
    width: "calc(100% - 260px)",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    minHeight: "100vh",
    position: "relative"
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputSubmit = () => {
    console.log("Processing input:", inputText);
    setInputText("");
  };

  return (
    <div style={{ backgroundColor: "ghostwhite", minHeight: "100vh" }}>
      <div style={chatStyle}>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ textAlign: "left", marginBottom: "10px" }}>
            <strong>User:</strong>
          </div>
          <div style={{ backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "10px" }}>
            Hello, how can I help you today?
          </div>
        </div>
        <div style={{ marginBottom: "20px", textAlign: "right" }}>
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <strong>AI Lawyer:</strong>
          </div>
          <div style={{ backgroundColor: "#e6f2ff", padding: "10px", borderRadius: "10px" }}>
            Hi there! I'm here to assist you with any questions you may have.
          </div>
        </div>
      </div>
      <div style={{ position: "relative"}}>
        <div style={{ position: "relative", width: "75%", alignSelf: "center", alignItems:"center" }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "25px",
              border: "1px solid #ccc",
              marginBottom: "20px",
              fontSize: "16px"
            }}
          />
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-100%)",
              cursor: "pointer",
              fontSize: "20px",
              color: "#666",
            }}
            onClick={handleInputSubmit}
          />
        </div>
      </div>
    </div>
  );
};





function Homepage() {
  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
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
        <ChatPage/>
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

export default Homepage;
