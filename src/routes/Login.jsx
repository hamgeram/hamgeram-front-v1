import {Dashboard} from "@material-ui/icons";
import LoginPage from "../views/loginRegister/Login";
import Register from "../views/loginRegister/Register";

const LoginRoutes = [
    {
        path: "/login",
        component: LoginPage,
        SecurityLevel: 1
    },
    {
        path: "/register",
        component: Register,
        SecurityLevel: 1

    },
    // { redirect: true, path: "/", to: "/admin", navbarName: "Redirect" }
]
export default LoginRoutes;
