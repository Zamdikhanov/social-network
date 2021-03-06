import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
    postsData: [
        { id: 1, message: "Приступил к обучению по курсу IT-Kamasutra", likesCount: 5 },
        { id: 2, message: "Второй день (15.12.21) Курс: Путь самурая", likesCount: 7 },
        { id: 3, message: "Сидел с ребенком почти полных два дня", likesCount: 1 },
        { id: 4, message: "Четвертый день (18.12.21) Курс: Путь самурая", likesCount: 5 },
        { id: 5, message: "Седьмой день (22.12.21) поключил Redux", likesCount: 5 },
    ],
    profile: null,
    status: '',
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile,
            }
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photo } }
            }
        default:
            return state;
    }
}


export const addPost = (newPostText) => ({ type: ADD_POST, newPostText: newPostText });
export const setUserProfile = (profile) => ({ type: SET_PROFILE_USER, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhoto = (photo) => ({ type: SET_PHOTO, photo });


export const getUserProfile = (userId) =>
    async(dispatch) => {
        let responce = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(responce.data));
    };

export const getUserStatus = (userId) =>
    async(dispatch) => {
        let responce = await profileAPI.getStatus(userId);
        dispatch(setStatus(responce.data));
    };

export const updateUserStatus = (status) =>
    async(dispatch) => {
        let responce = await profileAPI.updateStatus(status);
        if (responce.data.resultCode === 0)
            dispatch(setStatus(status));
    }

export const savePhoto = (photo) =>
    async(dispatch) => {
        let responce = await profileAPI.savePhoto(photo);
        if (responce.data.resultCode === 0)
            dispatch(setPhoto(responce.data.data.photos));
    }

export const saveProfile = (profile, setStatus) =>
    async(dispatch, getState) => {
        let response = await profileAPI.saveProfile(profile);
        if (response.resultCode === 0) {
            const myID = getState().auth.userId;
            dispatch(getUserProfile(myID));
        }
    }

export default profileReducer;