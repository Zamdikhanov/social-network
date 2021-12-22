const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        { id: 1, isfollowed: false, fullName: 'Airat', status: 'junior frontend', location: { city: 'Uyanovsk', country: 'Russia' } },
        { id: 2, isfollowed: true, fullName: 'Lilya', status: 'I am the best', location: { city: 'Uyanovsk', country: 'Russia' } },
        { id: 3, isfollowed: false, fullName: 'Bulat', status: 'Hi all', location: { city: 'Uyanovsk', country: 'Russia' } },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return { ...user, isfollowed: !user.isfollowed };
                    else return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
}


export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, id: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;