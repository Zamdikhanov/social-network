import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaURL: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaURL: action.captchaURL,
            };
        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const setCaptchaURLSuccess = (captchaURL) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaURL });

export const getUserAuthData = () =>
    async(dispatch) => {
        const response = await authAPI.me();
        if (response.resultCode === 0) {
            let { id, login, email } = response.data;
            dispatch(setUserAuthData(id, email, login, true));
        }
    }

export const login = (email, password, rememberMe, captcha, setStatus) =>
    async(dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.resultCode === 0) {
            dispatch(getUserAuthData());
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaURL());
            }
            setStatus(response.messages);
        }
    }

export const logOut = () =>
    async(dispatch) => {
        const response = await authAPI.logOut();
        if (response.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false));
            dispatch(setCaptchaURLSuccess(null));
        }
    }

export const getCaptchaURL = () =>
    async(dispatch) => {
        const response = await securityAPI.getCaptchaURL();
        const captchaURL = response.url;
        dispatch(setCaptchaURLSuccess(captchaURL));
    }

export default authReducer;