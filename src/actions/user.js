import {successMessage} from "../utills/massage";
import {registerUser} from "../services/userService";
import errorMessage from "../utills/massage";

export const LoginUser = (user) => {
    return async (dispatch, getState) => {
        const { data, status } = await registerUser(user);
        if (status === 200) {
            successMessage("ورود موفقیت امیز بود!");
            await dispatch({
                type: "ADD_COURSE",
                payload: [...getState().data, data.data],
            });
        }
        if (status === 401) {
            errorMessage("شماره تلفن یا پسورد اشتباه است!")
        }
    };
};
