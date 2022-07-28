import http from "./httpService";
import config from "./config.json";
import {createServer, Response} from "miragejs";

createServer({
    routes() {
        this.post("/api/v1/user/register", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs.phone)

            if (attrs.phone.toString() === "09127982498"){
                return new Response(201, {"Content-Type" : "application/json"}, {
                    "message": "Ok, verify it"
                })
            } else if (attrs.phone.toString() === "09127982499") {
                return new Response(200, {"Content-Type" : "application/json"}, {
                    "refresh": "askjdhladsbjkbdasd",
                        "access": "askjdhladsbjkbdasd"})
            } else {
                return new Response(401, {"Content-Type" : "application/json", author: 'Kelvin Omereshone' }, { error: `User with id  not found`});            }

            // console.log(attrs["password"])
            // debugger
        })
        this.post("/api/v1/user/verifycode", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            if (attrs.phone === "09127982498" && attrs.verifycode === 2323) {
                return new Response(200, {"Content-Type" : "application/json"}, {
                    "refresh": "askjdhladsbjkbdasd",
                    "access": "askjdhladsbjkbdasd"})
            }
        })
    },
})





export const registerUser = user => {
    return http.post(
        `/api/v1/user/register`,
        JSON.stringify(user)
    );
};

export const verifyCode = user => {
return http.post(`${config.localapi}/api/v1/user/verifycode`,
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
