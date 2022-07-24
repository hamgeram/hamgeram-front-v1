import React, {useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";

import {
    RegularCard,
    Button,
    ItemGrid
} from "components";
import {phoneValidator} from "../../utills/phoneValidator";
import {LoginUser} from "../../actions/user";
import errorMessage from "../../utills/massage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

    const [passwordV, setPasswordV] = useState("");
    const [usernameV, setUsernameV] = useState("");
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const notify = () => toast("Wow so easy!");

    function CheckPassword(event) {
        if (event.toString().length === 0) {
            setPasswordV("پر کردن این فیلد الزامی است.");
        } else if (event.toString().length < 6) {
            setPasswordV("پسورد باید بیش از 6 حرف باشد");
        } else {
            setPasswordV("");
        }
    }

    function CheckUserName(event) {
        if (event.toString().length === 0) {
            setUsernameV("پر کردن این فیلد ازامی است.")
        } else if(!phoneValidator(event.toString())) {
            setUsernameV("شماره تلفن معتبر نیست.")
        } else {
            setUsernameV("");
        }
    }

    function handleSubmit(e) {
        try {
            if (username.toString().length === 0) {
                setUsernameV("پر کردن این فیلد ازامی است.")
            } else if(!phoneValidator(username.toString())) {
                setUsernameV("شماره تلفن معتبر نیست.")
            } else if (password.toString().length === 0) {
                setPasswordV("پر کردن این فیلد الزامی است.");
            } else if (password.toString().length < 6) {
                setPasswordV("پسورد باید بیش از 6 حرف باشد");
            }
            else {
                let data = new FormData();
                data.append("phone", username);
                data.append("password", password);
                console.log("data");
                errorMessage("fuck fuck")
                LoginUser(username)
            }
        }
        catch (e) {
            console.log("error sagi")
        }
    }



    return(
        <div>
            <form >
            <Grid container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  >
                <ItemGrid xs={12} sm={12} md={5}>
                    <RegularCard
                        cardTitle="ورود"
                        cardSubtitle="ورود به دشبورد همگرام"
                        content={
                            <div>
                                <Grid container
                                style={{marginBottom:"2vh"}}>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                        <TextField
                                            id="outlined-name"
                                            fullWidth
                                            label="نام کاربری یا ایمیل"
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                                CheckUserName(e.target.value);

                                            }}
                                        />
                                        <div style={{color:"red"}}>{usernameV}</div>
                                    </ItemGrid>

                                </Grid>
                                <Grid container
                                style={{marginBottom:"10vh"}}>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                        <TextField
                                            id="Password"
                                            label="رمز عبور"
                                            type="password"
                                            fullWidth
                                            hidden
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                CheckPassword(e.target.value);
                                            }}
                                        />
                                        <div style={{color:"red"}}>{passwordV}</div>
                                    </ItemGrid>
                                </Grid>

                                <Grid container>
                                    <ItemGrid xs={12} sm={5} md={12}>
                                    <a href="/">
                                        {" "}
                                        <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                        را فراموش کرده ام !
                                    </a>
                                        </ItemGrid>
                                </Grid>

                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={12}>
                                        <a href="/register">
                                            {" "}
                                            <i className="zmdi zmdi-lock"></i>
                                            ساخت حساب کاربری
                                        </a>
                                    </ItemGrid>
                                </Grid>

                            </div>
                        }
                        footer={<div>
                            <ItemGrid xs={12} sm={12} md={12}>
                                <Button onClick={handleSubmit} color="primary" fullWidth>ورود به حساب کاربری</Button>
                                <Button onClick={notify} color="primary" fullWidth>ورود به حساب کاربری</Button>
                                <ToastContainer />
                            </ItemGrid>
                            </div>}
                    />
                </ItemGrid>

            </Grid>
            </form>
        </div>
    );
};
export default LoginPage;
