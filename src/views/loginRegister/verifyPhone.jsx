import React, {useEffect, useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";

import {
    RegularCard,
    Button,
    ItemGrid
} from "components";
import {phoneValidator} from "../../utills/phoneValidator";
import {useDispatch} from "react-redux";
import {verifyphone} from "../../services/userService";
import {useHistory} from "react-router-dom";
import errorMessage, {successMessage} from "../../utills/massage";

const verifyPhone = () => {


    const [username, setUsername] = useState();
    const [usernamev, setUsernameV] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

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
        if(e.toString().length !== 0 && phoneValidator(e.toString())) {
            const data = {
                phone: username.toString(),
            }
            dispatch(verifyUser(data));
        };
    };

    const verifyUser = (user) => {
        try {
            return async dispatch =>{
                const {data, status} = await verifyphone(user)
                if (status === 201){
                    successMessage("شماره تلفن تایید شد!");

                    localStorage.setItem("phone", username)
                    history.replace("/forget");
                }
                if (status === 401) {
                    errorMessage("شماره تلفن اشتباه است");
                }
            }
        } catch (e) {

        }
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                >
                    <ItemGrid xs={12} sm={12} md={5}>
                        <RegularCard
                            cardTitle="فراموشی رمز عبور"
                            cardSubtitle="ابتدا رمز عبور خود را وارد کنید"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <TextField
                                                id="outlined-uncontrolled"
                                                fullWidth
                                                label="شماره تلفن"
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
                                                    CheckUserName(e.target.value);
                                                }}
                                            />
                                        </ItemGrid>
                                        <div style={{color:"red"}}>{usernamev}</div>
                                    </Grid>
                                </div>
                            }
                            footer={<div>
                                <ItemGrid xs={12} sm={12} md={12}>
                                    <Button type="submit" color="primary" fullWidth>ورود به حساب کاربری</Button>
                                </ItemGrid>
                            </div>}
                        />
                    </ItemGrid>

                </Grid>
            </form>
        </div>
    );
};
export default verifyPhone;
