const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState = {
    postsData: [
        { id: 1, message: "Приступил к обучению по курсу IT-Kamasutra", likesCount: 5 },
        { id: 2, message: "Второй день (15.12.21) Курс: Путь самурая", likesCount: 7 },
        { id: 3, message: "Сидел с ребенком почти полных два дня", likesCount: 1 },
        { id: 4, message: "Четвертый день (18.12.21) Курс: Путь самурая", likesCount: 5 },
        { id: 5, message: "Седьмой день (22.12.21) поключил Redux", likesCount: 5 },
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT_AREA:
            return {
                ...state,
                newPostText:  action.newText,
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile,
            }
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        default:
            return state;;
    }
}


export const changeTextActionCreator = (text) => ({ type: CHANGE_TEXT_AREA, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({type:SET_PROFILE_USER, profile:profile });

export default profileReducer;