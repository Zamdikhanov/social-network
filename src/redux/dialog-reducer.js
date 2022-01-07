const DIALOG_CHANGE_TEXT_AREA = 'DIALOG-CHANGE-TEXT-AREA';
const DIALOG_ADD_POST = 'DIALOG-ADD-POST';

let initialState = {
    usersPost: [
        { id: 1, message: "Hello world!", likesCount: 5 },
        { id: 2, message: "I am programming", likesCount: 6 },
        { id: 3, message: "It`s cool!", likesCount: 10 },
        { id: 4, message: "It`s very cool!", likesCount: 11 },
    ],
    usersData: [
        { id: "1", name: "Airat" },
        { id: "2", name: "Lilya" },
        { id: "3", name: "Bulat" },
    ],
    newPostText: '',
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIALOG_CHANGE_TEXT_AREA:
            return {
                ...state,
                newPostText: action.newText,
            };
        case DIALOG_ADD_POST:
            let dialogNewPost = {
                id: 5,
                message: action.text,
                likesCount: 0,
            };
            return {
                ...state,
                usersPost: [...state.usersPost, dialogNewPost],
                newPostText: '',
            };
        default:
            return state;
    }
}

export const changeDialogTextActionCreator = (text) => ({ type: DIALOG_CHANGE_TEXT_AREA, newText: text });
export const addDialogPostActionCreator = (text) => ({ type: DIALOG_ADD_POST, text: text });

export default dialogReducer;