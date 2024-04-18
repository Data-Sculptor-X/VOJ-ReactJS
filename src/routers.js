import Alternative from "views/pages/dashboards/Alternative.js";
import Buttons from "views/pages/components/Buttons.js";
import Calendar from "views/pages/Calendar.js";
import Cards from "views/pages/components/Cards.js";
import Charts from "views/pages/Charts.js";
import Components from "views/pages/forms/Components.js";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import Elements from "views/pages/forms/Elements.js";
import Google from "views/pages/maps/Google.js";
import Grid from "views/pages/components/Grid.js";
import Icons from "views/pages/components/Icons.js";
import Lock from "views/pages/examples/Lock.js";
import Login from "views/pages/examples/Login.js";
import Notifications from "views/pages/components/Notifications.js";
import Pricing from "views/pages/examples/Pricing.js";
import Profile from "views/pages/examples/Profile.js";
import ReactBSTables from "views/pages/tables/ReactBSTables.js";
import Register from "views/pages/examples/Register.js";
import RTLSupport from "views/pages/examples/RTLSupport.js";
import Sortable from "views/pages/tables/Sortable.js";
import Tables from "views/pages/tables/Tables.js";
import Timeline from "views/pages/examples/Timeline.js";
import Typography from "views/pages/components/Typography.js";
import Validation from "views/pages/forms/Validation.js";
import Vector from "views/pages/maps/Vector.js";
import Widgets from "views/pages/Widgets.js";
<<<<<<< HEAD
import Homepage from "components/Homepage/home";
import { fetchAllChats } from "store/actions/General/authActions";
import { fetchSectionData } from "layouts/MasterAdmin";

