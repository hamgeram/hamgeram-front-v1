import React, {useEffect, useState} from "react";
import {Grid, InputLabel, TextField} from "material-ui";
import config from "../../services/config.json"
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import errorMessage, {successMessage} from "../../utills/massage";
import {hideLoading} from "react-redux-loading-bar";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../services/userService";
import {ToastContainer} from "react-toastify";
import {store} from "../../store";
import {handleGetCompetitor} from "../../actions/comptitors";

function UserProfile({ ...props }) {

  const user = useSelector(state => state.insgeramUser);
    let array = [];
    for (const key in user){
        array.push(user[key])
    }

  const [password, setPassword] = useState();
  const [passwordV, setPasswordV] = useState(false);
  const dispatch = useDispatch();

  function CheckPassword(event) {
    if (event.toString().length === 0) {
      setPasswordV(false);
    } else if (event.toString().length < 6) {
      setPasswordV(false);
    }else {
      setPasswordV(true);
    }
  }

  const handleChangePassword = () => {
    if(passwordV === false) {
      errorMessage("پسورد شما معتبر نیست");
    } else {
      const data = {
          password: password.toString()
      }
      try {
        dispatch(User(data))
      } catch (e) {
        errorMessage("مشکلی رخ داده")
      }
    }
  }

  const User = (user) => {
    return async dispatch => {
        const { data, status } = await resetPassword(user);
        if (status === 200) {
          successMessage("رمز با موفقیت تغییر یافت!");
        }
        if (status === 401) {
            successMessage("رمز با موفقیت تغییر یافت!");
            errorMessage("شماره تلفن تایید نشد");
        }
    };
  };

  return (
    <div>
      <Grid container>
          {array.map(data => (
              <ItemGrid xs={12} sm={12} md={8}>
                  <RegularCard
                      cardTitle="پروفایل اینستاگرام"
                      content={
                          <div>
                              <Grid container>
                                  <ItemGrid>
                                      <img src={config.localapi+data.image}/>
                                  </ItemGrid>

                                  <ItemGrid xs={12} sm={12} md={12}>
                                      {data.bio}
                                  </ItemGrid>

                              </Grid>
                          </div>
                      }
                  />
              </ItemGrid>
          ))}

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
                          setPassword(e.target.value);
                          CheckPassword(e.target.value);
                        }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={<Button onClick={handleChangePassword}  color="primary">Update Profile</Button>}
          />
        </ItemGrid>

      </Grid>
        <ToastContainer />
    </div>
  );
}

export default UserProfile;
