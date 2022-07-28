import {Dashboard} from "@material-ui/icons";
import LoginPage from "../views/loginRegister/Login";
import Register from "../views/loginRegister/Register";
import forgetPassword from "../views/loginRegister/forgetPassword";
import verifyPhone from "../views/loginRegister/verifyPhone";

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
    {
        path: "/forget",
        component: forgetPassword,
        SecurityLevel: 1
    },
    {
        path: "/verifyPhone",
        component: verifyPhone,
        SecurityLevel: 1
    },
    { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
]
export default LoginRoutes;
