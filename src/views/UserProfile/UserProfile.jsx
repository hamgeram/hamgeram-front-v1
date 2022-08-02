import React, {useState} from "react";
import {Grid, InputLabel, TextField} from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";

function UserProfile({ ...props }) {

  const [password, setPassword] = useState();
  const [verifyPassword,setVerifyPassword] = useState();
  const [passwordV, setPasswordV] = useState();

  function CheckPassword(event) {
    if (event.toString().length === 0) {
      setPasswordV("پر کردن این فیلد الزامی است.");
      return (false)
    } else if (event.toString().length < 6) {
      setPasswordV("پسورد باید بیش از 6 حرف باشد!");
      return (false)
    }else {
      setPasswordV("");
      return(true);
    }
  }

  const x = () => {


  }

  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="ریست کردن پسورد"
            content={
              <div>
                <Grid container>

                  <ItemGrid xs={12} sm={12} md={12}>
                    <TextField
                        id="Password"
                        label="رمز عبور"
                        type="password"
                        fullWidth
                        hidden
                        onChange={(e) => {
                          // setPassword2(e.target.value);
                        }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button color="primary">Update Profile</Button>}
          />
        </ItemGrid>

      </Grid>
    </div>
  );
}

export default UserProfile;
