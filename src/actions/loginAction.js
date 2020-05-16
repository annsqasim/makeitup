import { Login } from "../sources/LoginSource";

export const loginAction = (params) => (dispatch) => {
  Login(params);
  dispatch({
    type: "LOGIN_ACTION",
    payload: params,
  });
};

export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};

export const loginFail = (error) => {
  return {
    type: "LOGIN_FAIL",
    payload: error,
  };
};
