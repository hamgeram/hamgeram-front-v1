import http from "./httpService";
import config from "./config.json";

export const setInsgeramUser = user => {
    const token = localStorage.getItem("hamgeramToken")
    return http.post(`${config.localapi}/api/v1/account/create`,
        JSON.stringify(user), {
            headers:{'content-type': 'multipart/form-data', "Authorization" : `Bearer ${token}`}
        });
};

export const getInsgeramUser = user => {
    const token = localStorage.getItem("hamgeramToken")
    return http.get(`${config.localapi}/api/v1/instagram/account/list`, {
            headers:{'content-type': 'multipart/form-data', "Authorization" : `Bearer ${token}`}
        });
};
