import React, {useState} from "react";
import {Grid} from "material-ui";
import {Button, CustomInput, ItemGrid, RegularCard} from "../../components";

const Register = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return(
        <div>
            <form>
            <Grid container>
                <ItemGrid xs={12} sm={12} md={5}>
                    <RegularCard
                        cardTitle="ثبت نام"
                        cardSubtitle="ثبت نام در همگرام"
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
                                        />
                                    </ItemGrid>
                                </Grid>

                            </div>
                        }
                        footer={<div>
                            <ItemGrid xs={12} sm={12} md={5}>
                                <Button color="primary" fullWidth>ورود به حساب کاربری</Button>
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
export default Register;
