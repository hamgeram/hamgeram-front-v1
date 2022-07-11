import {Dashboard} from "@material-ui/icons";
import LoginPage from "../views/loginRegister/Login";
import Register from "../views/loginRegister/Register";

const LoginRoutes = [
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/register",
        component: Register
    },
]
export default LoginRoutes;
