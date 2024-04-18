<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Homepage from "components/Homepage/home";
import { fetchAllChats } from "store/actions/General/authActions";
import { routers } from "routers.js";

export function fetchSectionData(setSectionData) {
  return async () => {
    try {
      const data = await fetchAllChats();
      if (data && data.length > 0) {
        const truncatedData = data.slice(0, 5); // Limit to recent 5 sections
        const newSectionData = truncatedData.map((item) => ({
          SectionID: item.SectionID,
          SectionName: item.SectionName,
          path: `/${item.SectionID}`,
          component: <Homepage />,
          layout: "/voj",
        }));
        setSectionData(newSectionData);
        console.log(newSectionData);
      }
    } catch (error) {
      console.error("Error fetching section data:", error);
    }
  };
}

function MasterAdmin() {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  const [routes, setRoutes] = useState(routers["VOJ"]);
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;

    fetchAllChats();
  }, [location]);

  useEffect(() => {
    if (sectionData && sectionData.length > 0) {
      const data = routers["VOJ"];
      data[0].views = sectionData;
      setRoutes(data);
    } else {
      setRoutes(routers["VOJ"]);
    }
  }, [sectionData]);

=======
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
// react library for routing
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// import routes from "routes.js";
import { routers } from "routers.js";

function MasterAdmin() {
  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);
  const routes = routers["MasterAdmin"];
>>>>>>> origin/main
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
<<<<<<< HEAD
      if (prop.layout === "/voj") {
=======
      if (prop.layout === "/MasterAdmin") {
>>>>>>> origin/main
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };
<<<<<<< HEAD

=======
>>>>>>> origin/main
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
<<<<<<< HEAD

=======
  // toggles collapse between mini sidenav and normal
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

<<<<<<< HEAD
  return routes ? (
=======
  return (
>>>>>>> origin/main
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar
          theme={getNavbarTheme()}
          toggleSidenav={toggleSidenav}
          sidenavOpen={sidenavOpen}
          brandText={getBrandText(location.pathname)}
        />
        <Routes>
          {getRoutes(routes)}
          <Route
            path="*"
<<<<<<< HEAD
            element={<Navigate to="/voj/dashboard" replace />}
=======
            element={<Navigate to="/MasterAdmin/dashboard" replace />}
>>>>>>> origin/main
          />
        </Routes>
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
<<<<<<< HEAD
  ) : null;
=======
  );
>>>>>>> origin/main
}

export default MasterAdmin;
