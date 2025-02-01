import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./type.actions";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const signupSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: token,
  };
};

export const signupFailed = (error) => {
  return {
    type: SIGNUP_FAIL,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
