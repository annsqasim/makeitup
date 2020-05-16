import axios from "axios";
import { LOGIN } from "../common/constants";
import { loginSuccess, loginFail } from "../actions/loginAction";

export const Login = (params) => {
  axios
    .post(LOGIN, params, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": 86400,
    })
    .then(function (response) {
      loginSuccess(response);
      console.log("res", response);
    })
    .catch(function (error) {
      loginFail(error);
      console.log("err", error);
    });
};
