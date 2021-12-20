const DIALOG_CHANGE_TEXT_AREA = 'DIALOG-CHANGE-TEXT-AREA';
const DIALOG_ADD_POST = 'DIALOG-ADD-POST';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case DIALOG_CHANGE_TEXT_AREA:
            state.newPostText = action.newText;
            return state;
        case DIALOG_ADD_POST:
            let dialogNewPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.usersPost.push(dialogNewPost);
            state.newPostText = '';
            return state;
        default:
            return state;;
    }
}

export const changeDialogTextActionCreator = (text) => ({ type: DIALOG_CHANGE_TEXT_AREA, newText: text });
export const addDialogPostActionCreator = () => ({ type: DIALOG_ADD_POST });

export default dialogReducer;