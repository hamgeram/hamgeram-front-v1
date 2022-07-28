import React, {useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";
import { useCooldown } from 'use-cooldown';

import {
    RegularCard,
    Button,
    ItemGrid
} from "components";
import {phoneValidator} from "../../utills/phoneValidator";
import {useHistory} from "react-router-dom";
import {registerUser, verifyCode} from "../../services/userService";
import errorMessage, {successMessage} from "../../utills/massage";
import {decodeToken} from "../../utills/decodeToken";
import {hideLoading} from "react-redux-loading-bar";
import {useDispatch} from "react-redux";

const Register = () => {


    const [passwordV, setPasswordV] = useState("");
    const [password2, setPassword2] = useState("");
    const [usernameV, setUsernameV] = useState("");
    const [verify, setVerify] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [cooledDown, setCooledDown] = useCooldown(30000);
    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const startCooldown = () => {
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
                errorMessage("رمز عبور با تکرار ان برابر نیست");
            }
            else {
                const data = {
                    phone: username.toString(),
                    password: password.toString()
                };
                dispatch(RegisterUser(data))
                setCooledDown(false);
                setStatus(false)

            }
        }
        catch (e) {

        }

    }




    function CheckPassword(event) {
        if (event.toString().length === 0) {
            setPasswordV("پر کردن این فیلد الزامی است.");
        } else if (event.toString().length < 6) {
            setPasswordV("پسورد باید بیش از 6 حرف باشد!");
        }else {
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
            const data = {
                phone: username.toString(),
                verifycode: parseInt(verify)
            };
            dispatch(verifyUser(data))
        }
        catch (e) {

        }
    }

    const RegisterUser = (user) => {
        return async dispatch => {
            try {
                const { data, status } = await registerUser(user);
                if (status === 200) {
                    errorMessage("حساب کاربری قبلا ساخته شده!");
                }
                if (status === 201) {
                    successMessage("لطفا کد تایید را وارد کنید!");
                    localStorage.setItem("phone", username);
                    setStatus(true);
                }
                if (status === 401) {
                    errorMessage("شماره تلفن یا پسورد اشتباه است!");
                }
            }
            catch (ex) {
                dispatch(hideLoading());
            }
        };
    };

    const verifyUser = (user) => {
      try {
          return async dispatch =>{
              const {data, status} = await verifyCode(user)
              if (status === 200){
                  successMessage("ورود موفقیت امیز بود!");
                  localStorage.setItem("hamgeramToken", data.access);
                  history.replace("/dashboard");
              }
          }
      } catch (e) {

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
                                                inputProps={{
                                                    disabled: status
                                                }}
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
                                                inputProps={{
                                                    disabled: status
                                                }}
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
                                                inputProps={{
                                                    disabled: status
                                                }}
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
                                    <Button  onClick={handleSubmit} color="primary" fullWidth>ساخت حساب کاربری</Button>
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
