const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
        { id: 1, message: "Приступил к обучению по курсу IT-Kamasutra", likesCount: 5 },
        { id: 2, message: "Второй день (15.12.21) Курс: Путь самурая", likesCount: 7 },
        { id: 3, message: "Сидел с ребенком почти полных два дня", likesCount: 1 },
        { id: 4, message: "Четвертый день (18.12.21) Курс: Путь самурая", likesCount: 5 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
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