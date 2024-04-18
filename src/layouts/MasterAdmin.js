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

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/voj") {
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

  return routes ? (
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
            element={<Navigate to="/voj/dashboard" replace />}
          />
        </Routes>
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  ) : null;
}

export default MasterAdmin;
