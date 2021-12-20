const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_TEXT_AREA:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;;
    }
}


export const changeTextActionCreator = (text) => ({ type: CHANGE_TEXT_AREA, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;