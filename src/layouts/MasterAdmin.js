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
import React,{useEffect} from "react";
// react library for routing
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Homepage from "components/Homepage/home";

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
  const [routes, setRoutes] = React.useState(routers["VOJ"]);

  const sectionData = [
    {
      sectionID: "DONMASSPANRAN",
      name: "DON MASS KAMIKIRA"
    },
    {
      sectionID: "DONMASSPANRAN2",
      name: "DON GETHU KAMIKIRA"
    }
  ].map((item, index) => ({
    path: `/${item.sectionID}`,
    name: item.name,
    // miniName:`/${item.sectionID}`,
    component: <Homepage />,
    layout: "/voj"
  }));
  
  // console.log(sectionData);
  
//       {
//         path: "/attendanceDashboard",
//         name: "Dashboard",
//         miniName: "AD",
//         component: <Dashboard />,
//         layout: "/MasterAdmin",
//       },

React.useEffect(()=>{
  if(sectionData){
    const data =routers["VOJ"]
    data[0].views=sectionData
    setRoutes(data)

  }
  else{
    setRoutes(routers["VOJ"])
  }
  
},[routers,sectionData])

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

  return (routes ?
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
    </>:null
  );
}

export default MasterAdmin;
