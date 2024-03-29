import React, {useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";

import {
    RegularCard,
    Button,
    ItemGrid
} from "components";
import {phoneValidator} from "../../utills/phoneValidator";
import {useDispatch} from "react-redux";
import {verifyCode, verifyphone} from "../../services/userService";
import errorMessage, {successMessage} from "../../utills/massage";
import {useHistory} from "react-router-dom";

const forgetPassword = () => {

    const [verifycode, setVerifycode] = useState();


    const dispatch = useDispatch();
    const history = useHistory();


    function handleSubmit(e) {
       const username = localStorage.getItem("phone");
       const data = {
           phone: username,
           verifycode: verifycode
       }
       verifyUser(data);
    }

    const verifyUser = (user) => {
        try {
            return async dispatch =>{
                const {data, status} = await verifyCode(user)
                if (status === 200){
                    successMessage("ورود موفقیت امیز بود!");
                    localStorage.setItem("hamgeramToken", data.access);
                    localStorage.removeItem("phone");
                    history.replace("/dashboard");
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
                            cardTitle="کد تایید را وارد کنید!"
                            cardSubtitle=""
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <TextField
                                                id="outlined-uncontrolled"
                                                fullWidth
                                                label="شماره تلفن"
                                                onChange={(e) => {
                                                    setVerifycode(e.target.value);
                                                }}
                                            />
                                        </ItemGrid>
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
export default forgetPassword;
