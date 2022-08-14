import http from "./httpService";
import config from "./config.json";

export const getCompetitors = (id) => {
    const token = localStorage.getItem("hamgeramToken")
    return http.get(`${config.localapi}/api/v1/instagram/competitor/list` ,{
        params: { username: id},
        headers:{'content-type': 'multipart/form-data', "Authorization" : `Bearer ${token}`}
    });
};

export const deleteCompetitors = (id) => {
    const token = localStorage.getItem("hamgeramToken")
    return http.delete(`${config.localapi}/api/v1/instagram/competitor/rud/${id}` ,{
        headers:{'content-type': 'multipart/form-data', "Authorization" : `Bearer ${token}`}
    });
};

export const setCompetitors = user => {
    const token = localStorage.getItem("hamgeramToken")
    return http.post(`${config.localapi}/api/v1/competitors/create`,
        JSON.stringify(user), {
            headers:{'content-type': 'multipart/form-data', "Authorization" : `Bearer ${token}`}
        });
};
