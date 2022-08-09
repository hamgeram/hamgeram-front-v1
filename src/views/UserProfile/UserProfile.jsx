import React, {useState} from "react";
import {Grid, InputLabel, TextField} from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import errorMessage, {successMessage} from "../../utills/massage";
import {hideLoading} from "react-redux-loading-bar";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../services/userService";
import {ToastContainer} from "react-toastify";

function UserProfile({ ...props }) {

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
        console.log(user)
        const { data, status } = await resetPassword(user);
        console.log(data + status)
        if (status === 200) {
          successMessage("رمز با موفقیت تغییر یافت!");
        }
        if (status === 401) {
            console.log("hwesd")
            successMessage("رمز با موفقیت تغییر یافت!");
            errorMessage("شماره تلفن تایید نشد");
        }
      // catch (ex) {
      //   console.log(ex)
      //   dispatch(hideLoading());
      // }
    };
  };

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
