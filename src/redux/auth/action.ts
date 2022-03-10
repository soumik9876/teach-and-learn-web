import {GOOGLE_LOGIN_SUCCESS, SERVER_LOGIN, SIGN_OUT} from "./types";

export const googleLoginSuccess = (tokenObj: Object) => ({
    type: GOOGLE_LOGIN_SUCCESS,
    payload: tokenObj
})

export const serverLoginSuccess = (serverResponse: Object) => ({
    type: SERVER_LOGIN,
    payload: serverResponse
})

export const signOut = () => ({
    type: SIGN_OUT
})