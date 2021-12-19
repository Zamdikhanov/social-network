const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const ADD_POST = 'ADD-POST';
const DIALOG_CHANGE_TEXT_AREA = 'DIALOG-CHANGE-TEXT-AREA';
const DIALOG_ADD_POST = 'DIALOG-ADD-POST';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Приступил к обучению по курсу IT-Kamasutra", likesCount: 5 },
                { id: 2, message: "Второй день (15.12.21) Курс: Путь самурая", likesCount: 7 },
                { id: 3, message: "Сидел с ребенком почти полных два дня", likesCount: 1 },
                { id: 4, message: "Четвертый день (18.12.21) Курс: Путь самурая", likesCount: 5 },
            ],
            newPostText: '',
        },
        dialogPage: {
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
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'CHANGE-TEXT-AREA':
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'DIALOG-CHANGE-TEXT-AREA':
                this._state.dialogPage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case 'DIALOG-ADD-POST':
                let dialogNewPost = {
                    id: 5,
                    message: this._state.dialogPage.newPostText,
                    likesCount: 0,
                };
                this._state.dialogPage.usersPost.push(dialogNewPost);
                this._state.dialogPage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            default:
                {};
        }
    }

}

export const changeTextActionCreator = (text) => ({ type: CHANGE_TEXT_AREA, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeDialogTextActionCreator = (text) => ({ type: DIALOG_CHANGE_TEXT_AREA, newText: text });
export const addDialogPostActionCreator = () => ({ type: DIALOG_ADD_POST });

export default store;