import React, {useState} from "react";
import { Grid, InputLabel,TextField} from "material-ui";

import {
    RegularCard,
    Button,
    ItemGrid
} from "components";

const forgetPassword = () => {

    const [username, setUsername] = useState();
    function handleSubmit(e) {
        e.preventDefault();
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
                            cardTitle="فرم ثبت نام"
                            cardSubtitle="تایید"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <TextField
                                                id="outlined-uncontrolled"
                                                fullWidth
                                                label="کد تایید"
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
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