=======
>>>>>>> origin/main
const template = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: <Dashboard />,
        layout: "/admin",
      },
      {
        path: "/alternative-dashboard",
        name: "Alternative",
        miniName: "A",
        component: <Alternative />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        miniName: "P",
        component: <Pricing />,
        layout: "/auth",
      },

      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: <Login />,
        layout: "/auth",
      },
      {
<<<<<<< HEAD
        path: "/home",
        name: "Homepage",
        miniName: "H",
        component: <Homepage/>,
        layout: "/auth",
      },
      {
=======
>>>>>>> origin/main
        path: "/register",
        name: "Register",
        miniName: "R",
        component: <Register />,
        layout: "/auth",
      },
      {
        path: "/lock",
        name: "Lock",
        miniName: "L",
        component: <Lock />,
        layout: "/auth",
      },
      {
        path: "/timeline",
        name: "Timeline",
        miniName: "T",
        component: <Timeline />,
        layout: "/admin",
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        component: <Profile />,
        layout: "/admin",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        miniName: "RS",
        component: <RTLSupport />,
        layout: "/rtl",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        miniName: "B",
        component: <Buttons />,
        layout: "/admin",
      },
      {
        path: "/cards",
        name: "Cards",
        miniName: "C",
        component: <Cards />,
        layout: "/admin",
      },
      {
        path: "/grid",
        name: "Grid",
        miniName: "G",
        component: <Grid />,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        miniName: "N",
        component: <Notifications />,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        miniName: "I",
        component: <Icons />,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        miniName: "T",
        component: <Typography />,
        layout: "/admin",
      },
      {
        collapse: true,
        name: "Multi Level",
        miniName: "M",
        state: "multiCollapse",
        views: [
          {
            path: "#pablo",
            name: "Third level menu",
            component: () => {},
            layout: "/",
          },
          {
            path: "#pablo",
            name: "Just another link",
            component: () => {},
            layout: "/",
          },
          {
            path: "#pablo",
            name: "One last link",
            component: () => {},
            layout: "/",
          },
        ],
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    icon: "ni ni-single-copy-04 text-pink",
    state: "formsCollapse",
    views: [
      {
        path: "/elements",
        name: "Elements",
        miniName: "E",
        component: <Elements />,
        layout: "/admin",
      },
      {
        path: "/components",
        name: "Components",
        miniName: "C",
        component: <Components />,
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "Validation",
        miniName: "V",
        component: <Validation />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: "ni ni-align-left-2 text-default",
    state: "tablesCollapse",
    views: [
      {
        path: "/tables",
        name: "Tables",
        miniName: "T",
        component: <Tables />,
        layout: "/admin",
      },
      {
        path: "/sortable",
        name: "Sortable",
        miniName: "S",
        component: <Sortable />,
        layout: "/admin",
      },
      {
        path: "/react-bs-table",
        name: "React BS Tables",
        miniName: "RBT",
        component: <ReactBSTables />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    icon: "ni ni-map-big text-primary",
    state: "mapsCollapse",
    views: [
      {
        path: "/google",
        name: "Google",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/vector",
        name: "Vector",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "ni ni-archive-2 text-green",
    component: <Widgets />,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "ni ni-chart-pie-35 text-info",
    component: <Charts />,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-red",
    component: <Calendar />,
    layout: "/admin",
  },
];

<<<<<<< HEAD
// const MasterAdmin = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: "ni ni-chart-pie-35 text-info",
//     layout: "/MasterAdmin",
//     component: <Dashboard />,
//   },
//   {
//     path: "/approval",
//     name: "Approval",
//     icon: "ni ni-paper-diploma text-red",
//     layout: "/MasterAdmin",
//     component: <Dashboard />,
//   },
//   {
//     collapse: true,
//     name: "Attendance",
//     icon: "ni ni-collection text-green",
//     state: "attendanceCollapse",
//     views: [
//       {
//         path: "/attendanceDashboard",
//         name: "Dashboard",
//         miniName: "AD",
//         component: <Dashboard />,
//         layout: "/MasterAdmin",
//       },
//       {
//         path: "/studentAttendance",
//         name: "Student Attendance",
//         miniName: "SA",
//         component: <Alternative />,
//         layout: "/MasterAdmin",
//       },
//       {
//         path: "/facultyAttendance",
//         name: "Faculty Attendance",
//         miniName: "FA",
//         component: <Alternative />,
//         layout: "/MasterAdmin",
//       },
//     ],
//   },
//   {
//     collapse: true,
//     name: "School Directory",
//     icon: "ni ni-archive-2 text-primary",
//     state: "schoolDirectoryCollapse",
//     views: [
//       {
//         path: "/SchoolDirectoryDashboard",
//         name: "Dashboard",
//         miniName: "DD",
//         component: <Dashboard />,
//         layout: "/MasterAdmin",
//       },
//       {
//         path: "/studentDirectory",
//         name: "Student Directory",
//         miniName: "SD",
//         component: <Alternative />,
//         layout: "/MasterAdmin",
//       },
//       {
//         path: "/assessmentDirectory",
//         name: "Assessment Directory",
//         miniName: "AD",
//         component: <Alternative />,
//         layout: "/MasterAdmin",
//       },
//       {
//         path: "/facultyDirectory",
//         name: "Faculty Directory",
//         miniName: "FD",
//         component: <Alternative />,
//         layout: "/MasterAdmin",
//       },
//     ],
//   },
//   {
//     path: "/events",
//     name: "Events",
//     icon: "ni ni-trophy text-warning",
//     layout: "/MasterAdmin",
//     component: <Dashboard />,
//   },
//   {
//     path: "/circular",
//     name: "Circular Notice",
//     icon: "ni ni-email-83 text-info",
//     layout: "/MasterAdmin",
//     component: <Dashboard />,
//   },
//   {
//     path: "/admissions",
//     name: "New Admission",
//     icon: "ni ni-hat-3 text-warning",
//     layout: "/MasterAdmin",
//     component: <Dashboard />,
//   },
//   {
//     path: "/grievance",
//     name: "Grievance Management",
//     icon: "ni ni-chat-round text-danger",
//     layout: "/MasterAdmin",
//     component: <Dashboard />,
//   },
// ];
// const Admin = [
//   {
//     path: "/Dashboard",
//     name: "Dashboard",
//     icon: "ni ni-chart-pie-35 text-info",
//     layout: "/MasterAdmin",
//   },
// ];
// const Teacher = [
//   {
//     path: "/Dashboard",
//     name: "Dashboard",
//     icon: "ni ni-chart-pie-35 text-info",
//     layout: "/MasterAdmin",
//   },
// ];
const VOJ = [ {
      collapse: true,
      name: "Chats",
      icon: "ni ni-collection text-green",
      state: "donCollapse",
      views: [],
      onclick: fetchSectionData,
    },
=======
const MasterAdmin = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    layout: "/MasterAdmin",
    component: <Dashboard />,
  },
  {
    path: "/approval",
    name: "Approval",
    icon: "ni ni-paper-diploma text-red",
    layout: "/MasterAdmin",
    component: <Dashboard />,
  },
  {
    collapse: true,
    name: "Attendance",
    icon: "ni ni-collection text-green",
    state: "attendanceCollapse",
    views: [
      {
        path: "/attendanceDashboard",
        name: "Dashboard",
        miniName: "AD",
        component: <Dashboard />,
        layout: "/MasterAdmin",
      },
      {
        path: "/studentAttendance",
        name: "Student Attendance",
        miniName: "SA",
        component: <Alternative />,
        layout: "/MasterAdmin",
      },
      {
        path: "/facultyAttendance",
        name: "Faculty Attendance",
        miniName: "FA",
        component: <Alternative />,
        layout: "/MasterAdmin",
      },
    ],
  },
  {
    collapse: true,
    name: "School Directory",
    icon: "ni ni-archive-2 text-primary",
    state: "schoolDirectoryCollapse",
    views: [
      {
        path: "/SchoolDirectoryDashboard",
        name: "Dashboard",
        miniName: "DD",
        component: <Dashboard />,
        layout: "/MasterAdmin",
      },
      {
        path: "/studentDirectory",
        name: "Student Directory",
        miniName: "SD",
        component: <Alternative />,
        layout: "/MasterAdmin",
      },
      {
        path: "/assessmentDirectory",
        name: "Assessment Directory",
        miniName: "AD",
        component: <Alternative />,
        layout: "/MasterAdmin",
      },
      {
        path: "/facultyDirectory",
        name: "Faculty Directory",
        miniName: "FD",
        component: <Alternative />,
        layout: "/MasterAdmin",
      },
    ],
  },
  {
    path: "/events",
    name: "Events",
    icon: "ni ni-trophy text-warning",
    layout: "/MasterAdmin",
    component: <Dashboard />,
  },
  {
    path: "/circular",
    name: "Circular Notice",
    icon: "ni ni-email-83 text-info",
    layout: "/MasterAdmin",
    component: <Dashboard />,
  },
  {
    path: "/admissions",
    name: "New Admission",
    icon: "ni ni-hat-3 text-warning",
    layout: "/MasterAdmin",
    component: <Dashboard />,
  },
  {
    path: "/grievance",
    name: "Grievance Management",
    icon: "ni ni-chat-round text-danger",
    layout: "/MasterAdmin",
    component: <Dashboard />,
  },
];
const Admin = [
>>>>>>> origin/main
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
<<<<<<< HEAD
    component: <Dashboard />,
    layout: "/voj",
=======
    layout: "/MasterAdmin",
  },
];
const Teacher = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    layout: "/MasterAdmin",
  },
];
const Student = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    layout: "/student",
>>>>>>> origin/main
  },
  {
    path: "/timetable",
    name: "Time Table",
    icon: "ni ni-chart-pie-35 text-info",
<<<<<<< HEAD
    layout: "/voj",
=======
    layout: "/student",
>>>>>>> origin/main
  },
  {
    path: "/marks",
    name: "Marks",
    icon: "ni ni-chart-pie-35 text-info",
<<<<<<< HEAD
    layout: "/voj",
=======
    layout: "/student",
>>>>>>> origin/main
  },
  {
    path: "/events",
    name: "Events",
    icon: "ni ni-chart-pie-35 text-info",
<<<<<<< HEAD
    layout: "/voj",
=======
    layout: "/student",
>>>>>>> origin/main
  },
  {
    path: "/Fees",
    name: "Fees",
    icon: "ni ni-chart-pie-35 text-info",
<<<<<<< HEAD
    layout: "/voj",
=======
    layout: "/student",
>>>>>>> origin/main
  },
];

export const routers = {
  template,
<<<<<<< HEAD
  // MasterAdmin,
  // Admin,
  // Teacher,
  VOJ,
=======
  MasterAdmin,
  Admin,
  Teacher,
  Student,
>>>>>>> origin/main
};
