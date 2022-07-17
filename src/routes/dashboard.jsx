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

const dashboardRoutes = [


  {
    path: "/dashboard/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    SecurityLevel: 2
  },
  {
    path: "/dashboard/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
    SecurityLevel: 2

  },
  {
    path: "/dashboard/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList,
    SecurityLevel: 2
  },
  {
    path: "/dashboard/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography,
    SecurityLevel: 2
  },
  {
    path: "/dashboard/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons,
    SecurityLevel: 2
  },
  {
    path: "/dashboard/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    SecurityLevel: 2
  },
  {
    path: "/dashboard/competitorsChart",
    sidebarName: "رقیب ها",
    navbarName: "رقیب ها",
    icon: Notifications,
    component: CompetitorsChart,
    SecurityLevel: 2,
  },
  {
    path: "/dashboard/competitors",
    sidebarName: "داشبورد رقبا",
    navbarName: "داشبورد رقبا",
    icon: ContentPaste,
    component: Competitors,
    SecurityLevel: 2
  },
  { redirect: true, path: "/dashboard", to: "/dashboard/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
