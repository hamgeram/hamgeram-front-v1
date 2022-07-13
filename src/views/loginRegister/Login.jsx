import React, {useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";

import {
    RegularCard,
    Button,
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
                                            }}
                                        />
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
export default LoginPage;
