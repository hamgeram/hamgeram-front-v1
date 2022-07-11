import React, {useState} from "react";
import { Grid, InputLabel } from "material-ui";

import {
    ProfileCard,
    RegularCard,
    Button,
    CustomInput,
    ItemGrid
} from "components";

function LoginPage() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(username + ": " + password);
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Grid container>
                <ItemGrid xs={12} sm={12} md={5}>
                    <RegularCard
                        cardTitle="ورود"
                        cardSubtitle="ورود به دشبورد همگرام"
                        content={
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="نام کاربری یا ایمیل"
                                            id="username"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                setUsername(e.target.value);
                                            }}
                                        />
                                    </ItemGrid>

                                </Grid>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="رمز عبور"
                                            id="email-address"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </ItemGrid>
                                </Grid>

                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                    <a href="">
                                        {" "}
                                        <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                        را فراموش کرده ام !
                                    </a>
                                        </ItemGrid>
                                </Grid>

                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>
                                        <a href="">
                                            {" "}
                                            <i className="zmdi zmdi-lock"></i>
                                            ساخت حساب کاربری
                                        </a>
                                    </ItemGrid>
                                </Grid>

                            </div>
                        }
                        footer={<div>
                            <ItemGrid xs={12} sm={12} md={5}>
                                <Button type="submit" color="primary" fullWidth>ورود به حساب کاربری</Button>
                                <Button color="info" fullWidth>ساخت حساب کاربری</Button>
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
