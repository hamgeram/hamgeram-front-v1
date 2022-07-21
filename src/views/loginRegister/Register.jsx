import React, {useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";
import { useCooldown } from 'use-cooldown';

import {
    RegularCard,
    Button,
    ItemGrid
} from "components";
import {phoneValidator} from "../../utills/phoneValidator";

const Register = () => {


    const [passwordV, setPasswordV] = useState("");
    const [password2, setPassword2] = useState("");
    const [usernameV, setUsernameV] = useState("");
    const [verify, setVerify] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [cooledDown, setCooledDown] = useCooldown(30000); // pass in length of cooldown in ms


    const startCooldown = () => {
        setCooledDown(false);

    }


    function CheckPassword(event) {
        if (event.toString().length === 0) {
            setPasswordV("پر کردن این فیلد الزامی است.");
        } else if (event.toString().length < 6) {
            setPasswordV("پسورد باید بیش از 6 حرف باشد!");
        }else if (password2.toString() != password.toString()) {
            setPasswordV("مغادیر رمز عبور و تکرار آن با هم برابر نیستند!")
        } else {
            setPasswordV("");
        }
    }

    function CheckUserName(event) {
        if (event.toString().length === 0) {
            setUsernameV("پر کردن این فیلد ازامی است.")
        } else if(!phoneValidator(event.toString())) {
            setUsernameV("شماره تلفن معتبر نیست!")
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
                setPasswordV("پسورد باید بیش از 6 حرف باشد!");
            } else if (password.toString() != password2.toString()) {
                setPasswordV("پسورد")
            }
            else if (password2.toString() != password.toString()) {
                setPasswordV("مغادیر رمز عبور و تکرار آن با هم برابر نیستند!")
            }
            else {
                let data = new FormData();
                data.append("phone", username);
                data.append("password", password);
                console.log(data)
            }
        }
        catch (e) {

        }
    }



    return(
        <div>
            <form>
                <Grid container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                >
                    <ItemGrid xs={12} sm={12} md={5}>
                        <RegularCard
                            cardTitle="ساخت حساب"
                            cardSubtitle="ساخت حساب کاربری در همگرام"
                            content={
                                <div>
                                    <Grid container
                                          style={{marginBottom:"2vh"}}>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <TextField
                                                id="outlined-name"
                                                fullWidth
                                                label="شماره تلفن همراه"
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
                                                    CheckUserName(e.target.value);

                                                }}
                                            />
                                            <div style={{color:"red"}}>{usernameV}</div>
                                        </ItemGrid>

                                    </Grid>

                                    <Grid container
                                          style={{marginBottom:"2vh"}}>
                                        <ItemGrid xs={12} sm={12} md={9}>
                                            <TextField
                                                id="outlined-name"
                                                fullWidth
                                                label="کد تایید شماره تلفن"
                                                onChange={(e) => {
                                                    setVerify(e.target.value);
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={3}>
                                            <div>
                                                {/*<div>{`${cooledDown}`}</div>*/}
                                                <Button color="info" fullWidth disabled={!cooledDown} onClick={startCooldown} >
                                                    ارسال کد
                                                </Button>
                                            </div>
                                        </ItemGrid>

                                    </Grid>
                                    <Grid container
                                          style={{marginBottom:"2vh"}}>
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

                                    <Grid container
                                          style={{marginBottom:"10vh"}}>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <TextField
                                                id="Password"
                                                label="تکرار رمز عبور"
                                                type="password"
                                                fullWidth
                                                hidden
                                                onChange={(e) => {
                                                    setPassword2(e.target.value);
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>

                                    <Grid container>
                                        <ItemGrid xs={12} sm={5} md={12}>
                                            <a href="/reg">
                                                {" "}
                                                <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                                را فراموش کرده ام !
                                            </a>
                                        </ItemGrid>
                                    </Grid>

                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <a href="/login">
                                                {" "}
                                                <i className="zmdi zmdi-lock"></i>
                                                ورود به حساب کاربری
                                            </a>
                                        </ItemGrid>
                                    </Grid>

                                </div>
                            }
                            footer={<div>
                                <ItemGrid xs={12} sm={12} md={12}>
                                    <Button  onClick={handleSubmit} color="primary" fullWidth>ورود به حساب کاربری</Button>
                                </ItemGrid>
                            </div>}
                        />
                    </ItemGrid>

                </Grid>
            </form>
        </div>
    );
};
export default Register;
