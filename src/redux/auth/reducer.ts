import {AnyAction} from "redux";
import {GOOGLE_LOGIN_SUCCESS, SERVER_LOGIN, SIGN_OUT} from "./types";

export type AuthState = {
    tokenObj: any | null,
    userProfile: any | null,
    isAuthenticated: boolean,
    server_token: string | null //Server allauth token
}
// @ts-ignore
const INITIAL_STATE = {
    // @ts-ignore
    tokenObj: null,
    // @ts-ignore
    userProfile: null,
    isAuthenticated: false,
    // @ts-ignore
    server_token: null
}

const authReducer = (state: AuthState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case GOOGLE_LOGIN_SUCCESS: {
            return {
                ...state,
                tokenObj: action.payload
            }
        }
        case SERVER_LOGIN: {
            return {
                ...state,
                userProfile: action.payload.user_info,
                isAuthenticated: true,
                server_token: action.payload.token
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                userProfile: null,
                isAuthenticated: false,
                server_token: null,
                tokenObj: null,
            }
        }

        default:
            return state
    }
}

export default authReducer