import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



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
        },
        sidebar: {

        },
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}


export default store;