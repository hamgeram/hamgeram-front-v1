import http from "./httpService";
import config from "./config.json";

export const registerUser = user => {
    return http.post(
        `${config.localapi}/api/v1/user/register`,
        JSON.stringify(user)
    );
};

export const verifyCode = user => {
return http.post(`${config.localapi}/api/v1/user/verify`,
    JSON.stringify(user));
};

export const resetPassword = user => {
    return http.post(`${config.localapi}/api/v1/user/resetpassword`,
        JSON.stringify(user));
};

export const verifyphone = user => {
  return http.post(`${config.localapi}/api/v1/user/verifyphone`,
      JSON.stringify(user))
};
