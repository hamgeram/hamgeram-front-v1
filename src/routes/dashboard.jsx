import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import {CompetitorsChart} from "../views/CompetitorsChart/CompetitorsChart";
import {Competitors} from "../views/Competitors/Competitors";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  Notifications
} from "@material-ui/icons";
import LoginPage from "../views/loginRegister/Login";
import Register from "../views/loginRegister/Register";

const dashboardRoutes = [


  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    SecurityLevel: 2
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
    SecurityLevel: 2

  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList,
    SecurityLevel: 2
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography,
    SecurityLevel: 2
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons,
    SecurityLevel: 2
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    SecurityLevel: 2
  },
  {
    path: "/competitorsChart",
    sidebarName: "رقیب ها",
    navbarName: "رقیب ها",
    icon: Notifications,
    component: CompetitorsChart,
    SecurityLevel: 2,
  },
  {
    path: "/competitors",
    sidebarName: "داشبورد رقبا",
    navbarName: "داشبورد رقبا",
    icon: ContentPaste,
    component: Competitors,
    SecurityLevel: 2
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
